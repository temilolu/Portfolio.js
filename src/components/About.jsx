import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import ProfileCard from './ProfileCard';
import Footer from './Footer';

class About extends Component{
      
            constructor(props){
                  super(props);
                  // getinitialState
                  this.state = {
                        profile: {
                            name: "Temitayo Ogunlolu",
                            job: "Front-end Engineer",
                            image: "",
                            bio: "All things javascript, Building for accessibility and creating digital magic to elevate user experience to the next level."
                        },
                       projects:[]
                  };
            }

            render(){
                  return(
                        <main id="site-wrapper">
                              <section  className="banner-2">
                              <div className="container">
                                    <Nav /> 
                              </div>
                              </section>
                        
                              <div className="container">                
                                    <div className="content">  
                                          <div className="row">

                                         
                                        
                                          <div className= "col-md-8 col-md-offset-2">
                                                <h2>About me</h2>
                                                      <p>I am a frontend Engineer Based in Lagos, Nigeria. I have a wide range of front-end skills, and extensive experience of building pixel perfect websites and creating digital magic to elevate user experience to the next level. I really enjoy writing optimized code and am very good at building and maintaining applications that support the solutions delivered to both internal and external customers. I always look to add my own magical touch to any new code that I write.
                                                      
                                                      I currently work at BudgIT where I work on the User Interface team. In my free time, I try to improve on JS design patterns and best practices and also engage in code wars ( a fight for the real iron throne).
                                                      
                                                      My usual hobbies are Eating good food, taking long walks, and reading a ton of books.</p>
                                                      
                                                      <h3>Programming Skills</h3>
                                                      <p>
                                                            <ul>
                                                                  <li>Languages: JavaScript, HTML, CSS, DOM, SASS</li>
                                                                  <li>Frameworks: Jest</li>
                                                                  <li>Libraries: React, jQuery, Underscore</li>
                                                                  <li>Servers: Apache, Nginx, NodeJS</li>
                                                            </ul>
                                              </p>
                                          </div>

                                         
                                          </div>
                                    </div> 
                  
                              </div>

                        </main>
                  );
            }
}


export default About;