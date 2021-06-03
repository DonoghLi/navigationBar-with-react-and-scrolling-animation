import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CloseIcon from '@material-ui/icons/Close';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import { MenuItems } from './MenuItems';

const useStyles = makeStyles(() => ({
  root: {
    opacity: '0.5',
  },
  tabs: {
    width: '100%',
    height: '5%',
    backgroundColor: '#424242',
    listStyle: 'none',
    position: 'relative',
  },
  tab: {
    width: '10%',
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
      position: 'absolute',
      color: 'black',
      zIndex: '10000',
  }
}));

const NavTabsForTable = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [active, setActive] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    console.log(active);
    setActive(!active);

  }

  return (
    <div className={classes.root}>
        

        <AppBar position="fixed">
        {active ? 
            <>
            <CloseIcon className={classes.btn} onClick={handleClick} fontSize='large'/>
            <ul
            className={classes.tabs}
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
            >
            {MenuItems.map((item) => <li key={item.id} className={classes.tab}><Link className={classes.link} to={item.element} spy={true} smooth={true}>{item.name}</Link></li>)}
            </ul>
            </>
        : <DehazeIcon className={classes.btn} onClick={handleClick} fontSize='large'/>}

        </AppBar>


    </div>
  );
}

export default NavTabsForTable;
