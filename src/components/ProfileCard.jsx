import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = (props) => (
     <div className="col-md-4">
        <div className="profile">   
            <div className="profile--img"> 
                <img src={props.image} alt={props.name} />
            </div>
            
            <div className="profile--bio">
                <h2>{props.name}</h2>
                <h4>{props.job}</h4>
                <ul className="list-inline">
                    <li><a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href=""><i className="fa fa-github" aria-hidden="true"></i></a></li>
                    <li><a href=""><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                    <li><a href=""><i className="fa fa-medium" aria-hidden="true"></i></a></li>
                    <li><a href=""><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
 );

 ProfileCard.propTypes = {
     profile: React.PropTypes.shape({
         name: React.PropTypes.string.isRequired,
         job: React.PropTypes.string,
     })

 }
export default ProfileCard;