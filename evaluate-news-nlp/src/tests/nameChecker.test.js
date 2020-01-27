import { checkForName } from '../client/js/nameChecker'

describe('Check if "checkForName()" is a function or not' , () => {
    test('checkForName should be a function', () => {
        expect(typeof checkForName).toBe("function");
    });
});