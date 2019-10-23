import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';  
import Headshot from '../images/2018-07-12.gif'

class Home extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="homeGrid">
                    <Cell col={12}>
                    <h1>Home</h1>
                    <img 
                    src={Headshot}
                    alt="facePhoto"
                    className='headshot'/>
                    <div className='homeBanner'>
                        <h1>Full Stack Web Developer</h1>
                        <hr/>
                        <p>HTML | CSS | Javascript | jQuery | JSON | React | NodeJS | ExpressJS | MongoDB | SQL | Firebase | AJAX | Heroku | and growing!</p>
                      <div className='links'>
                        <a href="https://www.linkedin.com/in/connor-dougherty-7a8880b8/" taget="_blank">
                            <i className="fa fa-linkedin"/>
                        </a>
                        <a href="https://github.com/MantisLanguage" taget="_blank">
                            <i className="fa fa-github"></i>
                        </a>
                    </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

}

export default Home;
