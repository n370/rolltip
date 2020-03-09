import React, { useRef, useState, useEffect, cloneElement } from 'react';
import {
    getInitialTransform,
    getAdjustedTransform,
    getVisibility
} from './lib/positioning';
import css from './main.scss';

const { main, target, tooltip, content } = css;

const Tooltip = ({ message, children, position = 'bottom', spacing = 0 }) => {
    const initialState = {
        isVisible: false,
        transform: 'unset'
    };

    const [state, setState] = useState(initialState);

    const targetRef = useRef();

    const tooltipRef = useRef();

    const show = () => {
        setState(prevState => ({
            ...prevState,
            isVisible: true,
            transform: getAdjustedTransform(
                targetRef.current.getBoundingClientRect(),
                tooltipRef.current.getBoundingClientRect(),
                position,
                spacing,
                window.innerWidth,
                window.innerHeight
            )
        }));
    };

    const hide = () => {
        setState(prevState => ({
            ...prevState,
            isVisible: false,
            transform: getInitialTransform(
                targetRef.current.getBoundingClientRect(),
                tooltipRef.current.getBoundingClientRect(),
                position,
                spacing
            )
        }));
    };

    const handleMouseLeave = () => {
        hide();
    };

    const handleMouseEnter = () => {
        show();
    };

    const handleClick = () => {
        show();
    };

    useEffect(() => {
        window.addEventListener('scroll', hide);
        window.addEventListener('click', hide, true);

        setState(prevState => ({
            ...prevState,
            transform: getInitialTransform(
                targetRef.current.getBoundingClientRect(),
                tooltipRef.current.getBoundingClientRect(),
                position,
                spacing
            )
        }));

        return () => {
            window.removeEventListener('scroll', hide);
            window.removeEventListener('click', hide);
        };
    }, []);

    return (
        <div
            ref={targetRef}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={main}
        >
            <div className={target}>{children[0]}</div>
            <div
                className={tooltip}
                style={{
                    overflowX: getVisibility(state.isVisible),
                    visibility: getVisibility(state.isVisible),
                    transform: state.transform
                }}
            >
                <div className={content}>
                    {cloneElement(children[1], { ref: tooltipRef })}
                </div>
            </div>
        </div>
    );
};

export default Tooltip;
