import { DEFAULT_GAME_CELL_IN_PX } from "@/constants";
import { PropsWithChildren, useEffect, useState } from "react";

interface GameCellProps {
  size?: number;
  isSelected?: boolean;
  onClickCell?: () => void;
}

const GameCell = ({
  children,
  size = DEFAULT_GAME_CELL_IN_PX,
  isSelected,
  onClickCell,
}: PropsWithChildren<GameCellProps>) => {
  return (
    // TODO-add tailwind merge to pass on styles to componentsx
    <div
      onClick={onClickCell}
      className="text-primary-main flex justify-center items-center font-primary font-semibold border-[0.5px] border-primary-main"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: isSelected ? "#f32464" : "#000",
      }}
    >
      {children}
    </div>
  );
};

export default GameCell;
