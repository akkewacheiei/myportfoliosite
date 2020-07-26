import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardText } from 'react-mdl';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="project-item">
                    {/*Project1*/}
                    <Card shadow={5} style={{ width: '450px', margin: 'auto' }}>
                        <CardTitle style={{
                            color: 'black', height: '225px', background:
                                'url(https://www.img.in.th/images/2558ae3678ce3723ce6b8b0b20fbe3fd.png) center / cover'
                        }}
                        >
                        </CardTitle>
                        <CardText>
                            <b>To do list - Web Application</b>
                        </CardText>
                        <CardActions border>
                            <a href="https://akkewacheiei.github.io/todo-list" rel="noopener noreferrer" target="_blank">
                                <Button colored>Run</Button>
                            </a>
                            <a href="https://github.com/akkewacheiei/todo-list" rel="noopener noreferrer" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="project-item">
                    {/*Project1*/}
                    <Card shadow={0} style={{ width: '450px', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '225px', background: 'url(https://www.img.in.th/images/1ac3726a44708839f9722a0a6e14d587.png) center / cover' }}></CardTitle>
                        <CardText>
                            <b>Food Shop - Web Application</b>
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/akkewacheiei/food-shop" rel="noopener noreferrer" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                        </CardActions>
                    </Card>
                    {/*Project2*/}
                    <Card shadow={0} style={{ width: '450px', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '225px', background: 'url(https://www.img.in.th/images/bea6ff773ccc88e29f600a8481ec3a47.png) center / cover' }}></CardTitle>
                        <CardText>
                            <b>People List - Web Application</b>
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/akkewacheiei/people-list" rel="noopener noreferrer" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                        </CardActions>
                    </Card>
                    {/*Project3*/}
                    <Card shadow={0} style={{ width: '450px', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '225px', background: 'url(https://www.img.in.th/images/c214d94355224d30d353b204c275e809.png) center / cover' }}></CardTitle>
                        <CardText>
                            <b>Food Queue - Web Application</b>
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/akkewacheiei/food-queue" rel="noopener noreferrer" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                        </CardActions>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Project</Tab>
                    <Tab>Workshop</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Project;