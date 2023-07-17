import React, { useEffect, useState } from 'react';
import './RandomUserList.css'; 

function ApiUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(response => response.json())
      .then(data => {
        setUsers(data.results);
      })
      .catch(error => {
        console.error('Error fetching random users:', error);
      });
  }, []);

  return (
    <div>
      <h1>Random Users:</h1>
      <div className="user-list">
        {users.map(user => (
          <div key={user.login.uuid} className="user-card">
            <img src={user.picture.thumbnail} alt="User Thumbnail" className="user-thumbnail" />
            <div className="user-info">
              <p><strong>Name:</strong> {`${user.name.first} ${user.name.last}`}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApiUserList;
