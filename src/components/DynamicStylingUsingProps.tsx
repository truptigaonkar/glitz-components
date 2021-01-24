import React from 'react'
import { styled } from '@glitz/react';

type PropType = {
    success?: boolean;
    color?: string;
}
const DynamicStylingUsingProps = (props: PropType) => {
    return (
        <div>
            <styled.Span css={{ color: props.success ? 'green' : 'red' }}>Hello world!</styled.Span><br/>
            <styled.H4 css={{ color: props.color ? props.color : 'yellow' }}>Hello world!</styled.H4>
        </div>
    )
}

export default DynamicStylingUsingProps
