import React from 'react';

import styles from './Grid.module.css';
 
class Grid extends React.Component {
    render() {
        return (
            <div className={styles.grid}>
                {this.props.children}
            </div>
        );
    }
}
 
export default Grid;