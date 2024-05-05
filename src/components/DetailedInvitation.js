import {Box, Typography} from "@mui/joy";

function DetailedInvitation() {
    return (
        <Box sx={{
            m: '1em',
            mt: '3em'
        }}>
            <Typography className="fontHeader">
                Дорогие гости!
            </Typography>
            <Typography className="fontRegular">
                В нашей жизни предстоят счастливые перемены!
            </Typography>
            <Typography className="fontRegular">
                Мы хотим, чтобы в этот день рядом с нами были самые близкие и дорогие для нас люди.
            </Typography>
            <Typography className="fontRegular">
                Будем рады разделить с вами чудесный праздник в день нашей свадьбы.
            </Typography>
            <Typography className="fontRegular">
                С любовью, Екатерина и Павел.
            </Typography>
        </Box>
    );
}

export default DetailedInvitation;