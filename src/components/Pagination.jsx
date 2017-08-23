import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Pagination extends Component{
      render(){
            return(
               <div className="pagination"> 
                        <div className="row">
                            <div className="col-md-4">
                                <div className="left">
                                    <button type="" className="button button--light button--large button--full">Previous</button>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="center">
                                    <p>1 of 20</p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="right">
                                    <button type="" className="button button--light button--large button--full ">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
            );
      }
}
export default Pagination;