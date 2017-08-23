import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Project extends Component{

    constructor(props){
        super(props)

        this.state = { repos: [] }
    }

    componentDidMount(){
        fetch('https://api.github.com/users/temilolu/repos?type=owner')
        .then(response => response.json())
        .then(repos => this.setState({ repos }))
    }
    render(){
        return(
            <ul>
                {this.state.repos.map(repo => (
                    <li key={repo.id}>
                     <div className="col-md-4">
                            <div className="project--box">
                                
                                <div className="project--box--title">
                                    <h3>{repo.name}</h3>
                                     <ul className="list-inline">
                                        <li><i className="fa fa-star" aria-hidden="true"></i>  {repo.stargazers_count}</li>
                                        <li><i className="fa fa-code-fork" aria-hidden="true"></i> {repo.forks}</li>
                                    </ul>
                                    <p>{repo.description}</p>
                                    <span>{repo.language}</span>
                            </div>
                        </div>
                    </div>
                </li>  
                ))}
              
             </ul>
            
        );
    }
}

// Project.propTypes = {
//    desc: React.PropTypes.string,
//    title: React.PropTypes.string
// }
export default Project;