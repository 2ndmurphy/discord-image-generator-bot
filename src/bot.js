import { Client, GatewayIntentBits } from "discord.js";
import { config } from "./config.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const commands = new Map();
const commandFiles = fs
  .readdirSync(path.join(__dirname, "commands"))
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const { name, execute } = await import(`./commands/${file}`);
  commands.set(name, execute);
}

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
  console.log("Allowed Channels:", config.allowedChannels);
});

client.on("messageCreate", async (message) => {
  if (!config.allowedChannels.includes(message.channel.id)) {
    return;
  }

  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (commands.has(commandName)) {
    try {
      await commands.get(commandName)(message, args);
    } catch (error) {
      console.log(error);
      message.reply("There was an error executing that command.");
    }
  }
});

client.login(config.discordToken);
