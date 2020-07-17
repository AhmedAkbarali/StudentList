import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../../actions';

class StudentList extends Component {
    componentDidMount() {
        this.props.fetchStudents();
    }

    renderStudents() {
        console.log(this.props);
        return this.props.students.reverse()
            .filter(student => !(student.firstName.includes(this.props.search) || student.lastName.includes(this.props.search)))
            .map (student => {
            return (
                <div className="card blue-grey darken-1" key={student._id}>
                    <div className="card-content white-text">
                        <div>{student.firstName + " " + student.lastName}</div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>{this.renderStudents()}{console.log("rerender")}</div>
        );
    }
}
//state.students
function mapStateToProps({ students }) {
    return { students };
}

export default connect(mapStateToProps, { fetchStudents })(StudentList);