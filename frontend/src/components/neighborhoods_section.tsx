import { type FC } from 'react';
import styled from 'styled-components';

import type { Neighborhood } from '../lib/matrix.js';
import { NeighborhoodButton } from './neighborhood_button.js';

const NeighborhoodsSectionWrapper = styled.section``;

type NeighborhoodsSectionProps = {
    neighborhoods: Neighborhood[];
};

export const NeighborhoodsSection: FC<NeighborhoodsSectionProps> = ({ neighborhoods }) => {
    return (
        <NeighborhoodsSectionWrapper>
            <header>
                <h2>Neighborhoods</h2>
            </header>
            <div className="neighborhoods-list">
                {neighborhoods.map((neighborhood) => (
                    <NeighborhoodButton key={neighborhood.id} {...neighborhood} />
                ))}
            </div>
        </NeighborhoodsSectionWrapper>
    );
};
