import {Box, Typography} from "@mui/joy";
import * as React from "react";

function Divider() {
    return (
        <Box sx={{
            m: '1em',
            mt: '3em'
        }}>
            <Typography className="fontHeader"
                        sx={{
                            fontSize: '3.5rem !important'
                        }}>
                ~
            </Typography>
        </Box>
    );
}

export default Divider;