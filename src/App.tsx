import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white animate-fadeIn relative">
      <Sidebar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <MainContent setMobileMenuOpen={setMobileMenuOpen} />
    </div>
  );
};

export default App;
