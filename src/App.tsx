import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SearchPage } from "./pages/searchPage/SearchPage";
import { BookPage } from "./pages/bookPage/BookPage";

function App() {
  return (
    <Routes>
      <Route path="/book" element={<BookPage />} />
      <Route path="*" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
