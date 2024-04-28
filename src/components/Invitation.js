import {Box, Typography} from "@mui/joy";
import AddToCalendar from "./AddToCalendar";

function Invitation() {
    return (
        <Box sx={{
            m: '1em',
            mt: '1em'
        }}>
            <Typography
                sx={{
                    textAlign: 'center',
                    mb: '0.5em'
                }}>
                Мы будем счастливы видеть вас на нашей свадьбе
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: '1.5em',
                    mb: '0.5em'
                }}>
                21 сентября 2024
            </Typography>
            <AddToCalendar sx={{
                mt: '1em'
            }}/>
        </Box>
    );
}

export default Invitation;