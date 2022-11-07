import Header from "./Header";
import "./App.css";
import MainContent from "./MainContent";
import gsap from "gsap";

function App() {
  let timeline = gsap.timeline();
  return (
    <div className="App">
      <Header timeline={timeline}/>
      <MainContent timeline={timeline}/>
    </div>
  );
}

export default App;
