const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

require("dotenv").config();

client.on("messageCreate", (message) => {
  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    return message.reply({
      content: `Generating short ID for ${url}`,
    });
  }
  if (!message.author.bot) message.reply("Hi, from Bot👋");
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("Pong!!");
});

client.login(process.env.TOKEN);
