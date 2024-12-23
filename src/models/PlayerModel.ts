export enum PlayerColor {
    WHITE = "WHITE",
    BLACK = "BLACK"
}   

export class PlayerModel {
    color: PlayerColor;
    constructor(color: PlayerColor) {
        this.color = color;
    }
}