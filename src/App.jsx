import LoginButton from "./components/LoginButton";
import Profile from "./components/Profile";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <div className="content">
        <h1>React Auth0</h1>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        <Profile />
      </div>
      <div className="bottom">
        <a href="https://github.com/elmarcz" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default App;
