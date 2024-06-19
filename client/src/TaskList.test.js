import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';

const tasks = [
  { _id: '1', title: 'Task 1', description: 'Description 1', status: 'To Do' },
  { _id: '2', title: 'Task 2', description: 'Description 2', status: 'In Progress' }
];

test('renders TaskList component with tasks', () => {
  render(<TaskList tasks={tasks} updateTask={jest.fn()} deleteTask={jest.fn()} />);

  expect(screen.getByText(/Task 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Description 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Task 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Description 2/i)).toBeInTheDocument();
});
