# Getting Started with Rad Server

Rad Server is built using Node, Graphql and Prisma using a SQLite database that could be swapped out for your database of choice. This is a small demo app that returns a list of codes that can be used for decoding serial numbers. You can add new codes to the database provided the code is unique within the type. For example, if you add a new bike model type, you can add only unique codes within that type. This server also handles user authentication.

This is the server side portion of the app. The client side can be found at [Rad-Client](https://github.com/ekingan/rad-client)

Node version `v14.14.0`

Pull down this branch and run `npm install`

## Database set up

### Install Prisma command line
`npm install @prisma/cli --save-dev`

### run the following commands:
* Create the database:
`npx prisma migrate save --experimental`

  - You will get a prompt asking if you would like to create a new database. Select `Yes`, and type `init` for the Name of migration. The hit Return to confirm.

* Migrate the database:
`npx prisma migrate up --experimental`

* Seed the database: `node src/script.js`

## Start the server
`npm run start`

### Known Issues

- Lack of tests - I found it very difficult to find any decent documentation about creating affective tests for graphql/prisma.

- Lacks good error handling

