import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div className="flex min-h-screen bg-white animate-fadeIn">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default App;
