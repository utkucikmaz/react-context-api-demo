import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/theme.context";

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className={"Navbar " + theme}>
            <div>
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/projects"> Projects </NavLink>
            </div>

            <button className="theme-btn" onClick={toggleTheme}>
                {theme === "light" ? "Switch to dark" : "Switch to light"}
            </button>
        </nav>
    );
}

export default Navbar;
