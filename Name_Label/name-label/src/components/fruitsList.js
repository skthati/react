// import { useState, useEffect } from "react";

function FruitsList(){
    const fruits = ['apples', 'bananas', 'grapes', 'oranges']

    const mylst = fruits.map((fruit) => <h4> {fruit} </h4>)

    return mylst

    // const [selectedValue, setSelectedValue] = useState("")
    // const [weight, setWeight] = useState(0)
    // const [totalPrice, setTotalPrice] = useState(0)
    // const [discountedPrice, setDiscountedPrice] = useState(0)

    // useEffect(() => {
    //     calculateDiscount();
    // }, [selectedValue, weight, totalPrice]);

    // function calculateDiscount (e) {
    //     var tweight = parseFloat(weight)
    //     var tprice = parseFloat(totalPrice)
    //     var dprice = 0
    
    //     if (selectedValue === "standard") {
    //         dprice = ((tprice * 6) / 100) * tweight;
    //         return setDiscountedPrice(dprice);
    //     } else if (selectedValue === "seasonal") {
    //         dprice = ((tprice * 12) / 100) * tweight
    //         return setDiscountedPrice(dprice)
    //     } else if (selectedValue === "weight") {
    //         if (tweight >= 10) {
    //             dprice = ((tprice * 18) / 100) * tweight
    //             return setDiscountedPrice(dprice)
    //         } else {
    //             dprice = ((tprice * 12) / 100) * tweight
    //             return setDiscountedPrice(dprice)
    //         }
    //     }
    // }





//     return (
//         <div>
//         <label htmlFor="type">Select Type:</label>
//         <select id="type" name="type" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
//             <option value="standard">Standard</option>
//             <option value="seasonal">Seasonal</option>
//             <option value="weight">Weight</option>
//         </select>

//         <label htmlFor="weight">Weight (kg):</label>
//         <input type="number" id="weight" name="weight" step="0.01" value={weight} onChange={(e) => setWeight(e.target.value)}/>

//         <label htmlFor="totalPrice">Total Price ($):</label>
//         <input type="number" id="totalPrice" name="totalPrice" step="0.01"value={totalPrice} onChange={(e) => setTotalPrice(e.target.value)}/>

//         <div>Discounted price:<span id="discountedPrice">{discountedPrice}</span></div>
//         <p>Selected Value: <strong>{selectedValue}</strong></p>
//         </div>
//   );
}

export default FruitsList


// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// const PriceCalculator = () => {


// };

// document.body.innerHTML = "<div id='root'></div>";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<PriceCalculator />);