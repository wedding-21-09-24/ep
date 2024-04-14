import {Box} from "@mui/joy";
import generalImage from "../images/general-image.jpeg";

function GeneralImage() {
    return (
        <Box height={500}
             sx={{
                 backgroundImage: `url(${generalImage})`,
                 backgroundRepeat: 'no-repeat',
                 backgroundSize: 'contain',
                 backgroundPosition: 'center center'
             }}>
        </Box>
    );
}

export default GeneralImage;