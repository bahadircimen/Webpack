import React, {Component, Fragment} from 'react';
import Home from "../../components/Home";
import Home2 from "../../components/Home2";

class MainContainer extends Component {
    render() {
        return (
            <Fragment>
                <Home/>
                <Home2/>
            </Fragment>
        );
    }
}

export default MainContainer;