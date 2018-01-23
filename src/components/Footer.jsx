import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => (
        <footer>
            <div className="container">
                <div className="row"> 
                <div className="col-md-6">
                    <h4>Made by</h4>
                    <h2>{props.name}</h2>

                    <p>I love open source and this is my way of contributing to the open source community in Africa. Lisence MIT </p>
                    <p>©2018 Temitayo.me</p>
                </div>

                <div className="col-md-6"> </div>
            </div>
            </div>        
    </footer>
);

Footer.propTypes = {
    name: React.PropTypes.string,
}
  
export default Footer;