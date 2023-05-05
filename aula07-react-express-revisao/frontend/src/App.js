import { useState, useEffect } from 'react';

function App() {
  let [users, set_users] = useState([]),
      [name, set_name] = useState(''),
      [token, set_token] = useState(
        localStorage.getItem('token'));

  const login = async () => {
    let resp = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ name })
        }),
        { token } = await resp.json();
    set_token(token);
    localStorage.setItem('token', token);
  };

  useEffect(() => {
    (async () => {
      let resp = await fetch('http://localhost:3000/users', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }),
          users = await resp.json();
      set_users(users);

    })();
  }, [token]);

  return (
  <div>
    <input type="text" value={name}
           onChange={(ev) => set_name(ev.target.value)} />
    <button onClick={login}>logar</button>
    <ul>
      {users.map((user) =>
        <li key={user._id}>{user.name}</li>)}
    </ul>
  </div>
  );
}

export default App;
