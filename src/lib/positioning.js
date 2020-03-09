export const getPositionDetails = position => ({
    isPositive: position === 'right' || position === 'bottom',
    isNegative: position === 'left' || position === 'top',
    isVertical: position === 'left' || position === 'right',
    isHorizontal: position === 'top' || position === 'bottom'
});

export const getVisibility = isVisible => (isVisible ? 'unset' : 'hidden');

export const getInitialTranslateValues = (target, tooltip, position) => {
    const { isPositive, isHorizontal } = getPositionDetails(position);
    const el = isPositive ? target : tooltip;
    const span = isHorizontal ? el.height : el.width;

    let translateX, translateY;

    if (isHorizontal) {
        const centered = tooltip.width / 2 - target.width / 2;
        translateX = -centered;
        translateY = isPositive ? span : -span;
    } else {
        const centered = target.height / 2 - tooltip.height / 2;
        translateX = isPositive ? span : -span;
        translateY = centered;
    }

    return { translateX, translateY };
};

export const getInitialTransform = (target, tooltip, position, spacing) => {
    const { translateX, translateY } = getInitialTranslateValues(
        target,
        tooltip,
        position
    );

    return buildTranslatePropertyValue(
        translateX,
        translateY,
        position,
        spacing
    );
};

export const getAdjustedTransform = (
    target,
    tooltip,
    position,
    spacing,
    containerWidth,
    containerHeight
) => {
    const { isHorizontal } = getPositionDetails(position);

    let { translateX, translateY } = getInitialTranslateValues(
        target,
        tooltip,
        position
    );

    let offset = 0;

    if (isHorizontal) {
        if (tooltip.left < 0) {
            offset = tooltip.left;
        }

        if (tooltip.right > containerWidth) {
            offset = tooltip.right - containerWidth;
        }

        translateX = translateX - offset;
    } else {
        if (tooltip.top < 0) {
            offset = tooltip.top;
        }

        if (tooltip.bottom > containerHeight) {
            offset = tooltip.bottom - containerHeight;
        }

        translateY = translateY - offset;
    }

    return buildTranslatePropertyValue(
        translateX,
        translateY,
        position,
        spacing
    );
};

export const buildTranslatePropertyValue = (
    translateX,
    translateY,
    position,
    spacing
) => {
    const { isHorizontal } = getPositionDetails(position);
    const operatorX = translateX > 0 ? '+' : '-';
    const operatorY = translateY > 0 ? '+' : '-';

    let x, y;

    if (isHorizontal) {
        x = `calc(${translateX}px)`;
        y = `calc(${translateY}px ${operatorY} ${spacing})`;
    } else {
        x = `calc(${translateX}px ${operatorX} ${spacing})`;
        y = `calc(${translateY}px)`;
    }

    return `translate(${x},${y}`;
};
