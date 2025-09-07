import "./App.css";
import Searchtable from "./Components/Searchtable";
import Navbar from "./Components/Navbar";
import Bottomdiv from "./Components/Bottomdiv";
import Sidebar from "./Components/Sidebar";
function App() {
  return (
    <div className="min-h-screen select-none scroll-bar bg-gray-900 text-white">
      <Navbar />
      <aside className="absolute top-8 left-0 h-full">
        <Sidebar />
      </aside>
      <div className="h-full">
        <Searchtable />
        <Bottomdiv />
      </div>
    </div>
  );
}

export default App;
