import { formatDate, cn } from './utils';

describe('utils', () => {
  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date('2025-01-15');
      const formatted = formatDate(date);
      expect(formatted).toMatch(/January 15, 2025/);
    });

    it('handles different dates', () => {
      const date = new Date('2024-12-25');
      const formatted = formatDate(date);
      expect(formatted).toMatch(/December 25, 2024/);
    });
  });

  describe('cn (classNames utility)', () => {
    it('combines multiple class names', () => {
      expect(cn('class1', 'class2', 'class3')).toBe('class1 class2 class3');
    });

    it('filters out falsy values', () => {
      expect(cn('class1', null, undefined, false, 'class2')).toBe('class1 class2');
    });

    it('handles empty input', () => {
      expect(cn()).toBe('');
    });

    it('handles only falsy values', () => {
      expect(cn(null, undefined, false)).toBe('');
    });

    it('handles single class name', () => {
      expect(cn('single')).toBe('single');
    });

    it('handles conditional classes', () => {
      const isActive = true;
      const isDisabled = false;
      expect(cn('base', isActive && 'active', isDisabled && 'disabled')).toBe('base active');
    });
  });
});
