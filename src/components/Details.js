import {Box, Typography} from "@mui/joy";
import * as React from "react";
import detailsImage from "../images/details.jpg";

function Details() {
    return (
        <Box sx={{
            ml: '32px',
            mr: '32px',
            mt: '40px'
        }}>
            <Typography  variant="headerText">
                Подарки
            </Typography>
            <Typography variant="regularText">
                Ваши улыбки и смех подарят нам незабываемое счастье в этот день, а пожелания в конвертах помогут осуществить наши мечты!
            </Typography>
            <Typography variant="headerText">
                Цветы
            </Typography>
            <Typography variant="regularText">
                Практически сразу же после торжества мы улетаем в свадебное путешествие и не успеем уделить должное внимание цветам.
            </Typography>
            <Typography variant="regularText">
                Но мы любим сухое вино и виниловые пластинки!
            </Typography>
            <Typography variant="headerText">
                «Горько»
            </Typography>
            <Typography variant="regularText">
                Мы ребята стеснительные и будем благодарны, если вы воздержитесь от криков «Горько» на празднике, ведь поцелуй — это знак выражения чувств, он не может быть по заказу.
            </Typography>
            <Box sx = {{
                mt: '32px',
                backgroundImage: `url(${detailsImage})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: 0,
                paddingTop: '100%',
                borderRadius: '8px',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
            }}/>
        </Box>
    );
}

export default Details;