import "./App.css";
import { BooksListModule } from "./modules/booksList/BooksListModule";
import { SearchModule } from "./modules/search/SearchModule";

function App() {
  return (
    <>
      <SearchModule></SearchModule>
      <BooksListModule></BooksListModule>
    </>
  );
}

export default App;
