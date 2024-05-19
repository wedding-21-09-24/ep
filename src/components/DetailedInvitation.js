import {Box, Typography} from "@mui/joy";

function DetailedInvitation() {
    return (
        <Box sx={{
            ml: '32px',
            mr: '32px',
            mt: '60px'
        }}>
            <Typography variant="headerText">
                Дорогие гости!
            </Typography>
            <Typography variant="regularText">
                В нашей жизни предстоят счастливые перемены!
            </Typography>
            <Typography variant="regularText">
                Мы хотим, чтобы в этот день рядом с нами были самые близкие и дорогие для нас люди.
            </Typography>
            <Typography variant="regularText">
                Будем рады видеть вас на нашем празднике — семейнообразующем мероприятии.
            </Typography>
            <Typography variant="handwriteText">
                С любовью, Екатерина и Павел.
            </Typography>
        </Box>
    );
}

export default DetailedInvitation;