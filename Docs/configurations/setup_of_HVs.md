# HV setup

1. Acquired a hardware 
    - For this project we need a decent CPU
    - A good amount of memory(ram)
    - and plenty of hard drive space

2. Get the Windows server 2025 ISO and Install
    - Choose Database Desktop
    - Install the ISO to the 120 gig hard drive

3. After setting your password the first goal is to connect it to the Internet
    - Disable all nonessential Nics
    - Use one Nic give it an IP address if it doesn't already have one
    - Install any critical updates
    - Type in the search bar update and you should find the update windows connection in settings scan for updates and update

4. next we're gonna install Hyper-V
    - Go to Add roles in the top right corner three dots
    - Accept all the basic stuff and select this server
    - Click the dot next to Hyper-V to select all hyper-V based roles
    - Finalize the install and let the computer restart once

5. Check that all the rest of critical settings are configured properly like name and time
    - Go to local server and configure your time on the right and your name on the left
    - Restart the computer when necessary

6. Hyper V setup
    - The hyper V will be set up very simply as we will be adding virtual machines to it later
    - as for the network we will be connecting Two networks externally to connect one to the Internet and the other one to the other external blade
    - we will also be connecting one internal network for localized function
    - The rest of the network configuration will be stored in a separate file.

7. Secondary drive for VM disks
    - Open Disk manager and clear all data
    - Create a new partition and connect it as a new drive.
    - Configure Hyper V to use that drive for disks