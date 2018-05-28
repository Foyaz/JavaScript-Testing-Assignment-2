let product = {
  popCorn = {
      itemId: 1275,
      price: 8.00,
    },
    
    beaf = {
      itemId: 197,
      price: 9.56,
    },
    
    chicken = {
      itemId: 1600,
      price: 43.99,
    }
} 
class ShoppingCart {
    constructor(items) {
            if(items) {
              this.items = items.slice(0,5)
            } else {
              this.items = []
            }
    }
    scan(product) {   
      if(this.items < 5) {
        this.items.push(product) 
      } else {
        return "Your cart is full."
      }
    }
  
    remove(product) {
      if (this.items < 1) {
        return "Your cart is empty."
      } else {
        this.items.pop()
      }
    }
  
    discount() {
     let discount = product.price * 0.5;
    }
    total(){
        return this.items;
    }
    items(){
        return this.items;
    }
  }