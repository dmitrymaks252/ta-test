import { CartList } from '@Components/cartPage/cartList/cartList';
import { Container } from '@Core/container';
import { AddCartItemPopup } from '@Components/cartPage/addCartItemPopup/addCartItemPopup';

const SELECTORS = {
    addCartItemButton: './/button[contains(text(), "Add Cart Item")]',
    addCartItemPopup: './/div[@class="modal" and contains(., "Add New Cart Item")]',

    cartList: './/div[@class="cart__list"]',
};

export class CartPageContainer extends Container {
    public async fulfill(initialState = {}): Promise<void> {
        await super.fulfill(initialState);
    }

    public async clickAddCartItemButton(): Promise<void> {
        await document.clickByXpath(SELECTORS.addCartItemButton);
    }

    public async getAddCartItemPopup(): Promise<AddCartItemPopup> {
        const [addCartItemPopupElement] = await document.waitForXpath(SELECTORS.addCartItemPopup);
        const addCartItemPopup = new AddCartItemPopup(addCartItemPopupElement);
        return addCartItemPopup;
    }

    public async getCartList(): Promise<CartList> {
        const [cartListElement] = await document.waitForXpath(SELECTORS.cartList);
        const cartList = new CartList(cartListElement);
        return cartList;
    }
}
