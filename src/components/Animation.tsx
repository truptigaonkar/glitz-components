import React from 'react'
import { styled } from '@glitz/react';
import { H2, P, Hr } from '../Shared/Generic';

const Animation = () => {
    return (
        <styled.Div>
            <H2>Animation</H2><Hr />
                <P>The example will change both the background-color and the position of the element when the animation is 25% complete, 50% complete, and again when the animation is 100% complete.It uses the value "infinite" to make the animation continue for ever.</P>
                <Box>Box</Box>
        </styled.Div>
    )
}

export default Animation

const Box = styled.div({
    width: '100px',
    height: '100px',
    backgroundColor: 'red',
    position: 'relative',
    display:'flex',
    justifyContent: 'center',
    color: 'white',
    alignItems: 'center',
    animationName: {
        '0%':  {backgroundColor:'red', left:'0px', top:'0px',},
        '25%':  {backgroundColor:'yellow', left:'200px', top:'0px',},
        '50%':  {backgroundColor:'blue', left:'200px', top:'200px',},
        '75%':  {backgroundColor:'green', left:'0px', top:'200px',},
        '100%': {backgroundColor:'red', left:'0px', top:'0px',} 
    },
    animationDuration: '4s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    animationTimingFunction: 'linear', //animation-timing-function: linear/ease-in-out/steps(5, end)/cubic-bezier(0.1, -0.6, 0.2, 0);
});