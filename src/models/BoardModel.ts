import SquareModel from "./SquareModel";


export default class BoardModel {   
    public squares: Array<SquareModel> = [];

    constructor() {
        for (let i = 0; i < 8; i++) {
           for (let w = 0; w < 8; w++) {
            this.squares.push(new SquareModel(i, w))
           }
        }
    }
}