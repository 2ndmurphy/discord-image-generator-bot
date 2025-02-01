import "dotenv/config";

export const config = {
  discordToken: process.env.DISCORD_TOKEN,
  huggingfaceToken: process.env.HUGGINGFACE_TOKEN,
  prefix: process.env.PREFIX, // Prefix untuk command bot
  allowedChannels: process.env.ALLOWED_CHANNELS,
};
