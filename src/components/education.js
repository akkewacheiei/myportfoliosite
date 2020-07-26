import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Education extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.degreeName}</h4>
                    <p><b>{this.props.schoolName}</b></p>
                    <p>{this.props.department}</p>
                    <p>GPA: {this.props.gpa}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Education;