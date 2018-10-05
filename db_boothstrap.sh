#!/bin/bash

sudo apt-get update -y
sudo apt-get install -y mongodb

sudo mkdir -p /data/db
sudo chmod -R go+w /data/db
sudo service mongodb start