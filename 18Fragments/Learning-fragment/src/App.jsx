// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  let foodItems = [
    "Fruits",
    "Vagetables",
    "Home made foods",
    "Dry fruits",
    "dairy products",
  ];
  return (
    // <React.Fragment>
    <>
      <div>Healthy Foods</div>
      <ul class="list-group">
        {foodItems.map((items) => (
          <li class="list-group-item">{items}</li>
        ))}
        {/* <li class="list-group-item">Fruits</li> */}
        {/* <li class="list-group-item">Vagetables</li>
        <li class="list-group-item">Home made foods</li>
        <li class="list-group-item">Dry fruits</li> */} 
        {/* <li class="list-group-item">dairy products</li> */}
      </ul>
    </>
    /* </React.Fragment> */
  );
}

export default App;
