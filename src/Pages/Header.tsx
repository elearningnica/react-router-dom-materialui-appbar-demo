import { AppBar, Box, List, ListItem, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

const Links = [
  { titlePage: "Client", path: "/" },
  { titlePage: "Product", path: "/product" },
  { titlePage: "Settings", path: "/settings" },
];

export const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <List sx={{ display: "flex" }}>
              {Links.map(({ titlePage, path }) => (
                <ListItem
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={{ color: "inherit" }}
                >
                  {titlePage}
                </ListItem>
              ))}
            </List>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
