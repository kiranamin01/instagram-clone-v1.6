import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Liked from "./pages/Liked"; // Changed from Liked to Likes
import Footer from "./components/Footer";
import Upload from "./pages/Upload";

function App() {
  return (
    <BrowserRouter>
      <div className="relative max-w-[470px] mx-auto scrollbar-hide">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/liked" element={<Liked />} />{" "}
          <Route path="/profile" element={<Profile />} />
          {/* Changed path and component name */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
