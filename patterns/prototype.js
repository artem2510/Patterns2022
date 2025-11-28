// Prototype - дозволяє створювати нові об'єкти шляхом копіювання існуючих.

class Document {
    constructor(title, version) {
        this.title = title;
        this.version = version;
    }

    // Метод для клонування об'єкта
    clone() {
        // Створюємо нову копію об'єкта
        return new Document(this.title, this.version);
    }
}

export const DocumentPrototype = Document;