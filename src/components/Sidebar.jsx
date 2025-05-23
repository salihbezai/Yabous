import React, { useEffect, useState } from "react";
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
import MuiDrawer from "./MuiDrawer";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../features/category/categoryActions";
import LoadingSpinner from "./LoadingSpinner";

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subItems, setSubItems] = useState([]);

  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.category);

  const handleOpenMenu = (event, subCategories) => {
    setAnchorEl(event.currentTarget);
    setSubItems(subCategories);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSubItems([]);
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  if (loading) return <LoadingSpinner />;
  if (error) return <p>No Categories Found !</p>;
  return (
    <>
      <div className="relative my-1 hidden sm:hidden md:block lg:block ">
        {/* Sidebar inside hero */}
        <Box
          className=" 
         bg-white shadow-md z-10 p-4 rounded-md h-[400px] w-[200px] overflow-y-auto"
        >
          <List>
            {categories.map((category, index) => (
              <ListItem
                key={index}
                button
                className="hover:bg-gray-100 transition-all duration-200"
                // onMouseEnter={(e) =>
                //   // category.sub.length > 0
                //   //   ? handleOpenMenu(e, category.sub)
                //   //   : null
                // }
              >
                <ListItemText primary={category.name} />
                {/* {category.sub.length > 0 && <ChevronRight />} */}
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
    </>
  );
};

export default Sidebar;
