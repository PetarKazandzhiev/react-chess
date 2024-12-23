import PieceModel from "./PieceModel";

export default class SquareModel {
    readonly row: number;
    readonly column: number;
   public piece: PieceModel | null;
    constructor( row: number, column: number) {
        this.row = row; 
        this.column = column;
       
    }

    setPiece (piece: PieceModel) {
        this.piece = piece;
    }
}