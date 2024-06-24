import React, { useEffect } from 'react';

const ChatComponent = () => {
  useEffect(() => {
    // Create a script element for the Dialogflow Messenger script
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
    script.async = true;

    // Append the script to the document's head
    document.head.appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <df-messenger
        intent="WELCOME"
        chat-title="MyChatAgent"
        agent-id="82bce188-f2ca-417f-bcb0-70413b2b22dd"
        language-code="en"
      ></df-messenger>
    </div>
  );
};

export default ChatComponent;
