sudo mvn -f demo/pom.xml clean package
java -jar "Xmeme-project\demo\target\xmeme-backend-docker.jar"
npm --prefix ./xmeme-frontend install
npm --prefix ./xmeme-frontend audit fix --force
npm --prefix ./xmeme-frontend run build
