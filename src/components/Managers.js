import {Box, Card, CardContent, CardCover, Link, Typography} from "@mui/joy";
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import * as React from "react";

function Managers() {
    const managers = [{
        "name": "Агентство Донцов-Фэмели",
        "phone": "+7(993)700-39-75"
    },
        {
        "name": "Наталья (координатор)",
        "phone": "+7(977)731-16-84"
    }]
    return (
        <Box sx={{
            ml: '32px',
            mr: '32px',
            mt: '40px'
        }}>
            <Typography variant="headerText">
                Наши организаторы
            </Typography>
            <Typography variant="regularText">
                Если вы заблудились, опаздываете или же у вас есть креативная идея для поздравления — смело пишите этим
                прекрасным ребятам!
            </Typography>
            {managers.map((manager) => (
                <>
                    <Typography variant="regularText" sx={{
                        fontSize: '17px',
                        fontWeight: '700',
                        lineHeight: '19.62px',
                        mb: '8px'
                    }}>
                        {manager.name}
                    </Typography>
                    <Typography variant="regularText">
                        <Link
                            color="neutral"
                            underline="always"
                            href={"tel:" + manager.phone}
                              startDecorator={<SmartphoneOutlinedIcon/>}
                        >
                            {manager.phone}
                        </Link>
                    </Typography>
                </>
            ))}
        </Box>
    );
}

export default Managers;