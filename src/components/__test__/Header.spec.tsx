import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react'
import Header from '../Header';

describe('Header', () => {
  test('renders logo', () => {
    const { getAllByText } =  render(<Header isDark={true} toggleTheme={() => {}}/>)
  
    const logos = getAllByText('mytasks')
    expect(logos.length).toBe(2)
  })
})