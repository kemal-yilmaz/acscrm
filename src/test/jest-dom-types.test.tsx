import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

function Dummy() {
  return <div>Hello</div>;
}

describe('jest-dom matchers have types', () => {
  it('toBeInTheDocument types compile and run', () => {
    render(<Dummy />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
