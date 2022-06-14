import { CartPageContainer } from '@Components/cartPage/cartPage';
import { CartItem } from '@Components/cartPage/cartList/cartItem/cartItem';

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
        ],
    },
};

describe('Delete Item', () => {
    let cartPage: CartPageContainer;
    let item: CartItem;

    beforeEach(async () => {
        cartPage = new CartPageContainer();

        await cartPage.fulfill(INITIAL_STATE);

        const cartList = await cartPage.getCartList();
        [item] = await cartList.getCartItems();
    });

    test('delete item button should work', async () => {
        reporter.startStep('Click delete button should remove cart item');
        await item.delete();
        reporter.endStep();

        const emptyCart = await cartPage.getCartList();

        reporter.startStep('Check empty cart message');
        expect(await emptyCart.getEmpty()).toBe('Cart is empty');
        reporter.endStep();
    });
});
