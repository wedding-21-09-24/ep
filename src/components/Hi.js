import {Box, Typography} from "@mui/joy";
import hiImage from "../images/hi.jpg";
import * as React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

function Hi() {
    const { height, width } = useWindowDimensions();
    const heightImage = 0.7 * height;
    return (
        <Box sx={{
            backgroundImage: `url(${hiImage})`,
            backgroundColor: 'black',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center bottom',
            height: `${heightImage}px`,
            pt: '1em',
            pb: '1em',
        }}>
            <Typography variant="handwriteText" sx={{
                color: 'white'
            }}>
                Привет!
            </Typography>
        </Box>
    );
}

export default Hi;