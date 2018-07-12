import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selctedBook} from './../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
                return (
                    <li
                        key={book.title}
                        className="list-group-item"
                        onClick={() => this.props.selctedBook(book)}>
                        {book.title}
                    </li>
                );
            });
    }

    render() {
        return (
            <ul>{this.renderList()}</ul>
        );
    }
}

function mapStateToProps(state) {
    return {books: state.books};
}

//rendering Book List with a new state of selectedBook
function mapActionToProps(dispatch) {

    //inject selectedBook to all reducers by throu action
    return bindActionCreators({selctedBook: selctedBook}, dispatch);
}

export default connect(mapStateToProps, mapActionToProps)(BookList);