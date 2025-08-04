import { useState } from 'react';
import styles from '../styles/InputBar.module.css';
import sendBtn from '../assets/send.svg';

export default function InputBar({ onSend, promptOptions = [] }) {
    const [userInput, setUserInput] = useState('');

    const handleSubmit = () => {
        const message = userInput.trim();
        if (!message) return;
        onSend(message);
        setUserInput('');
    };

    return (
        <div className={styles.wrapper}>
        {/* Botones de sugerencias */}
        <div className={styles.prompts}>
            {promptOptions.map((text, idx) => (
            <button key={idx} className={styles.promptBtn} onClick={() => onSend(text)}>
                {text}
            </button>
            ))}
        </div>

        {/* Input principal */}
        <div className={styles.inputContainer}>
            <input
            type="text"
            placeholder="Send a message..."
            className={styles.input}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />
            <button className={styles.send} onClick={handleSubmit}>
            <img src={sendBtn} alt="Send" />
            </button>
        </div>

        {/* Disclaimer opcional */}
        <div className={styles.footerNote}>
            <small>ChatGPT may produce inaccurate information about people, places, or facts.</small>
        </div>
        </div>
    );
}