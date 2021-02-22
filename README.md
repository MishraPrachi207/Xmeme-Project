# Xmeme-Project
Meme Streaming Website

This is a meme streaming website which uses React for frontend and Spring-boot for backend. The database used is MySQL 5.7
The REST Api endpoints are as follows :

Post a meme :

HTTP Method - POST
Endpoint - /memes
Json Body contains these inputs - name, url, caption
The backend allocates a unique id for the meme and returns it as a json response.

2.HTTP Method - GET
Endpoint - /memes
Error:
If there are no memes available, an empty is returned.

3.HTTP Method - GET
Endpoint - /memes/
Error:
If a meme with that Id doesn’t exist, a 404 HTTP response code is returned.

4.HTTP Method - PATCH
Endpoint - /memes/
Json Body can contain these inputs - url, caption
The response is be just the HTTP status code

The project contains two main folders :
demo (backend-folder) : consists of the backend code for the project
xmeme-frontend : consists of the frontend code.

The install.sh file consists of all the commands to install the dependencies for deployment of both frontend and backend as well as the database.
The server_run.sh file consists of the code to run both backend and frontend.
To deploy the code, clone the repository to the server, provide execute permissions to install.sh and server_run.sh and run both files.
