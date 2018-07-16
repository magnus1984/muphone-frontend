# muphone-frontend
Frontend for a phone ownership validation service

## Introduction
muphone-frontend is a one page application made with create-react-app that allows the muphone
phone validation service to be used from the web.

## Setup
First, create a local runtime environment and install all the dependencies needed to build the project.
We use [nodeenv](https://github.com/ekalinin/nodeenv) to do that, so make sure it's installed:


```bash
git clone https://github.com/magnus1984/muphone-frontend.git
cd muphone-frontend
nodeenv .frontenv
source .frontenv/bin/activate
npm install
```

Next, muphone-frontend requires the muphone service to be deployed. After you've followed the [instructions here](https://github.com/magnus1984/muphone),
use the output of the muphone cloudformation template to set the REACT_APP_API_ENDPOINT_URL environment variable and build the project:

```bash
REACT_APP_API_ENDPOINT_URL=<YOUR-MUPHONE-URL> npm run build
```

## Deployment
Use the infrastructure.yaml cloudformation template to deploy the frontend application to the www:

```bash
aws cloudformation deploy --template-file infrastructure.yaml --stack-name <YOUR-STACK-NAME>
```

Once the infrastructure stack is deployed, query it's output to get the bucket where you will deploy the build:

```bash
aws cloudformation describe-stacks --stack-name <YOUR-STACK-NAME> --query 'Stacks[0].Outputs'
```

use it to sync the files in the build folder to the s3 bucket.

```bash
aws s3 sync build s3://<YOUR-HOSTING-BUCKET-NAME>
```

You should now be able to access the application by typing the CloudFront distribution URL in your browser address bar. This can be queried 
the same way we did for the bucket name:

```bash
aws cloudformation describe-stacks --stack-name <YOUR-STACK-NAME> --query 'Stacks[0].Outputs'
```

## Author
Jonathan Pelletier (jonathan.pelletier1@gmail.com)
website: [https://hedgenet.info](https://hedgenet.info)
