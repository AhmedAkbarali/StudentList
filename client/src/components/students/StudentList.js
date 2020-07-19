import React from 'react';

const StudentList = ({ filteredStudents }) => {
    const renderedList = filteredStudents.reverse()
        .map (student => {
            return (
                <div className="card blue-grey darken-1" key={student._id}>
                    <div className="card-content white-text">
                        <div>{student.firstName + " " + student.lastName}</div>
                    </div>
                </div>
            );
        });

    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default StudentList;