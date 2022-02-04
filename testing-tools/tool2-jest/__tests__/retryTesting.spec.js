describe('test with retry', () => {
    jest.retryTimes(3);

    test('should have retries', () => {
        expect(true).toEqual(false);
    });
});