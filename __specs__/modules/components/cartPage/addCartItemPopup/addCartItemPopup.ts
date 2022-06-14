import { Component } from '@Core/component';
import { Attribute, ComponentGetter, TextGetter } from '@Core/decorators';

const SELECTORS = {
    nameInput: '[data-testid="input-name"]',
    priceInput: '[data-testid="input-price"]',
    quantityInput: '[data-testid="input-quantity"]',

    errorMessage: './/div[@class="error" and contains(text(), "This field should be greater or equal then 1")] ',

    addNewItemButton: './/button[text()="Создать"]',
};

export class AddCartItemPopup extends Component {
    @ComponentGetter({
        s: SELECTORS.nameInput,
    })
    private nameInput: Promise<Component>;

    @ComponentGetter({
        s: SELECTORS.priceInput,
    })
    private priceInput: Promise<Component>;

    @ComponentGetter({
        s: SELECTORS.quantityInput,
    })
    private quantityInput: Promise<Component>;

    @ComponentGetter({
        s: SELECTORS.addNewItemButton,
    })
    private addNewItemButton: Promise<Component>;

    @TextGetter({
        s: SELECTORS.errorMessage,
        attribute: Attribute.TextContent,
    })
    private errorMessage: Promise<string>;

    public async fillOutName(name: string): Promise<void> {
        (await this.nameInput).input(name);
    }

    public async fillOutPrice(price: number): Promise<void> {
        (await this.priceInput).input(price.toString());
    }

    public async fillOutQuantity(quantity: number): Promise<void> {
        (await this.quantityInput).input(quantity.toString());
    }

    public async clickAddNewItemButton(): Promise<void> {
        (await this.addNewItemButton).fireClick();
    }

    public async getErrorMessage(): Promise<string> {
        return this.errorMessage;
    }
}
