import { Container, Box } from "@mui/material";

//Components
import HeroContent from "Components/Hero/HeroContent";

// Images
import HeroPng from "Assets/hero/hero.png";
import Particle from "Assets/hero/particle.png";

//Styles
import styles from "Styles/Hero/Hero.styles";

const Hero = () => {
    return (
        <Container maxWidth={false} disableGutters sx={styles.Container} as="section" id="home">
            <HeroContent />
            <Box component="img" src="https://play-lh.googleusercontent.com/t7xLiuE_iTZeVaxJHCjtL4ljcV-41jxQiXjKnGfwYI6ql0g8x9Y_7xVBZy5y5_30OQ=w480-h960-rw" alt="Hero Svg" sx={styles.HeroImage} />
            <Box component="img" src={Particle} alt="Hero Svg" sx={styles.Paticle} />
        </Container>
    );
};
export default Hero;