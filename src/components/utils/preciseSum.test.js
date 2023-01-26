import preciseSum from "./preciseSum";

describe('preciseSum', () => {
    it('adds numbers together without rounding errors', () => {
        // Arrange
        const numbers = [.1, .2];

        // Act
        const sum = preciseSum(numbers);

        // Assert
        expect(sum).toBe(.3);
    });
});