import './App.css';
import '@fontsource/inter';
import Header from "./components/Header";
import GeneralImage from "./components/GeneralImage";
import Invitation from "./components/Invitation";
import AddToCalendar from "./components/AddToCalendar";
import DayTiming from "./components/DayTiming";
import DetailedInvitation from "./components/DetailedInvitation";

function App() {
    return (
        <div className="App">
            <Header/>
            <GeneralImage/>
            <Invitation/>
            <AddToCalendar/>
            <DetailedInvitation/>
            <DayTiming/>
        </div>
    );
}

export default App;