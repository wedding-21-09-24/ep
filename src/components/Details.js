import {Box, Typography} from "@mui/joy";
import * as React from "react";
import detailsImage from "../images/details.jpg";

function Details() {
    return (
        <Box sx={{
            m: '2em',
            mt: '3em'
        }}>
            <Typography className="fontHandwrite">
                Details
            </Typography>
            <Typography className="fontHeader">
                Подарки
            </Typography>
            <Typography className="fontRegular">
                Ваши улыбки и смех подарят нам незабываемое счастье в этот день, а пожелания в конвертах помогут осуществить наши мечты!
            </Typography>
            <Typography className="fontHeader">
                Цветы
            </Typography>
            <Typography className="fontRegular">
                Практически сразу же после торжества мы улетаем в свадебное путешествие и не успеем уделить должное внимание цветам.
            </Typography>
            <Typography className="fontRegular">
                Но мы любим сухое вино и виниловые пластинки!
            </Typography>
            <Typography className="fontHeader">
                «Горько»
            </Typography>
            <Typography className="fontRegular">
                Мы ребята стеснительные и будем благодарны, если вы воздержитесь от криков «Горько» на празднике, ведь поцелуй — это знак выражения чувств, он не может быть по заказу.
            </Typography>
            <Box sx = {{
                mt: '2em',
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