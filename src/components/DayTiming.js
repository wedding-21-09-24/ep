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
    description: "Уютные объятия и много ярких впечатлений!"
}]

function DayTiming() {
    return (
        <Box sx={{
            m: '1em',
            mt: '3em'
        }}>
            <Typography className="fontHeader">
                Программа дня
            </Typography>
            {events.map((event) => (
                <Box sx={{
                    mt: '2em',
                    backgroundColor: 'rgb(245,245,245)',
                    p: '1em',
                    pt: '2em',
                    pb: '1em'
                }}>
                    <Typography className="fontHeader">
                        {event.time}
                    </Typography>
                    <Typography className="fontHeader">
                        {event.title}
                    </Typography>
                    <Typography className="fontRegular">
                        {event.description}
                    </Typography>
                </Box>

            ))}
        </Box>
    );
}

export default DayTiming;