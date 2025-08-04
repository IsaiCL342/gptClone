import styles from '../styles/ChatMessage.module.css';
import botLogo from '../assets/chatgptLogo.svg';
import userLogo from '../assets/user-icon.png';

export default function ChatMessage({ sender, content }) {
    const isBot = sender === 'bot';
    const wrapperClass = `${styles.chat} ${isBot ? styles.bot : styles.user}`;

    return (
        <div className={wrapperClass}>
            <div className={styles.avatar}>
                <img
                src={isBot ? botLogo : userLogo}
                alt={isBot ? 'Bot icon' : 'User icon'}
                />
            </div>
            <div className={styles.message}>
            {typeof content === 'string' 
                ? content 
                : '[Error: mensaje no renderizable]'}
            </div>
        </div>
    );
}