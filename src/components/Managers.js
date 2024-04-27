import {Box, Card, CardContent, CardCover, Divider, Typography} from "@mui/joy";
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import * as React from "react";
import managerPhoto1 from "../images/manager-photo-1.jpg";
import managerPhoto2 from "../images/manager-photo-2.jpg";

function Managers() {
    const managers = [{
        "name": "Лиам Ниссон (организатор свадьбы)",
        "phone": "+7(926)325-34-43",
        "photo": `${managerPhoto1}`
    }, {
        "name": "Оливия Уайлд (координатор)",
        "phone": "+7(963)334-53-35",
        "photo": `${managerPhoto2}`
    }]
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
                Наши организаторы
            </Typography>
            <Typography
                sx={{
                    mb: '1em'
                }}>
                По всем вопросам (творческое поздравление, координация и т.п.) можете обращаться:
            </Typography>
            <Box
                component="ul"
                justifyContent="center"
                alignItems="center"
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
            >
                {managers.map((manager) => (
                    <Card sx={{ minHeight: '460px', width: 320 }}>
                        <CardCover>
                            <img
                                src={manager.photo}
                                loading="lazy"
                                alt=""
                            />
                        </CardCover>
                        <CardCover
                            sx={{
                                background:
                                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            }}
                        />
                        <CardContent sx={{ justifyContent: 'flex-end' }}>
                            <Typography level="title-lg" textColor="#fff">
                                {manager.name}
                            </Typography>
                            <Typography
                                startDecorator={<SmartphoneOutlinedIcon />}
                                textColor="neutral.300"
                            >
                                {manager.phone}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default Managers;