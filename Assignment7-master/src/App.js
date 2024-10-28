import logo from './logo.svg';
import Users from './Users';
import './App.css';
import axios from 'axios';
import {useState,useEffect} from 'react';
// import './Users.css';
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      {data.map((user) => {
        return (
          <Users
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            phone={user.phone}
            website={user.website}
          />
        )
      })}
    </div>
  );
}

export default App;



