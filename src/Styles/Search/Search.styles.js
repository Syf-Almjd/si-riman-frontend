import { keyframes } from "@emotion/react"; // Import keyframes from emotion
import { Rotate90DegreesCcw, RotateLeft } from "@mui/icons-material";

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;


// styles.js
const styles = {
    container: {
        background: (theme) => theme.palette.primary.HeroGradient, // Ensure `theme` is passed properly
        animation: `${fadeIn} 1s ease-in-out`, // Fades in on load
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px',
      backgroundColor: '#f9f9f9',
      minHeight: '100vh',
      justifyContent: 'center',
    },
    Paticle: {
        position: "absolute",
        right: "0%",
        top: "2%",
      
        width: {
            smd: "35%",
            xxs: "90%"
        },
        height: "80%"
    },
    productCard: {
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '24px',
      textAlign: 'center',
      width: '100%',
      maxWidth: '400px',
      backgroundColor: 'white',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
    productCardHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
    button: {
      padding: '12px 24px',
      margin: '12px 0',
      cursor: 'pointer',
      backgroundColor: '#0070f3',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '16px',
      transition: 'background-color 0.3s, transform 0.3s',
    },
    buttonHover: {
      backgroundColor: '#005bb5',
      transform: 'scale(1.05)',
    },
    input: {
      padding: '12px',
      marginBottom: '24px',
      width: '320px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      fontSize: '16px',
      transition: 'border-color 0.3s, box-shadow 0.3s',
    },
    inputFocus: {
      borderColor: '#0070f3',
      boxShadow: '0 0 8px rgba(0, 112, 243, 0.3)',
    },
    // Add hover effects or focus states
  };
  
  export default styles;
  