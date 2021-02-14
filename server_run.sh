sudo mvn -f demo/pom.xml clean package
java -jar "Xmeme-project\demo\target\xmeme-backend-docker.jar"
npm --prefix ./xmeme-frontend install
npm audit fix --force
npm run build
