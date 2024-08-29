"use client";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CustomDialog } from "../CustomDialog";
import { FavoritesTable } from "./FavoritesTable";
import { Favorite } from "@mui/icons-material";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";

const Navbar = () => {

  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  }

  return (
    <>
      <CustomDialog>
        <FavoritesTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EHTT
          </Typography>

          <IconButton
            size="large"
            aria-label="favorites"

            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
          >
            <Favorite />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
