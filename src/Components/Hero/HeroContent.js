import { Box, Typography, ButtonBase } from "@mui/material";
import { Link } from "react-scroll";

// Icons
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

//Styles
import styles from "Styles/Hero/HeroContent.styles";

const HeroContent = () => {
    return (
        <Box sx={styles.Container}>
            <Typography variant="h2" component="h2" sx={styles.Title}>
                I am <br />
                Richard Tag
            </Typography>
            <Typography variant="h6" component="h6" sx={styles.Slogan}>
                Your Beauty, My Job & Passion
            </Typography>
            <Typography variant="body1" component="p" sx={styles.Description}>
            Helping you glow with confidence. Let’s enhance your beauty, nourish your skin, and bring out the best in you.
            </Typography>
            <Link
                to="blog"
                spy={true}
                smooth={true}
                duration={500}
            >
                <ButtonBase sx={styles.Button}>
                    See Products
                    <ArrowForwardTwoToneIcon />
                </ButtonBase>
            </Link>
        </Box>
    );
};
export default HeroContent;