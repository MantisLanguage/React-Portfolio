import React from 'react';
import {Navigation, Drawer, Header, Layout, Content} from 'react-mdl';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
    render(){
        return(
<div>
    <Layout fixedHeader>
        <Header className="headerColor" title={<span><strong><Link to="/">Connor Dougherty</Link></strong></span>}>
            <Navigation>
                <Link to="/professional">Group Projects</Link>
                <Link to="/private">Private Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<span><strong><Link to="/">Connor Dougherty</Link></strong></span>}>
            <Navigation>
            <Link to="/professional">Group Projects</Link>
                <Link to="/private">Private Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        <Content />
        </Drawer>
    </Layout>
</div>
        )}};

export default Navbar;