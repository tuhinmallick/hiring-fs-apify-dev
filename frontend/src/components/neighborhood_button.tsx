import { type FC } from 'react';
import styled from 'styled-components';

import { type Neighborhood, symbolToIcon } from '../lib/matrix.js';

const NeighborhoodButtonWrapper = styled.button`
    cursor: not-allowed;
`;

// TODO [LVL1]: Add value to the button as label next to the icon. The value is sum of numbers in it's neighborhood.
// TODO [LVL1]: When you click on the button, it should highlight the neighborhood in the matrix.
// TODO [LVL2]: When you click on the button, the highlighted area in the matrix should have highlighted borders.
export const NeighborhoodButton: FC<Neighborhood> = ({ symbol, rowIndex, cellIndex }) => {
    const Icon = symbolToIcon[symbol];
    return (
        <NeighborhoodButtonWrapper
            className="neighborhood"
            data-cy-nh-row-index={rowIndex}
            data-cy-nh-cell-index={cellIndex}
        >
            <Icon />
        </NeighborhoodButtonWrapper>
    );
};
