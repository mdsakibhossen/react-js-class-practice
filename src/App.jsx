import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <NoteForm />
      <SearchForm />
      <NoteList />
    </div>
  );
}

export default App;
