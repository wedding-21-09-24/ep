import {Box, Card, CardCover} from "@mui/joy";
import generalImage from "../images/general-image.jpeg";
import * as React from "react";

function GeneralImage() {
    return (
        <Box sx={{
            m: '1em'
        }}>
            <Box
                component="ul"
                sx={{display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0}}
            >
                <Card component="li" sx={{minHeight: 600, flexGrow: 1}}>
                    <CardCover>
                        <img
                            src={generalImage}
                            loading="lazy"
                            alt=""
                        />
                    </CardCover>
                </Card>
            </Box>
        </Box>
    );
}

export default GeneralImage;