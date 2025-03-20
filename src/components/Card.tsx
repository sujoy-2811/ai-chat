import type { LucideIcon } from "lucide-react";

interface CardProps {
  text: string;
  icon: LucideIcon;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ text, icon: Icon, onClick }) => {
  return (
    <div
      className="h-50 p-4 bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea] transition-colors overflow-hidden"
      onClick={onClick}
    >
      <p className="text-slate-700 text-[17px]">{text}</p>
      <Icon
        className="w-9 h-9 p-1 absolute bottom-2 right-2 bg-white rounded-full text-slate-700"
        size={35}
      />
    </div>
  );
};

export default Card;
