import { keyframes } from "@emotion/react"; // Import keyframes from emotion

// Define keyframes for animations
const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const slideInFromRight = keyframes`
    from { transform: translateX(50%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
`;


const styles = {
    Container: {
        paddingTop: {
            xxl: "25em",
            xl: "20em",
            lg: "15em",
            md: "10em",
            smd: "12em",
            lsm: "10em",
            msm: "9em",
            sm: "8em",
            xs: "7em",
            xxs: "6em"
        },
        paddingBottom: {
            xxl: "15em",
            xl: "12em",
            lg: "9em",
            md: "6em",
            smd: "3em",
            lsm: "5em",
            msm: "4em",
            sm: "4em",
            xs: "4em",
            xxs: "3.5em"
        },
        position: "relative",
        background: (theme) => theme.palette.primary.HeroGradient, // Ensure `theme` is passed properly
        animation: `${fadeIn} 1s ease-in-out`, // Fades in on load
        minHeight: "100vh", // Ensure full viewport height
        overflow: "hidden" // Prevent any overflow of content that could stretch the background
    },
    HeroImage: {
        position: "absolute",
        borderRadius: "5%",
        right: {
            lg: "10%",
            xxs: "5%"
        },
        bottom: "15%",
        top: {
            xxs: "12%"
        },
        width: {
            lg: "28%",
            md: "40%",
            smd: "35%",
            xxs: "30%"
        },
        animation: `${slideInFromRight} 1s ease-out` // Slides in from the right on load
    },
    Paticle: {
        position: "absolute",
        left: "0",
        bottom: "2%",
        width: {
            smd: "35%",
            xxs: "90%"
        },
        height: "80%"
    }
};

export default styles;
