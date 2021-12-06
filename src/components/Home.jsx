import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AppContext";
function Home() {
  let [count, setCount] = useState(1);
  let { showProduct, arr } = useContext(AuthContext);

  useEffect(() => {
    showProduct();
  }, []);
  console.log("arr:", arr);
  return (
    <>
      <div>
        <Link to="/cart">view cart</Link>
      </div>
      <hr />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {arr.map((el) => {
          return (
            <div key={el.id} style={{ display: "flex" }}>
              <div>
                <img
                  style={{ height: "80px", marginTop: "50px" }}
                  src={el.image_url}
                />
              </div>
              <div>
                <p>{el.product_name}</p>
                <p>{el.description}</p>
                <h1>Rs. {el.price}</h1>
              </div>
              <div>
                <p>
                  <button>+</button>
                  <span></span>
                  {count}
                  <span></span>
                  <button>-</button>
                </p>
                <button
                  style={{
                    height: "30px",
                    background: "skyblue",
                    color: "white",
                    border: "none",
                    width: "100px",
                    borderRadius: "5px",
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Home;
