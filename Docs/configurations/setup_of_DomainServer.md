# Domain Server

1. Get the Windows server 2025 ISO and Install
    - Choose Database Desktop
    - Install the ISO to the 120 gig hard drive

2. Check that all the rest of critical settings are configured properly like name and time
    - Go to local server and configure your time on the right and your name on the left
    - Restart the computer when necessary
    - "netsh advfirewall firewall add rule name="Allow ICMPv4-In" protocol=icmpv4:8,any dir=in action=allow" to allow ping
    - Connect the server to the corresponding network INT in this case.

3. Install domain services and DNS
    - Top bar click Manage and then select Add Role
    - Read the warnings select Installation type of role and select the server you are wanting to update
    - Select Active Directory Domain Services and DNS server
    - Once those features are selected apply the extras
    - Go to the bottom and confirm install 
    - Restart the computer when necessary

4. Configuring Active Directory and Domain Services
    - Open the wizard for configuring your domain service
    - Since this will be our root domain select New tree
    - Type in your root domain
    - "wskinner.ninjas"
    - now set a good password
    - leave rest default
    - Install (It will restart)

5. DNS
    - Go up to tools and click DNS
    - Let the tool open go to your primary and check if your baseline records are there (This would have the IP address of the current system)
    - Confirm that dad's working create a reverse lookup zone
    - right click on the reverse lookup zones
    - Create new zone and stick with all the defaults until it asks you for your network ID
    - At the bottom should be another click which will be reversed Apply that and click next and finalize it.
    - Finally all you need to do is go to your primary look of them and enable pointers on the current addresses
    - refresh your reverse look up you should see all the addresses there now

6. User setup
    - Make an admin user
        - 
    - Make an employee
        - 
    - Make the groups
    - Admin group give higher privilege
    - Employee group set employee privilege
    - Make Computer group
    - Block or restrict what people can do on computers
    - Allow admin to alter computers
    - Make a organizational unit for employees
    - Put employees group and employees themselves into OU
    - Set up GPO
        - 
    - Connect GPO to Organizational Unit
    - load GPO on computer.
    - test users.
