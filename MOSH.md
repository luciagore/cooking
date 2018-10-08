# Cool Tool for intermittent connectivity. Like SSH on steroids 

https://mosh.org/

Remote terminal application that allows roaming, supports intermittent connectivity, and provides intelligent local echo and line editing of user keystrokes.

See article for setting up Mosh with AWS
http://fuzzyblog.io/blog/aws/2017/07/02/adding-mosh-support-to-your-aws-servers.html


#### Step 1
Install Mosh on your client 
- ex. MacOS
    ```
    brew install mosh
    ```
#### Step 2
Install Mosh on your server
- ex. Ubuntu
    
    2.1. First ssh into your remote server as usual and then install mosh
    ```
    ssh -i "your-server-name.pem" ubuntu@ecx-xx-xxx-xxx-xx.eu-west-1.compute.amazonaws.com
    sudo apt-get install mosh
    ```

    2.2. Exit the ssh connection. You don't need it anymore.

#### Step 3
Configure your security group from the AWS dashboard.

Let's allow the Mosh communications protocol to pass through. Do the following in your segurity group.

- Open a UDP type
- Port Range 60000 - 61000
- Accessible to anywhere (or just your ip address; up to you)

#### Step 4
Mosh into your instance using an AWS Pem file.

Good thing is to organize your private keys in one place only. For example a convention is to keep them in ~/.ssh directory.
```
sudo cp *.pem ~/.ssh/
```
or if you are sure of your destination dir
```
sudo mv *.pem ~/.ssh/
```

Example of SSH connection from any directory.
```
ssh -i ~/.ssh/CookingApp2.pem ubuntu@ec2-52-211-204-69.eu-west-1.compute.amazonaws.com
```

Example of Mosh connection from any directory.
```
mosh --ssh="ssh -i ~/.ssh/CookingApp2.pem" ubuntu@ec2-52-211-204-69.eu-west-1.compute.amazonaws.com
```
### Happy Moshing! ;-)