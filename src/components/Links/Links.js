import {Wrapper, Link, Container, Heading} from './Links.style.js';

const Links = () => {
    return (
        <Wrapper>
            <Container>
                <Heading color="blue">~/edu</Heading>
                <Link href="https://www.wikipedia.org/">wikipedia</Link>
                <Link href="https://news.ycombinator.com/">hackernews</Link>
                <Link href="https://www.geeksforgeeks.org/">gfg</Link>
                <Link href="https://leetcode.com/">leetcode</Link>
                <Link href="https://in.linkedin.com/">linkedin</Link>
            </Container>
            <Container>
                <Heading color="purple">~/dev</Heading>
                <Link href="https://codepen.io/">codepen</Link>
                <Link href="https://github.com/">github</Link>
                <Link href="https://dribbble.com/">dribbble</Link>
                <Link href="https://stackoverflow.com/">stackoverflow</Link>
                <Link href="https://dev.to/">dev.to</Link>
            </Container>
            <Container>
                <Heading color="green">~/fun</Heading>
                <Link href="https://www.youtube.com/">youtube</Link>
                <Link href="https://play.typeracer.com/">typeracer</Link>
                <Link href="https://www.reddit.com/">reddit</Link>
                <Link href="https://www1.yesmovieshd.cc/">yesmovies.hd</Link>
                <Link href="https://gogoanime.cm/">gogoanime</Link>
            </Container>
        </Wrapper>
    )
}

export default Links;