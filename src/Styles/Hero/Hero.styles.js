import { RoundedCorner } from "@mui/icons-material";

const styles = {
    Container: {
        pt: {
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
        pb: {
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
        background: theme => theme.palette.primary.HeroGradient
    },
    HeroImage: {
        position: "absolute",
        borderRadius: "5%",
        right: {
            lg: "10%",
            xxs: "0%"
        },
        bottom: "15%",
        width: {
            lg: "38%",
            md: "50%",
            smd: "45%",
            xxs: "0%"
        },
        display: {
            smd: "unset",
            xxs: "none"
        }
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