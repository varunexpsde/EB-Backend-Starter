### EB Starter Code

EB project starter code is a "Hello World" to start building the actual code. This repository consist of all the basic packages to be installed along with industry standard ESLint configurations preconfigured. Furthermore, this starter code is readily deployable on the Elastic Beanstalk.

### How to use?

1. Clone the project locally:

   `$ git clone <project.git>`

**project.git** replace this with the respoistory git url.

2. Install the require packages using:

   `$ npm install`

**NOTICE: You should install and configure Node.js on your machine for more info see [here](https://nodejs.org/en/download/)**

3. Running the node.js server locally:

   `$ npm run dev`

### Deploying to the AWS Elastic Beanstalk

1. Install EB CLI and configure with your aws credentials as shown [here](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html).

2. Create an EB environment using:

   `$ eb create`

3. Deploy the service using:

   `$ eb deploy`

### File Structure

|\- src\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\- config/\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\- config.ts => AWS and other configuration file\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\- utils/\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\- logger.ts => Exports fucniton that returns a custom logger\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\- controllers/v0\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\- users/\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\- models/\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\- model.ts => user data models\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\- routes/\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\- userapiX.ts => user apis\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\- companies/\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\- models/\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\- model.ts => companies data models\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\- routes/\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\- companiesapiX.ts => companies apis\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\- server.ts => main ts file that routes the incoming requests to appropriate endpoints\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\- migrations/\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\- userMigration.ts => user migration data\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\- companiesMigration.ts => compaines migration data\
|\- .eslintrc.json => ESLint configurations\
|\- .prettierrc => prettier configurations\
|\- .npmrc => npm configurations\
|\- package.json => metadata relevant to the project\
|\- README.md => readme file\
|\- tsconfig.json => tsc configurations\

Some more resources on ESlint and prettier:

[Youtube](https://www.youtube.com/watch?v=SydnKbGc7W8)
