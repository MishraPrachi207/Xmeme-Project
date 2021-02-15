
sudo apt-get update -y
sudo apt-get install -y mysql-server-5.7
sudo mysql -e "CREATE DATABASE xmemedb"
sudo mysql -e "CREATE USER 'admin'@'localhost' IDENTIFIED BY 'Password#123'"
sudo mysql -e "GRANT ALL PRIVILEGES ON xmemedb.* TO 'admin'@'localhost' WITH GRANT OPTION"
sudo apt install openjdk-8-jre-headless -y
sudo apt-get install openjdk-8-jdk -y	
sudo apt-get install maven -y
sudo apt install maven -y
sudo apt update
sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt -y install nodejs
sudo mvn -f demo/pom.xml clean package
npm --prefix ./xmeme-frontend install
npm --prefix ./xmeme-frontend audit fix --force
npm --prefix ./xmeme-frontend run build
