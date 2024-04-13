const awsconfig = {
  aws_project_region: process.env.NEXT_PUBLIC_PROJECT_REGION,
  aws_appsync_graphqlEndpoint: process.env.NEXT_PUBLIC_APPSYNC_GRAPHQLENDPOINT,
  aws_appsync_region: process.env.NEXT_PUBLIC_APPSYNC_REGION,
  aws_appsync_authenticationType:
    process.env.NEXT_PUBLIC_APPSYNC_AUTHENTICATIONTYPE,
  aws_appsync_apiKey: process.env.NEXT_PUBLIC_APPSYNC_APIKEY,
};

export default awsconfig;
