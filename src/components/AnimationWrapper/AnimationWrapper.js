// Libs
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring, useTrail } from 'react-spring';

// Utils
import animations from './helpers/animations';

// Components

// Component
const AnimationWrapper = ({ animate, animationDirection, children, delay, element, animation, trailChildren, tstId, ...attributes }) => {
    const Element = animated[element];

    let animationProps;
    let trailItems;

    const getAnimation = () => {
        const configuration = animations[animation];

        return animationDirection === 'forwards' ? configuration : { from: animations[animation].to, to: animations[animation].from };
    };

    const [removeAnimation, setRemoveAnimation] = useState(false);
    if (trailChildren) {
        trailItems = useTrail(children.length, { ...getAnimation(), onRest: () => setRemoveAnimation(true) });
    } else {
        animationProps = useSpring({ ...getAnimation(), onRest: () => setRemoveAnimation(true), ...{ delay } });
    }

    return (
        <Element {...attributes} style={trailChildren || !animate || removeAnimation ? null : animationProps} data-test-id={tstId}>
            {trailChildren ?
                trailItems.map((trailProps, i) => {
                    const ChildElement = animated[children[i].type];

                    return <ChildElement key={i} style={removeAnimation ? {} : trailProps} {...children[i].props}></ChildElement>;
                }) :
                children
            }
        </Element>
    );
};

// Default props
AnimationWrapper.defaultProps = {
    animate: true,
    animationDirection: 'forwards',
    delay: 0,
    element: 'div',
    animation: 'fade-up',
    trailChildren: false
};

const { bool, oneOf, string, number } = PropTypes;

AnimationWrapper.propTypes = {
    animate: bool,
    animationDirection: oneOf(['forwards', 'backwards']),
    delay: number,
    element: string,
    animation: string,
    trailChildren: bool,
    tstId: string
};


export default AnimationWrapper;
