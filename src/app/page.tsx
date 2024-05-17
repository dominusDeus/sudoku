"use client";

import GameSquare from "../components/game-square";
import { DEFAULT_BOARD_SIZE, UNSTARTED_GAME_BOARD } from "../constants";
import { getInitialBoard } from "@/utils/general";
import { useState } from "react";

export default function Home() {
  const [gameIsStarted, setGameStarted] = useState(false);

  const initialBoard = getInitialBoard();

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
            {initialBoard.map((square) => (
              <GameSquare key="test" numbers={square} />
            ))}
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
