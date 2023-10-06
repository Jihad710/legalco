"use client"
import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';
const Messenger = () => {
    return (
        <div>
            <FacebookProvider appId="127943877076242" chatSupport>
                <CustomChat pageId="106590254937306" minimized={true}/>
            </FacebookProvider> 
        </div>
    );
};

export default Messenger; 