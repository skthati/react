import React from 'react'
import Header from './header';
import './chef.css';

function ChefApp() {
    return (
        <>
            <Header />
            <h1>Chef App</h1>
            <form className='add-input'>
                <input
                    type='text'
                    placeholder='Add ingredients'
                ></input>
                <button>Add ingredient</button>
                
            </form>
        </>
    )
}

export default ChefApp