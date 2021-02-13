import React from 'react'
import { styled } from '@glitz/react';

type Props = {
    title: string;
  };

const GlobalStyling = (props: Props) => {
    return (
      <>
      <styled.Span>Some bold and green text</styled.Span>
      <styled.A>Underlined when hovered</styled.A>
      </>
    )
}

export default GlobalStyling
