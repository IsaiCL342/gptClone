import styles from '../styles/ChatWindow.module.css';
import ChatMessage from './ChatMessage';
import InputBar from './InputBar';
import FooterNote from './FooterNote';
import { useEffect, useRef } from 'react';

export default function ChatWindow({ messages, onSend }) {
    const endOfMessagesRef = useRef(null);

    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className={styles.chatContainer}>
            <div className={styles.messageArea}>
                {messages.map((msg, index) => (
                <ChatMessage
                    key={index}
                    sender={msg.sender}
                    content={msg.content}
                />
                ))}
                <div ref={endOfMessagesRef} />
            </div>

            <div className={styles.inputSection}>
                <InputBar onSend={onSend} />
                <FooterNote />
            </div>
        </div>
    );
}