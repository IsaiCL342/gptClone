// testHugging.js

const fetch = require("node-fetch"); // Solo necesario si usas Node.js fuera de Vite

const HF_TOKEN = "hf_tuTokenRealAquí"; // 👈 Reemplaza con tu token temporalmente
const API_URL = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct";

async function testBot(message) {
    try {
        const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${HF_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            inputs: message,
            parameters: {
            max_new_tokens: 60,
            return_full_text: false,
            },
        }),
        });

        console.log("👉 Estado HTTP:", response.status);

        const text = await response.text();
        console.log("🧾 Respuesta completa:");
        console.log(text);

    } catch (error) {
        console.error("⚠️ Error al conectar:", error);
    }
}

// Ejecuta una prueba
testBot("¿Cuál es la capital de Perú?");