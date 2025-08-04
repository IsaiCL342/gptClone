import styles from '../styles/Sidebar.module.css';
import gptLogo from '../assets/chatgpt.svg';
import addBtn from '../assets/add-30.png';
import msgIcon from '../assets/message.svg';
import home from '../assets/home.svg';
import saved from '../assets/bookmark.svg';
import rocket from '../assets/rocket.svg';

export const Sidebar = () => (
    <div className={styles.sideBar}>
        <div className={styles.upperSide}>
            <div className={styles.upperSideTop}>
                <img src={gptLogo} alt="Logo" className={styles.logo} />
                <span className={styles.brand}>ChatGPT</span>
            </div>
            <button className={styles.midBtn}>
                <img src={addBtn} alt="New chat" className={styles.addBtn} />New Chat
            </button>
            <div className={styles.upperSideBottom}>
                <button className={styles.query}><img src={msgIcon} alt="" />What is programming?</button>
                <button className={styles.query}><img src={msgIcon} alt="" />How to use an API?</button>
            </div>
            </div>
            <div className={styles.lowerSide}>
            <div className={styles.listItems}><img src={home} alt="" className={styles.listItemsImg} />Home</div>
            <div className={styles.listItems}><img src={saved} alt="" className={styles.listItemsImg} />Saved</div>
            <div className={styles.listItems}><img src={rocket} alt="" className={styles.listItemsImg} />Upgrade to Pro</div>
        </div>
    </div>
);