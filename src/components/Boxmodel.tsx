import { styled } from '@glitz/react'
import React from 'react'
import { H3, Hr } from '../Shared/Generic'
import { black, gigantic, medium, monochromeDark, secondaryLight, thin, tiny } from '../Shared/Style'

const Boxmodel = () => {
    return (
        <>
            <H3>width, height, margin, padding, border, color</H3>
            <Boxmodeldiv>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum id metus ac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet sagittis. Vivamus fermentum in arcu in aliquam. Quisque aliquam porta odio in fringilla. Vivamus nisl leo, blandit at bibendum eu, tristique eget.
            </Boxmodeldiv><Hr />
        </>
    )
}

export default Boxmodel

const Boxmodeldiv = styled.div({
    // width: 432,
    // width: areYouSureLarge,
    width: '30%',
    height: 200,
    // padding: {x: medium + tiny, y: gigantic},
    // padding: {xy: medium},
    /* paddingTop: medium,
    paddingRight: medium,
    paddingBottom: medium,
    paddingLeft: medium, */
    padding: {
        top: gigantic,
        right: medium + tiny,
        bottom: medium + tiny,
        left: gigantic,
    },
    backgroundColor: secondaryLight,
    border:
    {
        xy:
        {
            width: 10,
            style: 'solid',
            color: black
        }
    },
    borderBottom: {
        color: monochromeDark,
        style: 'solid',
        width: thin,
    },
    // border: {
    //     xy: {
    //         color: primary,
    //     },
    //     right: {
    //         width: 0,
    //     },
    // },
    // margin: {x: 'auto', y: medium + tiny},
    // margin: {xy: medium},
    /* marginTop: medium + tiny,
    marginRight: 'auto',
    marginBottom: medium + tiny,
    marginLeft: 'auto', */
    margin: {
        top: medium + tiny,
        right: 'auto',
        bottom: medium + tiny,
        left: 'auto',
    },
})