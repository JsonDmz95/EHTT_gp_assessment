"use client";
import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Navbar = () => {
	return (
		<AppBar position="fixed">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EHTT
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
	);
};

export default Navbar;
