// Singleton (Одинак) - гарантує, що клас має лише один екземпляр.
class Database {
    constructor(name) {
        if (Database.instance) {
            return Database.instance;
        }
        this.name = name || "Default Database";
        Database.instance = this;
    }

    getConnection() {
        return `Connected to: ${this.name}`;
    }
}

// Експорт для використання
export const singletonDatabase = new Database("Production DB");