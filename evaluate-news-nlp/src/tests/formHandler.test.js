import { handleSubmit } from '../client/js/formHandler'

describe('Check if "handleSubmit()" is a function or not' , () => {
    test('handleSubmit should be a function', () => {
        expect(typeof handleSubmit).toBe("function");
    });
});