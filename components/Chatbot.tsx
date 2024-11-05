// components/Chatbot.tsx
import React from 'react';
import styles from './Chatbot.module.css'; // Importing CSS module for styling

const Chatbot = () => {
  return (
    <div className={styles.chatbotWrapper}>
      <iframe
        src="https://www.openassistantgpt.io/embed/cm2so755h000msnbq4ypnr6el/window?chatbox=false"
        className={styles.chatbotIframe}
        allow="clipboard-read; clipboard-write"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Chatbot;
