cd Xmeme-project\demo
mvn clean 
java -jar "Xmeme-project\demo\target\xmeme-backend-docker.jar"

cd Xmeme-project\xmeme-frontend
npm install
npm audit fix --force
npm run build
