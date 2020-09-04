import React from 'react';
import classes from './footer.module.css';

function Footer () {
    return (
        <div className={classes.main}>
            <div style={{marginLeft: "20px"}}><button>Cancel</button></div>
            <div style={{marginRight: "20px"}}><button>Save and Next</button></div>
        </div>
    );
}
export default Footer;