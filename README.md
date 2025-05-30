<a name="readme-top"></a>


<div align="center">
<!-- Title: -->
<h1><a href="https://github.com/skthati/react.git">React</a> - Basics </h1>
</div>

<!-- Table of contents -->
<hr>
<hr>
<ol>
    <li><a href="#react-basics">React Basics</a></li>
    <li><a href="#counter">Counter</a><li>

</ol>
<hr>
<hr>

# React Basics <a name="react-basics"></a>
 All basic code syntax 

```React
//React
console.log("Hello World!")
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>
<hr>  

# Install React
- Create a folder and go into the folder. Use terminal and write below code.
    ```
    npx create-react-app name-label
    cd name-label
    npm start
    ```
- Your website is running on `http://localhost:3000`

## Create a component with simple H1 tag
- Create a folder `components` under `src`
- Create a new js file `my_name.js` and write below code
    ```React
    function MyName():
    return (
        <h1>Hello World!<h1>
    )

    export default MyName
    ```
- In `App.js` delete all template content and write below code
    ```React
    import MyName from './components/myName.js'

    function App(){
        return (
            <MyName />
        )
    }

    default export App
    ```

# Click Count
- Functions should have PascalCase.
- Create a new js file `clickCount.js` in components folder

    ```React
    import React from 'react`;
    import { useState } from 'react';

    function ClickCount() {
        const [countValue, setCountValue] = useState(0)

        function increaseCount(){
            return setCountValue(countValue+1)
        }

        return (
            <div>
                <h1>{ countValue } </h1>
                <button onClick={increaseCount}>+</button>
            </div>
        )
    }

    export default ClickCount
    ```

- In `App.js` register component `ClickCount`
    ```React
    import ClickCount from './components/clickCount.js'

    function App(){
        return (
            <div>
                <ClickCount />
            </div>
        )
    }
    ```

# Counter <a name="counter"></a>

"+" button to increase the counter
"-" button to decrease the counter

![Alt text](my_counter/public/counter.gif)

```React
import React, { useState } from 'react'

function MyCounter() {
    const [countValue, setCountValue] = useState(0)

    function increaseCount() {
        return setCountValue(countValue+1)
    }
    
    function decreaseCount() {
        return setCountValue(countValue-1)
    }

    return ( 
        <div>
            
            <h1>{ countValue }</h1>
            <button onClick={ increaseCount }>+</button>
            <button onClick={ decreaseCount }>-</button>
        </div>
    )
}

export default MyCounter
```

# NZ Public Holidays
- Get holidays list of NZ for the year 2025
- Create a new js file `NZHolidaysList.js` in components folder
    ```React
    import React from 'react'
    import { useState } from 'react'
    import { useEffect } from 'react'
    import axios from 'axios //install axios npm install axios in terminal.

    function NZHolidayList(){
        const [holidays, setHolidays] = useState([])

        useEffect(() => {
            axios.get('https://date.nager.at/api/v3/publicholidays/2025/NZ')
            .then(response => setHolidays(response.data))
            .catch(err => console.error('Unable to fetch holidays', err));
        }, []);

        return (
            <div>
                <h1>NZ Holidays </h1>
                {holidays.map(holiday =>(
                    <li key="holiday.date">
                        {holiday.date} - {holiday.name}
                    </li>
                ))}
            </div>
        )
    }

    export default NZHolidaysList
    ```

- 
    ```React
    useEffect(() => {
        axios.get()
        .then(res => res.data)
        .catch(err => console.log("error"))
    }, [])
    ```

## Bootstrap

- Install Bootstrap

    `npm install bootstarp`

- Add imports to `index.js` in src folder

    `import 'bootstrap/dist/css/bootstrap.min.css';`

## Navigation.

- add imports to `App.js`

    `import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'`

- Below code to `App.js`

    ```React
        <div className='App'>
        <Router>
            <nav>
            <Link className="nav-link" to="/">Home</Link>
            <Link to="/click-count">Click Count</Link>
            <Link to="/nz-holiday-list">NZ Holidays List</Link>
            <Link to="/fruit-list">Fruits List</Link>
            <Link to="/country-list">Countries List</Link>
            </nav>

            <Routes>
            <Route path='/' element={<MyName />} />
            <Route path='/click-count' element= {<ClickCount />} />
            <Route path='/nz-holiday-list' element= {<NZHolidaysList />} />
            <Route path='/fruit-list' element= {<FruitsList />} />
            <Route path='/country-list' element= {<CountriesList />} />
            </Routes>
        </Router>
        </div>
    ```

- navBar as a separate component and can be added to `App.js` as `<NavBar />`. Check `navBar.js` file in `components` folder.



# Naming Convention

![alt text](Name_Label/name-label/public/namesConvention.png)


<p align="right">(<a href="#readme-top">back to top</a>)</p>
<hr>  

