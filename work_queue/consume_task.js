const amqplib = require("amqplib");

const queueName = "task";

const receiveMsg = async () => {
  const connection = await amqplib.connect("amqp://localhost");
  const channel = await connection.createChannel();
  channel.assertQueue(queueName, { durable: true });
  channel.prefetch(1);
  await channel.consume(
    queueName,
    (msg) => {
      const secs = msg.content.toString().split(".").length - 1;
      console.log("[X] received: ", msg.content.toString());
      setTimeout(() => {
        console.log("DONE RECEIVEING IMAGE");
        channel.ack(msg);
      }, secs * 1000);
    },
    { noAck: false }
  );
};

receiveMsg();
// run 3 receive in terminal