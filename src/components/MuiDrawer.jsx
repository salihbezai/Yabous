import React, { useState } from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

const MuiDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [subItems, setSubItems] = useState([]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const categories = [
    { name: "Woman's Fashion", sub: [] },
    { name: "Men's Fashion", sub: ["Shirts", "Shoes", "Accessories"] },
    { name: "Electronics", sub: ["Phones", "Laptops", "TVs"] },
    { name: "Home & Lifestyle", sub: [] },
  ];

  const handleOpenMenu = (event, subCategories) => {
    setAnchorEl(event.currentTarget);
    setSubItems(subCategories);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSubItems([]);
  };

  return (
    <div className="block sm:block md:hidden lg:hidden ">
      <Button onClick={toggleDrawer(true)}>
        <GiHamburgerMenu className="icon-style text-black" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <div className="relative my-1 ">
          <Box
            className=" 
         bg-white shadow-md z-10 p-4 rounded-md h-[100vh] w-[200px]"
          >
            <List>
              {categories.map((category, index) => (
                <ListItem
                  key={index}
                  button
                  className="hover:bg-gray-100 transition-all duration-200"
                  onMouseEnter={(e) =>
                    category.sub.length > 0
                      ? handleOpenMenu(e, category.sub)
                      : null
                  }
                >
                  <ListItemText primary={category.name} />
                  {category.sub.length > 0 && <ChevronRight />}
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Flyout Submenu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            {subItems.map((subItem, subIndex) => (
              <MenuItem key={subIndex} onClick={handleCloseMenu}>
                {subItem}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Drawer>
    </div>
  );
};

export default MuiDrawer;
