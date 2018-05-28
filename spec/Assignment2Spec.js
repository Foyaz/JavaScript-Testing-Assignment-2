describe("ShoppingCart", () => {
    it("Should add an item to the cart", () => {
        const cart = new ShoppingCart();
        cart.scan(mango);
        expect(cart.items(popCorn, Beef, chicken)).toEqual([popCorn, Beef, chicken, mango]);
    });
    it("Should remove an item from the cart", () => {
        const cart = new ShoppingCart();
        cart.remove(mango);
        expect(cart.items(popCorn, Beef, chicken, mango)).toEqual([popCorn, Beef, chicken]);
    });
    it("Should apply discount on the items of the cart", () => {
        const cart = new ShoppingCart();
        cart.discount(product);
        expect(cart.discount()).toEqual([]);
    });
    it("Should return the total items in the cart", () => {
        const cart = new ShoppingCart();
        cart.total(product);
        expect(cart.total()).toEqual([]);
    });
    it("Should return the current items in the cart", () => {
        const cart = new ShoppingCart();
        cart.items();
        expect(cart.items()).toEqual([]);
    });
})