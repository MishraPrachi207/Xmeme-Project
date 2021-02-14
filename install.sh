
sudo apt-get update -y
sudo apt-get install -y mysql-server-5.7
sudo mysql -e "CREATE USER 'admin'@'localhost' IDENTIFIED BY 'Password@123'"
sudo mysql -e "GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' WITH GRANT OPTION"
sudo mysql -e "FLUSH PRIVILEGES"
sudo mysql -e "CREATE DATABSE xmemedb"
sudo apt install openjdk-8-jre-headless -y
sudo apt-get install openjdk-8-jdk -y	
sudo apt-get install maven -y
sudo apt install maven -y
sudo apt update
sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt -y install nodejs
