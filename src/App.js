import './App.css';
import Greeting from './Greeting';

const students = [ "andrew", "ariana", "cihan", "Danny", "jen", "john", "kevin", "kevin", "lorenzo", "Max", "pat", "sam", "yaslin" ]

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <h1> props demo</h1>
      {students.map(student => <Greeting key={student} name={student} /> )}



      </header>
    </div>
  );
}

export default App;
