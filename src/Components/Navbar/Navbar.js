// External Dependencies
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';

// Local Dependencies
import { MenuItems } from './MenuItems';

// MUI styles.
// Change here to some style methods you prefer.
const useStyles = makeStyles(() => ({
  root: {
    opacity: '0.9',
  },
  tabs: {
    width: '100%',
    height: '5%',
    backgroundColor: '#424242',
    listStyle: 'none',
    display: 'flex', 
    position: 'relative',
  },
  tab: {
    width: '10%',
    position: 'relative',
    left: '25%',
    top: '5%',
    paddingBottom: '2%',
    textAlign: 'center',
  },
  link: {
    position: 'relative',
    top: '80%',
    height: '5%',
    cursor: 'pointer',
    fontSize: '20px',
    '&:hover': {
      color: 'orange',
    },
  },
}));

// Component Defination
const NavTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
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
      </AppBar>
    </div>
  );
}


export default NavTabs;