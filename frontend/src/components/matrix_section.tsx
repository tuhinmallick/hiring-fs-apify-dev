import { type FC } from 'react';
import styled from 'styled-components';

import type { Matrix } from '../lib/matrix.js';
import { SYMBOLS } from '../lib/matrix.js';
import { CellContent } from './cell_content.js';
import { PerformanceIndicator } from './performance_indicator.js';
import { TypeFilterButton } from './type_filter_button.js';

const MatrixSectionWrapper = styled.section``;

type MatrixProps = {
    matrix: Matrix | undefined;
};

export const MatrixSection: FC<MatrixProps> = ({ matrix }) => {
    if (!matrix) return <div />;

    return (
        <MatrixSectionWrapper>
            <header>
                <h1>Apify FS Developer Interview Task</h1>
                <div className="type-filter">
                    {SYMBOLS.map((symbol) => (
                        <TypeFilterButton key={`symbol-${symbol}`} symbol={symbol} />
                    ))}
                </div>
                <PerformanceIndicator />
            </header>
            <table className="matrix">
                <tbody>
                    {matrix.map((row, i) => (
                        <tr key={`matrix-row-${i}`}>
                            {row.map((cell, j) => {
                                const id = `${i}-${j}`;

                                return (
                                    <td
                                        key={`matrix-cell-${id}`}
                                        data-cy-mx-row-index={i}
                                        data-cy-mx-cell-index={j}
                                        data-cy-is-active-symbol={false}
                                        data-cy-is-in-active-neighborhood={false}
                                    >
                                        <CellContent key={`cell-${id}`} content={cell} />
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </MatrixSectionWrapper>
    );
};
