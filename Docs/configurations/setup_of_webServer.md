# Web server

1. Installing OS
    - Select Install Ubuntu
    - Leave all settings default
    - When it asks for network insert IP address (192.168.105.20)
    - When it comes to user name user web, password Standard admin password

2. Updating
    > sudo apt update  
    > sudo apt upgrade  
    - Run these commands to update the system password is necessary

3. Confirm system operations and update

4. Installing softwares
    - nodeJS
    > - Base Apps  
    > curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -  
    > sudo apt install -y nodejs  
    > sudo apt install -y git  
    > sudo apt install -y nginx 
    > sudo npm install -g pm2   
    > - Firewall Setup  
    > sudo ufw allow OpenSSH  
    > sudo ufw allow 'Nginx Full'  
    > sudo ufw enable  
    > - Startup  
    > sudo systemctl enable nginx  
