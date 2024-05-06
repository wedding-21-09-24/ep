import {Box, Typography} from "@mui/joy";
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
    title: "Окончание мероприятия",
    description: "Уютные объятия и много ярких впечатлений!"
}]

function DayTiming() {
    return (
        <Box sx={{
            m: '2em',
            mt: '3em'
        }}>
            <Typography className="fontHeader">
                Программа дня
            </Typography>
            {events.map((event) => (
                <Box sx={{
                    mt: '2em',
                    p: '2em',
                    pt: '2em',
                    pb: '1em',
                    backgroundColor: 'rgba(249, 249, 249, 0.48)',
                    border: '0.5px solid rgba(0, 0, 0, 1)',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                }}>
                    <Typography className="fontHeader">
                        {event.time}
                    </Typography>
                    <Typography className="fontRegular" sx={{
                        fontSize: '17px !important',
                        fontWeight: '700 !important',
                        lineHeight: '19.62px !important'
                    }}>
                        {event.title}
                    </Typography>
                    <Typography className="fontRegular" sx={{
                        fontSize: '15px !important'
                    }}>
                        {event.description}
                    </Typography>
                </Box>

            ))}
        </Box>
    );
}

export default DayTiming;