import React from 'react';

const Chatbot = () => {
  return (
    <div>
      <iframe
        src="https://www.openassistantgpt.io/embed/cm2so755h000msnbq4ypnr6el/window?chatbox=false"
        style={{
          overflow: 'hidden',
          height: '80vh',
          width: '700px',
          bottom: '-50px',
          border: '2px solid #e2e8f0',
          borderRadius: '0.375rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          position: 'fixed',  // Ensure it's fixed in the bottom-right corner
          right: '1rem',
          zIndex: 9999
        }}
        allow="clipboard-read; clipboard-write"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Chatbot;
