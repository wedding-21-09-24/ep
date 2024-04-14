import {Box, Divider, Stack, Typography} from "@mui/joy";

function headerText(text) {
    return (
        <Box>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: '4em'
                }}>
                {text}
            </Typography>
        </Box>
    );
}

function Header() {
    return (
        <Stack spacing={1}
               justifyContent="center"
               direction="row"
               alignItems="center"
               sx={{
                   m: '1em'
               }}>
            {headerText('Е')}
            <Divider orientation="vertical"
                     sx={{
                         backgroundColor: 'black',
                         width: '0.09em'
                     }}/>
            {headerText('П')}
        </Stack>
    );
}

export default Header;