const HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_TOKEN;

export async function getBotReply(userMessage) {
    try {
        const response = await fetch(
        "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct",
        {
            method: "POST",
            headers: {
            Authorization: `Bearer ${HF_TOKEN}`,
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            inputs: userMessage,
            parameters: {
                max_new_tokens: 60,
                return_full_text: false
            }
            }),
        }
        );

        if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        // Para Zephyr, la respuesta puede venir en formato diferente
        const reply = Array.isArray(data) && data[0]?.generated_text
        ? data[0].generated_text
        : "Sin respuesta...";

        return reply;
    } catch (error) {
        console.error("Error al conectar con Hugging Face:", error);
        return "Ups... no se pudo obtener respuesta 🤖";
    }
}