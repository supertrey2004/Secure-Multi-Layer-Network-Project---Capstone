#!/bin/bash

# =========================
# VARIABLES
# =========================

ATTACKER="192.168.105.30"
VLAN105="192.168.105.0/24"
DOMAIN="192.168.105.10"
WEB="192.168.105.20"
WORKSTATION="192.168.105.100"
DB="192.168.104.10"
FIREWALL="192.168.105.1"

TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
OUTDIR="internal_test_$TIMESTAMP"

mkdir -p $OUTDIR

START_TIME=$(date +%s)
echo "==== Internal Attack Simulation Started at $(date) ===="

# =========================
# PHASE 1 – Internal Recon
# =========================

echo "==== Phase 1: Host Discovery (VLAN 105) ===="
nmap -sn $VLAN105 -oN $OUTDIR/host_discovery.txt

# =========================
# PHASE 2 – Domain Controller Exposure
# =========================

echo "==== Phase 2: Domain Port Check ===="
nmap -p 53,88,135,139,389,445,464,636,3268,3389 $DOMAIN -oN $OUTDIR/domain_ports.txt

echo "==== SMB Security Mode Check ===="
nmap --script smb2-security-mode -p 445 $DOMAIN -oN $OUTDIR/smb_signing.txt

# =========================
# PHASE 3 – Lateral Movement Surface
# =========================

echo "==== Phase 3: Workstation Exposure ===="
nmap -p 445,3389 $WORKSTATION -oN $OUTDIR/workstation_ports.txt

echo "==== Phase 3: Web Server Exposure ===="
nmap -p 445,3389,80,443 $WEB -oN $OUTDIR/web_ports.txt

# =========================
# PHASE 4 – Database Segmentation Test
# =========================

echo "==== Phase 4: DB Port Check from VLAN 105 ===="
nmap -Pn -p 27017,3306,1433 $DB -oN $OUTDIR/db_segmentation.txt

# =========================
# PHASE 5 – Firewall Management Exposure
# =========================

echo "==== Phase 5: Firewall Management Exposure ===="
nmap -p 22,443,8443 $FIREWALL -oN $OUTDIR/firewall_mgmt.txt

# =========================
# PHASE 6 – Quick Credential Surface Check
# =========================

echo "==== Phase 6: CrackMapExec Null Session Test ===="
crackmapexec smb $DOMAIN -oN $OUTDIR/cme_domain.txt 2>/dev/null

# =========================
# FINISH
# =========================

END_TIME=$(date +%s)
RUNTIME=$((END_TIME - START_TIME))
MINUTES=$((RUNTIME / 60))
SECONDS=$((RUNTIME % 60))

echo "==== Internal Attack Simulation Finished at $(date) ===="
echo "==== Total Runtime: ${MINUTES}m ${SECONDS}s ===="
echo "==== Results saved in: $OUTDIR ===="
