import React from 'react'
import { styled } from '@glitz/react';
import { P, Hr, H3 } from '../Shared/Generic';

const Pseudoelement = () => {
    return (
        <>
            <styled.H2 css={{ textAlign: 'center' }}>Pseudo Element</styled.H2>
            <styled.Div css={{ display: 'flex', justifyContent: 'space-around' }}>
                <styled.Div>
                    <H3>:before, ::after</H3><Hr />
                    <P>This example creates svenska flag</P>
                    <Svenskaflag></Svenskaflag>
                </styled.Div>
                <styled.Div>
                    <H3>:hover</H3><Hr />
                    <P>This example hovering over svenska flag converts into Denmark flag</P>
                    <SvenskaJapanflag></SvenskaJapanflag>
                </styled.Div>
            </styled.Div><Hr />
        </>
    )
}

export default Pseudoelement

const Svenskaflag = styled.div({
    width: '300px',
    height: '200px',
    backgroundColor: 'darkblue',
    position: 'relative',
    '::after':{
        content: '""',
        width: '100%',
        height: '50px',
        border:
        {
            xy:
            {
                width: 1,
                style: 'solid',
                color: 'yellow',
            }
        },
        backgroundColor: 'yellow',
        position: 'absolute',
        marginTop: '25%',
    },
    ':before':{
        content: '""',
        position: 'absolute',
        width: '50px',
        height: '100%',
        backgroundColor: 'yellow',
        marginLeft: '25%',
    }
})

const SvenskaJapanflag = styled.div({
    width: '300px',
    height: '200px',
    backgroundColor: 'darkblue',
    position: 'relative',
    '::after':{
        content: '""',
        width: '100%',
        height: '50px',
        border:
        {
            xy:
            {
                width: 1,
                style: 'solid',
                color: 'yellow',
            }
        },
        backgroundColor: 'yellow',
        position: 'absolute',
        marginTop: '25%',
    },
    ':before':{
        content: '""',
        position: 'absolute',
        width: '50px',
        height: '100%',
        backgroundColor: 'yellow',
        marginLeft: '25%',
    },
    ':hover':{
        width: '300px',
        height: '200px',
        backgroundColor: 'red',
        position: 'relative',
        '::after':{
            content: '""',
            width: '100%',
            height: '50px',
            backgroundColor: 'white',
            position: 'absolute',
            marginTop: '25%',
        },
        ':before':{
            content: '""',
            width: '50px',
            height: '100%',
            backgroundColor: 'white',
            position: 'absolute',
            marginLeft: '25%',
        },
    },
})