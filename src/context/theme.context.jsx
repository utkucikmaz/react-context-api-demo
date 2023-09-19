import { createContext } from "react";

const ThemeContext = createContext();

function ThemeProviderWrapper(props) {
    return (
        <ThemeContext.Provider value="lentils">
            {props.children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProviderWrapper };
