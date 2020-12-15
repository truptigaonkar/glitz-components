import { media } from '@glitz/core'
import { styled } from '@glitz/react'
import React from 'react'
import { negativeText, thick } from '../Shared/Style'

const HeadersFlexbox = () => {
    return (
        <styled.Header>
            <Wrapper>
                <A href="#" css={{ fontWeight: 'bold' }}>Brand</A>
                <Nav>
                    <ToggleButton aria-expanded="false" type="button">menu</ToggleButton>
                    <NavWrapper>
                        <Li><LinkA href="#">Home</LinkA></Li>
                        <Li><LinkA href="#">About</LinkA></Li>
                        <Li><LinkA href="#">Services</LinkA></Li>
                        <Li><LinkA href="#">Hire us</LinkA></Li>
                        <Li><LinkA href="#">Contact</LinkA></Li>
                    </NavWrapper>
                </Nav>
            </Wrapper>
        </styled.Header>
    )
}

export default HeadersFlexbox

const Wrapper = styled.div({
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'space-around',
    backgroundColor: 'skyblue',
})

const Nav = styled.nav({
    display: 'flex',
})

const NavWrapper = styled.ul({
    ...media('(max-Width: 480px)',{
          display: 'none',
        }),
    display: 'flex',
    textDecoration: 'none',
    listStyleType: 'none',
})

const Li = styled.li({
    padding: {
        top: '10px',
        right: '10px',
        bottom: '10px',
        left: '10px',
    },
})

const A = styled.a({
    textDecoration: 'none',
})

const LinkA = styled(A, {
    ':hover': {
        borderBottom: {
            color: negativeText,
            style: 'solid',
            width: thick,
        },
    },
});

const ToggleButton = styled.button({
    display: 'block',
    ...media('(min-Width: 480px)',{
          display: 'none',
        }),
})

