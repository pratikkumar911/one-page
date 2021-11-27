import {Wrapper, Quote, Author} from "./Quote.style";

const QuoteSection = ({content, author}) => {
    return(
        <Wrapper>
            <Quote>"{content}"</Quote>
            <Author>-{author}</Author>
        </Wrapper>
    )
}
export default QuoteSection