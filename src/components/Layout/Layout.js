import React from 'react';
import Aux from '../../hoc/Auxilary';
import classes from './Layout.css';

const Layout = (props) => (
    <Aux>
        <div>Toolbar, Sidedrawm Backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
)

export default Layout;