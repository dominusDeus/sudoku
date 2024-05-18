"use client";

import GameSquare from "../components/game-square";
import { DEFAULT_BOARD_SIZE, UNSTARTED_GAME_BOARD } from "../constants";
import { getInitialBoard } from "@/utils/general";
import { useEffect, useState } from "react";

export const getGlobalX = (
  cellXinSquare: number,
  squareIdx: number
): number => {
  const isIdInColY = (squareIdx: number, squareColNumber: number): boolean => {
    const getStuff = () => {
      const f = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ];

      return f[squareColNumber];
    };

    const [n1, n2, n3] = getStuff();

    return squareIdx === n1 || squareIdx === n2 || squareIdx === n3;
  };

  const isCol1 = isIdInColY(squareIdx, 1);
  const isCol2 = isIdInColY(squareIdx, 2);

  return isCol1
    ? cellXinSquare + 3
    : isCol2
    ? cellXinSquare + 6
    : cellXinSquare;
};

export const getGlobalY = (
  cellYinsideSquare: number,
  squareIdx: number
): number => {
  const isIdInRowX = (id: number, squareRowNumber: number): boolean => {
    const getStuff = () => {
      const f = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ];

      return f[squareRowNumber];
    };

    const [n1, n2, n3] = getStuff();

    return id === n1 || id === n2 || id === n3;
  };

  const isSquareRow1 = isIdInRowX(squareIdx, 1);
  const isSquareRow2 = isIdInRowX(squareIdx, 2);

  return isSquareRow1
    ? cellYinsideSquare + 3
    : isSquareRow2
    ? cellYinsideSquare + 6
    : cellYinsideSquare;
};

export default function Home() {
  const [gameIsStarted, setGameStarted] = useState(false);
  const [cellSelected, setCellSelected] = useState<{ x: number; y: number }>();

  const initialBoard = getInitialBoard();

  const test = (x: number, y: number, id: number) => {
    const globalX = getGlobalX(x, id);
    const globalY = getGlobalY(y, id);

    setCellSelected({ x: globalX, y: globalY });
  };

  useEffect(() => {
    console.log("CELL SELECTED: ", cellSelected);
  }, [cellSelected]);

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
                  onClickCell={(x, y) => test(x, y, i)}
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
