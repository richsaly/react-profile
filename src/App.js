import Profile from './components/profile';
import './App.css';
import Loading from './components/loading';
import React, {useState, useEffect} from 'react';
import Heading from './components/heading';



const App = () => {

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    setTimeout(() => {
      const usersData = [
          {image:  '/images/xaxxy mockup.png', userName: 'Maduka Salavtion .C', userBio: 'sofware engineer', userDateOfBirth: '02 March 1992'},
          {image:  '/images/man1.png', userName: 'Chris Stylus .A', userBio: 'cloud engineer', userDateOfBirth: '07 May 1994'},
          {image:  '/images/nft 5.png', userName: 'Oxyle Limpour', userBio: 'web-3 architect', userDateOfBirth: '24 Nov. 1988'},
      ];
      setUsers(usersData);
      setLoading(false);
    }, 5000);
  },[]);




  return (
    <div className="App">
         {loading ? 
        <Loading />
       : (
        <>
          <Heading users={users} />
          <Profile users={users} />
        </>
      )} 
    </div>
  );
}

export default App;
