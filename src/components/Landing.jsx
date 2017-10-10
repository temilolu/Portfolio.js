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

            this.state = {};
      }

      componentDidMount(){
            fetch('https://api.github.com/users/temilolu')
            .then(response => response.json())
            .then(user => this.setState({ user:user }))
        }

      render(){

            // If the state doesn't have a user key, it means the AJAX didn't complete yet. Simply render a LOADING indicator.
            if (!this.state.user) {
                  return (<div className="user-page">LOADING...</div>);
            }

            // If we get to this part of `render`, then the user is loaded
            const user = this.state.user;

            return(
                  <main id="site-wrapper">
                        <section className="banner">
                               <div className="container">
                                     <div className="row position--relative z-20">
                                          <Nav />
                                          <ProfileCard name={user.name} job="Frontend engineer" image={user.avatar_url}/>
                                          <div className="col-md-8">
                                                <div className="bio">
                                                      <h3>{user.bio}</h3>
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
                        <h4>Some of my open-source works</h4>
                        <hr/>
                        
                        <div className="row">
                              <Project/>
                        </div>
                  
                  </div> 
                             
                        </div>

                          
                         <Footer name={user.name}/>
                  </main>
            );
      }
}
export default Landing;