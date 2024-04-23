import Biodata from "./components/Biodata"
import {persons} from "./data/data"
// import './App.css'

function App() {

  return (
    <div className="App">
      {persons.map((person) => (
        <>
          <Biodata key={person.id} person={person} /><hr />
        </>
      ))}
    </div>
  );
}

export default App
