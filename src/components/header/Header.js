import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Typography from '@material-ui/core/Typography';
import MoreIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginLeft: 8,
    marginRight: 16,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  button: {
    margin: '4px',
  },
  rightIcon: {
    marginRight: '4px'
  },
  iconSmall: {
    fontSize: 20,
  },
});

class Header extends React.Component {
  state = {
    anchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    );

    return (
      <AppBar
        position="absolute"
        color="inherit"
        className={classNames(classes.appBar)}
      >
        <Toolbar>
          <Typography variant="title" color="inherit">
            Logo
          </Typography>
          <Grid
            container
            spacing={16}
            justify="center"
          >
            <Button color="inherit" className={classes.button}>
              <SaveIcon className={classNames(classes.rightIcon, classes.iconSmall)} />
              Calendar
            </Button>
            <Button color="inherit" className={classes.button}>
              <SaveIcon className={classNames(classes.rightIcon, classes.iconSmall)} />
              Notes
            </Button>
            <Button color="inherit" className={classes.button}>
              <SaveIcon className={classNames(classes.rightIcon, classes.iconSmall)} />
              Tasks
            </Button>
            <Button color="inherit" className={classes.button}>
              <SaveIcon className={classNames(classes.rightIcon, classes.iconSmall)} />
              Email
            </Button>
            <Button color="inherit" className={classes.button}>
              <SaveIcon className={classNames(classes.rightIcon, classes.iconSmall)} />
              Settings
            </Button>
          </Grid>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <Badge className={classes.margin} badgeContent={3} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-owns={isMenuOpen ? 'material-appbar' : null}
              aria-haspopup="true"
              onClick={this.handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton aria-haspopup="true" onClick={() => {}} color="inherit">
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
        {renderMenu}
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Header);
