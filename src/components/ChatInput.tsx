import { Image as ImageIcon, Mic, SendHorizontal } from "lucide-react";

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  onSent: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ input, setInput, onSent }) => {
  return (
    <div className="absolute bottom-0 w-full max-w-225 px-2.5 pb-2.5 sm:px-5 sm:pb-5 bg-white">
      <div className="flex items-center justify-between gap-2.5 sm:gap-5 bg-[#f0f4f9] py-2.5 px-3 sm:px-5 rounded-full">
        <input
          type="text"
          placeholder="Enter a prompt here"
          className="flex-1 bg-transparent border-none outline-none p-2 text-lg text-slate-700"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSent();
          }}
        />
        <div className="flex items-center gap-4 text-slate-500 cursor-pointer">
          <ImageIcon size={20} />
          <Mic size={20} />
          {input && (
            <SendHorizontal
              onClick={onSent}
              size={20}
              className="text-blue-500"
            />
          )}
        </div>
      </div>
      <p className="text-xs text-center text-slate-600 mt-4 mx-auto font-light">
        Gemini may display inaccurate info, including about people, so
        double-check its responses. Your privacy and Gemini Apps
      </p>
    </div>
  );
};

export default ChatInput;
