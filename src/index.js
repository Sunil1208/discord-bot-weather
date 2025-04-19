require("dotenv").config();
const { Client, Events, GatewayIntentBits } = require("discord.js");

// Note: Everything that happens on discord is an event

// Create a new client instance
// The client is an event emitter
const client = new Client({
  intents: [
    // This is the list of events that the client will listen for
    GatewayIntentBits.Guilds,
  ],
});

client.on(Events.ClientReady, () => {
  console.log("Logged in!!!");
});

// Login to Discord
client.login(process.env.DISCORD_TOKEN);
