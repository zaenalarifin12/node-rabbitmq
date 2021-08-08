const amqpllib = require("amqplib");

const queueName = "hello";
const message = "Hello World";

const sendMsg = async () => {
  const connection = await amqpllib.connect("amqp://localhost");
  const channel = await connection.createChannel();
  await channel.assertQueue(queueName, { durable: false });

  channel.sendToQueue(queueName, Buffer.from(message))
  console.log("Send : ", message);

  setTimeout(() => {
      connection.close()
      process.exit(0)
  }, 500);

};

sendMsg();
sendMsg();
sendMsg();
sendMsg();
sendMsg();
sendMsg();
sendMsg();
sendMsg();
