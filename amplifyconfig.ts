const awsconfig = {
  aws_project_region: process.env.AWS_PROJECT_REGION,
  aws_appsync_graphqlEndpoint: process.env.AWS_APPSYNC_GRAPHQLENDPOINT,
  aws_appsync_region: process.env.AWS_APPSYNC_REGION,
  aws_appsync_authenticationType: process.env.AWS_APPSYNC_AUTHENTICATIONTYPE,
  aws_appsync_apiKey: process.env.AWS_APPSYNC_APIKEY,
};

export default awsconfig;
