import { Injectable } from '@nestjs/common';

export const SYMBOLS = ['#', '@', '$', '%', '&', '*'];

export type Matrix = (number | string)[][];

@Injectable()
export class AppService {
    /*
        TODO [LVL1]: Generate a square matrix of provided size, see comments
        There should be 30% of cells in the matrix empty, these cells should have value `.` (dot)
        The remaining 70% of cells should be divided to either numbers 1-9 (90%) or symbols from the `SYMBOLS` array (10%)
        The matrix should then be returned as string where between cells are spaces ' ' and between rows are new lines '\n'
    */
    /*
        TODO [LVL2]: Use seedable random number generator to always generate the same matrix for same seed
    */
    /*
        TODO [LVL2]: Ensure that two neighborhoods in matrix never contains cells from another neighborhood
        This means that another symbol cannot appear anywhere
        where 1 or 2 is in this example.
        . . . . . . .
        . 2 2 2 2 2 .
        . 2 1 1 1 2 .
        . 2 1 $ 1 2 .
        . 2 1 1 1 2 .
        . 2 2 2 2 2 .
        . . . . . . .
    */
    public generateMatrix(size: number, _seed?: number, _ensureDistance?: boolean): Matrix {
        const matrix: Matrix = Array.from<string[][], string[]>(
            { length: size },
            () => Array(size).fill('.') as string[],
        );
        return matrix;
    }

    public matrixToString(matrix: Matrix): string {
        return matrix.map((row) => row.join(' ')).join('\n');
    }
}
