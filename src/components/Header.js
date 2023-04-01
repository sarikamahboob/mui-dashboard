import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "./../theme/index";

const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.grey[400]}>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
