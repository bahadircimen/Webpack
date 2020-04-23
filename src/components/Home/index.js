import React, {Component} from 'react';
import styles from "./styles.scss";

class Home extends Component {
    render() {
        return (
            <div className={styles.home}>
                <h1>Welcome Webpack</h1>
            </div>
        );
    }
}

export default Home;