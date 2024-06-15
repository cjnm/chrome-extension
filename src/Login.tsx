import { useEffect, useState } from "react";
import { checkAuthStatus } from "./utils/auth";
import App from "./App";

export default function Login() {
  const [token, setToken] = useState('');
  const [url, setUrl] = useState('');
  const [jwt, setJwt] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);
  const [validToken, setValidToken] = useState(true);

  const [loading, setLoading] = useState(true);
  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    checkAuthStatus({jwt: false, url: false}).then(response => {
      if(response) {
        setLoading(false);
        setLoggedin(true);
      } else {
        setLoading(false);
        setLoggedin(false);
      }
    })
  }, [])

  const isTokenValid = (data: string) => {
    try {
      let token = atob(data);
      let decoded_token = JSON.parse(token);
      if (decoded_token['url'] && decoded_token['jwt']) {
        setUrl(decoded_token['url']);
        setJwt(decoded_token['jwt']);
        return true;
      }
    } catch (e) {
      return false;
    }

    return false;
  }

  const handleChange = (event: any) => {
    setToken(event.target.value);

    if (isTokenValid(event.target.value)) {
      setValidToken(true);
    } else {
      setValidToken(false);
      return;
    }
  };

  const login = () => {
    if (!token) {
      setValidToken(false);
      return;
    }

    if (validToken) {
      if (jwt && url) {
        checkAuthStatus({ jwt, url }).then((response) => {
          if (response) {
            if (typeof window !== "undefined") {
              localStorage.setItem('main-chrome-extension-user', JSON.stringify({ jwt, url }));
              setLoading(false);
              setLoggedin(true)
            }
          } else {
            setLoginFailed(true);
            setLoading(false);
            setLoggedin(false)
            setJwt('');
            setUrl('');
            setToken('');
          }
        })
      }
    }
  }

  if (loading) {
    return (
      <>
        <h2>Daraz Web Scraping</h2>
        <div className="card">
          Loading...
        </div>
      </>
    )
  } else if (!loading && loggedin) {
    return <App />
  } else if (!loading && !loggedin) {
    return (
      <>
        <h2>Daraz Web Scraping</h2>
        <p>Please paste the token you got from the app dashboard below.</p>
        <div className="card">
          <input
            type="text"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            value={token}
          />
          {!validToken ? <p style={{ color: 'rgb(190 18 60)' }}>Token Invalid.</p> : <p></p>}
          {loginFailed ? <p style={{ color: 'rgb(190 18 60)' }}>Login Failed</p> : <p></p>}
          <button onClick={login}>
            Login
          </button>
        </div>
      </>
    )
  }
}