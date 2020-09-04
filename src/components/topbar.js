import React from 'react';
import classes from './topbar.module.css';

function topbar () {
    return (
        <div className={classes.wrapper}>
            <div className={classes.main}>
                <div style={{marginLeft: "20px"}}><h3>New Page</h3></div>
                <div style={{marginRight: "20px"}}><h3>Preview Page</h3></div>
           </div>
            <div className={classes.handler}>
                <div><h3>Change Image</h3></div>
                <div><h3>Size</h3><input style={{width:"40px"}} type="number" /></div>
                <div><input type="text" placeholder="Link URL" /></div>
            </div>
        </div>
    );
}

export default topbar;