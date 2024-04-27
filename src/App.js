import './App.css';
import '@fontsource/inter';
import Header from "./components/Header";
import GeneralImage from "./components/GeneralImage";
import Invitation from "./components/Invitation";
import AddToCalendar from "./components/AddToCalendar";
import DayTiming from "./components/DayTiming";
import DetailedInvitation from "./components/DetailedInvitation";
import Location from "./components/Location";
import Managers from "./components/Managers";
import DressCode from "./components/DressCode";

function App() {
    return (
        <div className="App">
            <Header/>
            <GeneralImage/>
            <Invitation/>
            <AddToCalendar/>
            <DetailedInvitation/>
            <DayTiming/>
            <Location/>
            <Managers/>
            <DressCode/>
        </div>
    );
}

export default App;