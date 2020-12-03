import React from 'react'
import { styled } from '@glitz/react';
import { H2, Hr, Ul } from '../Shared/Generic';
import { secondaryDark, thick, thin } from '../Shared/Style';

const Extra = () => {
    return (
        <Ul column>
            <H2>Ul, Divider</H2><Hr />
            <li>1</li>
            <Divider />
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </Ul>
    )
}

export default Extra

const Divider = styled.div({
    width: '100%',
    height: thin,
    backgroundColor: secondaryDark,
    margin: { y: thick },
  });
