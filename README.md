# 🚀 Discord AI Image Generation Bot  
Bot Discord yang menggunakan Stable Diffusion untuk menghasilkan gambar berdasarkan prompt pengguna. Dibangun menggunakan **Node.js (ESM)** dan **Discord.js**, serta memanfaatkan API **Hugging Face** sebagai backend untuk image generation.  

![Bot Example](https://your-image-url.com/example.png) <!-- Tambahkan contoh hasil gambar di sini -->


---


## 🛠 **Fitur Utama**
✅ Generate gambar dari teks dengan model Stable Diffusion  
✅ Dibangun dengan **Discord.js** dan menggunakan **ESModule (ESM)**  
✅ Mudah dikonfigurasi dengan **environment variables**  
✅ Menjalankan bot secara **24/7** di platform cloud seperti **Railway, Render, atau VPS**  


---


## 🚀 **Cara Instalasi & Menjalankan Bot**
### **1️⃣ Clone Repository**

```sh
git clone https://github.com/yourusername/discord-ai-image-bot.git
cd discord-ai-image-bot
```


### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Buat & Konfigurasi `.env`**
Buat file `.env` di root folder dan masukkan token yang diperlukan:
```env
DISCORD_TOKEN=your_discord_bot_token
HUGGINGFACE_TOKEN=your_huggingface_api_key
PREFIX=!
ALLOWED_CHANNELS=123456789012345678,987654321098765432
```
- **DISCORD_TOKEN** → Token bot dari [Discord Developer Portal](https://discord.com/developers/applications)  
- **HUGGINGFACE_TOKEN** → API Key dari [Hugging Face](https://huggingface.co/settings/tokens)  
- **PREFIX** → Prefix command bot (default: `!`)  
- **ALLOWED_CHANNELS** → ID channel yang diperbolehkan menggunakan bot (pisahkan dengan koma)  

### **4️⃣ Jalankan Bot**
```sh
node src/bot.js
```

Jika ingin bot tetap berjalan di background (VPS), gunakan **PM2**:  
```sh
npm install pm2 -g
pm2 start src/bot.js --name ai-image-bot
pm2 save
pm2 startup
```


---


## 🖼 **Cara Menggunakan**
Ketik perintah berikut di Discord:  
```
!generate cyberpunk city at night
```
Bot akan membalas dengan gambar yang dihasilkan menggunakan **Stable Diffusion**.


---


## 🔗 **Resource & Dokumentasi**
- 🔹 **Discord API Docs** → [discord.com/developers/docs](https://discord.com/developers/docs)  
- 🔹 **Hugging Face API** → [huggingface.co/docs/api-inference](https://huggingface.co/docs/api-inference)  
- 🔹 **Stable Diffusion** → [stablediffusionweb.com](https://stablediffusionweb.com)  


---


## 📦 **Dependencies**
| Package         | Deskripsi                                      |
|----------------|-----------------------------------------------|
| `discord.js`   | Library utama untuk bot Discord              |
| `dotenv`       | Mengelola environment variables              |
| `axios`        | Request ke Hugging Face API                  |
| `fs`           | Manipulasi file (bawaan Node.js)             |

Install semua dependencies dengan:
```sh
npm install
```


---

## 🏗 **Roadmap & Fitur Mendatang**
✅ **Versi 1.0** → Generate gambar dari prompt teks  
🔜 **Versi 1.1** → Custom model selection  
🔜 **Versi 1.2** → Multi-image generation  

---

## 🛠 **Kontribusi**
1. **Fork repo ini**  
2. **Buat branch baru**: `git checkout -b fitur-baru`  
3. **Commit perubahan**: `git commit -m "Tambah fitur baru"`  
4. **Push ke branch**: `git push origin fitur-baru`  
5. **Buat Pull Request** 🎉  

---

## 💡 **Lisensi**
Proyek ini menggunakan lisensi **MIT**, bebas digunakan dan dimodifikasi.  

---

🔥 **Dukung proyek ini dengan ⭐ star repo ini jika bermanfaat!** 🚀  
