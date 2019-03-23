import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import AnimationWrapper from './AnimationWrapper';

const WrapperContent = () => <>
    <h2>Heading</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod ante augue, in iaculis purus vehicula vitae. Nulla commodo eros id tincidunt porttitor. Pellentesque facilisis quis metus eget aliquet. Praesent imperdiet velit eu lacus feugiat, a feugiat ipsum placerat. Donec id fermentum magna. Pellentesque est felis, fermentum et condimentum id, ullamcorper id lorem. In sagittis dolor elit, sit amet congue orci egestas vel. Suspendisse auctor varius cursus. Phasellus in eleifend erat. Maecenas id arcu suscipit, placerat justo a, pharetra dui. Morbi gravida efficitur lorem. Donec quis volutpat felis.</p>
</>;

const Content = () => <><div className='column column--primary'><WrapperContent /></div>
    <div className='column column--secondary'><WrapperContent /></div>
    <div className='column column--primary'><WrapperContent /></div>
    <div className='column column--secondary'><WrapperContent /></div>
</>;

storiesOf('AnimationWrapper', module)
    .addDecorator(withKnobs)
    .addDecorator(withA11y)
    .addDecorator(story => (<div style={{ margin: '10px' }}>{story()}</div>))
    .add('default', () => <AnimationWrapper className='wrapper wrapper--lrg wrapper--columns-2'><Content /></AnimationWrapper>)
    .add('fade up', () => <AnimationWrapper className='wrapper wrapper--lrg wrapper--columns-2' animation='fade-up'><Content /></AnimationWrapper>)
    .add('fade down', () => <AnimationWrapper className='wrapper wrapper--lrg wrapper--columns-2' animation='fade-down'><Content /></AnimationWrapper>)
    .add('fade left', () => <AnimationWrapper className='wrapper wrapper--lrg wrapper--columns-2' animation='fade-left'><Content /></AnimationWrapper>)
    .add('fade right', () => <AnimationWrapper className='wrapper wrapper--lrg wrapper--columns-2' animation='fade-right'><Content /></AnimationWrapper>)
    .add('trail', () => <AnimationWrapper className='wrapper wrapper--lrg wrapper--columns-2' trailChildren={true}>
        <div className='column column--primary'><WrapperContent /></div>
        <div className='column column--secondary'><WrapperContent /></div>
        <div className='column column--primary'><WrapperContent /></div>
        <div className='column column--secondary'><WrapperContent /></div>
    </AnimationWrapper>);
