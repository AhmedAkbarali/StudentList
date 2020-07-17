import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StudentList from "./students/StudentList";
import '../App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.search});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    componentDidMount() {
        this.props.fetchStudents();
    }

    render() {
        return (
            <div className="App">
                <h3>Search</h3>
                <input onChange={this.handleChange} placeholder="Search"></input>
                <button onSubmit={this.handleSubmit}>Submit</button>
                <div style={{marginTop: '150px'}}>
                    <StudentList />
                </div>

            </div>
        );
    }

}

function mapStateToProps(state) {
    return { search: state.search };
}

export default connect(mapStateToProps, actions)(App);
