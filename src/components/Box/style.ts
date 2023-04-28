import styled from 'styled-components';
import * as T from './types';

export const Box = styled.div <T.Box>`
    margin: ${({ m }) => (m ? m * 8 : 0)}px;
    margin-top: ${({ mt }) => (mt ? mt * 8 : 0)}px;
    margin-bottom: ${({ mb }) => (mb ? mb * 8 : 0)}px;
    margin-left: ${({ ml }) => (ml ? ml * 8 : 0)}px;
    margin-right: ${({ mr }) => (mr ? mr * 8 : 0)}px;
    padding: ${({ p }) => (p ? p * 8 : 0)}px;
    padding-top: ${({ pt }) => (pt ? pt * 8 : 0)}px;
    padding-bottom: ${({ pb }) => (pb ? pb * 8 : 0)}px;
    padding-left: ${({ pl }) => (pl ? pl * 8 : 0)}px;
    padding-right: ${({ pr }) => (pr ? pr * 8 : 0)}px;
`;
export default {};
