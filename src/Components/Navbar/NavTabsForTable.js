// External Dependencies
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CloseIcon from '@material-ui/icons/Close';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';

// Local Dependencies
import { MenuItems } from './MenuItems';


// MUI styles.
// Change here to some style methods you prefer.
const useStyles = makeStyles(() => ({
  root: {

  },
  appbar: {
    width: '20%',
    right: '0',
  },
  tabs: {
    width: '100%',
    height: '5%',
    backgroundColor: '#424242',
    listStyle: 'none',
    position: 'relative',
  },
  tab: {
    // width: '10%',
    position: 'relative',
    margin: '0 auto',
    padding: '10px 0',
    textAlign: 'center',
  },
  link: {
    position: 'relative',
    height: '5%',
    cursor: 'pointer',
    fontSize: '15px',
    '&:hover': {
      color: 'orange',
    },
  },
  btn: {
      position: 'fixed',
      color: 'black',
      zIndex: '100000',
      paddingLeft: '10px',
      right: '0',
      '&:hover': {
        color: 'orange',
      },
  }
}));

// Component Defination
const NavTabsForTable = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [active, setActive] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Control button open or close.
  const handleClick = () => {
    setActive(!active);
  }

  return (
    <div className={classes.root}>
        <AppBar position="fixed" className={classes.appbar}>
          {active ? 
              <>
              <CloseIcon className={classes.btn} onClick={handleClick} fontSize='large'/>
              <ul
              className={classes.tabs}
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
              >
              {MenuItems.map((item) => 
                <li key={item.id} className={classes.tab}>
                  <Link className={classes.link} to={item.element} spy={true} smooth={true}>{item.name}</Link>
                </li>)}
              </ul>
              </>
          : <DehazeIcon className={classes.btn} onClick={handleClick} fontSize='large'/>}

        </AppBar>


    </div>
  );
}

export default NavTabsForTable;
