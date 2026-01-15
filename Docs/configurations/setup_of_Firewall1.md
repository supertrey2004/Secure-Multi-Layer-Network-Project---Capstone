# Firewall 1

1. First things first install the operating system
    - Upon putting the install disk you will get loaded with a default launcher
    - for user type in "installer" and password is "opnsense"
    - Select your corresponding languages leave all other stuff default
    - when asked to change your root password I would recommend you do it
    - Once you has finished installing remove your install disk and then restart
    - Now log in as the root user with the root user and the Password you created

2. connect corresponding networks
    - In the settings connect two networks the Internet network and the internal network
    - Make sure to keep track of which interfaces those are connected to so that they can be used in the application

3. preparing network connections
    - Once you've logged in and confirmed that you are active type 1
    - You will be brought to a configuration screen Set your corresponding interfaces to WAN or LAN based on if it's the Internet or the internal
    - Then type 2 and set your IP addresses based on your schema (Make sure you put the right IP address on the right Interface)

4. Updating services
    - Once you can cut ping 8.8.8.8 or the Internet Prepare for update
    - To update the firewall all you need to do is type in 12 and once it asks if you're prepared type Y
    - Upon typing Y it will give you the update status read if necessary and then hit Q to start update

5. Web interface setup
    - Open the web page you should be prompted to finalize configuration.
    - Put into domain name that you got from your domain server
    - Continue a primary default up until time zone where you'll send to the closest time zone or city to you.
    - Near the bottom of Hey Next page turn off the public interface due to the fact that we're on a private network.
    - reload

6. Setting up security