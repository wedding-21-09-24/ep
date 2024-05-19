import {Box, Typography, Divider} from "@mui/joy";
import * as React from "react";

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
    title: "Финал вечера",
    description: "Уютные объятия и много ярких впечатлений!"
}]

function DayTiming() {
    return (
        <Box sx={{
            ml: '32px',
            mr: '32px',
            mt: '40px'
        }}>
            <Typography variant="headerText">
                Программа дня
            </Typography>
            <Box sx={{
                mt: '32px',
                p: '32px',
                pt: '16px',
                pb: '16px',
                backgroundColor: 'rgba(249, 249, 249, 0.48)',
                border: '0.5px solid rgba(0, 0, 0, 1)',
                borderRadius: '8px',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
            }}>
                {event(events[0])}
                {divider()}
                {event(events[1])}
                {divider()}
                {event(events[2])}
                {divider()}
                {event(events[3])}
            </Box>
        </Box>
    );
}

function event({time, title, description}) {
    return <>
        <Typography variant="headerText" sx={{
            pt: '16px',
            mb: '8px'
        }}>
            {time}
        </Typography>
        <Typography variant="regularText" sx={{
            fontSize: '17px',
            fontWeight: '700',
            lineHeight: '19.62px',
            mb: '8px'
        }}>
            {title}
        </Typography>
        <Typography variant="regularText" sx={{
            fontSize: '15px'
        }}>
            {description}
        </Typography>
    </>
}

function divider() {
    return (
        <Divider sx={{
            ml: '50px',
            mr: '50px',
            height: '0.5px',
            backgroundColor: 'black'
        }}/>
    )
}

export default DayTiming;