import { Typography } from "@mui/material";
import React from "react";

/**
 * @description Returns a typography component with an error state, center-aligned,
 * and a large font size of "h2" variant.
 * 
 * @returns { Component } a heading element with an error message centered on the page.
 */
const Header = () => {
  return (
    <Typography color="error" variant="h2" component="h1" align="center">
      Todo App with Typescript
    </Typography>
  );
};

export default Header;
