import React from 'react';
import Navbar from '../components/Navbar';

function Layout(props){
    const children = props.children;
    return(
        <React.Fragment>
            <Navbar />
            {children}
        </React.Fragment>
        
    )
}

export default Layout;