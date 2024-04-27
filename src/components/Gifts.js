import {Box, Card, CardCover, Typography} from "@mui/joy";
import * as React from "react";
import vinylListImage from "../images/vinyl-list-1.jpeg";

function Gifts() {
    return (
        <Box sx={{mt: '1em'}}>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: '1.5em'
                }}>
                Что подарить?
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center',
                    mb: '0.5em'
                }}>
                Мы решили не утруждать вас с выбором подарка, поэтому будем рады получить ваши пожелания в конвертах,
                которые помогут нам реализовать мечты нашей молодой семьи. А также мы предлагаем вам подарить нам в качестве
                подарка на память виниловую пластинку.
                Ниже представлена наша библиотека винила, чтобы понять наши предпочтения и избавить от повтора:
            </Typography>

            <Box
                component="ul"
                justifyContent="center"
                alignItems="center"
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
            >
                <Card sx={{ minHeight: '460px', width: 320 }}>
                    <CardCover>
                        <img
                            src={vinylListImage}
                            loading="lazy"
                            alt=""
                        />
                    </CardCover>
                </Card>
            </Box>
        </Box>
    );
}

export default Gifts;