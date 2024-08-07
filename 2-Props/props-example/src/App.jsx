import Employee from './Employees.jsx'

function App() {

  return (
    <>
      <Employee name="John Doe" age={30} isManager={false}/>
      <Employee name="Bob" age={25} isManager={true}/>
      <Employee name="Alice" age={22} isManager={false}/>
    </>
  )
}

export default App

// Johm doe is String and 30 is number