import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import MainWrapper from './components/wrapper/mainWrapper';
import Accordions from './components/accordions/Accordions';

import './App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
});

class App extends React.Component {
  state = {
    open: false,
  };

  handleToggleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <Sidebar
          open={this.state.open}
          handleToggleDrawer={this.handleToggleDrawer}
        />
        <MainWrapper>
          <Accordions />
        </MainWrapper>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
