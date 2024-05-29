import {Box, Typography} from "@mui/joy";
import hiImage from "../images/hi.jpg";
import * as React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

function Hi() {
    const { height, width } = useWindowDimensions();
    const heightImage = 0.75 * height;
    return (
        <Box sx={{
            backgroundImage: `url(${hiImage})`,
            backgroundColor: 'rgb(4, 4, 4)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center bottom',
            height: `${heightImage}px`,
            pt: '16px',
            pb: '16px',
        }}>
        </Box>
    );
}

export default Hi;