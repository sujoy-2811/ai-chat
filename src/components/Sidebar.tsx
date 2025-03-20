import { useState } from "react";
import {
  Menu,
  Plus,
  MessageSquare,
  HelpCircle,
  History,
  Settings,
  X,
} from "lucide-react";

interface SidebarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Sidebar = ({ mobileMenuOpen, setMobileMenuOpen }: SidebarProps) => {
  const [extended, setExtended] = useState(false);

  return (
    <>
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        className={`min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] px-3.75 py-6.25 transition-all duration-300 z-50
        fixed md:relative top-0 left-0 h-full shadow-xl md:shadow-none
        ${
          mobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }
        ${extended ? "w-62.5" : "w-19.5"}
        `}
      >
        <div className="top">
          <Menu
            onClick={() => setExtended((prev) => !prev)}
            className="block ml-2.5 cursor-pointer text-gray-500 max-md:hidden"
            size={20}
          />
          {/* Mobile Close Button */}
          <div className="md:hidden flex items-center justify-between mb-5 ml-2.5">
            <Menu
              onClick={() => setExtended((prev) => !prev)}
              className="cursor-pointer text-gray-500"
              size={20}
            />
            {extended && (
              <X
                onClick={() => setMobileMenuOpen(false)}
                className="cursor-pointer text-gray-500 mr-2"
                size={20}
              />
            )}
          </div>

          <div
            className="mt-12.5 inline-flex items-center gap-2.5 py-2.5 px-3.75 bg-[#e6eaf1] rounded-full text-[14px] text-gray-500 cursor-pointer"
            onClick={() => console.log("New Chat")}
          >
            <Plus size={20} />
            {extended && <p>New Chat</p>}
          </div>
          {extended && (
            <div className="flex flex-col animate-fadeIn">
              <p className="mt-7.5 mb-5 ml-4 text-sm font-medium">Recent</p>
              <div className="flex items-center gap-2 p-2 pr-10 rounded-full text-slate-700 cursor-pointer hover:bg-[#e2e6eb] transition-colors">
                <MessageSquare size={18} />
                <p className="text-sm truncate">What is React?</p>
              </div>
              <div className="flex items-center gap-2 p-2 pr-10 rounded-full text-slate-700 cursor-pointer hover:bg-[#e2e6eb] transition-colors">
                <MessageSquare size={18} />
                <p className="text-sm truncate">Tell me a joke.</p>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2 p-2 pr-10 rounded-full text-slate-700 cursor-pointer hover:bg-[#e2e6eb] transition-colors mb-2">
            <HelpCircle size={20} />
            {extended && <p className="text-sm">Help</p>}
          </div>
          <div className="flex items-center gap-2 p-2 pr-10 rounded-full text-slate-700 cursor-pointer hover:bg-[#e2e6eb] transition-colors mb-2">
            <History size={20} />
            {extended && <p className="text-sm">Activity</p>}
          </div>
          <div className="flex items-center gap-2 p-2 pr-10 rounded-full text-slate-700 cursor-pointer hover:bg-[#e2e6eb] transition-colors mb-2">
            <Settings size={20} />
            {extended && <p className="text-sm">Settings</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
