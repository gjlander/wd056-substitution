import Grade from './Grade';

const Student = ({ studentData }) => {
    return (
        <div className='card'>
            <img
                className='card-image'
                src={studentData.picture}
                alt={studentData.firstName + ' ' + studentData.lastName}
            />
            <div className='card-body'>
                <h2>
                    {studentData.firstName} {studentData.lastName}
                </h2>
                <p>Age: {studentData.age}</p>
                <p>City: {studentData.city}</p>
                <p>Course: {studentData.course} </p>
                <Grade gpa={studentData.gpa} />
                <p>
                    Enrollment status:{' '}
                    {studentData.graduate ? 'Alumni' : 'Student'}
                </p>
            </div>
        </div>
    );
};

export default Student;
