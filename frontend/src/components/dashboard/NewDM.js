import {useState, useEffect} from 'react';

import axios from '../../api/axios';

const NEWCONVO_URL = "/users/new-convo"

const NewDM = ({search, setSearch}) => {
  
  const [users, setUsers] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try{
        if (search.length >= 3) {
          const response = await axios.get();
          if (!response.ok) throw Error("Did not receive expected data");
          const users = await response.json();
          setUsers(users);
          ///setFetchError(null);
        }
      } catch(err) {
        //setFetchError(err.message);
      } finally {
        //setIsLoading(false)
      }
    }
    fetchItems();
    
  }, [users])
  
  return (
    <section>

    </section>
  )
}

export default NewDM