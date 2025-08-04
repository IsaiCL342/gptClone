import { useState, useEffect, useRef } from 'react';
import styles from '../styles/ChatInput.module.css';

export const ChatInput = ({ onSend }) => {
    const [input, setInput] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSend = () => {
        if (input.trim() !== '') {
        onSend(input);
        setInput('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
        handleSend();
        }
    };

    return (
        <div className={styles.inputContainer}>
            <input
                ref={inputRef}
                className={styles.input}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Say something..."
                aria-label="Chat input"
            />
            <button
                className={styles.sendBtn}
                onClick={handleSend}
                disabled={input.trim() === ''}
            >
                Send
            </button>
        </div>
    );
};