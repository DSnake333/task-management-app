import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

const tasks = [
  { _id: '1', title: 'Task 1', description: 'Description 1', status: 'To Do', dueDate: '2024-12-31' },
  { _id: '2', title: 'Task 2', description: 'Description 2', status: 'In Progress', dueDate: '2024-12-31' }
];

beforeEach(() => {
  axios.get.mockResolvedValue({ data: tasks });
});

test('renders App component', async () => {
  await act(async () => {
    render(<App />);
  });

  expect(screen.getByText(/Task Management/i)).toBeInTheDocument();
});

test('renders App component and fetches tasks', async () => {
  await act(async () => {
    render(<App />);
  });

  await waitFor(() => {
    expect(screen.getByText(/Task 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Description 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Task 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Description 2/i)).toBeInTheDocument();
  });
});
