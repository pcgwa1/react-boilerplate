import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { useTheme } from '../../theme/ThemeContext';
import { withTheme } from 'styled-components';
import { Button } from "../../components/Button";

function App (props) {

    const themeToggle = useTheme();

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <p>
                <Button onClick={() => themeToggle.toggle()}>
                    {props.theme.mode === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </Button>
            </p>
        </header>
    );
}

export default withTheme(App);
