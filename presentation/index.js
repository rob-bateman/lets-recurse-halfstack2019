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
  infinite_plane: require('../assets/videoblocks-retro-infinite-plane.png'),
  mario: require('../assets/mario-emerge.gif'),
  times_table_circle: require('../assets/TimesTableCircle.png'),
  times_table_circle1: require('../assets/TimesTableCircle1.png'),
  times_table_circle2: require('../assets/TimesTableCircle2.png'),
  dice: require('../assets/two_red_dice_01-svg.png'),
  hands: require('../assets/hands.gif'),
  conwayrules: require('../assets/conwaysgrids_2.png'),
  gol: {
    block: require('../assets/gol/66px-Game_of_life_block_with_border.png'),
    boat: require('../assets/gol/82px-Game_of_life_boat.png'),
    beehive: require('../assets/gol/98px-Game_of_life_beehive.png'),
    loaf: require('../assets/gol/98px-Game_of_life_loaf.png'),
    glider: require('../assets/gol/Game_of_life_animated_glider.gif'),
    spaceship: require('../assets/gol/Game_of_life_animated_LWSS.gif'),
    beacon: require('../assets/gol/Game_of_life_beacon.gif'),
    blinker: require('../assets/gol/Game_of_life_blinker.gif'),
    toad: require('../assets/gol/Game_of_life_toad.gif'),
    gun: require('../assets/gol/Long_gun.gif'),
    puffer_train: require('../assets/gol/Stable_puffer_animation.gif'),
    gol_assemblyscript: require('../assets/gol/conwaysgol_assemblyscript.png'),
  },
  like_a_dream: require('../assets/Like in a dream - 3D fractal trip - YouTube.mp4'),
  phyllotaxis: require('../assets/Aloe_polyphylla_1.jpg'),
  elevation: require('../assets/maxresdefault.jpg'),
  demoscene1: require('../assets/maxresdefault.jpg'),
  demoscene2: require('../assets/maxresdefault.jpg'),
  demoscene3: require('../assets/maxresdefault.jpg'),
  demoscene4: require('../assets/maxresdefault.jpg'),
  demoscene5: require('../assets/maxresdefault.jpg'),
  demoscene6: require('../assets/maxresdefault.jpg'),
  demoscene7: require('../assets/maxresdefault.jpg'),
  demoscene8: require('../assets/maxresdefault.jpg'),
  demoscene9: require('../assets/maxresdefault.jpg'),
  complex_quad_prog: require('../assets/ComplexQuadraticProgression.png'),
  complex_quad_prog1: require('../assets/ComplexQuadraticProgression1.png'),
  frax: require('../assets/frax-800.jpg'),
  aurullia2: require('../assets/aurullia-2-1440@2x.jpg'),
  aurullia6: require('../assets/aurullia-6-1440@2x.jpg'),
  planar5: require('../assets/planar-5-1440@2x.jpg'),
  neural_simulation: require('../assets/neural_simulation.png'),
  log_table: require('../assets/log10_section.png'),
  builder_bot_dials: require('../assets/builder_bot_dials.jpg'),
  how_machines_learn: require('../assets/how_machines_learn.jpg'),
  neural_simulation_video: require('../assets/Neural Network 3D Simulation.mp4'),
};

const fullScreenSlide = {
  position: 'relative',
  height: '100%',
  width: '100%'
}

const iframeStyle = {
  border: 'none',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme} contentWidth={1280} contentHeight={1000}>
        <Slide bgDarken='0.7' bgImage={images.droste}>
          <Notes>
           <h4>Introduction</h4>
          <ol>
            <li>Open source work at the Away Foundation</li>
            <li>Geometric maths a bit of a hobby</li>
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
            lang="typescript"
            code={require("raw-loader!../assets/Basic.ts")}
            ranges={[
              { loc: [0, 572], title: "Basic" }
            ]}>
          <Notes>
           <h4>Start with the basic(s)</h4>
          </Notes>
        </CodeSlide>
        <CodeSlide bgDarken='0.7' bgImage={images.infinite_plane} textSize="50" 
            showLineNumbers={false}
            transition={[]}
            lang="typescript"
            code={require("raw-loader!../assets/Javascript.ts")}
            ranges={[
              { loc: [0, 572], title: "Javascript" }
            ]}>
          <Notes>
           <h4>Although this is probably more familiar. What were we thinking?</h4>
          </Notes>
        </CodeSlide>
        <CodeSlide bgDarken='0.7' bgImage={images.infinite_plane} textSize="50" 
            showLineNumbers={false}
            transition={[]}
            lang="typescript"
            code={require("raw-loader!../assets/Recursion.ts")}
            ranges={[
              { loc: [0, 572], title: "Recursion" }
            ]}>
          <Notes>
            <h4>Recursion uses whats known in maths as a progression.</h4>
            <ol>
              <li>Can be <b>Arithmetic</b> (plus / minus)</li>
              <li>Or <b>Geometric</b> (mutiply / divide)</li>
            </ol>
          </Notes>
        </CodeSlide>
        <CodeSlide bgDarken='0.7' bgImage={images.infinite_plane} textSize="50" 
            showLineNumbers={false}
            transition={[]}
            lang="typescript"
            code={require("raw-loader!../assets/TimesTable.ts")}
            ranges={[
              { loc: [0, 572], title: "Times Table" }
            ]}>
          <Notes>
            <h4>We can generalise to capture all results in a set.</h4>
          </Notes>
        </CodeSlide>
        <Slide bgDarken='0.3' bgImage={images.mario}>
          <Notes>
            <h4>But why is this interesting?</h4>
          </Notes>
          <Heading top size={1}>Emergence!</Heading>
        </Slide>
        <Slide bgDarken='0.7' bgImage={images.infinite_plane}>
          <Notes>
            <h4>Lets look at things a different way</h4>
          </Notes>
          <Image src={images.times_table_circle} height="720px" padding="10px" />
          <Heading size={3} padding="20px">
            <Link href="../TimesTableWebGL"></Link>
          </Heading>
        </Slide>
        <Slide bgDarken='0.7' bgImage={images.infinite_plane}>
          <Notes>
            <h4>Results from 1 - 5 are pretty straightforward</h4>
          </Notes>
          <Image src={images.times_table_circle1} height="720px" padding="10px" />
          <Heading size={3} padding="20px">
            <Link href="../TimesTableWebGL"></Link>
          </Heading>
        </Slide>
        <Slide bgDarken='0.7' bgImage={images.infinite_plane}>
          <Notes>
            <h4>6 - 10 produce a vertically symmetric pattern... weird</h4>
            <ol>
              <li>A bit of WebGL magic can show us whats really going on</li>
              <li>Links for all demos will be posted at the end</li>
            </ol>
          </Notes>
          <Image src={images.times_table_circle2} height="720px" padding="10px" />
          <Heading size={3} padding="20px">
            <Link href="../TimesTableWebGL">Mathias Lengler - TimesTableWebGL</Link>
          </Heading>
        </Slide>
        <Slide bgDarken='0.3' bgImage={images.hands} >
          <Notes>
            <h4>Evolving patterns can be useful for creating orgainic looking visuals</h4>
            <ol>
              <li>I searached for "tree fractal", and this showed up</li>
              <li>All credit to fellow southerner Cyriak</li>
            </ol>
          </Notes>
          <Heading size={1}>Simulating Nature</Heading>
        </Slide>
        <Slide bgDarken='0.7' bgImage={images.infinite_plane}>
          <Notes>
            <h4>What could be more natural than life itself?</h4>
            <ol>
              <li>4 rules, but I like the visual simplicity of these 8 tests</li>
              <li>The calculation is performed on every square on every frame, in parallel</li>
            </ol>
          </Notes>
          <Heading top size={1}>Conway's<br /> Game Of Life</Heading>
          <Image src={images.conwayrules} height="400px" padding="50px"/>
        </Slide>
        <Slide bgDarken='0.7' bgImage={images.infinite_plane}>
          <Heading top size={1}>Still Life</Heading>
          <Layout>
            <Image src={images.gol.block} height="250px" padding="10px"/>
            <Image src={images.gol.boat} height="250px" padding="10px"/>
            <Image src={images.gol.boat} height="250px" padding="10px"/>
            <Image src={images.gol.boat} height="250px" padding="10px"/>      
          </Layout>
        </Slide>
        <Slide bgDarken='0.7' bgImage={images.infinite_plane}>
          <Heading top size={1}>Gliders</Heading>
          <Layout>
            <Image src={images.gol.glider} height="250px" padding="10px"/>
            <Image src={images.gol.spaceship} height="250px" padding="10px"/>
          </Layout>
        </Slide>
        <Slide bgDarken='0.7' bgImage={images.infinite_plane}>
          <Heading top size={1}>Oscillators</Heading>
          <Layout>
            <Image src={images.gol.beacon} height="250px" padding="10px"/>
            <Image src={images.gol.blinker} height="250px" padding="10px"/>
            <Image src={images.gol.toad} height="250px" padding="10px"/>
          </Layout>
        </Slide>
        <Slide bgDarken='0.7' bgImage={images.infinite_plane}>
          <Notes>
            <h4>This beast is so crazy it has its own wikipedia page</h4>
          </Notes>
          <Image src={images.gol.puffer_train} height="250px" padding="10px" />
          <Heading size={3} padding="20px">
            <Link href="https://en.wikipedia.org/wiki/Puffer_train">https://en.wikipedia.org/wiki/Puffer_train</Link>
          </Heading>
        </Slide>
        {/* <Slide style={fullScreenSlide}>
          <iframe src='../game-of-life' style={iframeStyle}></iframe>
        </Slide> */}
        <Slide bgDarken='0.7' bgImage={images.infinite_plane}>
          <Notes>
            <h4>Assembly has a nice version that benefits from the performance advantage of Webassembly</h4>
            <ol>
              <li>A random setup of active and inactive squares quickly evolves</li>
              <li>Clicking activates more squares!</li>
            </ol>
          </Notes>
          <Image src={images.gol.gol_assemblyscript} height="550px" padding="10px" />
          <Heading size={3} padding="20px">
            <Link href="../game-of-life">Game Of Life in AssemblyScript</Link>
          </Heading>
        </Slide>
        {/* <Slide bgDarken='0.7' bgImage={images.infinite_plane}>
          <Heading top size={1}>Phyllotaxic Spirals</Heading>
          <Image src={images.phyllotaxis} height="500px" padding="10px"/>
        </Slide> */}
        <Slide bgDarken='0.7' bgImage={images.elevation} >
          <Notes>
            <h4>Benefit from many supergeek nordic minds</h4>
            <ol>
              <li>Competitions are often restricted by size (64k) or platform</li>
              <li>Frequently employ bounded iterative routines to produce interesting pseudo-random outputs</li>
            </ol>
          </Notes>
          <Heading size={1}>Demoscene</Heading>
        </Slide>
        <Slide>
          <Notes>
            <h4>Older work can't get enough of that cyberpunk look</h4>
          </Notes>
          <Layout>
            <Image src={images.demoscene1} height="180px"/>
            <Image src={images.demoscene2} height="180px"/>
            <Image src={images.demoscene3} height="180px"/>
          </Layout>
          <Layout>
            <Image src={images.demoscene4} height="180px"/>
            <Image src={images.demoscene5} height="180px"/>
            <Image src={images.demoscene6} height="180px"/>
          </Layout>
          <Layout>
            <Image src={images.demoscene7} height="180px"/>
            <Image src={images.demoscene8} height="180px"/>
            <Image src={images.demoscene9} height="180px"/>
          </Layout>
        </Slide>
        {/* <Slide bgDarken='0.7' bgImage={images.infinite_plane} >
          <Heading size={1}>Random Numbers</Heading>
          <Layout>
            <Image src={images.dice} height="300px"/>
          </Layout>
        </Slide> */}
        <CodeSlide bgDarken='0.7' bgImage={images.infinite_plane} textSize="50" 
            showLineNumbers={false}
            transition={[]}
            lang="typescript"
            code={require("raw-loader!../assets/Progression.ts")}
            ranges={[
              { loc: [0, 572], title: "Progression" }
            ]}>
          <Notes>
            <h4>We have to go back to our progression</h4>
          </Notes>
        </CodeSlide>
        <CodeSlide bgDarken='0.7' bgImage={images.infinite_plane} textSize="50" 
            showLineNumbers={false}
            transition={[]}
            lang="typescript"
            code={require("raw-loader!../assets/QuadraticProgression.ts")}
            ranges={[
              { loc: [0, 572], title: "Quadratic" }
            ]}>
          <Notes>
            <h4>A <b>Quadratic</b> progression uses a quadratic formula</h4>
          </Notes>
        </CodeSlide>
        <CodeSlide bgDarken='0.7' bgImage={images.infinite_plane} textSize="50" 
            showLineNumbers={false}
            transition={[]}
            lang="typescript"
            code={require("raw-loader!../assets/QuadraticProgressionComplex.ts")}
            ranges={[
              { loc: [0, 572], title: "Complex Quadratic" }
            ]}>
          <Notes>
            <h4>A <b>Complex Quadratic</b> just has complex numbers in place of regular numbers</h4>
            <ol>
              <li>{'x is replaced by {x,y}'}</li>
              <li>{'c is replaced by {cx, cy}'}</li>
            </ol>
          </Notes>
        </CodeSlide>
        <Slide bgDarken='0.7' bgImage={images.infinite_plane}>
          <Notes>
            <h4>Again, looking at it from a different perspective...</h4>
          </Notes>
          <Image src={images.complex_quad_prog} height="720px" padding="10px" />
        </Slide>
        <Slide bgDarken='0.7' bgImage={images.infinite_plane}>
          <Notes>
            <h4>Its not doing much, perhaps use an interactive result to explore?</h4>
          </Notes>
          <Image src={images.complex_quad_prog1} height="720px" padding="10px" />
        </Slide>
        <Slide bgDarken='0.7' bgImage={images.infinite_plane} >
          <video id="background-video" controls autoPlay muted>
            <source src={images.like_a_dream} type="video/mp4" />
          </video>
          <Heading size={3} padding="20px">Mandelbulb</Heading>
        </Slide>
        <Slide bgDarken='0.7' bgImage={images.frax} >
          <Heading size={1}>Tom Beddard</Heading>
          <Heading size={3}>
            <Link href="http://sub.blue">
              http://sub.blue
            </Link>
          </Heading>
        </Slide>
        <Slide bgImage={images.aurullia2}>
        </Slide>
        <Slide bgImage={images.aurullia6}>
        </Slide>
        <Slide bgImage={images.planar5}>
        </Slide>
        <Slide bgDarken='0.7' bgImage={images.neural_simulation} >
          <Notes>
            <h4>Log tables for computers</h4>
            <ol>
              <li>Pre-calculates values</li>
              <li>Uses results for fast lookups at runtime</li>
            </ol>
          </Notes>
          <Heading size={1}>Machine Learning</Heading>
        </Slide>
        <CodeSlide bgDarken='0.7' bgImage={images.infinite_plane} textSize="50" 
            showLineNumbers={false}
            transition={[]}
            lang="typescript"
            code={require("raw-loader!../assets/LogRules.ts")}
            ranges={[
              { loc: [0, 572], title: "Log Rules" }
            ]}>
          <Notes>
            <h4>What was their deal?</h4>
          </Notes>
        </CodeSlide>
        <Slide bgDarken='0.7' bgImage={images.infinite_plane}>
          <Notes>
            <h4>Precalculated values helped speed up calculations</h4>
          </Notes>
          <Image src={images.log_table} height="720px" padding="10px" />
        </Slide>
        <Slide bgDarken='0.7' bgImage={images.infinite_plane}>
          <Notes>
            <h4>In machine learning, a neural net is gradually tweaked to improve the outcome</h4>
          </Notes>
          <Image src={images.builder_bot_dials} height="720px" padding="10px" />
          <Heading size={3}>How Machines *Really* Learn - CGP Grey</Heading>
        </Slide>
        <Slide bgDarken='0.7' bgImage={images.infinite_plane}>
          <Notes>
            <h4>Recurvive neural networks use gradient descent to tweak things</h4>
          </Notes>
          <Image src={images.how_machines_learn} height="720px" padding="10px" />
          <Heading size={3}>Gradient descent - 3Blue1Brown</Heading>
        </Slide>
        <Slide bgDarken='0.7' bgImage={images.infinite_plane} >
          <video id="background-video" controls autoPlay muted>
            <source src={images.neural_simulation_video} type="video/mp4" />
          </video>
          <Heading size={3} padding="20px">Neural Network Simulation</Heading>
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
        </Slide> */}
        <Slide bgDarken='0.7' bgImage={images.infinite_plane}>
          <Heading size={1}>Thank you</Heading>
          <Heading size={3} padding="20px">
            <Link href="https://github.com/rob-bateman/lets-recurse-halfstack2019">https://github.com/rob-bateman</Link>
          </Heading>
          <Heading size={3}>
            <Link href="https://www.twitter.com/robnet">
              @robnet
            </Link>
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
