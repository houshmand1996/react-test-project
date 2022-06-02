import {FC} from 'react';
import {Spinner} from 'core';
interface LoaderProps {
    loading: boolean;
}

export const Loader :FC<LoaderProps> = ({ loading, children }) => {
    return (
        <div>
            {loading ? <Spinner/> : null}
            {children}
        </div>
    );
};