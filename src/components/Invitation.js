import {Box, Typography} from "@mui/joy";
import AddToCalendar from "./AddToCalendar";

function Invitation() {
    return (
        <Box sx={{
            ml: '32px',
            mr: '32px',
            mt: '20px'
        }}>
            <Typography variant="regularText" sx={{
                mb: '2px'
            }}>
                21 сентября 2024
            </Typography>
            <Typography variant="regularText">
                Москва, LOFT HALL
            </Typography>
            <Box sx={{
                mt: '20px'
            }}>
                <AddToCalendar/>
            </Box>

        </Box>
    );
}

export default Invitation;