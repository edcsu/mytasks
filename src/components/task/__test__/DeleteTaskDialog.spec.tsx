import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import DeleteTaskDialog from '../DeleteTaskDialog'
import TaskContext from '../../../store/taskcontext'
import testTaskContext from './testtaskcontext'

describe('DeleteTaskDialog', () => {
    const mockCloseDelete = vi.fn()

    const defaultProps = {
        id: '123',
        open: true,
        closeDelete: mockCloseDelete
    }

    const renderComponent = (props = defaultProps) => {
        return render(
            <TaskContext.Provider value={testTaskContext}>
                <DeleteTaskDialog {...props} />
            </TaskContext.Provider>
        )
    }

    it('renders confirmation message', () => {
        renderComponent()
        expect(screen.getByText('Are you sure you want to delete this task?')).toBeInTheDocument()
    })

    it('calls closeDelete when No button is clicked', () => {
        renderComponent()
        fireEvent.click(screen.getByText('No'))
        expect(mockCloseDelete).toHaveBeenCalled()
    })

    it('calls deleteTask and closeDelete when Yes button is clicked', () => {
        renderComponent()
        fireEvent.click(screen.getByText('Yes'))
        expect(testTaskContext.deleteTask).toHaveBeenCalledWith('123')
        expect(mockCloseDelete).toHaveBeenCalled()
    })

    it('does not render dialog when open is false', () => {
        renderComponent({ ...defaultProps, open: false })
        expect(screen.queryByText('Are you sure you want to delete this task?')).not.toBeInTheDocument()
    })
})