export default class Pokemon {
    constructor(private readonly name: string,
        private readonly level: number | null) { }

    getName(): string {
        return this.name
    }

    getLevel(): number | null {
        return this.level
    }
}