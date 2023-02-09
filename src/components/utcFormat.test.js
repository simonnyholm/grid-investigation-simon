import utcFormat from "./utcFormat";

describe ('utcFormat', () => {
    it('handles a given cell value containing a utc time string, and returns a localized version, which is defined further in a "new Intl.DateTimeFormat"', () => {
        const value = "Fri, 20 Jan 2023 11:35:05 GMT";
        const localizedTime = utcFormat({ value });
        expect(localizedTime).toBe("20. jan. 2023");
    })

})