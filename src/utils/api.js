import axios from "axios";
import { config } from "../config.js";

const BASE_URL = process.env.API_URL;

export async function generateImage(prompt) {
  try {
    console.log(`🔵 Sending request to Hugging Face: ${prompt}`);

    const response = await axios.post(
      BASE_URL,
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${config.huggingfaceToken}`,
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer", // Gambar dikirim dalam bentuk binary
      }
    );

    console.log(`🟢 Response received, size: ${response.data.length}`);

    return Buffer.from(response.data);
  } catch (error) {
    console.error(
      "🔴 Error generating image:",
      error.response ? error.response.data : error.message
    );
    return null;
  }
}
