import {Box, Card, CardCover, Link, Typography} from "@mui/joy";
import * as React from "react";
import locationImage3 from "../images/location.jpg";

function Location() {
    const images = [`${locationImage3}`]
    return (
        <Box sx={{
            ml: '32px',
            mr: '32px',
            mt: '40px'
        }}>
            <Typography variant="headerText">
               Локация
            </Typography>
            <Typography variant="regularText">
                Наша свадьба будет проходить по адресу: <Link target="_blank" href="https://yandex.ru/profile/56637267280">г. Москва, 2-й Кожуховский пр., 29, корп. 6</Link>
            </Typography>
            <Box
                component="ul"
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
            >
                {images.map((image) => (
                    <Card component="li" sx={{ minWidth: 300, minHeight:200, flexGrow: 1 }}>
                        <CardCover>
                            <img
                                src={image}
                                loading="lazy"
                                alt=""
                            />
                        </CardCover>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default Location;