import { describe, expect, test } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../Footer';

describe('Footer Component', () => {
  const theme = createTheme();
  
  const renderFooter = () => {
    return render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );
  };

  describe('Copyright Section', () => {
    test('renders copyright text with current year', () => {
      renderFooter();
      const currentYear = new Date().getFullYear().toString();
      expect(screen.getByText((content) => content.includes('Copyright ©'))).toBeInTheDocument();
      expect(screen.getByText((content) => content.includes(currentYear))).toBeInTheDocument();
    });

    test('renders Keith link with correct attributes', () => {
      renderFooter();
      const keithLink = screen.getByText('Keith');
      expect(keithLink).toHaveAttribute('href', 'https://www.linkedin.com/in/ssewannonda-keith-edwin-443303129');
      expect(keithLink).toHaveAttribute('target', '_blank');
      expect(keithLink).toHaveAttribute('rel', 'noreferrer noopener');
    });
  });

  describe('Social Links Section', () => {
    test('renders all social media buttons', () => {
      renderFooter();
      expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
      expect(screen.getByLabelText('X')).toBeInTheDocument();
      expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
      expect(screen.getByLabelText('email')).toBeInTheDocument();
    });

    test('social links have correct href values', () => {
      renderFooter();
      expect(screen.getByLabelText('GitHub')).toHaveAttribute('href', 'https://github.com/edcsu');
      expect(screen.getByLabelText('X')).toHaveAttribute('href', 'https://x.com/skeith696');
      expect(screen.getByLabelText('LinkedIn')).toHaveAttribute('href', 'https://www.linkedin.com/in/ssewannonda-keith-edwin-443303129');
      expect(screen.getByLabelText('email')).toHaveAttribute('href', 'mailto:skeith696@gmail.com');
    });

    test('social links have correct target and rel attributes', () => {
      renderFooter();
      const socialButtons = [
        screen.getByLabelText('GitHub'),
        screen.getByLabelText('X'),
        screen.getByLabelText('LinkedIn'),
        screen.getByLabelText('email')
      ];

      socialButtons.forEach(button => {
        expect(button).toHaveAttribute('target', '_blank');
        expect(button).toHaveAttribute('rel', 'noreferrer noopener');
      });
    });
  });

  test('footer has correct layout structure', () => {
    renderFooter();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    const container = screen.getByRole('contentinfo');
    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      justifyContent: 'space-between'
    });
  });
});