import { styled } from '@glitz/react'
import React from 'react'
import { H3, Hr } from '../Shared/Generic'

const DeepStyleComposition = () => {
    return (
        <div>
            <H3>Deep style composition OR Extended styling</H3>
            <InvertedLink>HOVER ON ME</InvertedLink><Hr />
        </div>
    )
}

export default DeepStyleComposition

const Link = styled.a({
    color: 'grey',
    ':hover': {
        color: 'black',
        textDecoration: 'underline',
        textTransform: 'lowercase',
      },
})

const InvertedLink = styled(Link, {
    ':hover': {
      color: 'red',
      fontWeight: 'bold',
    },
    // Results in:
    // {
    //   color: 'grey',
    //   ':hover': {
    //     color: 'red',
    //     textDecoration: 'underline',
    //     textTransform: 'lowercase',
    //     fontWeight: 'bold',
    //   }
    // }
});