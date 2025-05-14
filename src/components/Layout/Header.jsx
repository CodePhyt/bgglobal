import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const navigation = [
  { name: 'Home', path: '/' },
  {
    name: 'Solutions',
    path: '/solutions',
    submenu: [
      { name: 'Horti', path: '/solutions/horti' },
      { name: 'Climate', path: '/solutions/climate' },
      { name: 'Energy', path: '/solutions/energy' },
    ],
  },
  { name: 'Projects', path: '/projects' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsAnchorEl, setSolutionsAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSolutionsClick = (event) => {
    setSolutionsAnchorEl(event.currentTarget);
  };

  const handleSolutionsClose = () => {
    setSolutionsAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <List>
        {navigation.map((item) => (
          <Box key={item.name}>
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to={item.path}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
            {item.submenu && (
              <List>
                {item.submenu.map((subitem) => (
                  <ListItem key={subitem.name} disablePadding sx={{ pl: 4 }}>
                    <ListItemButton component={RouterLink} to={subitem.path}>
                      <ListItemText primary={subitem.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: 'flex',
              textDecoration: 'none',
              alignItems: 'center'
            }}
          >
            <Box
              component="img"
              src="/bgglobal-logo-y.png"
              alt="BG GLOBAL"
              sx={{
                height: { xs: 40, sm: 45, md: 50 },
                width: 'auto',
                display: 'block',
                objectFit: 'contain',
                filter: 'brightness(1)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  filter: 'brightness(0.9)',
                  transform: 'scale(1.05)'
                }
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navigation.map((item) => {
              if (item.submenu) {
                return (
                  <Box key={item.name}>
                    <Button
                      onClick={handleSolutionsClick}
                      endIcon={<KeyboardArrowDownIcon />}
                      sx={{ color: 'inherit' }}
                    >
                      {item.name}
                    </Button>
                    <Menu
                      anchorEl={solutionsAnchorEl}
                      open={Boolean(solutionsAnchorEl)}
                      onClose={handleSolutionsClose}
                    >
                      {item.submenu.map((subitem) => (
                        <MenuItem
                          key={subitem.name}
                          component={RouterLink}
                          to={subitem.path}
                          onClick={handleSolutionsClose}
                        >
                          {subitem.name}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                );
              }
              return (
                <Button
                  key={item.name}
                  component={RouterLink}
                  to={item.path}
                  sx={{ color: 'inherit' }}
                >
                  {item.name}
                </Button>
              );
            })}
          </Box>

          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="primary"
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            Let's talk
          </Button>
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;