import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-[96%] max-w-[1240px] mx-auto'>
            {children}
        </div>
    );
};

export default Container;