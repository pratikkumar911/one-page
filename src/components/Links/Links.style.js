import styled from 'styled-components';

export const Wrapper  = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:40px;
`;
export const Container  = styled.div`
    display:flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`;
export const Heading  = styled.h1`
    font-size:var(--fontBig);
    color:var(--${(props)=>props.color})
`;
export const Link  = styled.a`
    font-size:var(--fontMed);
    text-decoration:none;
    color:var(--white);
    padding:0.5rem;
    cursor: pointer;
    :hover{
        text-decoration:underline;
    }
`;