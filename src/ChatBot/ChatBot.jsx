import React, { useState } from "react";
import axios from "axios";
import SpeechRecognition from "react-speech-recognition";
import { useSpeechRecognition, useSpeechSynthesis } from "react-speech-kit";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isListening, setIsListening] = useState(false);

  const { speak } = useSpeechSynthesis();
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <p>Your browser doesn't support voice recognition.</p>;
  }

  const fetchBotResponse = async (updatedMessages, retries = 3) => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: updatedMessages,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );

      const botMessage = {
        role: "assistant",
        content: response.data.choices[0].message.content,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      speak({ text: botMessage.content });
    } catch (error) {
      if (error.response && error.response.status === 429 && retries > 0) {
        console.warn(`Rate limit exceeded. Retrying in ${retries} seconds...`);
        setTimeout(
          () => fetchBotResponse(updatedMessages, retries - 1),
          retries * 1000
        );
      } else {
        console.error("Error fetching AI response:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          console.error("Request data:", error.request);
        } else {
          console.error("Error message:", error.message);
        }
      }
    }
  };

  const handleTextSubmit = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    await fetchBotResponse(updatedMessages);
  };

  const handleVoiceSubmit = async () => {
    if (!transcript.trim()) return;

    const userMessage = { role: "user", content: transcript };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    resetTranscript();
    await fetchBotResponse(updatedMessages);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <div className="chatbox overflow-y-auto h-96 mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message p-2 my-2 rounded-lg ${
                msg.role === "user"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-200 text-gray-800 self-start"
              }`}
            >
              {msg.content}
            </div>
          ))}
        </div>

        <div className="input-section flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleTextSubmit}
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
          >
            Send
          </button>
          <button
            onClick={() => {
              setIsListening(!isListening);
              if (!isListening) SpeechRecognition.startListening();
              else SpeechRecognition.stopListening();
            }}
            className={`p-2 rounded-lg transition ${
              listening
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            {listening ? "Stop Listening" : "Speak"}
          </button>
          <button
            onClick={handleVoiceSubmit}
            className="bg-purple-500 text-white p-2 rounded-lg hover:bg-purple-600 transition"
          >
            Submit Voice
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
