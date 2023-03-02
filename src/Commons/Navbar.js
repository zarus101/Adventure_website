import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PropTypes from "prop-types";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NavlistData from "../Data/Navlist";
import "../Assests/Navbar.scss";
import { useScrollTrigger } from "@mui/material";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img className="logo" src="./images/images.png" alt="logo" />
      </Typography>
      <Divider />
      <List>
        {NavlistData.list1.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        {NavlistData.list2.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <Box className="box" sx={{ display: "flex" }}>
          <AppBar className="appbar" component="nav">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {NavlistData.list1.map((item) => (
                  <Link to={item.path} spy={true} smooth={true} offset={50} duration={500}>
                    <Button key={item.id} sx={{ color: "#fff" }}>
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                {/* <img src="./images/images.png" alt="logo" /> */}
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {NavlistData.list2.map((item) => (
                  <Link to={item.path} spy={true} smooth={true} offset={50} duration={500}>
                  <Button key={item.id} sx={{ color: "#fff" }}>
                    {item.name}
                  </Button>
                </Link>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
      </ElevationScroll>
    </React.Fragment>
  );
}

export default Navbar;
