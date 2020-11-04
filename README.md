# Getting Started with Rad Server

Pull down this branch and run `npm install`

## Database set up

### run the following commands:
* Create the database:
`npx prisma migrate save --experimental`

  - You will get a prompt asking if you would like to create a new database. Select Yes, and type init for the Name of migration. The hit Return to confirm.

* Migrate the database:
`npx prisma migrate up --experimental`

* Seed the database: `node src/scripts.js`

## Start the server
`npm run start`


### Known Issues

- Lack of tests - I found it very difficult to find any decent documentation about creating tests for graphql/prisma.

- Lack of good error handling

