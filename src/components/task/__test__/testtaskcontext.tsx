import { vi } from 'vitest';
import { taskContext } from '../../../lib/taskContext';

const testTaskContext : taskContext = {
    editTask: vi.fn(),
    tasks: [],
    addTask: vi.fn(),
    deleteTask: vi.fn(),
    clearTasks: vi.fn()
};

export default testTaskContext