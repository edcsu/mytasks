import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App', () => {
    it('renders without crashing', () => {
        render(<App />);
        expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('toggles dark mode when theme button is clicked', () => {
        render(<App />);
        const themeButton = screen.getAllByRole('checkbox', { name: /Toggle theme/i });
        
        fireEvent.click(themeButton[0]);
        expect(document.querySelector('body')).toHaveStyle({
            backgroundColor: 'rgb(18, 18, 18)' // Dark mode background color
        });

        fireEvent.click(themeButton[0]);
        expect(document.querySelector('body')).toHaveStyle({
            backgroundColor: 'rgb(255, 255, 255)' // Light mode background color
        });
    });

    it('renders main components', () => {
        render(<App />);
        expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
        expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
        expect(screen.getByRole('form')).toBeInTheDocument(); // AddTaskForm
        expect(screen.getByRole('main')).toBeInTheDocument(); // ShowTasks
    });
});