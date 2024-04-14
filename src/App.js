import './App.css';
import '@fontsource/inter';
import Header from "./components/Header";
import GeneralImage from "./components/GeneralImage";
import Invitation from "./components/Invitation";

function App() {
    return (
        <div className="App">
            <Header/>
            <GeneralImage/>
            <Invitation/>
        </div>
    );
}

export default App;