const amqplib = require("amqplib");

const queueName = "hello";

const receiveMsg = async () => {
  const connection = await amqplib.connect("amqp://localhost");
  const channel = await connection.createChannel();
  await channel.assertQueue(queueName, { durable: false });
  console.log(`Waiting for message in  queue ${queueName}`);
  channel.consume(
    queueName,
    (msg) => {
      console.log("message ", msg.content.toString());
    },
    { noAck: true }
  );
};

receiveMsg();
