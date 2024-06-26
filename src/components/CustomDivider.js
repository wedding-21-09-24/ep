import {Box, Divider} from "@mui/joy";
import * as React from "react";

function CustomDivider() {
    return (
        <Box sx={{
            ml: '32px',
            mr: '32px',
            mt: '55px'
        }}>
            <Divider sx={{
                height: '0.5px',
                backgroundColor: 'black',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
            }} />
        </Box>
    );
}

export default CustomDivider;