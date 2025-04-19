const { REST, Routes } = require("discord.js");

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

const clientReadyHandler = async (client) => {
  console.log(`Logged in as ${client.user.tag}!`);

  try {
    console.log(`Started refresh ${client.commands.size} commands`);

    const data = await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      {
        body: client.commands.map((command) => {
          return command.data.toJSON();
        }),
      }
    );

    console.log(`Successfully reloaded application ${data.length} commands.`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  clientReadyHandler,
};
