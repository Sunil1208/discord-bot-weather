require("dotenv").config();

const {
  Client,
  Collection,
  Events,
  GatewayIntentBits,
  REST,
} = require("discord.js");

const { clientReadyHandler } = require("./events/clientReady");
const {
  interactionCreateHandler,
} = require("./events/interactionCreateHandler");

const pingCommand = require("./commands/ping");

// Note: Everything that happens on discord is an event

// Create a new client instance
// The client is an event emitter
const client = new Client({
  intents: [
    // This is the list of events that the client will listen for
    GatewayIntentBits.Guilds,
  ],
});

client.commands = new Collection();

client.commands.set(pingCommand.data.name, pingCommand);

// client ready should be emitted only once.
client.once(Events.ClientReady, clientReadyHandler);

client.on(Events.InteractionCreate, interactionCreateHandler);

// Login to Discord
client.login(process.env.DISCORD_TOKEN);
