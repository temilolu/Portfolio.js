import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import ProfileCard from './ProfileCard';
import List from './List';
import Project from './Project';
import Pagination from './Pagination';
import About from './About';
import Footer from './Footer';

class Landing extends Component{

      constructor(props){
            super(props);
            // getinitialState
            this.state = {
                  profile: {
                      name: "Temitayo Ogunlolu",
                      job: "UX designer & Front-end Engineer",
                      image: "",
                      bio: "Building pixel perfect websites and creating digital magic to elevate user experience to the next level."
                  },
                 projects:[]
            };
      }

      // componentDidMount(){
      //       Project.fetch().then(projects => {
      //             this.setState({ projects })
      //       })
      // }

      render(){
            return(
                  <main id="site-wrapper">
                        <section className="banner">
                               <div className="container">
                                     <div className="row position--relative z-20">
                                          <Nav />
                                          <ProfileCard name={this.state.profile.name} job={this.state.profile.job} image={this.state.profile.image}/>
                                          <div className="col-md-8">
                                                <div className="bio">
                                                      <h3>{this.state.profile.bio}</h3>
                                                      <p><Link to="/about">Learn more about me <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link></p>
                                                </div>
                                          </div>
                                     </div>

                                     <div className="layout">
                                          <div className="layout__item top-pattern one-sixth style1" ></div>
                                          <div className="layout__item top-background five-sixths style2"></div>
                                    </div>
                              </div>
                         </section>

                        <div className="container">                
                              <div className="project"> 
                                    <h4>Some of my works</h4>
                                    <span>Open-source on UI Designs, Data science and Javascript engineering projects</span>
                                    <hr/>
                                    
                                    <div className="row">
                                          <Project/>
                                    </div>
                              
                              </div> 

                               <Pagination />
                        </div>

                          
                         <Footer name={this.state.profile.name}/>
                  </main>
            );
      }
}
export default Landing;