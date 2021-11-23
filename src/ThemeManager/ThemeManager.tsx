import React, {useState} from 'react'


const defaultMode = 'light'

export const ManageThemeContext: React.Context<any> = React.createContext({
    mode: defaultMode,
    toggle: () => {}
})

interface IProps {
    useTheme: () => void
    children: any
}



const ThemeManager = ({children} : IProps) => {

    const useTheme = () => React.useContext(ManageThemeContext)

    const [themeState, setThemeState] = useState({
        mode: defaultMode
    })

    const toggle = (): void => {
        setThemeState({mode: (themeState.mode === 'light' ? 'dark' : 'light')})
    }


    return (
        <ManageThemeContext.Provider value={{
            mode: themeState.mode,
            toggle:toggle
        }} useTheme={useTheme}>
            {children}
        </ManageThemeContext.Provider>
    );
};

export default ThemeManager;

