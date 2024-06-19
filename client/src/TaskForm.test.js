import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';

test('renders TaskForm component', () => {
  render(<TaskForm addTask={jest.fn()} />);

  expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Status/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Due Date/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Add Task/i })).toBeInTheDocument();
});

test('submits the form with valid inputs', () => {
  const addTaskMock = jest.fn();
  render(<TaskForm addTask={addTaskMock} />);

  fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Test Title' } });
  fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Test Description' } });
  fireEvent.change(screen.getByLabelText(/Status/i), { target: { value: 'To Do' } });
  fireEvent.change(screen.getByLabelText(/Due Date/i), { target: { value: '2024-12-31' } });

  fireEvent.click(screen.getByRole('button', { name: /Add Task/i }));

  expect(addTaskMock).toHaveBeenCalledWith({
    title: 'Test Title',
    description: 'Test Description',
    status: 'To Do',
    dueDate: '2024-12-31'
  });
});
