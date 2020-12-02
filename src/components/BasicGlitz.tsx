import React, {useState} from 'react'
import { styled } from '@glitz/react';
import { huge, humongous, large, medium, small } from '../Shared/Style';
import * as style from '../Shared/Style';
import { black, monochromeLight, neutralDark, positiveLight, secondaryDark, tertiaryDark, white } from '../Shared/Style';

const BasicGlitz = (props:any) => {
    const [backgroundColor, setBackgroundColor] = useState(neutralDark);
    function onClickButton() {
        setBackgroundColor(backgroundColor === neutralDark ? positiveLight : neutralDark);
    }
    return (
        <div>
            <h5>Basic</h5>
            <p>This example creates two simple components, a wrapper a title, a button with some styles attached to it: margin, padding, border, </p>
            <Wrapper style={{ backgroundColor }}>
                <Title>Hover <styled.Span css={{ color: tertiaryDark }}>me!</styled.Span></Title>
                <Button onClick={onClickButton}>Change background color</Button>
            </Wrapper>
        </div>
    )
}

export default BasicGlitz

const Wrapper = styled.section({
    padding: {xy: humongous},
    backgroundColor: neutralDark,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
})

const Title = styled.h1({
    fontSize: '1.5em',
    color: monochromeLight,
    ':hover': {
        cursor: 'pointer',
        color:secondaryDark,
    },
})

const Button = styled.button({
    fontSize: '1.2em',
    /* // Margin different ways
    margin: { xy: '2em' },
    margin: {
        top: '20px',
        right: '30px',
        bottom: '20px',
        left: '30px',
    },*/
    marginTop: small,
    marginRight: medium,
    marginBottom: small,
    marginLeft: medium, 
    border:
    {
        xy:
        {
            width: 2,
            style: 'solid',
            color: black
        }
    }, //border: 2px solid palevioletred;
    /* // Padding different ways
    padding: {
        x: '1em',
        y: '.25em',
    }, //padding: 0.25em 1em;
    padding: {
        top: '20px',
        right: '30px',
        bottom: '20px',
        left: '30px',
    }, */
    paddingTop: large,
    paddingRight: huge,
    paddingBottom: large,
    paddingLeft: huge,
    borderRadius: style.tiny,
    ':hover':{
        backgroundColor: black,
        color: white,
    }
})