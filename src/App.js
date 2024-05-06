import './App.css';
import '@fontsource/inter';
import Hi from "./components/Hi";
import Invitation from "./components/Invitation";
import DayTiming from "./components/DayTiming";
import DetailedInvitation from "./components/DetailedInvitation";
import Location from "./components/Location";
import Managers from "./components/Managers";
import DressCode from "./components/DressCode";
import Details from "./components/Details";
import GuestForm from "./components/GuestForm";
import {CssBaseline} from "@mui/joy";
import CustomDivider from "./components/CustomDivider";
import SeeLater from "./components/SeeLater";

function App() {
    return (
        <div className="App">
            <CssBaseline/>
            <Hi/>
            <Invitation/>
            <DetailedInvitation/>
            <CustomDivider/>
            <Location/>
            <CustomDivider/>
            <DayTiming/>
            <CustomDivider/>
            <Managers/>
            <CustomDivider/>
            <DressCode/>
            <CustomDivider/>
            <Details/>
            <CustomDivider/>
            <GuestForm/>
            <CustomDivider/>
            <SeeLater/>
        </div>
    );
}

export default App;