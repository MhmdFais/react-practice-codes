
function Employee(props){
    return(
        <div className="employeeCard">
            <p>Employee Name = {props.name}</p>
            <p>Employee Age = {props.age}</p>
            <p>Employee is Manager = {props.isManager ? 'Yes' : 'No'}</p>
        </div>
    )
}

export default Employee;