import React, { useEffect, useState } from "react";

const OpenChatButton = () => {
  const [isChatReady, setIsChatReady] = useState(false);

  useEffect(() => {
    // Check if the Botpress web chat is available
    const checkChatAvailability = () => {
      if (window.botpressWebChat) {
        setIsChatReady(true);
      } else {
        // Retry if not available yet
        setTimeout(checkChatAvailability, 500);
      }
    };

    checkChatAvailability(); // Start checking when component mounts
  }, []);

  const openChat = () => {
    if (isChatReady && window.botpressWebChat) {
      window.botpressWebChat.open();
    }
  };

  return (
    <button onClick={openChat} disabled={!isChatReady}>
      {isChatReady ? "Start Chat" : "Loading Chat..."}
    </button>
  );
};

export default OpenChatButton;
