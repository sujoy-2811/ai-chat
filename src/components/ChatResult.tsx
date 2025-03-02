import React from "react";
import { User, Bot } from "lucide-react";

interface ChatResultProps {
  recentPrompt: string;
  dummyResult: string | null;
  loading: boolean;
}

const ChatResult: React.FC<ChatResultProps> = ({
  recentPrompt,
  dummyResult,
  loading,
}) => {
  return (
    <div className="px-[5%] py-0 max-h-[70vh] overflow-y-scroll scrollbar-hide">
      <div className="my-10 flex items-start gap-5">
        <User className="w-10 h-10 rounded-full bg-slate-200 p-2" />
        <p className="text-lg text-slate-700 leading-9">{recentPrompt}</p>
      </div>
      <div className="flex items-start gap-5">
        <Bot
          className={`w-10 h-10 rounded-full p-2 ${
            loading ? "animate-pulse text-blue-500" : "text-blue-500"
          }`}
        />
        {loading ? (
          <div className="flex flex-col gap-2 w-full">
            <hr className="rounded-full border-none h-5 w-[60%] bg-linear-to-r from-[#eff1f5] via-[#ffffff] to-[#eff1f5] bg-size-[800px_100%] animate-loader" />
            <hr className="rounded-full border-none h-5 w-[80%] bg-linear-to-r from-[#eff1f5] via-[#ffffff] to-[#eff1f5] bg-size-[800px_100%] animate-loader" />
            <hr className="rounded-full border-none h-5 w-full bg-linear-to-r from-[#eff1f5] via-[#ffffff] to-[#eff1f5] bg-size-[800px_100%] animate-loader" />
          </div>
        ) : (
          <p className="text-lg font-light leading-9 text-slate-700 whitespace-pre-wrap">
            {dummyResult}
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatResult;
