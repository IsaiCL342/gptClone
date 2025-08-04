import { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import { getBotReply } from './services/huggingFace';

export default function App() {
  const [messages, setMessages] = useState([]);

  const handleSend = async (userMessage) => {
    setMessages((prev) => [...prev, { sender: 'user', content: userMessage }]);

    try {
      const botReply = await getBotReply(userMessage);
      setMessages((prev) => [...prev, { sender: 'bot', content: botReply }]);
    } catch (error) {
      setMessages((prev) => [...prev, {
        sender: 'bot',
        content: 'Error al generar respuesta. Inténtalo de nuevo más tarde 😓'
      }]);
    }
  };

  return (
    <ChatWindow messages={messages} onSend={handleSend} />
  );
}