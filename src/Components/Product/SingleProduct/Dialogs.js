import { Box, Stack, DialogTitle, DialogContent, DialogContentText, Typography, ButtonBase } from "@mui/material";
import Link from "next/link";

//Icons
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';

//Styles
import styles from "Styles/Product/Dialogs.styles";

const Dialogs = ({ product: product, handleClose }) => {
    return (
        <>
            <DialogTitle id="scroll-dialog-title">
                <Stack direction="row">
                    <Typography variant="h6" component="h6" sx={{ flex: 1 }}>
                        Product Details
                    </Typography>
                    <ButtonBase onClick={handleClose} sx={styles.CloseBtn}>
                        <CloseRoundedIcon />
                    </ButtonBase>
                </Stack>
            </DialogTitle>
            <DialogContent dividers={true}>
                <DialogContentText
                    id="scroll-dialog-description"
                    sx={{ color: "text.primary" }}
                >
                    <Box sx={styles.Content}>
                        <Box component="img" sx={styles.Image} src={product.image} alt="Blog" />
                        <Box sx={styles.TopContainer}>
                            <Stack direction={{ lsm: "row", xxs: "column" }}>
                                <Typography variant="body1" component="p" sx={styles.BlogInfo}>
                                    {product.userLink &&
                                        <Link href={product.userLink}>
                                            <a>
                                                <AccountCircleOutlinedIcon />
                                                {product.user}
                                            </a>
                                        </Link>
                                    }
                                    {!product.userLink &&
                                        <>
                                            <AccountCircleOutlinedIcon />
                                            {product.user}
                                        </>
                                    }
                                </Typography>
                                <Typography variant="body1" component="p" sx={styles.BlogInfo}>
                                    <DateRangeRoundedIcon />
                                    {product.time}
                                </Typography>
                                <Typography variant="body1" component="p" sx={styles.BlogInfo}>
                                    <LocalOfferOutlinedIcon />
                                    {product.category}
                                </Typography>
                            </Stack>
                            <Typography variant="h6" component="h6" sx={styles.BlogTitle}>
                                {product.title}
                            </Typography>
                        </Box>
                    </Box>
                    <Typography variant="body1" component="p" sx={{ mt: { smd: "5em", lsm: "7em", sm: "1em" } }}>
                        {product.description}
                    </Typography>
                </DialogContentText>
            </DialogContent>
        </>
    );
};
export default Dialogs;