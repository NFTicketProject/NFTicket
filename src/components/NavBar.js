import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        borderBlockColor: "black",
        borderRadius:"2px",
        paddingTop: "rem",
        backgroundColor: "#fbfbfb",
       
    },
    logo: {
        width: "15%", 
      
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
       
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#54bf98"
        },
        
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo} className={classes.logo}/> 
                <img src={logoMobile} className={classes.logoMobile}/> 
                <Typography variant="h6" className={classes.menuItem}>
                   Concepts
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Whitepaper
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Roadmap
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Partners
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact Us 
                </Typography>
                <CustomBtn txt="Launch App"/>
            </Toolbar>
    )
}

export default NavBar