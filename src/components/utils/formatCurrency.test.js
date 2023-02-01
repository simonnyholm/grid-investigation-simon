import formatCurrency from "./formatCurrency";

describe('formatCurrency', () => {
    it('formats numbers with two fractional digits', () => {
        expect(formatCurrency({value: 10 })).toBe('10.00');
    });

    it('always have at least one integer digit', () => {
        expect(formatCurrency({ value: 0.25 })).toBe('0.25');
    });

    it('rounds numbers to nearest two fractional digits', () => {
        expect(formatCurrency({ value: 0.224 })).toBe('0.22');
        expect(formatCurrency({ value: 0.225 })).toBe('0.23');
    });
});