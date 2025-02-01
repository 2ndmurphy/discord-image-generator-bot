import { generateImage } from "../utils/api.js";
import { AttachmentBuilder } from "discord.js";

export const name = "generate";
export const description = "Generate an image using Stable Diffusion";

export async function execute(message, args) {
  if (!args.length) {
    return message.reply("Please provide a prompt.");
  }

  await message.reply("Generating image...⏳");

  const prompt = args.join(" ");
  const imageBuffer = await generateImage(prompt);

  // Debugging
  console.log("Image Buffer Type:", typeof imageBuffer);
  console.log("Buffer Instance Check:", imageBuffer instanceof Buffer);
  console.log("Buffer Length:", imageBuffer ? imageBuffer.length : "No Buffer");

  if (
    !imageBuffer ||
    !(imageBuffer instanceof Buffer) ||
    imageBuffer.length === 0
  ) {
    return message.reply("Failed to generate image. Try again later.");
  }

  // Pastikan Buffer dikirim sebagai Attachment
  const attachment = new AttachmentBuilder(imageBuffer, {
    name: "generated.png",
  });

  await message.channel.send({
    content: `Here is your image for: **${prompt}**`,
    files: [attachment],
  });
}
