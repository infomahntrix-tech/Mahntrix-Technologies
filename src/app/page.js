"use client";

import Company from "@/app/company/page";
import Navbar from "@/components/company/Navbar";
import Footer from "@/components/company/Footer";
import { FaWhatsapp, FaTimes, FaRobot, FaTrash, FaPaperPlane } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your AI assistant. How can I help you today?", sender: "bot" },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);

  const phoneNumber = "9575932050";
  const message = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isChatOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isChatOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isChatOpen && chatContainerRef.current && !chatContainerRef.current.contains(event.target)) {
        if (!event.target.closest('[aria-label="Open AI Chat"]')) {
          setIsChatOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isChatOpen]);

  useEffect(() => {
    if (isChatOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isChatOpen]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setMessages([...messages, { text: inputMessage, sender: "user" }]);

    setTimeout(() => {
      let botResponse = "";
      const userMsg = inputMessage.toLowerCase();

      if (userMsg.includes("hello") || userMsg.includes("hi") || userMsg.includes("hey")) {
        botResponse = "Hello! How can I assist you with our software services today?";
      } else if (userMsg.includes("service") || userMsg.includes("offer")) {
        botResponse = "We offer Web Development, Mobile Apps, Cloud Solutions, AI Integration, Cybersecurity, and IT Consulting.";
      } else if (userMsg.includes("price") || userMsg.includes("cost") || userMsg.includes("budget")) {
        botResponse = "Our pricing depends on project requirements. Would you like to schedule a free consultation?";
      } else if (userMsg.includes("contact") || userMsg.includes("phone") || userMsg.includes("email")) {
        botResponse = "You can reach us at +91 9575932050 or email us at smartweb@company.com.";
      } else if (userMsg.includes("web") || userMsg.includes("website")) {
        botResponse = "We build modern, responsive websites using React, Next.js, and other cutting-edge technologies.";
      } else if (userMsg.includes("mobile") || userMsg.includes("app")) {
        botResponse = "We develop native and cross-platform mobile apps for iOS and Android using React Native and Flutter.";
      } else if (userMsg.includes("cloud") || userMsg.includes("aws")) {
        botResponse = "We provide cloud solutions including AWS, Azure, and Google Cloud setup and management.";
      } else if (userMsg.includes("ai") || userMsg.includes("machine")) {
        botResponse = "We offer AI and ML solutions including custom LLM fine-tuning, chatbots, and predictive analytics.";
      } else if (userMsg.includes("consultation") || userMsg.includes("meeting")) {
        botResponse = "Great! Click Get Free Consultation in the navbar to book a meeting with our team.";
      } else if (userMsg.includes("thank")) {
        botResponse = "You are welcome! Is there anything else I can help you with?";
      } else if (userMsg.includes("bye")) {
        botResponse = "Goodbye! Feel free to come back if you have more questions. Have a great day!";
      } else if (userMsg.includes("portfolio") || userMsg.includes("work") || userMsg.includes("projects")) {
        botResponse = "Check out our portfolio in the Projects section. We have delivered 150+ successful projects!";
      } else {
        botResponse = "Would you like to speak with our team for more detailed information? You can reach us on WhatsApp.";
      }

      setMessages((prev) => [
        ...prev,
        { text: botResponse, sender: "bot" },
      ]);
    }, 800);

    setInputMessage("");
  };

  const clearChat = () => {
    setMessages([
      { text: "Hello! I'm your AI assistant. How can I help you today?", sender: "bot" },
    ]);
  };

  const quickReplies = [
    "What services?",
    "Pricing?",
    "Need a website",
    "Mobile app",
    "Consultation",
    "Portfolio",
  ];

  return (
    <>
      <Navbar />
      <main className="relative">
        <Company />

        <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-40">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center justify-center"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="absolute left-full ml-2 sm:ml-3 px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs sm:text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
              Chat on WhatsApp
            </span>
          </a>
        </div>

        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40">
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center justify-center"
            aria-label="Open AI Chat"
          >
            {isChatOpen ? (
              <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <FaRobot className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
            <span className="absolute right-full mr-2 sm:mr-3 px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs sm:text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
              {isChatOpen ? "Close Chat" : "AI Assistant"}
            </span>
            {!isChatOpen && (
              <span className="absolute inset-0 rounded-full bg-blue-400 opacity-30 animate-ping"></span>
            )}
          </button>
        </div>

        {isChatOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsChatOpen(false)}
            />
            
            <div 
              ref={chatContainerRef}
              className="fixed z-50 bg-white shadow-2xl flex flex-col overflow-hidden inset-x-4 top-16 bottom-20 sm:top-20 sm:bottom-24 md:inset-auto md:bottom-24 md:right-6 md:w-[420px] md:h-[600px] md:max-h-[calc(100vh-120px)] lg:w-[450px] lg:h-[650px] rounded-2xl animate-slide-up"
            >
              <div className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 sm:p-4 rounded-t-2xl">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="relative">
                      <FaRobot className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full border-2 border-white"></span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base">AI Assistant</h3>
                      <p className="text-xs text-blue-100">Always here to help</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <button
                      onClick={clearChat}
                      className="hover:bg-white/20 p-1.5 sm:p-2 rounded-lg transition-colors"
                      title="Clear chat"
                    >
                      <FaTrash className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                    <button
                      onClick={() => setIsChatOpen(false)}
                      className="hover:bg-white/20 p-1.5 sm:p-2 rounded-lg transition-colors"
                    >
                      <FaTimes className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2.5 sm:space-y-3 bg-gradient-to-b from-gray-50 to-white">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                  >
                    {msg.sender === "bot" && (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                        <FaRobot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] p-2.5 sm:p-3 rounded-2xl ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none"
                          : "bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-200"
                      }`}
                    >
                      <p className="text-xs sm:text-sm leading-relaxed break-words">{msg.text}</p>
                    </div>
                    {msg.sender === "user" && (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-300 rounded-full flex items-center justify-center ml-2 flex-shrink-0">
                        <span className="text-gray-600 text-xs font-bold">You</span>
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="flex-shrink-0 px-3 sm:px-4 py-2 sm:py-3 bg-white border-t border-gray-100 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <div className="flex gap-1.5 sm:gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInputMessage(reply);
                        inputRef.current?.focus();
                      }}
                      className="text-xs px-2.5 sm:px-3 py-1.5 sm:py-2 bg-gray-100 hover:bg-blue-100 hover:text-blue-700 text-gray-700 rounded-full transition-all duration-200 whitespace-nowrap flex-shrink-0"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>

              <form
                onSubmit={sendMessage}
                className="flex-shrink-0 p-3 sm:p-4 bg-white border-t border-gray-200 rounded-b-2xl"
              >
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  <button
                    type="submit"
                    disabled={!inputMessage.trim()}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-xl transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaPaperPlane className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </main>
      <Footer />

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}