
const Navbar = () => {
    return (
        <nav className="Navbar">
            <h1> Rick and Morty Cards</h1>
            <input
                onChange={(e) => {
                    setSearch()
                }}
                className="Button"
                type="text"
                placeholder="Search..."

            >

            </input>
        </nav>
    );
}

export default Navbar;
