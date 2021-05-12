import React from 'react';
import Rolltip from '@n370/rolltip';
import { row, main, target, content } from './App.module.css';

export default () => {
    const spacing = '10px';

    const Demo = props => (
        <Rolltip {...props}>
            <a href="#" className={target}>
                Open tooltip
            </a>
            <div className={content}>This is a tooltip</div>
        </Rolltip>
    );

    return (
        <div className={main}>
            <div className={row}>
                <Demo spacing={spacing} position="right" />
                <Demo spacing={spacing} position="bottom" />
                <Demo spacing={spacing} position="left" />
            </div>
            <div className={row}>
                <Demo spacing={spacing} position="bottom" />
                <Demo spacing={spacing} position="left" />
                <Demo spacing={spacing} position="bottom" />
            </div>
            <div className={row}>
                <Demo spacing={spacing} position="right" />
                <Demo spacing={spacing} position="bottom" />
                <Demo spacing={spacing} position="left" />
            </div>
            <div className={row}>
                <Demo spacing={spacing} position="top" />
                <Demo spacing={spacing} position="right" />
                <Demo spacing={spacing} position="top" />
            </div>
            <div className={row}>
                <Demo spacing={spacing} position="right" />
                <Demo spacing={spacing} position="top" />
                <Demo spacing={spacing} position="left" />
            </div>
        </div>
    );
};
