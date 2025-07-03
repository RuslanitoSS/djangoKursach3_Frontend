import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WatchPage from "./pages/WatchPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<WatchPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
