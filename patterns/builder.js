// Builder - розділяє конструювання складного об'єкта та його представлення.

class Pizza {
    constructor() {
        this.dough = '';
        this.sauce = '';
        this.toppings = [];
    }

    info() {
        return `Pizza with: ${this.dough} dough, ${this.sauce} sauce, and ${this.toppings.join(', ')} toppings.`;
    }
}

class PizzaBuilder {
    constructor() {
        this.pizza = new Pizza();
    }

    setDough(dough) {
        this.pizza.dough = dough;
        return this;
    }

    setSauce(sauce) {
        this.pizza.sauce = sauce;
        return this;
    }

    addTopping(topping) {
        this.pizza.toppings.push(topping);
        return this;
    }

    build() {
        return this.pizza;
    }
}

export const pizzaBuilder = PizzaBuilder;