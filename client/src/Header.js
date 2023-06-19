import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "./UserContext";

export default function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('https://back-m7md.onrender.com/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  function logout() {
    fetch('https://back-m7md.onrender.com/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">BlogApp</Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <button onClick={logout}>Logout ({username})</button>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">LOGIN</Link>
            <Link to="/register">REGISTER</Link>
          </>
        )}
      </nav>
    </header>
  );
}