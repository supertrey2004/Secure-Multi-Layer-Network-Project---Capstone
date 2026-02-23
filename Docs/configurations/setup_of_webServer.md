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

5. Installing website
    > - Getting website
    > cd /var/www  
    > sudo git clone -b Website https://github.com/supertrey2004/Secure-Multi-Layer-Network-Project---Capstone.git website  
    > cd /var/www/website/website/front-end  
    > sudo npm install  
    > sudo nano .env  
    > - Set it up with the corresponding values  
    > pm2 start front-end.js --name frontend  
    > pm2 save  
    > cd /var/www/website/website/back-end  
    > sudo npm install  
    > sudo nano .env    
    > - Set it up with the corresponding values  
    > pm2 start back-end.js --name backend  
    > pm2 save  
    > pm2 startup  
    > - Now the Nginx working  
    > sudo nano /etc/nginx/sites-available/website  
    > server {  
    >     listen 80;  
    >     server_name _;  
    >     location / {  
    >         proxy_pass http://localhost:4000;  
    >         proxy_http_version 1.1;  
    >         proxy_set_header Upgrade $http_upgrade;  
    >         proxy_set_header Connection 'upgrade';  
    >         proxy_set_header Host $host;  
    >         proxy_cache_bypass $http_upgrade;  
    >     }  
    > }  
    > sudo ln -s /etc/nginx/sites-available/website /etc/nginx/sites-enabled/  
    > sudo rm /etc/nginx/sites-enabled/default  
    > sudo nginx -t  
    > sudo systemctl reload nginx  

