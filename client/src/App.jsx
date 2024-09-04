import { Routes, Route, useParams } from "react-router-dom";
import Index from "./pages/Index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:id" element={<Index />} />
      </Routes>
    </>
  );
}

export default App;
