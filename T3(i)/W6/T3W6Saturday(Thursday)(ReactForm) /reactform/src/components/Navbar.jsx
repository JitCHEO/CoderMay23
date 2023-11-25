import { NavLink } from "react-router-dom";

export default function Navbar(){
    return (
        <nav>
            <h3>Navbar</h3>
            <ul>
                <li>
                    <NavLink to='/' style={({isActive}) => isActive ? {color: "red"} : undefined}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' style={({isActive}) => isActive ? {color: "red"} : undefined}>About</NavLink>
                </li>
                <li>
                    <NavLink to='/about/contact' style={({isActive}) => isActive ? {color: "red"} : undefined}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/cards' style={({isActive}) => isActive ? {color: "red"} : undefined}>Business Cards</NavLink>
                </li>
                <li>
                    <NavLink to='/pokemon' style={({isActive}) => isActive ? {color: "red"} : undefined}>Pokemons</NavLink>
                </li>
            </ul>
        </nav>
    )
}