import './userpost.css'
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './userpost.css'

const UserPost = () =>{
  let [posts, setPost] = useState();
  useEffect(() =>{
    let data = async () =>{
      let linkurl = await axios.get('https://jsonplaceholder.typicode.com/posts')
     setPost(linkurl.data)

    }
    data()

  }, []);

  console.log(posts);
  return (
   <>
    {
      posts &&
      posts.map((item, index) =>(
       <div className="container">
        <div className="user_main">
          <div className="head_data">
            <h2>userId: {item.userId}</h2>
            <h3>Id: {item.id}</h3>
              <p>
              title: {item.title}
            </p>
            <span>body : {item.body}</span>
          
          </div>
        </div>
       </div>
      ))
    }

   </>
  )
}

export default UserPost