import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Hello world</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
