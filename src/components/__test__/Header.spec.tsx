import { describe, expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header';

describe('Header Component', () => {
  const theme = createTheme();
  const defaultProps = {
      isDark: false,
      toggleTheme: vi.fn()
  };

  const renderHeader = (props = defaultProps) => {
      return render(
          <ThemeProvider theme={theme}>
              <Header {...props} />
          </ThemeProvider>
      );
  };

  test('renders mytasks text twice (mobile and desktop)', () => {
      renderHeader();
      const textElements = screen.getAllByText('mytasks');
      expect(textElements).toHaveLength(2);
  });

  test('renders logo images', () => {
      renderHeader();
      const logos = screen.getAllByAltText('logo');
      expect(logos).toHaveLength(2);
  });

  test('renders theme switches', () => {
      renderHeader();
      const switches = screen.getAllByRole('checkbox');
      expect(switches).toHaveLength(2);
  });

  test('calls toggleTheme when switch is clicked', () => {
      const toggleTheme = vi.fn();
      renderHeader({ ...defaultProps, toggleTheme });
      
      const switches = screen.getAllByRole('checkbox');
      fireEvent.click(switches[0]);
      
      expect(toggleTheme).toHaveBeenCalledTimes(1);
  });

  test('passes correct isDark prop to switches', () => {
      renderHeader({ ...defaultProps, isDark: true });
      const switches = screen.getAllByRole('checkbox');
      
      switches.forEach(switchElement => {
          expect(switchElement).toHaveProperty('value', 'true');
      });
  });

  test('has correct accessibility labels', () => {
      renderHeader();
      const switches = screen.getAllByLabelText('Toggle theme');
      expect(switches).toHaveLength(2);
  });
});