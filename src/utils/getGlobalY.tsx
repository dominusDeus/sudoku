"use client";

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
