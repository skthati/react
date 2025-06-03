import chefImage from './chefImage.png'; // relative to chefApp.js

export default function Header() {
    return (
        <header>
            <img src={chefImage} alt='Chef logo'/>
            <h1>Chef App from Header</h1>
        </header>
    )
}