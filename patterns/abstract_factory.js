// Abstract Factory - створює сімейства пов'язаних або залежних об'єктів.

// Продукти
class Sedan { build() { return "Building a Sedan car"; } }
class Truck { build() { return "Building a Truck"; } }

// Фабрика 1: European Cars
class EuropeanFactory {
    createCar() { return new Sedan(); }
    createTruck() { return new Truck(); }
}

// Фабрика 2: American Cars
class AmericanFactory {
    createCar() { return new Sedan(); }
    createTruck() { return new Truck(); }
}

class FactoryProducer {
    static getFactory(type) {
        if (type === 'europe') {
            return new EuropeanFactory();
        } else if (type === 'america') {
            return new AmericanFactory();
        }
        return null;
    }
}

export const factoryProducer = FactoryProducer;