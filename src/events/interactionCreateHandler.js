const interactionCreateHandler = async (interaction) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }

  const command = interaction.client.commands.get(interaction.commandName);

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

  try {
    await command.execute(interaction);

    console.log(
      `${interaction.user.username} executed the command ${interaction.commandName} in ${interaction.channel.name}`
    );
  } catch (error) {
    console.error(error);
    // if the interaction is replied or it is deferred, i.e. took too long
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: "An error occurred while executing that command.",
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: "An error occurred while executing that command.",
        ephemeral: true,
      });
    }
  }
};

module.exports = {
  interactionCreateHandler,
};
