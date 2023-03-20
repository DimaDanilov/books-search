import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BookPage } from "./pages/bookPage/BookPage";
import { SearchPage } from "./pages/searchPage/SearchPage";

function App() {
  return (
    <Routes>
      <Route path="/book" element={<BookPage />} />
      <Route path="*" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
