import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <>
      <div className="head">
        <h1>10 users data here</h1>
      </div>
      
      <div className="container">
        <div className="cardswrap">
          {
            users.map((usr) => <Cards 
            key = {usr.id}
            name = {usr.name}
            username = {usr.username}
            email = {usr.email}
            street = {usr.address.street}
            suite = {usr.address.suite}
            city = {usr.address.city}
            zipcode = {usr.address.zipcode}
            phone = {usr.phone}
            web = {usr.website}
            company = {usr.company.name}

            ></Cards>)
          }

      </div>
      </div>
    </>
  );
}

// card component
function Cards(props){
  const {name, username, email, street,suite, city, zipcode, phone, web, company} = props;
  return(
      <div className="card">
        <h2>Name: {name} </h2>
        <p>Username: <small>{username}</small> </p>
        <p>Email: <small>{email}</small></p>
        <p>Address: <small>{street}</small></p>
        <p>Suite: <small>{suite}</small> </p>
        <p>City: <small>{city}</small></p>
        <p>ZipCode: <small>{zipcode}</small></p>
        <p>Phone: <small>{phone}</small></p>
        <p>Web: <small>{web}</small></p>
        <p>Company: <small>{company}</small></p>
      </div>
  )
}


export default App;
