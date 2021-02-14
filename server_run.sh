mvn clean package
java -jar "Xmeme-project\demo\target\xmeme-backend-docker.jar"

cd Xmeme-project\xmeme-frontend
npm install
npm audit fix --force
npm run build
