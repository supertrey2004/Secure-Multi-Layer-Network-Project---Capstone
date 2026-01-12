# Domain Server

1. Get the Windows server 2025 ISO and Install
    - Choose Database Desktop
    - Install the ISO to the 120 gig hard drive

2. Check that all the rest of critical settings are configured properly like name and time
    - Go to local server and configure your time on the right and your name on the left
    - Restart the computer when necessary
    - "netsh advfirewall firewall add rule name="Allow ICMPv4-In" protocol=icmpv4:8,any dir=in action=allow" to allow ping