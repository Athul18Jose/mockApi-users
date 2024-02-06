import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import Dropdown from 'react-bootstrap/Dropdown';
import CArd from './Components/CArd';
import Loading from './Components/Loading';


function App() {
  const [users, setUsers] = useState([])
  const [sortBy, setSortBy] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try{
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      const sortedData = sortData(data, sortBy);
      setUsers(sortedData);
    }catch(err){
      console.log("Error in fetching Data: "+err);
    }finally{
      setLoading(false);
    }
    
  }

  const sortData = (data, sortBy) => {
    if (sortBy === 'name') {
      return [...data].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'company') {
      return [...data].sort((a, b) => a.company.name.localeCompare(b.company.name));
    } else {
      return data;
    }
  };

  const handleDropdownChange = (selectedOption) => {
    setSortBy(selectedOption);
    console.log(selectedOption);
  };

  useEffect(() => {
    fetchData()
  }, [sortBy])

  

  return (
    <>
      <Header />
      <div className="container">
        <h2 className='text-center text-dark fw-bold mt-2'>User Details</h2>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
           Sort by
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleDropdownChange('name')}>Name</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownChange('company')}>Company</Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
        {
          loading && 
          <Loading />
        }
      {
        !loading &&
        <div className='cards'>
        {
          users.map((user)=>(
            <CArd key={user.id} user={user}/>
          ))
        }
      </div>
      }
      </div>
    </>
  );
}

export default App;
