import { Button } from 'antd';
import React from 'react';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { ToggleThemeButtonProps } from '../interfaces/interfaces';

export default function ToggleThemeButton({ darkTheme, toggleTheme }: ToggleThemeButtonProps) {
    return (
        <div className="toggle-theme-button">
            <Button onClick={toggleTheme}>
                {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
            </Button>
        </div>
    );
};