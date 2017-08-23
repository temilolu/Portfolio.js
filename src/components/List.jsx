import React, {Component} from 'react';
import { Link } from 'react-router-dom';



const List = ({collection, textKey, titleKey}) => (
     <div> 
        {collection.map(projects => 
            <Project
                key = {project.id}
                desc= {project[textKey]}
                title= {project[titleKey]}
            />
        )}
    </div>
);


List.propTypes = {
    collection: React.PropTypes.array,
    textKey: React.PropTypes.string,
    titleKey: React.PropTypes.string,
}
export default List;