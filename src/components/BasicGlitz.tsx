import React from 'react'
import { styled } from '@glitz/react';

const BasicGlitz = () => {
    return (
        <div>
            <h5>Basic</h5>
            <p>This example creates two simple components, a wrapper and a title, with some styles attached to it:</p>
                <Wrapper>
                    <Title>Hover me!</Title>
                </Wrapper>
        </div>
    )
}

export default BasicGlitz

const Wrapper = styled.section({
    padding: {xy: '4em'},
    backgroundColor: 'papayawhip'
})

const Title = styled.h1({
    fontSize: '1.5em',
    textAlign: 'center',
    color: 'palevioletred',
    ':hover': {
        cursor: 'pointer',
        color:'green',
    },
})