import {Box, Typography} from "@mui/joy";

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
                    fontSize: '1.5em'
                }}>
                21 сентября 2024
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: '1em',
                    mb: '0.5em'
                }}>
                LOFT HALL
            </Typography>
        </Box>
    );
}

export default Invitation;