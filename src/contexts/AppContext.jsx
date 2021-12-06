import { createContext, useState } from "react";
import axios from "axios";
export let AuthContext = createContext();
export default function AppContext({ children }) {
  let [arr, setArr] = useState([]);
  let showProduct = async () => {
    let data = await axios.get("http://localhost:3001/Products");

    setArr([...data.data]);
  };

  let [login, setLogin] = useState(false);
  return (
    <AuthContext.Provider
      value={{ login, setLogin, showProduct, arr, showProduct }}
    >
      {children}
    </AuthContext.Provider>
  );
}
