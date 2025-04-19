const { SlashCommandBuilder } = require("discord.js");

const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replies with Pong!");

const execute = async (interation) => {
  await interation.reply("Pong!");
};

module.exports = {
  data,
  execute,
};
