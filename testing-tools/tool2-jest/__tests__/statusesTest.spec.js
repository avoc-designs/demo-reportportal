describe('tests with specific status', () => {
    test('should be passed', () => {
        expect(true).toBe(true);
    });

    test('should be failed', () => {
        expect(true).toEqual(false);
    });

    test.skip('should be skipped', () => {
        expect(true).toEqual(true);
    });
});