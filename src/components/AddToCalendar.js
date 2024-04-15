import {Box, Button, Divider} from "@mui/joy";
import {Dialog, List, ListItem, ListItemButton, ListItemIcon, ListItemText,} from "@mui/material";
import * as React from 'react';
import PropTypes from "prop-types";
import {Apple, Google} from "@mui/icons-material";

function SimpleDialog(props) {
    const {onClose, open} = props;
    const addToGoogleCalendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240921T163000/20240921T230000&ctz=Europe/Moscow&location=LOFT%20HALL%2C%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%202-%D0%B9%20%D0%9A%D0%BE%D0%B6%D1%83%D1%85%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%B7%D0%B4%2C%2029%D0%BA6&text=%D0%A1%D0%B2%D0%B0%D0%B4%D1%8C%D0%B1%D0%B0%20%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D1%8B%20%D0%B8%20%D0%9F%D0%B0%D0%B2%D0%BB%D0%B0&details=%D0%A1%D0%B2%D0%B0%D0%B4%D1%8C%D0%B1%D0%B0%20%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D1%8B%20%D0%B8%20%D0%9F%D0%B0%D0%B2%D0%BB%D0%B0.%20LOFT%20HALL%2C%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%202-%D0%B9%20%D0%9A%D0%BE%D0%B6%D1%83%D1%85%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%B7%D0%B4%2C%2029%D0%BA6";
    const addToAppleCalendarUrl = "BEGIN:VCALENDAR\n" +
        "VERSION:2.0\n" +
        "BEGIN:VEVENT\n" +
        "URL:http://192.168.1.165:3000/EP\n" +
        "METHOD:PUBLISH\n" +
        "DTSTART:20240921T163000\n" +
        "DTEND:20240921T230000\n" +
        "SUMMARY:Свадьба Екатерины и Павла\n" +
        "DESCRIPTION:Свадьба Екатерины и Павла. LOFT HALL, Москва, 2-й Кожуховский проезд, 29к6\n" +
        "LOCATION:LOFT HALL, Москва, 2-й Кожуховский проезд, 29к6\n" +
        "END:VEVENT\n" +
        "END:VCALENDAR";

    const handleClose = () => {
        onClose();
    };

    const handleListItemClick = (value) => {
        const link = document.createElement("a");
        if (value === 'Apple') {
            const file = new Blob([addToAppleCalendarUrl], {type: "text/calendar;charset=utf-8"});
            link.href = URL.createObjectURL(file);
            link.download = "event-to-save-in-my-calendar.ics";
        } else {
            link.href = addToGoogleCalendarUrl;
            link.target = "_blank";
        }
        link.click();

        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <List sx={{pt: 0}}>
                <ListItem>
                    <ListItemButton
                        onClick={() => handleListItemClick("Apple")}>
                        <ListItemIcon>
                            <Apple/>
                        </ListItemIcon>
                        <ListItemText primary="Apple календарь"/>
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemButton
                        onClick={() => handleListItemClick("Google")}>
                        <ListItemIcon>
                            <Google/>
                        </ListItemIcon>
                        <ListItemText primary="Google календарь"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

function AddToCalendar() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box display="flex"
             justifyContent="center"
             alignItems="center">
            <Button onClick={handleClickOpen}
                    variant="soft" size="md" color="neutral">
                Добавить в календарь
            </Button>
            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
        </Box>
    );
}

export default AddToCalendar;
