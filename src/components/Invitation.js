import {Box, Typography} from "@mui/joy";
import AddToCalendar from "./AddToCalendar";

function Invitation() {
    return (
        <Box sx={{
            m: '2em',
            mt: '1em'
        }}>
            <Typography variant="regularText">
                Приглашаем вас на свадьбу!
            </Typography>
            <Typography variant="regularText">
                Москва, LOFT HALL
            </Typography>
            <Typography variant="regularText">
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