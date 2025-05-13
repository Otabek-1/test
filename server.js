const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// So‘rov yuboriladigan URL
const TARGET_URL = "https://railway.com/template/KEexpn/test"; // o'zingizga kerakli URL kiriting

// Har 30 sekundda fetch qilish funksiyasi
async function sendRequest() {
  try {
    const res = await fetch(TARGET_URL);
    const data = await res.text(); // yoki .json() agar JSON bo‘lsa
    console.log(`Request sent at ${new Date().toLocaleTimeString()}:`, data);
  } catch (err) {
    console.error("Request error:", err.message);
  }
}

// Har 30 sekundda ishlatish
setInterval(sendRequest, 30 * 1000);

// Bosh sahifa
app.get("/", (req, res) => {
  res.send("Express server ishlayapti va har 30 sekundda so‘rov yuborilmoqda.");
});

app.listen(PORT, () => {
  console.log(`Server ishga tushdi: http://localhost:${PORT}`);
  sendRequest(); // Dastlab ishga tushgan zahoti 1-marta yuboradi
});
