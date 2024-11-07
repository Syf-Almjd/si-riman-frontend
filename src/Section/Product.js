import { Box, Container, Typography } from "@mui/material";

//SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Component
import SingleProduct from "Components/Product/SingleProduct";
import Company from "Components/Product/Company";

const Product = () => {
    return (
        <Container maxWidth={false} disableGutters as="section" sx={{ py: "5em" }} id="blog">
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: "1em" }}>
            <SectionHeading
                value1="Health and Beauty"
                border={false}
            />
            <Typography sx={{ cursor: "pointer", color: "primary.main", "&:hover": { color: "primary.dark" } }}>
                See More
            </Typography>
          </Box>
            <SingleProduct />
            <Company />
        </Container>
    );
};

export default Product;