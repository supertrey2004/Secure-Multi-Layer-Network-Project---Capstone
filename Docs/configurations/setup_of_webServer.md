cd /etc/netplan/

nano 

network:
    version: 2
    renderer: networkd
    ethernets:
        your_interface_name:
        dhcp4: no
        addresses: [192.168.104.20/24]

sudo netplan apply
