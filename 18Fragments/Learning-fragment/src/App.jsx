// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  let foodItems = [];
  // let foodItems = [
  //   "Fruits",
  //   "Vagetables",
  //   "Home made foods",
  //   "Dry fruits",
  //   "dairy products",
  // ];
  // let emptyFoodItems = foodItems.length===0 ? <h3>(I am still Hangry)</h3>:null;
  return (
    // <React.Fragment>
    <>
      <div>Healthy Foods</div>
     { foodItems.length===0 && <h3>(I am still Hangry)</h3>}  
      {/* {emptyFoodItems} */}
      <ul class="list-group">
        {foodItems.map((items) => (
          <li class="list-group-item">{items}</li>
        ))}
      </ul>
    </>
    /* </React.Fragment> */
  );
}

export default App;
