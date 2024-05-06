import {Box, Typography} from "@mui/joy";
import AddToCalendar from "./AddToCalendar";

function Invitation() {
    return (
        <Box sx={{
            m: '2em',
            mt: '1em'
        }}>
            <Typography className="fontHandwrite">
                Приглашаем вас на свадьбу!
            </Typography>
            <Typography className="fontHeader">
                21 сентября 2024
            </Typography>
            <Box sx={{
                mt: '2em'
            }}>
                <AddToCalendar/>
            </Box>

        </Box>
    );
}

export default Invitation;