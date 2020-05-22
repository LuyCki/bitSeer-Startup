# Getting started

## Installation

- The commands must be runned in bitSeerServer directory

Install dependencies
    
    npm install

----------

## Database

The example codebase uses [Typeorm](http://typeorm.io/) with a mySQL database.

Create a new mysql database

Set mysql database settings in ormconfig.json

    {
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "your-mysql-username",
      "password": "your-mysql-password",
      "database": "your-database-name",
      "entities": ["src/**/**.entity{.ts,.js}"],
      "synchronize": true
    }
    
Start local mysql server.

On application start, tables for all entities will be created.

----------

## Start application

- `npm run start:dev`
- Swagger at `http://localhost:3000/swagger`

----------

## NPM scripts

- `npm start` - Start application
- `npm run start:dev` - Start application in development mode
- `npm run start:debug` - Start application in debug mode
- `npm run start:prod` - Build application

----------

# Authentication
 
This applications uses JSON Web Token (JWT) to handle authentication. The token is passed with each request using the `Authorization` header with `Token` scheme. The JWT authentication middleware handles the validation and authentication of the token.

----------
 