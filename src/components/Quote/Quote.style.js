import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items: left;
    margin-top:30px;
`;
export const Quote = styled.div`
    font-size:var(--fontMed);
    font-style: italic;
    color:var(--lightGray);
`;
export const Author = styled.div`
    font-size:var(--fontSmall);
    color:var(--darkGray);
`;