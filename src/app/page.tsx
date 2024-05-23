"use client";

import { getGlobalX } from "@/utils/getGlobalX";
import GameSquare from "../components/game-square";
import { DEFAULT_BOARD_SIZE } from "../constants";
import { getInitialBoard } from "@/utils/general";
import { useState } from "react";
import { getGlobalY } from "@/utils/getGlobalY";

export default function Home() {
  const [gameIsStarted, setGameStarted] = useState(false);
  const [cellSelected, setCellSelected] = useState<{ x: number; y: number }>();

  const initialBoard = getInitialBoard();

  const onClickCell = (x: number, y: number, id: number) => {
    const globalX = getGlobalX(x, id);
    const globalY = getGlobalY(y, id);

    setCellSelected({ x: globalX, y: globalY });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full items-center justify-center flex">
        {gameIsStarted ? (
          <div
            className="box-content flex flex-wrap"
            style={{
              width: `${DEFAULT_BOARD_SIZE}px`,
              height: `${DEFAULT_BOARD_SIZE}px`,
            }}
          >
            {initialBoard.map((square, i) => {
              const globalX = 0;
              const globalY = 0;

              const isSelected = cellSelected
                ? globalX === cellSelected.x && globalY === cellSelected.y
                : false;

              return (
                <GameSquare
                  key="test"
                  numbers={square}
                  id={i}
                  onClickCell={(x, y) => onClickCell(x, y, i)}
                  selectedCell={cellSelected}
                />
              );
            })}
          </div>
        ) : (
          <button
            className="border border-primary-main text-primary-main p-8"
            onClick={() => setGameStarted(!gameIsStarted)}
          >
            START GAME
          </button>
        )}
      </div>
    </main>
  );
}
