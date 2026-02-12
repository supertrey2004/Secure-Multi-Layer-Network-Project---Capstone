# Workstations

1. Install windows 11 workstation
    - For the system to meet minimum requirements you must give it 8GB
    - And enable TPM (Trust Platform Module)

2. Setup system
    - leave default but when it wants internet
    - Shift + F10 to open terminal
    - "netsh interface ip set address name="Ethernet" static 192.168.105.100 255.255.255.0 192.168.105.1"
    - "netsh interface ip set dns name="Ethernet" static 8.8.8.8"
    - Connect to domain
    - Set the clock in any other mundane settings
    - Restart

3. login to user
    - now disable the user used to make the vm
    - test vm's apps
    - logout