# school network setup

1. login to the Ninja009 network
2. get ips from IS Blade and VLAN Assignments Excel sheet
    - Find your blades at this point
3. get user and password from IS Blade and VLAN Assignments Excel sheet
    - user - ISStudent
    - password - ***********
4. login to Master Switch
    - run these commands

    > configure terminal  
    > vlan 104  
    > name wskinner-pro390 0/    
    > interface vlan140  
    > ip address 10.0.104.1 255.255.255.0  
    > end  
    > show vlan | include vlan 140  
    > copy run start  

5. login to the rank Switchs
    - run these commands

    > configure terminal  
    > interface vlan140  
    > name wskinner-pro390  
    > description wskinner-pro390  
    > tagged TenGigabitEthernet 0/4,5,20,21,41  
    > end  
    > configure terminal  
    > interface vlan105  
    > name wskinner-pro390-105  
    > description wskinner-pro390-105  
    > tagged TenGigabitEthernet 0/4,5,20,21  
    > end  
    > show vlan  
    > copy run start  
