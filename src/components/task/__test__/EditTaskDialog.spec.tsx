import { beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import EditTaskDialog from '../EditTaskDialog';
import TaskContext from '../../../store/taskcontext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import testTaskContext from './testtaskcontext';

describe('EditTaskDialog', () => {
    const theme = createTheme();
    const mockCloseEdit = vi.fn();
    const sampleTask = {
        id: '1',
        title: 'Test Task',
        completed: false,
        date: '2025-01-01'
    };

    const defaultProps = {
        taskToEdit: sampleTask,
        open: true,
        closeEdit: mockCloseEdit
    };

    

    const renderDialog = (props = defaultProps) => {
        
        return render(
            <ThemeProvider theme={theme}>
                <TaskContext.Provider value={testTaskContext}>
                    <EditTaskDialog {...props} />
                </TaskContext.Provider>
            </ThemeProvider>
        );
    };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('renders with correct task title', () => {
        renderDialog();
        expect(screen.getByText('Test Task')).toBeInTheDocument();
    });

    test('submits form with valid input', async () => {
        renderDialog();
        const input = screen.getByLabelText('Task *');
        const submitButton = screen.getByText('Save');

        fireEvent.change(input, { target: { value: 'Updated Task' } });
        fireEvent.click(submitButton);

        expect(testTaskContext.editTask).toHaveBeenCalledWith('1', 'Updated Task');
        expect(mockCloseEdit).toHaveBeenCalled();
    });

    test('shows error message when submitting empty input', async () => {
        renderDialog();
        const input = screen.getByLabelText('Task *');
        const submitButton = screen.getByText('Save');

        fireEvent.change(input, { target: { value: '' } });
        fireEvent.click(submitButton);
    });

    test('closes dialog when cancel is clicked', () => {
        renderDialog();
        const cancelButton = screen.getByText('Cancel');

        fireEvent.click(cancelButton);

        expect(mockCloseEdit).toHaveBeenCalled();
    });

    test('dismisses error alert when clicked', async () => {
        renderDialog();
        const input = screen.getByLabelText('Task *');
        const submitButton = screen.getByText('Save');
        expect(screen.queryByText(/missing/i)).toBe(null); 

        fireEvent.change(input, { target: { value: '' } });
        fireEvent.click(submitButton);

        const alert = screen.queryByText(/missing/i);
        console.log(alert)
    });

    test('clears errors when dialog is closed', () => {
        renderDialog();
        const input = screen.getByLabelText('Task *');
        const submitButton = screen.getByText('Save');

        fireEvent.change(input, { target: { value: '' } });
        fireEvent.click(submitButton);

        const cancelButton = screen.getByText('Cancel');
        fireEvent.click(cancelButton);

        expect(screen.queryByText('Task title is missing')).not.toBeInTheDocument();
    });
});