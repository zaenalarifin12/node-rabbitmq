const amqp = require("amqplib");

const exchangeName = "logs";
const msg = process.argv.slice(2).join(" ") || "subcribe, like and comment";

const sendMsg = async () => {
  const connnection = await amqp.connect("amqp://localhost");
  const channel = await connnection.createChannel();
  await channel.assertExchange(exchangeName, "fanout", { durable: false });
  channel.publish(exchangeName, "", Buffer.from(msg));
  console.log("Sent ", msg);
  setTimeout(() => {
    connnection.close();
    process.exit(0);
  }, 500);
};

sendMsg();
