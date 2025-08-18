import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";
import { getAccountAPI } from "./services/api.service";
import { use, useEffect, useContext } from "react";
import { AuthContext } from "./components/context/auth.context.jsx";
function App() {
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo();
  }, []);
  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    await delay(3000); // Simulate network delay
    if (res && res.data) {
      setUser(res.data.user);
      // localStorage.setItem("user", JSON.stringify(user));
      console.log("User info fetched:", res.data.user);
    }
  };
  return (
    <>
      <Header></Header>
      <Outlet />

      <Footer />
    </>
  );
}

export default App;
