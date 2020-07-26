import React, { Component } from 'react';
import { Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component {
    render() {
        return(
            <Grid>
                <Cell col={12}>
                    <div style={{display: 'flex'}}>{this.props.skill} 
                        <ProgressBar style={{margin: 'auto 10% auto auto', width: '75%',padding:'0.5%'}} 
                        progress={this.props.progress} />
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;