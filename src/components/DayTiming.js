import {AspectRatio, Box, Card, CardContent, CardOverflow, Stack, Typography} from "@mui/joy";
import {ListItemText} from "@mui/material";
import * as React from "react";
import dayTimingImage from "../images/day-timing.jpg";

const events = [{
    time: "16:30",
    title: "Сбор гостей",
    description: "Просим взять с собой хорошее настроение и свои улыбки"
}, {
    time: "17:00",
    title: "Праздничный банкет",
    description: "Время вкусной еды, танцев и развлечений"
}, {
    time: "22:00",
    title: "Праздничный торт",
    description: "Подсластим мероприятие"
}, {
    time: "23:00",
    title: "Окончание мероприятия",
    description: "Мы такие разные, но все-таки идем домой"
}]

function DayTiming() {
    return (
        <Box sx={{
            mt: '4em',
            backgroundImage: `url(${dayTimingImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            pt: '1em',
            pb: '1em'
        }}>

            <Stack
                sx={{gap: 1.5}}>
                <Card orientation="horizontal" variant="plain" sx={{
                    backgroundColor: 'rgb(245,245,245)(229,228,226)',
                    width: 310,
                    alignSelf: 'center',
                    mt: 3,

                    pt:0.75,
                    pb:0.75
                }}>
                    <CardContent>
                        <Typography
                            sx={{
                                textAlign: 'center',
                                fontSize: '1.5em'
                            }}>
                            Тайминг дня
                        </Typography>
                    </CardContent>
                </Card>
                {events.map((event) => (
                    <Card orientation="horizontal" variant="plain" sx={{
                        backgroundColor: 'rgb(245,245,245)(229,228,226)',
                        width: 310,
                        alignSelf: 'center'
                    }}>
                        <CardOverflow sx={{
                            backgroundColor: 'rgb(245,245,245)'
                        }}>
                            <AspectRatio ratio="1" variant="plain" sx={{width: 90}}>
                                <ListItemText
                                    primary={event.time}/>
                            </AspectRatio>
                        </CardOverflow>
                        <CardContent>
                            <Typography fontWeight="md">
                                {event.title}
                            </Typography>
                            <Typography level="body-sm">{event.description}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Box>
    );
}

export default DayTiming;