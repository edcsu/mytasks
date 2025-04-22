import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ClearTasksDialog from '../ClearTasksDialog';
import TaskContext from '../../../store/taskcontext';
import testTaskContext from './testtaskcontext';

describe('ClearTasksDialog', () => {
    const mockCloseClear = vi.fn();

    const wrapper = ({ open = false }) => {
        return (
            <TaskContext.Provider value={testTaskContext}>
                <ClearTasksDialog open={open} closeClear={mockCloseClear} />
            </TaskContext.Provider>
        );
    };

    it('should not render dialog when closed', () => {
        render(wrapper({ open: false }));
        expect(screen.queryByText('Are you sure you want to delete all your tasks?')).not.toBeInTheDocument();
    });

    it('should render dialog when open', () => {
        render(wrapper({ open: true }));
        expect(screen.getByText('Are you sure you want to delete all your tasks?')).toBeInTheDocument();
    });

    it('should call closeClear when clicking No', () => {
        render(wrapper({ open: true }));
        fireEvent.click(screen.getByText('No'));
        expect(mockCloseClear).toHaveBeenCalled();
    });

    it('should call clearTasks and closeClear when clicking Yes', () => {
        render(wrapper({ open: true }));
        fireEvent.click(screen.getByText('Yes'));
        expect(testTaskContext.clearTasks).toHaveBeenCalled();
        expect(mockCloseClear).toHaveBeenCalled();
    });
});