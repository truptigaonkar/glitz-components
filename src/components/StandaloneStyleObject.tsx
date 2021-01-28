import React from 'react'
import { styled } from '@glitz/react'
import { Style } from '@glitz/type'

const StandaloneStyleObject = () => {
    const box2Style: Style = { backgroundColor: 'blue' };

    return (
        <styled.Div css={{display: 'flex'}}>
            <Box1 css={{ backgroundColor: 'red' }}></Box1>
            <Box2 css={box2Style}></Box2>
        </styled.Div>
    )
}

export default StandaloneStyleObject

const Box1 = styled.div({
    width: '100px',
    height: '100px',
})

const Box2 = styled(Box1, {
    width: '200px',
    height: '200px',
    marginLeft: '2em',
});