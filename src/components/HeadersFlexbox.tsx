import { media } from '@glitz/core'
import { styled } from '@glitz/react'
import React from 'react'

const HeadersFlexbox = () => {
    return (
        <styled.Header>
            <Wrapper>
                <A href="#" css={{ fontWeight: 'bold' }}>Brand</A>
                <Nav>
                    <ToggleButton aria-expanded="false" type="button">menu</ToggleButton>
                    <NavWrapper>
                        <Li><A href="#">Home</A></Li>
                        <Li><A href="#">About</A></Li>
                        <Li><A href="#">Services</A></Li>
                        <Li><A href="#">Hire us</A></Li>
                        <Li><A href="#">Contact</A></Li>
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
    color: '#262626',
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

const ToggleButton = styled.button({
    display: 'block',
    ...media('(min-Width: 480px)',{
          display: 'none',
        }),
})

