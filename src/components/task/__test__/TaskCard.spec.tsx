import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskCard from '../TaskCard';
import TaskContext from '../../../store/taskcontext';
import testTaskContext from './testtaskcontext';

describe('TaskCard', () => {
    const mockTask = {
        id: '1',
        title: 'Test Task',
        date: '2025-01-01'
    };
    const wrapper = ({ children }: { children: React.ReactNode }) => (
        <TaskContext.Provider value={testTaskContext}>
            {children}
        </TaskContext.Provider>
    )

    it('renders task title and date', () => {
        render(<TaskCard task={mockTask} />, { wrapper });
        
        expect(screen.getByText('Test Task')).toBeInTheDocument();
        expect(screen.getByText('1/1/2025')).toBeInTheDocument();
    });

    it('opens edit dialog when edit button is clicked', () => {
        render(<TaskCard task={mockTask} />, { wrapper });
        
        const editButton = screen.getByLabelText('edit task');
        fireEvent.click(editButton);
        
        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('opens delete dialog when delete button is clicked', () => {
        render(<TaskCard task={mockTask} />, { wrapper });
        
        const deleteButton = screen.getByLabelText('delete task');
        fireEvent.click(deleteButton);
        
        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
});