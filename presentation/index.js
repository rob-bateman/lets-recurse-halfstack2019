// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Notes,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Link,
  Markdown,
  S,
  Appear,
  Table,
  TableItem,
  TableHeader,
  TableHeaderItem,
  TableRow,
  TableBody,
  Layout,
  Fill,
  Fit,
  CodePane,
  Code,
  Image,
} from "spectacle";

import ReactPlayer from 'react-player'

import CodeSlide from 'spectacle-code-slide';

// Import theme

//import createTheme from "spectacle/lib/themes/default";
import createTheme from "spectacle-theme-nova";

import 'spectacle-theme-nova/syntax/prism.nova.css';
import 'spectacle-theme-nova/syntax/prism-typescript'

// Require CSS
require("normalize.css");

const theme = createTheme();

const white = {color: 0xFFFFFF};
const inline = { position:'absolute', left:'45%', top:'-50px', margin:50 };
const gutter = '25px';
const images = {
  droste: require('../assets/droste_effect.gif'),
  nyan: require('../assets/nyancat.gif'),
  infinite_plane: require('../assets/videoblocks-retro-infinite-plane.png')
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide bgDarken='0.7' bgImage={images.droste}>
          <Notes>
           <h4>Introduction</h4>
          <ol>
            <li>Open source work at the Away Foundation</li>
            <li>Interest in interative 2D &amp; 3D</li>
          </ol>
          </Notes>
          <Heading size={1} fit>Lets Recurse!</Heading>
          <Heading size={3}>
            <Link href="https://www.twitter.com/robnet">
              @robnet
            </Link>
          </Heading>
        </Slide>
        <CodeSlide bgDarken='0.7' bgImage={images.infinite_plane} textSize="50" 
            showLineNumbers={false}
            transition={[]}
            lang="js"
            code={require("raw-loader!../assets/Basic.ts")}
            ranges={[
              { loc: [0, 572], title: "Basic" }
            ]}/>
        <Slide bgDarken='0.7' bgImage={images.infinite_plane} >
          <Heading size={1}>Basic</Heading>
        </Slide>
        {/* <Slide bgImage={images.showreel2}>
        </Slide>
        <Slide bgImage={images.showreel3}>
        </Slide>
        <Slide bgImage={images.showreel4}>
        </Slide>
        <Slide bgImage={images.showreel5}>
        </Slide>
        <Slide bgImage={images.showreel6}>
        </Slide>
        <Slide bgImage={images.showreel7}>
        </Slide>
        <Slide bgImage={images.pepperflash}>
          <Notes>
            <h4>Sea change</h4>
            <ol>
              <li>How do we improve</li>
              <li>What do we use</li>
            </ol>
          </Notes>
        </Slide>
        <Slide>
          <Notes>
            <h4>The Ronseal of APIs</h4>
            <ol>
              <li>Access to the GPU</li>
              <li>It has the initials GL ffs</li>
              <li>Speed Speed Speed</li>
            </ol>
          </Notes>
          <Image src={images.webgllogo}/>
          <Appear>
            <Image style={inline} src={images.sparkle} height="500px" />
          </Appear>
        </Slide>
        <Slide bgDarken='0.7'  bgImage={images.nyan}>
          <Notes>
            <h4>Favourite job</h4>
            <ol>
              <li>Best platform?</li>
              <li>Best adaption?</li>
              <li>Best presentation?</li>
            </ol>
          </Notes>
          <Heading size={1}>Conversion</Heading>
        </Slide>
        <Slide bgImage={images.typescriptlogo}>
        </Slide>
        <Slide>
          <Image src={images.awayjslogo} height="300px"/>
          <Heading size={3} padding="20px">
            <Link href="https://github.com/awayjs">http://github.com/awayjs</Link>
          </Heading>
        </Slide>
        <Slide>
          <Layout>
            <Link href="../awayjs-examples-bin/AWDSuzanne.html" margin="0px 10px 0px 10px"><Image src={images.awayjsexamples1} height="180px"/></Link>
            <Link href="../awayjs-examples-bin/Intermediate_AWDViewer.html" margin="0px 10px 0px 10px"><Image src={images.awayjsexamples2} height="180px"/></Link>
            <Link href="../awayjs-examples-bin/Intermediate_PerelithKnight.html" margin="0px 10px 0px 10px"><Image src={images.awayjsexamples3} height="180px"/></Link>
          </Layout>
          <Layout>
            <Link href="../awayjs-examples-bin/CubePrimitive.html" margin="0px 10px 0px 10px"><Image src={images.awayjsexamples4} height="180px"/></Link>
            <Link href="../awayjs-examples-bin/Intermediate_Globe.html" margin="0px 10px 0px 10px"><Image src={images.awayjsexamples5} height="180px"/></Link>
            <Link href="../awayjs-examples-bin/ObjLoaderMasterChief.html" margin="0px 10px 0px 10px"><Image src={images.awayjsexamples6} height="180px"/></Link>
          </Layout>
          <Layout>
            <Link href="../awayjs-examples-bin/Basic_Fire.html" margin="0px 10px 0px 10px"><Image src={images.awayjsexamples7} height="180px"/></Link>
            <Link href="../awayjs-examples-bin/Intermediate_MonsterHeadShading.html" margin="0px 10px 0px 10px"><Image src={images.awayjsexamples8} height="180px"/></Link>
            <Link href="../awayjs-examples-bin/Intermediate_ParticleExplosions.html" margin="0px 10px 0px 10px"><Image src={images.awayjsexamples9} height="180px"/></Link>
          </Layout>
          <Heading size={3} padding="20px">
            <Link href="http://awayjs.github.io/awayjs-examples">awayjs.github.io/awayjs-examples</Link>
          </Heading>
        </Slide>
        <Slide bgDarken='0.7'  bgImage={images.nyan}>
          <Notes>
            <h4>New direction</h4>
            <ol>
              <li>High-res performance</li>
              <li>Under-represented</li>
            </ol>
          </Notes>
          <Heading size={1}>Vectors</Heading>
        </Slide>
        <Slide bgImage={images.icycle1}>
          <Notes>
            <h4>Compilation step</h4>
            <ol>
              <li>Code conversion (AS2 -> JS)</li>
              <li>Shape conversion (Bezier -> vertex buffer</li>
            </ol>
          </Notes>
        </Slide>
        <Slide bgImage={images.icycle2}>
        </Slide>
        <Slide bgImage={images.icycle3}>
        </Slide>
        <Slide>
        <Layout>
          <Image src={images.dennis} height="500px"/>
          <Image src={images.dennis_tris} height="500px"/>
        </Layout>
        <Heading size={3} padding="20px">
            <Link href="../awayjs-examples-bin/AWD3ViewerMinimal.html">Tessellations whatcha want</Link>
        </Heading>
        </Slide>
        <Slide bgImage={images.icycle4} align="center flex-end">
          <Heading size={3} padding="30px">
            <Link href="../icycle_web_bin/index.html">Icycle 2</Link>
          </Heading>
        </Slide>
        <Slide bgDarken='0.7'  bgImage={images.nyan}>
          <Notes>
            <h4>2D and 3D together</h4>
            <ol>
              <li>Universal interactive model</li>
              <li>Flexibile content arrangement</li>
            </ol>
          </Notes>
          <Heading size={1}>Generalisation</Heading>
        </Slide>
        <Slide bgImage={images.drawing}>
          <Heading size={3} padding="30px">
            <Link href="../awayjs-examples-bin/AWDBasicTests.html">Drawing API</Link>
          </Heading>
        </Slide>
        <Slide>
          <Image src={images.sunflower} height="200px" padding="20px"/>
          <Layout>
            <Link href="../sprint_5/Mo.html" margin="30px"><Image src={images.sunflower_screenshot1} height="200px"/></Link>
            <Link href="../sprint_5/Fo.html" margin="30px"><Image src={images.sunflower_screenshot2} height="200px"/></Link>
            <Link href="../sprint_5/So.html" margin="30px"><Image src={images.sunflower_screenshot3} height="200px"/></Link>
          </Layout>
          <Heading size={3} padding="20px">
            <Link href="https://www.sunflowerlearning.com">http://www.sunflowerlearning.com/</Link>
          </Heading>
        </Slide>
        <Slide bgDarken='0.7'  bgImage={images.nyan}>
          <Notes>
            <h4>Speed improvements to download and runtime</h4>
            <ol>
              <li>Tesslation on the fly</li>
              <li>Dynamic caching of shapes &amp; fonts</li>
            </ol>
          </Notes>
          <Heading size={1}>Optimisation</Heading>
        </Slide>
        <Slide bgImage={images.shumway}>
        </Slide>
        <Slide>
          <Image src={images.mathswhizz} height="300px" padding="20px"/>
          <Layout>
            <Link href="../mw_swf_bin/tests.html?folder=MWFirst10lessons&swf=1" margin="30px"><Image src={images.mathswhizz_screenshot1} height="200px"/></Link>
            <Link href="../mw_swf_bin/tests.html?folder=MWFirst10lessons&swf=5" margin="30px"><Image src={images.mathswhizz_screenshot2} height="200px"/></Link>
            <Link href="../mw_swf_bin/tests.html?folder=MWFirst10lessons&swf=8" margin="30px"><Image src={images.mathswhizz_screenshot3} height="200px"/></Link>
          </Layout>
          <Heading size={3} padding="20px">
            <Link href="https://www.whizz.com">http://www.whizz.com</Link>
          </Heading>
        </Slide>
        <Slide bgDarken='0.7'  bgImage={images.nyan}>
          <Notes>
            <h4>AwayJS application focus</h4>
            <ol>
              <li>WebVR content with AwayJS interfaces</li>
              <li>Abstracting an SVG loader</li>
            </ol>
          </Notes>
          <Heading size={1}>Future</Heading>
        </Slide>
        <Slide bgImage={images.vr_headset}>
        </Slide>
        <Slide bgImage={images.svg_lotr}>
        </Slide>
        <Slide bgDarken='0.7' bgImage={images.background}>
          <Heading size={1}>Thank you</Heading>
          <Heading size={3} padding="20px">
            <Link href="https://github.com/awayjs">http://github.com/awayjs</Link>
          </Heading>
          <Heading size={3}>
            <Link href="https://www.twitter.com/robnet">
              @robnet
            </Link>
          </Heading>
        </Slide> */}
      </Deck>
    );
  }
}
