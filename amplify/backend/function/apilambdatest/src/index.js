const AWS = require("aws-sdk");
const sqs = new AWS.SQS();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  var params = {
    MessageBody: "Hola mundo",
    QueueUrl: process.env.QUEUE_URL
  };
  const dataSQS = await sqs.sendMessage(params).promise();
  console.log(dataSQS);
  return { ...dataSQS };
};
