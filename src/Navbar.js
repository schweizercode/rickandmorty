import { useState, } from 'react'


const Navbar = () => {

    const [search, setSearch] = useState("")


    return (

        < nav className="Navbar" >
            <h1> Rick and Morty Cards</h1>
            <input
                onChange={(e) => {
                    setSearch(e.target.value)
                }}
                value={search}
                className="Button"
                type="text"
                placeholder="Search..."

            >

            </input>
        </nav >
    );
}

export default Navbar;
