import { styled } from '@glitz/react';
import { headingStyled } from './H1';
import { delta } from '../../Shared/Style';

export const h3Styled = headingStyled({ fontSize: delta });

export default h3Styled(styled.H3);
