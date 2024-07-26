import React, { useState } from "react";
import "animate.css";
import "../styles.css";
import { Box, IconButton, Typography } from "@mui/material";
import { FaGift } from "react-icons/fa6";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <Box
      className="App"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      {!isClicked ? (
        <IconButton
          variant="contained"
          color="lotus"
          className="animate__animated animate__bounce  animate__repeat-1"
          onClick={handleClick}
          size="large"
          sx={{ mt: 40 }}
        >
          <FaGift size={100} />
        </IconButton>
      ) : (
        <Typography class="photos-title animate__animated animate__fadeInDown animate__slow">
          生日快樂
        </Typography>
      )}
    </Box>
  );
};

export default Home;
