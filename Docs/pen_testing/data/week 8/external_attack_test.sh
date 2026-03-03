#!/bin/bash

TARGET="10.0.104.11"
INTERNAL1="192.168.105.0/24"
INTERNAL2="192.168.104.0/24"

TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
OUTDIR="external_test_$TIMESTAMP"

mkdir -p $OUTDIR

START_TIME=$(date +%s)
echo "==== Scan Started at $(date) ===="

echo "==== Phase 1: Host Discovery ===="
nmap -sn 10.0.104.0/24 -oN $OUTDIR/host_discovery.txt

echo "==== Phase 2: Full Port Scan on Firewall WAN ===="
nmap -sS -sV -O -Pn -p- $TARGET -oN $OUTDIR/full_port_scan.txt

echo "==== Phase 3: Default Script Scan on Open Ports ===="
OPEN_PORTS=$(grep "^[0-9]" $OUTDIR/full_port_scan.txt | cut -d "/" -f1 | tr '\n' ',' | sed 's/,$//')

if [ ! -z "$OPEN_PORTS" ]; then
    nmap -sC -sV -p $OPEN_PORTS $TARGET -oN $OUTDIR/service_enum.txt
fi

echo "==== Phase 4: Firewall Filtering Tests ===="
nmap -sA $TARGET -oN $OUTDIR/ack_scan.txt
nmap -sX $TARGET -oN $OUTDIR/xmas_scan.txt

echo "==== Phase 5: Internal Subnet Exposure Test ===="
nmap -Pn -p- $INTERNAL1 -oN $OUTDIR/internal_105_scan.txt
nmap -Pn -p- $INTERNAL2 -oN $OUTDIR/internal_104_scan.txt

echo "==== Phase 6: Web Testing (if HTTP/HTTPS open) ===="

if echo "$OPEN_PORTS" | grep -q "80"; then
    nikto -h http://$TARGET > $OUTDIR/nikto_http.txt
    gobuster dir -u http://$TARGET -w /usr/share/wordlists/dirb/common.txt -o $OUTDIR/gobuster_http.txt
fi

if echo "$OPEN_PORTS" | grep -q "443"; then
    nikto -h https://$TARGET > $OUTDIR/nikto_https.txt
    gobuster dir -u https://$TARGET -k -w /usr/share/wordlists/dirb/common.txt -o $OUTDIR/gobuster_https.txt
fi

echo "==== Scan Complete ===="
echo "Results saved in: $OUTDIR"

END_TIME=$(date +%s)
echo "==== Scan Finished at $(date) ===="

RUNTIME=$((END_TIME - START_TIME))

echo "==== Total Runtime: $RUNTIME seconds ===="
