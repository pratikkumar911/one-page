import styled from "styled-components";
import artwork from "../../artwork/artwork.jpg";

export const Content = styled.div`
    flex: 1;
    background: url(${artwork});
    margin-right: 8rem;
    background-position: center;
    border: solid 3px var(--lightGray);
`;