#!/bin/bash

sudo apt-get update -y
sudo apt-get install -y mongodb
sudo sed -i 's|bind_ip = 127.0.0.1|bind_ip = 0.0.0.0|g' /etc/mongodb.conf
sudo service mongodb restart

sudo mkdir -p /data/db
sudo chmod -R go+w /data/db
sudo service mongodb start