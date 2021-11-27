import {Wrapper, Link, Container, Heading} from './Links.style.js';

const Links = () => {
    return (
        <Wrapper>
            <Container>
                <Heading color="blue">~/edu</Heading>
                <Link href="https://www.wikipedia.org/" target="_blank">wikipedia</Link>
                <Link href="https://news.ycombinator.com/" target="_blank">hackernews</Link>
                <Link href="https://www.geeksforgeeks.org/" target="_blank">gfg</Link>
                <Link href="https://leetcode.com/" target="_blank">leetcode</Link>
                <Link href="https://in.linkedin.com/"target="_blank">linkedin</Link>
            </Container>
            <Container>
                <Heading color="purple">~/dev</Heading>
                <Link href="https://codepen.io/" target="_blank">codepen</Link>
                <Link href="https://github.com/" target="_blank">github</Link>
                <Link href="https://dribbble.com/" target="_blank">dribbble</Link>
                <Link href="https://stackoverflow.com/" target="_blank">stackoverflow</Link>
                <Link href="https://dev.to/" target="_blank">dev.to</Link>
            </Container>
            <Container>
                <Heading color="green">~/fun</Heading>
                <Link href="https://www.youtube.com/" target="_blank">youtube</Link>
                <Link href="https://play.typeracer.com/" target="_blank">typeracer</Link>
                <Link href="https://mangakalot.org/" target="_blank">manga</Link>
                <Link href="https://www1.yesmovieshd.cc/" target="_blank">yesmovies.hd</Link>
                <Link href="https://gogoanime.cm/" target="_blank">gogoanime</Link>
            </Container>
        </Wrapper>
    )
}

export default Links;