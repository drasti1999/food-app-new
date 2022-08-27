import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import PopularMenu from "./components/PopularMenu";

function App() {
  return (
    <div>
      <Home />
      <PopularMenu/>
     {/* <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a 
           className="App-link"
           href="https:reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
       </header>
     </div>*/}
    </div>
    );
  }
  
  export default App;
