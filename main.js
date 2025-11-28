import { singletonDatabase } from './patterns/singleton.js';
import { employeeFactory } from './patterns/factory_method.js';
import { factoryProducer } from './patterns/abstract_factory.js';
import { pizzaBuilder } from './patterns/builder.js';
import { DocumentPrototype } from './patterns/prototype.js';

console.log("--- 1. Singleton ---");
const db1 = singletonDatabase;
const db2 = singletonDatabase;
console.log(db1.getConnection());
console.log(`Чи посилання на об'єкти ідентичні? ${db1 === db2}`); 

console.log("\n--- 2. Factory Method ---");
const dev = employeeFactory.createEmployee('developer', 'Олег');
const tester = employeeFactory.createEmployee('tester', 'Марія');
console.log(dev.say());
console.log(tester.say());

console.log("\n--- 3. Abstract Factory ---");
const euFactory = factoryProducer.getFactory('europe');
const myCar = euFactory.createCar();
console.log(myCar.build());

console.log("\n--- 4. Builder ---");
const Builder = pizzaBuilder;
const margherita = new Builder()
    .setDough('Тонке')
    .setSauce('Томатний')
    .build();
console.log(margherita.info());

console.log("\n--- 5. Prototype ---");
const originalDoc = new DocumentPrototype("Original Report", 1.0);
const clonedDoc = originalDoc.clone();
clonedDoc.version = 1.1; // Змінюємо копію

console.log(`Оригінал: ${originalDoc.title} (v${originalDoc.version})`);
console.log(`Клон: ${clonedDoc.title} (v${clonedDoc.version})`);
console.log(`Чи об'єкти ідентичні? ${originalDoc === clonedDoc}`);