import React from "react";
import { Compass, Lightbulb, Code, Youtube, User, Menu } from "lucide-react";
import Card from "./Card";
import Greeting from "./Greeting";
import ChatInput from "./ChatInput";
import ChatResult from "./ChatResult";
import { askAIQuestion } from "../lib/ai";

interface MainContentProps {
  setMobileMenuOpen: (open: boolean) => void;
}

const MainContent: React.FC<MainContentProps> = ({ setMobileMenuOpen }) => {
  const [input, setInput] = React.useState("");
  const [showResult, setShowResult] = React.useState(false);
  const [dummyResult, setDummyResult] = React.useState<string | null>(null);
  const [recentPrompt, setRecentPrompt] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onSent = async () => {
    if (!input) return;
    setRecentPrompt(input);
    setShowResult(true);
    setLoading(true);
    // Delay for loading effect
    setTimeout(async () => {
      const response = await askAIQuestion({ prompt: input });
      setDummyResult(
        response || "Sorry, I couldn't generate a response. Please try again."
      );
      setLoading(false);
    }, 1500);
    setInput("");
  };

  const handleCardClick = (prompt: string) => {
    setInput(prompt);
  };

  const suggestionCards = [
    {
      text: "Suggest beautiful places to see on an upcoming road trip",
      icon: Compass,
    },
    {
      text: "Briefly summarize this concept: urban planning",
      icon: Lightbulb,
    },
    {
      text: "Brainstorm team bonding activities for our work retreat",
      icon: Youtube,
    },
    {
      text: "Improve the readability of the following code",
      icon: Code,
    },
  ];

  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative bg-white">
      <div className="flex items-center justify-between text-xl p-5 text-slate-700">
        <div className="flex items-center gap-4">
          <Menu
            className="md:hidden cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
          />
          <p>Gemini</p>
        </div>
        <User className="w-10 h-10 rounded-full bg-slate-200 p-2" />
      </div>

      <div className="max-w-225 mx-auto h-full relative">
        {!showResult ? (
          <>
            <Greeting />
            <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4 p-5">
              {suggestionCards.map((card, index) => (
                <Card
                  key={index}
                  text={card.text}
                  icon={card.icon}
                  onClick={() => handleCardClick(card.text)}
                />
              ))}
            </div>
          </>
        ) : (
          <ChatResult
            recentPrompt={recentPrompt}
            dummyResult={dummyResult}
            loading={loading}
          />
        )}

        <ChatInput input={input} setInput={setInput} onSent={onSent} />
      </div>
    </div>
  );
};

export default MainContent;
