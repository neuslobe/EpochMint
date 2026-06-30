// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EpochMint title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EpochMint/i);
    expect(titleElement).toBeInTheDocument();
});
