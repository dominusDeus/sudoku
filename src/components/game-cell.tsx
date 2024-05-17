import { DEFAULT_GAME_CELL_IN_PX } from "@/constants";
import { PropsWithChildren } from "react";

interface GameCellProps {
  size?: number;
}

const GameCell = ({
  children,
  size = DEFAULT_GAME_CELL_IN_PX,
}: PropsWithChildren<GameCellProps>) => {
  return (
    // TODO-add tailwind merge to pass on styles to componentsx
    <div
      className="text-primary-main flex justify-center items-center font-primary font-semibold border-[0.5px] border-primary-main"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {children}
    </div>
  );
};

export default GameCell;
