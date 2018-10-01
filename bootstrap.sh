#!/bin/bash
sudo apt-get update -y
sudo apt-get install -y git
sudo apt-get install -y curl
sudo apt-get install -y nodejs
sudo apt-get install -y npm
sudo apt-get install -y mongodb

sudo mkdir -p /ecsdroot/app
cd /ecsdroot/app
sudo git clone https://github.com/luciagore/cooking.git
cd cooking

sudo npm install
sudo npm start