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

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<hr>  

