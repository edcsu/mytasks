import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ShowTasks from '../ShowTasks';
import TaskContext from '../../../store/taskcontext';
import testTaskContext from './testtaskcontext';
import { taskContext } from '../../../lib/taskContext';
import ITask from '../../../lib/task';

describe('ShowTasks Component', () => {
    const mockTasks : ITask[] = [
        { id: '1', title: 'Task 1', date: '2025-01-01' },
        { id: '2', title: 'Task 2', date: '2025-01-01' }
    ];
    const mockContextValue : taskContext = { 
        ...testTaskContext,
        tasks :  mockTasks
    }
    const renderWithContext = () => {
        return render(
            <TaskContext.Provider value={mockContextValue}>
                <ShowTasks />
            </TaskContext.Provider>
        );
    };

    it('renders tasks badge with correct count', () => {
        renderWithContext();
        expect(screen.getByText('2')).toBeInTheDocument();
    });

    it('renders clear all button when tasks exist', () => {
        renderWithContext();
        const clearButton = screen.getByText('Clear All');
        expect(clearButton).toBeEnabled();
    });

    it('disables clear all button when no tasks exist', () => {
        render(
            <TaskContext.Provider value={testTaskContext}>
                <ShowTasks />
            </TaskContext.Provider>
        );
        const clearButton = screen.getByText('Clear All');
        expect(clearButton).toBeDisabled();
    });

    it('opens clear dialog when clear all button is clicked', () => {
        renderWithContext();
        const clearButton = screen.getByText('Clear All');
        fireEvent.click(clearButton);
        const clearDialog = screen.getByRole('dialog');
        expect(clearDialog).toBeInTheDocument();
    });
});