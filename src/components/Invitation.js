import {Box, Typography} from "@mui/joy";

function Invitation() {
    return (
        <Box sx={{m: '2em'}}>
            <Typography
                sx={{
                    textAlign: 'center',
                    mb: '1em'
                }}>
                Мы будем счастливы видеть вас на нашей свадьбе
            </Typography>
            <Typography
                        sx={{textAlign: 'center',
                        fontSize:'2em'}}>
                21 сентября 2024
            </Typography>
        </Box>
    );
}

export default Invitation;