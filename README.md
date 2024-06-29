## parallelly open threee terminal , run commands


## first terminal
cd mern_postgres/shared-orm-library
npm install 
## wait for npm install before executing further
node ./src/seed.js


## second terminal
cd mern_postgres/backend   
npm install
## wait for npm install before executing further
npm start


## third terminal
cd mern_postgres/frontend
npm install
## wait for npm install before executing further
node ./src/app.js


