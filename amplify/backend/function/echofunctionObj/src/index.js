/* Amplify Params - DO NOT EDIT
	API_AWSUSERGROUP_GRAPHQLAPIENDPOINTOUTPUT
	API_AWSUSERGROUP_GRAPHQLAPIIDOUTPUT
	API_AWSUSERGROUP_GRAPHQLAPIKEYOUTPUT
	API_AWSUSERGROUP_ITEMSTABLE_ARN
	API_AWSUSERGROUP_ITEMSTABLE_NAME
	API_AWSUSERGROUP_OTHERSITEMSTABLE_ARN
	API_AWSUSERGROUP_OTHERSITEMSTABLE_NAME
	ENV
	FUNCTION_APILAMBDATEST_NAME
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return {
    msg: "Hola Mundo",
    items: ["123", "456", "789"]
  };
};
