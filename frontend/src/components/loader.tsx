import type { FC } from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div``;

export const Loader: FC = () => {
    return (
        <LoaderWrapper>
            <p>Loading data</p>
        </LoaderWrapper>
    );
};
