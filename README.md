# trello-clone-backend

## setup notes

> .npmrc - This ensures the node modules packages are always exact match.
commands - **npm config set save=true && npm config set save-exact=true**

## Application logging setup 

> \>>>> This denotes the starting of a function.

> \<<<< This denotes the exit of a function.

## setup steps

- create a .env file in app root directory and add 2 env variable
  - PORT=3000
  - DB_URL='mongodb://localhost:27017/trello'
- install and run mongodb
- install node dependencies with **npm install**
- run the **src/server,js** file