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
    description: "К сожалению, даже такой прекрасный вечер может закончится"
}]

function DayTiming() {
    return (
        <Box sx={{
            backgroundImage: `url(${dayTimingImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            pt: '1em',
            pb: '1em'
        }}>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: '1.5em',
                    mb: '0.5em'
                }}>
                Тайминг дня
            </Typography>
            <Stack>
                {events.map((event) => (
                    <Card orientation="horizontal" variant="plain" sx={{
                        backgroundColor: 'rgba(205,215,254,0.5)',
                        width: 300,
                        alignSelf: 'center'
                    }}>
                        <CardOverflow sx={{
                            backgroundColor: 'rgba(205,215,254,0.7)'
                        }}>
                            <AspectRatio ratio="1" variant="plain" sx={{ width: 90 }}>
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