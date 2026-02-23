# Database server

1. Installing OS
    - Select Install Ubuntu
    - Leave all settings default
    - When it asks for network insert IP address (192.168.104.10)
    - When it comes to user name user db, password Standard admin password

2. Updating
    > sudo apt update  
    > sudo apt upgrade  
    - Run these commands to update the system password is necessary

3. Confirm system operations and update

4. Installing softwares
    - MongoDB
    > curl -fsSL https://pgp.mongodb.com/server-8.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg --dearmor  
    > echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.com/apt/ubuntu noble/mongodb-enterprise/8.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-enterprise-8.2.list  
    > sudo apt-get update  
    > sudo apt-get install mongodb-enterprise  

5. Setup of users
    - mongosh
    > use admin 
    > db.createUser({
    >     user: "Admin",
    >     pwd: "******",
    >     roles: [ { role: "root", db: "admin" } ]
    > })
    > exit
    - Log in as this user
    > mongosh -u compassUser -p --authenticationDatabase admin
    > use capstone
    > db.createUser({
    >     user: "web",
    >     pwd: "******",
    >     roles: [ { role: "readWrite", db: "capstone" } ]
    > })
    - change config
    > sudo nano /etc/mongod.conf
    > net:
    >   port: 27017
    >   bindIp: 0.0.0.0

    > security:
    >   authorization: enabled

    > sudo systemctl restart mongod