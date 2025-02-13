// state of each cells in the minesweeper Field
export type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type Field = Cell[][];

export const fieldExample: Field = [
  [9, 1, 0, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 9, 1],
  [0, 0, 1, 9, 1, 0, 2, 2, 2],
  [0, 0, 1, 1, 1, 0, 1, 9, 1],
  [0, 1, 1, 1, 1, 9, 1, 1, 1],
  [0, 1, 9, 2, 1, 2, 2, 3, 2],
  [0, 1, 1, 2, 9, 2, 9, 9, 9],
  [0, 0, 0, 1, 1, 4, 9, 8, 9],
  [0, 0, 0, 0, 0, 1, 9, 9, 9]
];
