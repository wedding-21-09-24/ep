import './App.css';
import '@fontsource/inter';
import Header from "./components/Header";
import GeneralImage from "./components/GeneralImage";
import Invitation from "./components/Invitation";
import DayTiming from "./components/DayTiming";
import DetailedInvitation from "./components/DetailedInvitation";
import Location from "./components/Location";
import Managers from "./components/Managers";
import DressCode from "./components/DressCode";
import Gifts from "./components/Gifts";
import GuestForm from "./components/GuestForm";

function App() {
    return (
        <div className="App">
            <Header/>
            <GeneralImage/>
            <Invitation/>
            <DetailedInvitation/>
            <Location/>
            <DayTiming/>
            <Managers/>
            <DressCode/>
            <Gifts/>
            <GuestForm/>
        </div>
    );
}

export default App;