import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../actions';
import StudentList from "./students/StudentList";
import '../App.css';
import SearchBar from "./SearchBar";

class App extends Component {
    state = {
        search: '',
        filteredStudents: []
    };

    async componentDidMount() {
        await this.props.fetchStudents();
        const response = this.props.students;
        this.setState({filteredStudents: response});
    }

    onTermSubmit = async term => {
        const filterolisto = await this.props.students.filter(function(student){
            return student.firstName.toLowerCase().includes(term.toLowerCase()) ||
                    student.lastName.toLowerCase().includes(term.toLowerCase()
            )
        });

        this.setState({
            search: term,
            filteredStudents: filterolisto
        });
    };

    render() {
        return (
            <div className="App">
                <h3>Search</h3>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div style={{marginTop: '150px'}}>
                    <StudentList filteredStudents={this.state.filteredStudents}  />
                </div>

            </div>
        );
    }

}

function mapStateToProps({ students }) {
    return { students };
}

export default connect(mapStateToProps, { fetchStudents })(App);
