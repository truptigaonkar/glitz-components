import React, {useState} from 'react'
import { styled } from '@glitz/react';

const BasicGlitz = (props:any) => {
    const [backgroundColor, setBackgroundColor] = useState('papayawhip');
    function onClickButton() {
        setBackgroundColor(backgroundColor === 'papayawhip' ?'lightblue' : 'papayawhip');
    }
    return (
        <div>
            <h5>Basic</h5>
            <p>This example creates two simple components, a wrapper and a title, with some styles attached to it:</p>
            <Wrapper style={{ backgroundColor }}>
                <Title>Hover <styled.Span css={{ color: 'red' }}>me!</styled.Span></Title>
                <Button onClick={onClickButton}>Change background color</Button>
            </Wrapper>
        </div>
    )
}

export default BasicGlitz

const Wrapper = styled.section({
    padding: {xy: '4em'},
    backgroundColor: 'papayawhip',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
})

const Title = styled.h1({
    fontSize: '1.5em',
    color: 'palevioletred',
    ':hover': {
        cursor: 'pointer',
        color:'green',
    },
})

const Button = styled.button({
    fontSize: '1em',
    margin: { xy: '2em' },
    //    margin: {
    //     top: '20px',
    //     right: '20px',
    //     bottom: '20px',
    //     left: '10px',
    //   },
    border:
    {
        xy:
        {
            width: 2,
            style: 'solid',
            color: 'palevioletred'
        }
    }, //border: 2px solid palevioletred;
    padding: {
        x: '1em',
        y: '.25em',
    }, //padding: 0.25em 1em;
    borderRadius: '3px',
    // width: ['50%', 'fit-content'],
    width: [100, 'max-content'],
})