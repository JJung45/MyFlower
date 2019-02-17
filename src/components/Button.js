import styled from 'styled-components';

export const Button = styled.button`
    border-color: ${props => props.order?"var(--lightRed)":"rgba(0,0,0,.125)"};
    color: ${props => props.order?"var(--lightRed)":"var(--lightDark)"};
    font-weight: 777;
    &:hover{
        color: ${props => props.order?"var(--lightRed)":"var(--lightDark)"};
        background:  ${props => props.order?"#a6827c59":"rgba(0,0,0,.125)"};
    }
`;