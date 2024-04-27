import {Box, Card, CardCover, Link, Typography} from "@mui/joy";
import * as React from "react";
import locationImage1 from "../images/location-image-1.jpg";
import locationImage2 from "../images/location-image-2.jpg";
import locationImage3 from "../images/location-image-3.jpg";
import locationImage4 from "../images/location-image-4.jpg";

function Location() {
    const images = [`${locationImage3}`,`${locationImage1}`, `${locationImage2}`, `${locationImage4}`]
    return (
        <Box sx={{
            pt: '1em',
            pb: '1em',
            mt: '1em',
            ml: '1em',
            mr: '1em'
        }}>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: '1.5em'
                }}>
               Локация!
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center',
                    mb: '0.5em'
                }}>
                Наша свадьба будет проходить по адресу: <Link href="https://yandex.ru/profile/56637267280">г. Москва 2-й Кожуховский пр., 29, корп. 6</Link>
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