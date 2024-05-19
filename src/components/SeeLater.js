import {Box, Typography} from "@mui/joy";
import * as React from "react";
import seeLaterImage from "../images/see-later.jpg";

function SeeLater() {
    return (
        <Box sx={{
            ml: '32px',
            mr: '32px',
            mt: '40px',
            mb: '32px'
        }}>
            <Typography variant="handwriteText">
                До скорой встречи!
            </Typography>
            <Box sx = {{
                mt: '32px',
                backgroundImage: `url(${seeLaterImage})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: 0,
                paddingTop: '100%',
                borderRadius: '8px',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
            }}/>
        </Box>
    );
}

export default SeeLater;