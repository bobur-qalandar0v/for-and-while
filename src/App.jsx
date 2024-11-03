import { Route, Routes } from "react-router-dom";
import Header from "./assets/components/Header";
import WhileSikl from "./pages/WhileSikl/WhileSikl";
import ForSikl from "./pages/ForSikl/ForSikl";
import NazariyMalumot from "./pages/ForSikl/NazariyMalumotForSikl";
import NazariymalumotWhileSikl from "./pages/WhileSikl/NazariymalumotWhileSikl";
import { useEffect, useState } from "react";

function App() {
  const [isDestktop, setIsDesktop] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isDestktop) {
    <h1>Sahifa faqat komputerlarda korinadi</h1>;
  }

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/forsikl" element={<ForSikl />}>
            <Route path="nazariymalumot" element={<NazariyMalumot />} />
          </Route>
          <Route path="/whilesikl" element={<WhileSikl />}>
            <Route
              path="Nazariymalumot"
              element={<NazariymalumotWhileSikl />}
            />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
