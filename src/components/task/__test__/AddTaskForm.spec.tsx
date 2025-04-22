import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import AddTaskForm from '../AddTaskForm'
import TaskContext from '../../../store/taskcontext'
import testTaskContext from './testtaskcontext'

describe('AddTaskForm', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
        <TaskContext.Provider value={testTaskContext}>
            {children}
        </TaskContext.Provider>
    )

    it('renders form elements', () => {
        render(<AddTaskForm />, { wrapper })
        expect(screen.getByLabelText(/task/i)).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /add task/i })).toBeInTheDocument()
    })

    it('shows error when submitting empty form', () => {
        render(<AddTaskForm />, { wrapper })
        const submitButton = screen.getByRole('button', { name: /add task/i })
        
        fireEvent.click(submitButton)
        
        expect(screen.getByText(/Task title is missing/i)).toBeInTheDocument()
        expect(testTaskContext.addTask).not.toHaveBeenCalled()
    })

    it('adds task when form is submitted with title', () => {
        render(<AddTaskForm />, { wrapper })
        const input = screen.getByLabelText(/task/i)
        const submitButton = screen.getByRole('button', { name: /add task/i })
        
        fireEvent.change(input, { target: { value: 'New Task' } })
        fireEvent.click(submitButton)
        
        expect(testTaskContext.addTask).toHaveBeenCalledWith(expect.objectContaining({
            title: 'New Task',
        }))
        expect(screen.queryByText(/Task title is missing/i)).not.toBeInTheDocument()
    })
})