// import { useState, useEffect } from 'react';
// import { products } from '../../Data/Search/search.data';
// import styles from '../../Styles/Search/Search.styles';
// import { Box, Grid, Stack, Typography, Dialog } from "@mui/material";
// import Particle from "Assets/hero/particle.png";
// import { ClendarIcon } from 'Utilis/Icons';
// import Dialogs from 'Components/Product/SingleProduct/Dialogs';

// const ProductsPage = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [open, setOpen] = useState(false);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true); // Loading state to handle initial render

//   // Use effect to compute filtered products when data or search parameters change
//   useEffect(() => {
//     const filterProducts = () => {
//       const filtered = products.filter((product) => {
//         const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
//         const matchesCategory = selectedCategory === 'All' || product.category.toLowerCase().includes(selectedCategory.toLowerCase());
//         return matchesSearch && matchesCategory;
//       });

//       setFilteredProducts(filtered);
//       setIsLoading(false); // Stop loading once filtering is done
//     };

//     // Start filtering after the initial render
//     filterProducts();
//   }, [searchQuery, selectedCategory]);

//   const handleClickOpen = (index) => () => {
//       setOpen(index);
//   };

//   const handleClose = () => {
//       setOpen(false);
//   };

//   const handleSearchChange = (event) => setSearchQuery(event.target.value);
//   const handleCategoryChange = (event) => setSelectedCategory(event.target.value);

//   return (
//     <div style={styles.container}>
//       <Box component="img" src={Particle} alt="Hero Svg" sx={styles.Paticle} />
//       <h1>Product List</h1>
      
//       {/* Search input */}
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={searchQuery}
//         onChange={handleSearchChange}
//         style={styles.input}
//       />

//       {/* Category filter */}
//       <select value={selectedCategory} onChange={handleCategoryChange} style={styles.input}>
//         <option value="All">All Categories</option>
//         <option value="Phones">Phones</option>
//         <option value="Headphones">Headphones</option>
//         <option value="Laptops">Laptops</option>
//         <option value="Watches">Watches</option>
//       </select>

//       {/* Show loading message until data is ready */}
//       {isLoading ? (
//         <p>Loading products...</p>
//       ) : (
//         <div style={styles.productList}>
//           {filteredProducts.length === 0 ? (
//             <p>No products found</p>
//           ) : (
//             filteredProducts.map((product, i) => (
//               <Box sx={{ mt: "4rem", mb: "5.5em" }} key={i}>
//                 <Grid container spacing={4}>
//                   <Grid item md={4} lsm={6} xxs={12}>
//                     <Box sx={styles.BoxContainer}>
//                       <Box component="img" src={product.image} alt={product.title} sx={styles.Image} />
//                       <Box sx={styles.Content}>
//                         <Typography variant="body1" component="p" sx={styles.Category}>
//                           {product.category}
//                         </Typography>
//                         <Typography variant="h6" component="h6" sx={styles.Title}>
//                           {product.title}
//                         </Typography>
//                         <Stack direction="row" sx={{ alignItems: "center" }}>
//                           <Box sx={styles.TimeIcon}>
//                             <ClendarIcon />
//                           </Box>
//                           <Typography variant="body1" component="p" sx={styles.TimeText}>
//                             {product.time}
//                           </Typography>
//                         </Stack>
//                         <Dialog
//                           open={open === i}
//                           onClose={handleClose}
//                           scroll="paper"
//                           maxWidth="md"
//                         >
//                           <Dialogs
//                             product={product}
//                             handleClose={handleClose}
//                           />
//                         </Dialog>
//                       </Box>
//                     </Box>
//                   </Grid>
//                 </Grid>
//               </Box>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductsPage;


// pages/products.js
import { useState } from 'react';
import { products } from '../../Data/Search/search.data';
import styles from '../../Styles/Search/Search.styles';
import SingleProduct from 'Components/Product/SingleProduct';
import Particle from "Assets/hero/particle.png";
import { Box, Grid, Stack, Typography, Dialog } from "@mui/material";
const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products based on the search query and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSearchChange = (event) => setSearchQuery(event.target.value);
  const handleCategoryChange = (event) => setSelectedCategory(event.target.value);

  return (
    <div style={styles.container}>
      <h1>Health & Beauty</h1>
       <Box component="img" src={Particle} alt="Hero Svg" sx={styles.Paticle} />
      
      {/* Search input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
        style={styles.input}
      />

      {/* Category filter */}
      <select value={selectedCategory} onChange={handleCategoryChange} style={styles.input}>
        <option value="All">All Categories</option>
        <option value="Phones">Phones</option>
        <option value="Headphones">Headphones</option>
        <option value="Laptops">Laptops</option>
        <option value="Watches">Watches</option>
      </select>

<SingleProduct/>
      {/* Products grid */}
      {/* <div style={styles.productList}>
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} style={styles.productCard}>
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))
        )}
      </div> */}
    </div>
  );
};

export default ProductsPage;
