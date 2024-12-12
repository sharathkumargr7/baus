import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Toggle } from '../Toggle';

describe('Toggle Component', () => {
  it('renders with default props', () => {
    render(<Toggle />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Toggle label="Test Toggle" />);
    expect(screen.getByText(/Test Toggle/)).toBeInTheDocument();
  });

  it('shows correct state label', () => {
    render(<Toggle label="Test" onStateLabel="Active" offStateLabel="Inactive" />);
    expect(screen.getByText('Test - Inactive')).toBeInTheDocument();
  });

  it('toggles state on click', () => {
    const onToggle = jest.fn();
    render(<Toggle onToggle={onToggle} />);
    
    const toggle = screen.getByRole('checkbox');
    fireEvent.click(toggle);
    
    expect(onToggle).toHaveBeenCalledWith(true);
  });

  it('respects disabled state', () => {
    const onToggle = jest.fn();
    render(<Toggle disabled onToggle={onToggle} />);
    
    const toggle = screen.getByRole('checkbox');
    fireEvent.click(toggle);
    
    expect(onToggle).not.toHaveBeenCalled();
    expect(toggle).toBeDisabled();
  });
}); 