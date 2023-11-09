import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Catalogue
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <Inventory2Icon />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AutoAwesomeMotionIcon />
      </ListItemIcon>
      <ListItemText primary="Categories" />
    </ListItemButton>
  </React.Fragment>
);

export const userManagerListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Users Manager
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <GroupAddIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
  </React.Fragment>
);
