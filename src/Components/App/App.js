// External Dependencies
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';

// Internal Dependencies
import NavTabs from '../Navbar/Navbar';
import NavTabsForTable from '../Navbar/NavTabsForTable';

// Local Dependencies
import './App.css';

// MUI styles.
// Change here to some style methods you prefer.
const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  section: {
    height: '800px',
    borderBottom: '1px solid grey',
    '& h1':{
      position: 'relative',
      top: '20%',
    }
  },
}));


// Component Defination
const App = () => {
  const classes = useStyles();

  // Define two mediaquery here for laptop and table.
  // Change it to whatever you prefer.
  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 680px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  return (

    <div className={classes.root}>
        {isLaptop ? <NavTabs /> : (isTabletDevice ? <NavTabsForTable /> : null)}
        <div className={classes.section} id='heading'><h1>Heading</h1></div>
        <div className={classes.section} id='aboutme'><h1>About me</h1></div>
        <div className={classes.section} id='experience'><h1>Experience</h1></div>
        <div className={classes.section} id='projects'><h1>Projects</h1></div>
        <div className={classes.section} id='contact'><h1>Contact</h1></div>

    </div>
  );
}

export default App;
