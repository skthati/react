import React from "react"
import { useState } from "react"

function FieldComponents () {
    const [textField, setTextField] = useState("")
    const [age, setAge] = useState()
    const [fruits, setFruits] = useState()
    const [country, setCountry] = useState()
    const [newCountry, setNewCountry] = useState()
    const [countriesLst, setCountriesLst] = useState([])
    const [gender, setGender] = useState("")
    const [agree, setAgree] = useState("")

    let nextCountry = 0

    const countries = ['India', 'New Zealand', 'Australia', 'Dubai']

    function handleButtonAddCountry() {
        setCountriesLst([...countriesLst, {id:nextCountry++, name:newCountry}])
        setNewCountry("")
        return setCountriesLst
    }

    return (
        <div>
            {/* Label, Textbox, and H1 tag */}
            <h1> Text Input</h1>
            <label>Enter your name: </label>
            <input
                type="text"
                name="name"
                value={textField}
                onChange={(e) => setTextField(e.target.value)}
            />
            <h3>{textField}</h3>

            <hr></hr>

            <h1> Number Input </h1>
            <label>Enter your age: </label>
            <input
                type="number"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <h3>Your age is: {age} </h3>

            <hr></hr>

            <h1>Dropdown Select</h1>
            <label>Select a Fruit: </label>
            <select 
                value={fruits}
                onChange={(e) => setFruits(e.target.value)}>
                    <option>--SELECT--</option>
                    <option>Apples</option>
                    <option>Bananas</option>
                    <option>Grapes</option>
            </select>
            <h3>You selected: {fruits}</h3>

            <hr></hr>
                
            <h1> Countries List</h1>
            <label>Select a Country:</label>
            <select
                name="selectCountry"
                value={country}
                onChange={(e) => setCountry(e.target.value)}>
                    <option value="">--SELECT--</option>
                    {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}

                </select>
            <h3>You selected: {country}</h3>

            <hr></hr>

            <h1>Add Country to Countries List</h1>
            <label>Add new country:</label>
            <input
                name="inputCountry"
                value={newCountry}
                onChange={(e) => setNewCountry(e.target.value)}
            ></input>
            <button 
                name="btnCountry"
                onClick={handleButtonAddCountry}
            >Add Country</button>

            {countriesLst.map((c) => (
                <li key={c.nextCountry} name={c.name}>{c.name}</li>
            ))}

            <hr></hr>

            <h1>Radio button</h1>
            <label>Select Gender</label>
            <input
                type="radio"
                name="gender"
                value="male"
                checked={gender==="male"}
                onChange={(e) => setGender(e.target.value)}
            />male
            <input
                type="radio"
                name="gender"
                value='female'
                checked={gender==="female"}
                onChange={(e) => setGender(e.target.value)}
            />female
            <p>{gender}</p>

            <hr></hr>

            <h1>Checkbox</h1>
            <label>Agree to terms</label>
            <input
                type="checkbox"
                name="agree"
                checked={agree}
                onChange={(e) => setAgree(e.target.value)}
            />I Agree to terms.
            <p>Agreed: { agree? 'Yes' : 'No'}</p>


            
        </div>
    )

}

export default FieldComponents