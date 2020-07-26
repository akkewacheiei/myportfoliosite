import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ paddingTop: '1em', textAlign: 'center' }}>
                            <img
                                src="https://www.img.in.th/images/935112484c7cc91bcaaefca8a44bce7d.png"
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>
                        <h3 style={{ paddingTop: '1em' }}>Akkewach Yodsomboon</h3>
                        <h5 style={{ color: 'grey' }}>Frontend Web Developer</h5>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p><b>Age:</b> 22 yrs.</p>
                        <p><b>Date of Birth:</b> May 7,1998</p>
                        <p><b>Height:</b> 171 cms.</p>
                        <p><b>Weight:</b> 55 kg.</p>
                        <p><b>Gender:</b> Male</p>
                        <p><b>Nationality:</b> Thai</p>
                        <p><b>Language:</b> Thai (Native), English (Basic)</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>46/151 Village No.1 Khlong-Hok Sub-district, Khlong-Luang District, Pathum Thani, 12120</p>
                        <h5>Phone</h5>
                        <p>084-004-5946</p>
                        <h5>Email</h5>
                        <p>akkewach.yodsomboon@gmail.com</p>
                        <h5>GitHub</h5>
                        <a href="https://github.com/akkewacheiei" rel="noopener noreferrer" target="_blank"><p>https://github.com/akkewacheiei</p></a>
                        <h5>Website</h5>
                        <a href="https://akkewacheiei.github.io/myportfoliosite" rel="noopener noreferrer" target="_blank"><p>https://akkewacheiei.github.io/myportfoliosite</p></a>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education
                            startYear={2014}
                            endYear={2016}
                            degreeName="Vocational Certificate"
                            schoolName="Thanyaburi Technical College"
                            department="Department of Electronics"
                            gpa="3.59"
                        />
                        <Education
                            startYear={2016}
                            endYear={2020}
                            degreeName="Bachelor Degrees"
                            schoolName="Rajamangala University of Technology Thanyaburi"
                            department="Computer Engineering Department, Faculty of Engineering"
                            gpa={2.83}
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>
                        <Experience
                            startYear={2019}
                            jobName="Internship - Programmer"
                            companyName="Asia Forge And Autopart Co., Ltd." 
                            jobDescription=" Develop software for device management within the company."
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Skills</h2>
                        <Skills
                            skill="HTML/CSS"
                            progress={55}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={65}
                        />
                        <Skills
                            skill="BootStrap"
                            progress={55}
                        />
                        <Skills
                            skill="React.js"
                            progress={55}
                        />
                        <Skills
                            skill="Git"
                            progress={40}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;