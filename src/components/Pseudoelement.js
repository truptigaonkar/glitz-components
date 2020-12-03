import React from 'react'
import { styled } from '@glitz/react';

const Pseudoelement = () => {
    return (
        <styled.Div css={{ display: 'flex', justifyContent:'space-around' }}>
            <styled.Div>
                <h5>:before, ::after</h5>
                <p>This example creates svenska flag</p>
                <Svenskaflag></Svenskaflag>
            </styled.Div>
            <styled.Div>
                <h5>:hover</h5>
                <p>This example hovering over svenska flag converts into Denmark flag</p>
                <SvenskaJapanflag></SvenskaJapanflag>
            </styled.Div>
        </styled.Div>
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