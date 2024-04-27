import {
    Box,
    ListItemContent,
    ListItemDecorator,
    Typography
} from "@mui/joy";
import {List, ListItem, ListItemText} from "@mui/material";
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

            <List
                variant="outlined"
                aria-labelledby="ellipsis-list-demo"
                sx={{ '--ListItemDecorator-size': '56px' }}
            >
                {events.map((event) => (
                    <ListItem>
                        <ListItemDecorator>
                            <ListItemText primary={event.time}/>
                        </ListItemDecorator>
                        <ListItemContent>
                            <Typography level="title-sm">{event.title}</Typography>
                            <Typography level="body-sm" noWrap>{event.description}</Typography>
                        </ListItemContent>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default DayTiming;