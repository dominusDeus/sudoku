import { DEFAULT_SQUARE_SIZE_IN_PX } from "@/constants";
import GameCell from "./game-cell";

interface GamePieceProps {
  numbers: number[][];
}

const GameSquare = ({ numbers }: GamePieceProps) => {
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
      {numbers
        .flatMap((line) => line)
        .map((number) => (
          <GameCell key="test">{number !== 0 && number}</GameCell>
        ))}
    </div>
  );
};

export default GameSquare;
