// Given Discount Type, Total Weight and Total Cost, Calculate Discounted Price.
// Discount Type is Dropdown Switch. S.no, Discount type name, Discount Percent
// Text box to add discount types.
// Text box to expect weight
//Text box to expect cost.
// H1 showing discount price.


import React, { useRef, useState } from "react";

function DiscountCalculator(){
    const [discounts, setDiscounts] = useState([])
    const [discountName, setDiscountName] = useState("")
    const [discountPercent, setDiscountPercent] = useState("")
    const [selectedDiscount, setSelectedDiscount] = useState("")
    // const [discountAmount, setDiscountAmount] = useState(0)
    // const [currentPercent, setCurrentPercent] = useState(0)
    const [weight, setWeight] = useState(0)
    // const [cost, setCost] = useState(0)
    const SNo = useRef(1)

    function handleDiscountTypeSubmit(){
        const newDiscount = {
            id: SNo.current,
            name: discountName,
            percent: discountPercent
        };

        setDiscounts(prev => [...prev, newDiscount])

        SNo.current += 1;
        
        setDiscountName("")
        setDiscountPercent("")
        return setDiscounts
    }

    // function calculateTotalDiscount(){
    //     discounts.map((e) => (
    //         if e.name === selectedDiscount( e.percent = currentPercent)
    //     ))
    //     discountAmount = ()
    // }


    return (
        <div>
            {/* Add Discount type and Discount percent. */}
            <label>Enter discount type: </label>
            <input 
                type="text"
                name="inputDiscountName"
                value={discountName}
                onChange={(e) => setDiscountName(e.target.value)}
            />
            <label>Enter discount Percent: </label>
            <input
                type="number"
                name="inputDiscountPercent"
                value={discountPercent}
                onChange={(e) => setDiscountPercent(e.target.value)}
            />
            <button
                type="submit"
                onClick={handleDiscountTypeSubmit}
            >Submit</button>
            <p>
                {discounts.map((c) => (
                    <li key={c.id}>
                        {c.id}) Discount Type:  <strong>{c.name}</strong> &nbsp;&nbsp;
                        Discount Percent: <strong>{c.percent} </strong>
                    </li>
                ))}
            </p>
            <hr></hr>
            <div>
                <select
                    type="select"
                    name="dropdownSelectedDiscount"
                    value={selectedDiscount}
                    onChange={(e) => setSelectedDiscount(e.target.value)}
                >
                    <option value="">--SELECT--</option>
                    {discounts.map((c) => (
                        <option key={c.SNo} name={c.name}>{c.name}</option>
                    ))}
                </select>
                <p>You selected: <strong>{selectedDiscount}</strong></p>
            </div>
            <div>
                <label>Enter total weight:</label>
                <input
                    type="number"
                    name="inputWeight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
                <p>You set weight: <strong>{weight}</strong></p>
            </div>
            {/* <div>
                <label>Enter total cost: </label>
                <input
                    type="number"
                    name="inputCost"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                />
                <p>Total cost: <strong>{cost}</strong></p>
            </div>
            <button onSelect={calculateTotalDiscount}>Calculate discount</button>
            <hr></hr> */}




        </div>
    )


}

export default DiscountCalculator