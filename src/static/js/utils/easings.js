const easeOutSine = t => {
    return Math.sin(t * (Math.PI / 2));
};

const easeOutCubic = t => {
    return (--t) * t * t + 1;
};

export { easeOutSine, easeOutCubic };
