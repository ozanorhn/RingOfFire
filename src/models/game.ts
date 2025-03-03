export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 1; i <= 13; i++) {
            this.stack.push(`spade_${i}`);
            this.stack.push(`hearts_${i}`);
            this.stack.push(`clubs_${i}`);
            this.stack.push(`diamonds_${i}`);
        }

        this.shuffleStack();
    }

    private shuffleStack(): void {
        for (let i = this.stack.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [this.stack[i], this.stack[randomIndex]] = [this.stack[randomIndex], this.stack[i]];
        }
    }
}
