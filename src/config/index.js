class ConfigService {
    #config;
    constructor() {
        this.#config = import.meta.env;
    }

    #getPrefix = (key) => {
        const keyWithPrefix = `VITE_${key}`;
        return this.#config[keyWithPrefix];
    }

    get(key) {
        return this.#getPrefix(key);
    }
}
export default new ConfigService();