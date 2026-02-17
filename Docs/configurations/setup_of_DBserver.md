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
    > 

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