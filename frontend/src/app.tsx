import styled from 'styled-components';

import { Loader } from './components/loader.js';
import { MatrixSection } from './components/matrix_section.js';
import { NeighborhoodsSection } from './components/neighborhoods_section.js';
import { useMatrix } from './hooks/use_matrix.jsx';
import { useTimer } from './hooks/use_timer.js';
import { matrixToNeighborhoods } from './lib/matrix.js';

const AppContainer = styled.div`
    color: ${(props) => props.theme.baseColor};
`;

export const App = () => {
    useTimer(); // Do not remove this. If you reorganize your app, move it to the same level.

    const { matrix, isPending } = useMatrix();

    const neighborhoods = matrix ? matrixToNeighborhoods(matrix) : [];

    // TODO [LVL1]: Handle the error from useMatrix however you want

    return (
        <AppContainer>
            {isPending ? (
                <Loader />
            ) : (
                <>
                    <MatrixSection matrix={matrix} />
                    <NeighborhoodsSection neighborhoods={neighborhoods} />
                </>
            )}
        </AppContainer>
    );
};
