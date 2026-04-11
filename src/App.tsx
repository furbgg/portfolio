import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomePage from "@/components/pages/HomePage";
import ProjectDetail from "@/components/sections/ProjectDetail";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

import BDetails from "@/components/pages/BDetails";
import MDetails from "@/components/pages/MDetails";
import FDetails from "@/components/pages/FDetails";
import TDetails from "@/components/pages/TDetails";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Full-page standalone pitch presentations without generic Header/Footer */}
        <Route path="/b-details" element={<BDetails />} />
        <Route path="/m-details" element={<MDetails />} />
        <Route path="/f-details" element={<FDetails />} />
        <Route path="/t-details" element={<TDetails />} />
        
        {/* Normal layout with Header and Footer */}
        <Route
          path="*"
          element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/project/:slug" element={<ProjectDetail />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
