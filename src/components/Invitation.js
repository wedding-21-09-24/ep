import {Box, Typography} from "@mui/joy";
import AddToCalendar from "./AddToCalendar";

function Invitation() {
    return (
        <Box sx={{
            m: '1em',
            mt: '1em'
        }}>
            <Typography className="fontRegular"
                sx={{
                    textAlign: 'center'
                }}>
                Мы будем счастливы видеть вас на нашей свадьбе
            </Typography>
            <Typography className="fontHeader"
            sx={{
                textAlign: 'center'
            }}>
                21 сентября 2024
            </Typography>
            <Box sx={{
                mt: '3em'
            }}>
                <AddToCalendar/>
            </Box>

        </Box>
    );
}

export default Invitation;