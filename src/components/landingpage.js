import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://www.img.in.th/images/2f3917fd33ea79bf4da086f598218051.png" 
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Frontend Web Developer</h1>
                            <hr/>
                            <p><b>Skills :</b>  HTML/CSS | JavaScript | Bootstrap | React | Git Version Control</p>
                            <div className="social-links">
                                {/* Github */}
                                <a href="https://github.com/akkewacheiei" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true"/>
                                </a>
                                {/* Facebook */}
                                <a href="https://www.facebook.com/akkewach" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square"  aria-hidden="true"/>
                                </a>
                                {/* Instragram */}
                                <a href="https://www.instagram.com/broy.naja" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram"  aria-hidden="true"/>
                                </a>
                
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;