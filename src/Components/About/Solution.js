import { Box, Grid, Typography } from "@mui/material";

// Data is an array of objects, where each object contains information about a solution
// The information includes the icon to display, the title of the solution, and a short description
import Solutions from "Data/About/Solution.data";

// We import a stylesheet that defines the layout and visual styling for this component
import styles from "Styles/About/Solution.styles";

// This is a functional component, which is a type of React component that doesn't have its own state
const Solution = () => {
    // We loop through the Solutions array and create a Grid item for each solution
    return (
        <Box sx={{ mt: "4em" }}>
            <Grid container spacing={2}>
                {/* We loop through the Solutions array and create a Grid item for each solution */}
                {Solutions.map((solution, i) => (
                    <Grid item md={3} sm={6} xxs={12} key={i}>
                        <Box sx={{ textAlign: "center" }}>
                            {/* We display the icon for each solution */}
                            {/* The "component" prop is used to specify that the img tag should be rendered as an <img> element */}
                            {/* The "sx" prop is used to apply the styles defined in the "Image" object to the <img> element */}
                            <Box sx={styles.Image} component="img" src={solution.icon} />
                            {/* We display the title and description for each solution */}
                            {/* The "variant" prop is used to specify the HTML element that should be rendered for the title and description */}
                            {/* The "component" prop is used to specify that the title and description should be rendered as an <h6> and <p> element respectively */}
                            {/* The "sx" prop is used to apply the styles defined in the "Title" and "Description" objects to the <h6> and <p> elements respectively */}
                            <Typography variant="h6" component="h6" sx={styles.Title}>
                                {solution.title}
                            </Typography>
                            <Typography variant="body1" component="p" sx={styles.Description}>
                                {solution.description}
                            </Typography>
                        </Box>
                    </Grid>
                ))
                }
            </Grid>
        </Box>
    );
};
export default Solution;
