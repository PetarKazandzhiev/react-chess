import Square from './Square';

import BoardModel from '../../models/BoardModel';
import SquareModel from '../../models/SquareModel';

interface Props {
  board: BoardModel;
  playingAsWhite: boolean;
}
const Board = ({ board, playingAsWhite }: Props) => {
  return (
    <div>
      <h2>Board</h2>

      <section className="grid grid-rows-8 grid-cols-8">
        {board.squares.map((square: SquareModel) => (
          <div
            className={`8- col-start-${playingAsWhite ? square.column + 1 : 8 - square.column} row-start-${playingAsWhite ? 8 - square.row : square.row + 1}`}>
            <Square key={`${square.row}-${square.column}`} square={square} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Board;
