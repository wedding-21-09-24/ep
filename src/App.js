import './App.css';
import '@fontsource/inter';
import Header from "./components/Header";
import GeneralImage from "./components/GeneralImage";
import Invitation from "./components/Invitation";
import AddToCalendar from "./components/AddToCalendar";

function App() {
    return (
        <div className="App">
            <Header/>
            <GeneralImage/>
            <Invitation/>
            <AddToCalendar/>
        </div>
    );
}

export default App;