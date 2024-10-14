//if in this file, don't need to pass as props
// const studentData = {
//     firstName: 'Testy',
//     lastName: 'McTest',
//     age: 42,
//     course: 'Web Development',
//     city: 'Berlin',
//     picture: 'https://randomuser.me/api/portraits/men/1.jpg',
// };

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
            </div>
        </div>
    );
};

export default Student;
