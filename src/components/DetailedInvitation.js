import {Box, Typography} from "@mui/joy";

function DetailedInvitation() {
    return (
        <Box sx={{
            mt: '1em'
        }}>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: '1.5em'
                }}>
                Дорогие гости!
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center',
                    mb: '0.5em'
                }}>
                В нашей жизни предстоят счастливые перемены! Мы хотим, чтобы в этот день рядом с нами были самые близкие
                и дорогие для нас люди. Будем рады разделить с вами чудесный праздник в день нашей свадьбы.
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center',
                    mb: '0.5em'
                }}>
                С любовью, Екатерина и Павел.
            </Typography>
        </Box>
    );
}

export default DetailedInvitation;