cd /etc/netplan/

sudo nano ###

network:
    version: 2
    renderer: networkd
    ethernets:
        eth0:
            dhcp4: no
            addresses: [192.168.104.20/24]
            routes:
                - to: default
                    via: 192.168.104.1

sudo netplan apply
