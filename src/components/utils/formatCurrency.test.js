import formatCurrency from "./formatCurrency";

describe('formatCurrency', () => {
    it('formats numbers with two fractional digits', () => {
        expect(formatCurrency({value: 10 })).toBe('10.000');
    });

    it('always have at least one integer digit', () => {
        expect(formatCurrency({ value: 0.25 })).toBe('0.250');
    });

    it('rounds numbers to nearest two fractional digits', () => {
        expect(formatCurrency({ value: 0.2224 })).toBe('0.222');
        expect(formatCurrency({ value: 0.2225 })).toBe('0.223');
    });
});