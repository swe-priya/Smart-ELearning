// AITutor.jsx
import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "./AITutor.css";

function AITutor() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "### Welcome to Smart AI Tutor 👋\nHello Student! I'm your interactive AI Learning Assistant.\n\n**I can help you with:**\n* MERN Stack development\n* MongoDB & Express.js questions\n* AWS Cloud architecture\n* Code debugging & interview preparation"
    }
  ]);
  const [loading, setLoading] = useState(false);

  const askQuickQuestion = async (text) => {
    setQuestion(text);
    const userMessage = {
      sender: "user",
      text: text
    };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/ai/chat", {
        message: text
      });
      const aiMessage = {
        sender: "ai",
        text: res.data.reply
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "AI Tutor is currently unavailable. Please check your backend connection."
        }
      ]);
    }
    setQuestion("");
    setLoading(false);
  };

  const askAI = async () => {
    if (!question.trim()) return;
    const userMessage = {
      sender: "user",
      text: question
    };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/ai/chat", {
        message: question
      });
      const aiMessage = {
        sender: "ai",
        text: res.data.reply
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "AI Tutor is currently unavailable. Please check your backend connection."
        }
      ]);
    }
    setQuestion("");
    setLoading(false);
  };

  return (
    <div className="chatPage">
      <div className="chatBox">
        {/* Header */}
        <div className="header">
          <div className="header-title-block">
            <span className="ai-icon">🤖</span>
            <div>
              <h2>Smart AI Tutor</h2>
              <span className="online-indicator">● Active Assistant</span>
            </div>
          </div>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="quickQuestions">
          <button onClick={() => askQuickQuestion("Explain Java Programming")}>
            Explain Java
          </button>
          <button onClick={() => askQuickQuestion("What is MERN Stack?")}>
            MERN
          </button>
          <button onClick={() => askQuickQuestion("What is AWS Cloud?")}>
            AWS
          </button>
          <button onClick={() => askQuickQuestion("Explain MongoDB")}>
            MongoDB
          </button>
          <button onClick={() => askQuickQuestion("What is React JS?")}>
            React
          </button>
        </div>

        {/* Message Thread */}
        <div className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message-wrapper ${
                msg.sender === "user" ? "user-align" : "ai-align"
              }`}
            >
              <div
                className={
                  msg.sender === "user" ? "userMessage" : "aiMessage"
                }
              >
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
              <span className="timestamp">Just now</span>
            </div>
          ))}

          {loading && (
            <div className="message-wrapper ai-align">
              <div className="aiMessage thinking">
                <span className="pulse-dot"></span> AI is formulating a response...
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="inputArea">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && askAI()}
            placeholder="Ask any programming, cloud, or technical question..."
          />
          <button onClick={askAI}>
            Ask AI ↗
          </button>
        </div>
      </div>
    </div>
  );
}

export default AITutor;