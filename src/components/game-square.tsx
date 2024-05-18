import { DEFAULT_SQUARE_SIZE_IN_PX } from "@/constants";
import GameCell from "./game-cell";
import { getGlobalX } from "@/utils/getGlobalX";
import { getGlobalY } from "@/utils/getGlobalY";

interface GamePieceProps {
  numbers: number[][];
  id: number;
  selectedCell?: { x: number; y: number };
  onClickCell?: (x: number, y: number) => void;
}

const GameSquare = ({
  numbers,
  id: squareIdx,
  selectedCell,
  onClickCell,
}: GamePieceProps) => {
  return (
    <div
      className={
        "text-primary-main flex flex-wrap box-content border border-primary-main"
      }
      style={{
        width: `${DEFAULT_SQUARE_SIZE_IN_PX}px`,
        height: `${DEFAULT_SQUARE_SIZE_IN_PX}px`,
      }}
    >
      {numbers.map((row, y) => {
        return row.map((cellValue, x) => (
          <GameCell
            key={x + y}
            isSelected={
              selectedCell?.x === getGlobalX(x, squareIdx) &&
              selectedCell.y === getGlobalY(y, squareIdx)
            }
            onClickCell={() => onClickCell?.(x, y)}
          >
            {cellValue !== 0 && cellValue}
          </GameCell>
        ));
      })}
    </div>
  );
};
// X

// 0= 0,1,2  1= 3,4,5   2=6,7,8
// 3= 0,1,2  4= 3,4,5   5=6,7,8
// 6= 0,1,2  7= 3,4,5   8=6,7,8

// Y

// 0= 0,1,2  1= 0,1,2  2=0,1,2
// 3= 3,4,5  4= 3,4,5  5=3,4,5
// 6= 6,7,8  7= 6,7,8  8=6,7,8

export default GameSquare;
