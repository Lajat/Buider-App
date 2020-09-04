import React from 'react';
import classes from './footer.module.css';
import { Link } from 'react-router-dom';

function Footer () {
    return (
        <div className={classes.main}>
            <Link to='/' style={{marginLeft: "20px"}}><button>Cancel</button></Link>
            <div style={{marginRight: "20px"}}><button>Save and Next</button></div>
        </div>
    );
}
export default Footer;