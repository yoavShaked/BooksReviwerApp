import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        if (!this.props.activeBook) {
            return (
                <div>
                    Select a Book.
                </div>
            );
        }

        return (
            <div>
                <h3>Book Deatail:</h3>
                <div>Book Title: {this.props.activeBook.title}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { activeBook: state.activeBook };
}

export default connect(mapStateToProps)(BookDetail);