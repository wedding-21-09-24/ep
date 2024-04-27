import {Box, Card, CardCover, Typography} from "@mui/joy";
import * as React from "react";
import womenDress1 from "../images/women-dress-1.jpg";
import menDress1 from "../images/men-dress-1.jpg";

function DressCode() {
    const colors = [
        "rgb(194,129,27)",
        "rgb(223,169,140)",
        "rgb(219,133,101)",
        "rgb(140,77,50)",
        "rgb(161,159,137)",
        "rgb(106,97,53)"]

    const womenDress = [`${womenDress1}`]
    const menDress = [`${menDress1}`]
    return (
        <Box sx={{mt: '1em'}}>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: '1.5em'
                }}>
                Дресс-код
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center',
                    mb: '0.5em'
                }}>
                Мы очень ждем и с удовольствием готовимся к нашему незабыаемому дню!
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center',
                    mb: '0.5em'
                }}>
                Поддержите нас вашими улыбками и объятиями, а также красивыми нарядами в палитре торжества.
            </Typography>
            <Box
                component="ul"
                justifyContent="center"
                alignItems="center"
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
            >
                {colors.map((colorItem) => (
                    <Card
                        sx={{width: 64, height: 64,
                            backgroundColor: `${colorItem}`
                    }}>
                    </Card>
                ))}
            </Box>

            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: '1.5em'
                }}>
                Дeвушкам
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center',
                    mb: '0.5em'
                }}>
                Уже видим вас в каком-нибудь однотонном коктейльном платье или костюме, а может быть в юбке/брюках и топе,
                в обуви на каблуках или на плоской подошве (вообще планируется очень много танцевать,
                поэтому в конце вечера вы всё равно обувь сбросите).
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center',
                    mb: '0.5em'
                }}>
                Не стремитесь подбирать одежду точь-в-точь по цвету из палитры, главное, чтобы оттенки были приближены к заданным.
                И, пожалуйста, избегайте белого и черного цвета в своих нарядах.
            </Typography>
            <Box
                component="ul"
                justifyContent="center"
                alignItems="center"
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
            >
                {womenDress.map((dress) => (
                    <Card sx={{ minHeight: '460px', width: 320 }}>
                        <CardCover>
                            <img
                                src={dress}
                                loading="lazy"
                                alt=""
                            />
                        </CardCover>
                    </Card>
                ))}
            </Box>

            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: '1.5em'
                }}>
                Мужчинам
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center',
                    mb: '0.5em'
                }}>
                Образы мужчин мы видим следующими:
                костюм (можно без галстука)
                классические брюки в темно - синем или сером цвете
                белая рубашка или поло
                пиджак (можно и без него)
                классические туфли, лоферы или белые кроссовки
            </Typography>
            <Box
                component="ul"
                justifyContent="center"
                alignItems="center"
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
            >
                {menDress.map((dress) => (
                    <Card sx={{ minHeight: '460px', width: 320 }}>
                        <CardCover>
                            <img
                                src={dress}
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

export default DressCode;