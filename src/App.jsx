import Nav from "./components/nav";
import Jumbotron from "./components/jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";
import { useRef } from "react"


function App() {
  const WebgiViewerRef = useRef();
  const handlePreview = () => {
    WebgiViewerRef.current.triggrPreview();
  }


  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <SoundSection />
      <DisplaySection triggrPreview={handlePreview} />
      <WebgiViewer ref={WebgiViewerRef} />
    </div>
  );
}

export default App;
