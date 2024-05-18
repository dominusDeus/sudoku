"use client";

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
