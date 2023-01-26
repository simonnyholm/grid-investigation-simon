import AggregateDiv from "./AggregateDiv";

describe ('AggregateDiv', () => {
    it('returns the value of the first item of an array, if the value of all the following items are the same', () => {
        const sameItems = ["same", "same", "same"]
        const compareItems = AggregateDiv(sameItems)
        expect(compareItems).toBe("same");
    })

    it('returns an empty string, if any item of the array does not have the same value as the first item', () => {
        const differentItems = ["same", "different", "same"]
        const compareItems = AggregateDiv(differentItems)
        expect(compareItems).toBe("");
    })
})