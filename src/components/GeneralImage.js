import {Box, Card, CardCover} from "@mui/joy";
import generalImage from "../images/general-image.jpeg";
import * as React from "react";

function GeneralImage() {
    return (
        <Box
            component="ul"
            justifyContent="center"
            alignItems="center"
            sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
        >
            <Card sx={{ minHeight: '460px', width: 320 }}>
                <CardCover>
                    <img
                        src={generalImage}
                        loading="lazy"
                        alt=""
                    />
                </CardCover>
            </Card>
        </Box>
    );
}

export default GeneralImage;