import {Box, Typography} from "@mui/joy";

function DetailedInvitation() {
    return (
        <Box sx={{
            m: '1em',
            mt: '3em'
        }}>
            <Typography
                sx={{
                    fontSize: '1.5em',
                    mb: '0.25em'
                }}>
                Дорогие гости!
            </Typography>
            <Typography>
                В нашей жизни предстоят счастливые перемены! Мы хотим, чтобы в этот день рядом с нами были самые близкие
                и дорогие для нас люди. Будем рады разделить с вами чудесный праздник в день нашей свадьбы.
            </Typography>
            <Typography>
                С любовью, Екатерина и Павел.
            </Typography>
        </Box>
    );
}

export default DetailedInvitation;