import React, {useState} from 'react'
import { styled } from '@glitz/react';
import { huge, humongous, large, medium, small, thick, thin } from '../Shared/Style';
import * as style from '../Shared/Style';
import { black, monochromeLight, neutralDark, positiveLight, secondaryDark, tertiaryDark, white } from '../Shared/Style';
import { H2, P, Hr, H1, H3, H4, H5, H6, Ul } from '../Shared/Generic';

const BasicGlitz = () => {
    const [backgroundColor, setBackgroundColor] = useState(neutralDark);
    function onClickButton() {
        setBackgroundColor(backgroundColor === neutralDark ? positiveLight : neutralDark);
    }
    return (
        <div>
            <Ul column>
                <H1>Heading1</H1>
                <H2>Heading2</H2>
                <H3>Heading3</H3>
                <H4>Heading4</H4>
                <H5>Heading5</H5>
                <H6>Heading6</H6>
                <Divider />
                <P>P tag: This example creates two simple components, a wrapper a title, a button with some styles attached to it</P>
            </Ul>
            <Hr />
            <Wrapper style={{ backgroundColor }}>
                <Title>Hover <styled.Span css={{ color: tertiaryDark }}>me!</styled.Span></Title>
                <Button onClick={onClickButton}>Change background color</Button>
            </Wrapper>
        </div>
    )
}

export default BasicGlitz

const Divider = styled.div({
    width: '100%',
    height: thin,
    backgroundColor: secondaryDark,
    margin: { y: thick },
  });

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
            width: 1,
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