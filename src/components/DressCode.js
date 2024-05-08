import {Box, Card, Typography} from "@mui/joy";
import * as React from "react";

function DressCode() {
    const colors = [
        "rgba(240, 196, 89, 1)",
        "rgba(202, 129, 0, 1)",
        "rgba(231, 193, 159, 1)",
        "rgba(148, 74, 39, 1)",
        "rgba(161, 160, 135, 1)",
        "rgba(115, 119, 103, 1)",
        "rgba(88, 130, 154, 1)",
        "rgba(12, 67, 98, 1)",
        "rgba(2, 8, 53, 1)",
        "rgba(175, 170, 168, 1)",
        "rgba(108, 109, 109, 1)",
        "rgba(59, 61, 62, 1)"]

    return (
        <Box sx={{
            m: '2em',
            mb: '2em'
        }}>
            <Typography variant="headerText">
                Дресс-код
            </Typography>
            <Typography variant="regularText">
                В лучших свадебных традициях у нас есть дресс-код.
            </Typography>
            <Typography variant="regularText">
                Он необязателен. Для нас важнее, чтобы вам было комфортно.
            </Typography>
            <Typography variant="regularText">
                Но если вы придержитесь этих цветов при выборе одежды — нам будет приятно)
            </Typography>
            <Box
                component="ul"
                justifyContent="center"
                alignItems="center"
                sx={{
                    display: 'flex', gap: 1, flexWrap: 'wrap', p: 0,
                    m: 0,
                    mt: '2em'
                }}
            >
                {colors.map((colorItem) => (
                    <Card
                        sx={{
                            width: 50, height: 50,
                            backgroundColor: `${colorItem}`
                        }}>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default DressCode;