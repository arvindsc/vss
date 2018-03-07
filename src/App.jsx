import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

const AppDisplay = ({test})=>
    <div>
        <h1>HFDFDFDFDFDFDFDFDF {test}</h1>
    </div>
;

const mapStateToProps= (state, ownProps)=>{
    return {
        ...state
    }
}
//export default AppDisplay;
export default connect(mapStateToProps)(AppDisplay);


