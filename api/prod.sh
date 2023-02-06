git pull
./mvnw clean
./mvnw install
clear
echo "=============================================================="
echo "Serveur compilé. Lancement de l'execuatable en mode production"
echo "=============================================================="
java -jar target/api-0.0.1-SNAPSHOT.jar
