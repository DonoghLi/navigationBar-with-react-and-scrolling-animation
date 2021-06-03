import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';
import NavTabs from '../Navbar/Navbar';
import NavTabsForTable from '../Navbar/NavTabsForTable';
import './App.css';

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: "0",
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

function App() {
  const classes = useStyles();

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
