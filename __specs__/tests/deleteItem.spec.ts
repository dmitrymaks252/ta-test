import { CartPageContainer } from '@Components/cartPage/cartPage';

const INITIAL_STATE = {
    cart: {
        isLoading: false,
        openAddForm: false,
        items: [
            {
                name: 'Leet o.1337 v2',
                price: 150,
                quantity: 5,
                id: 1,
            },
            {
                name: 'Leet o.2674 v4',
                price: 300,
                quantity: 10,
                id: 2,
            },
        ],
    },
};

describe('Delete Item', () => {
    let cartPage: CartPageContainer;

    beforeEach(async () => {
        cartPage = new CartPageContainer();

        await cartPage.fulfill(INITIAL_STATE);
    });

    test('delete item button should work', async () => {
        const cartList = await cartPage.getCartList();
        let items = await cartList.getCartItems();

        reporter.startStep('Click delete button should remove cart item');
        expect(items.length).toBe(2);
        await items[0].delete();

        items = await cartList.getCartItems();

        expect(items.length).toBe(1);
        reporter.endStep();

        const emptyCart = await cartPage.getCartList();

        reporter.startStep('Check empty cart message');
        await items[0].delete();
        expect(await emptyCart.getEmpty()).toBe('Cart is empty');
        reporter.endStep();
    });
});
