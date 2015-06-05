var React = require('react');

var Index = React.createClass({
    displayName: 'Index',

    render: function() {
        var styles = {
            frontHeader: {
                fontSize: '54px',
                lineHeight: '1.5',
            },
            headerImage: {
                background: '#558E8E',
                backgroundImage: 'url(/images/front.jpg)',
                backgroundSize: 'cover',
                backgroundPositionX: '50%',
            },
            frontArrow: {
                paddingTop: '4vw',
                color: 'rgba(255, 255, 255, 0.4)',
            },
        };

        return (
            <div className='post post--front'>
                <div className='header-image header-image--front' style={styles.headerImage}></div>
                <div className='post__heading'>
                    <span className='logo logo--front' dangerouslySetInnerHTML={{__html: require('../images/koodilehto_logo_white.svg')}} />
                    <h1 className='front-header' style={styles.frontHeader}>Koodilehto</h1>
                    <h3>Combines open technologies for your benefit</h3>
                    <div className='front__buttons'>
                        {/*<a href='blog' className='btn btn--inverted'>Read the Blog</a>*/}
                        <a href='https://github.com/koodilehto' className='btn btn--inverted'>View on GitHub</a>
                    </div>
                    <div className='front-arrow' style={styles.frontArrow}>&#x25BC;</div>
                </div>
                <div className='post__content'>
                    <h2>What is Koodilehto?</h2>

                    <p>Koodilehto is a collective of happy hipsters. Most of us have a university background. We focus on web and embedded development.</p>

                    <p>Our members have some serious open source chops. In particular we have experience on Linux, Raspberry Pi and React.</p>

                    <h2>Showcase</h2>

                    <p>We prefer to work using open source technologies. This is visible in our showcase below.</p>

                    <h3><a href='http://kryptoradio.koodilehto.fi/'>Kryptoradio</a></h3>

                    <p>
                        <img className='inline-img' alt="Kryptoradio" src="images/kryptoradio.png" />
                    </p>

                    <p>Kryptoradio makes it possible to access the bitcoin network from anywhere, through DVB. It enables new ways to perform monetary transactions with minimal costs. Currently we are running trials on the technology at Finland.</p>

                    <h3><a href='http://jkl.paatokset.fi/'>Päätökset.fi - Jyväskylä</a></h3>

                    <p>
                        <img className='inline-img' alt="Kryptoradio" src="images/paatoksetjkl.png" />
                    </p>

                    <p>Päätökset.fi provides access to decisions made at Jyväskylä municipality in various forms. You can for instance check out the map to see which decisions affect you as a resident. Finnish only.</p>

                    <h3><a href='http://elovalo.koodilehto.fi/'>Elovalo</a></h3>

                    <div className="center figure"><img alt="Elovalo led cube in development" src="images/elovalo2.jpg" /><p className="teaser">Elovalo, a led cube and pedestal</p></div>

                    <p>Elovalo was a joint venture between <a href='http://hacklabjkl.org/'>Hacklab Jkl</a>, <a href='http://www.ihmemedia.fi/'>IhmeMedia</a> and Koodilehto. The three cubes produced during the project have effective resolution of 512 voxels and are controllable using C and JavaScript. Our graphics controller is based on AVR ATMega328 and is quite minimal yet effective.</p>

                    <p>The project is a good example of collaboration between local organizations. It showcases our expertise in embedded development and 3D graphics. One instance of this latter was <a href='https://www.blender.org/'>Blender</a> based simulator we implemented and then used to visualize our effects before actual hardware was ready. In addition a JavaScript based IDE was implemented.</p>

                    <h3><a href='https://antwarjs.github.io/'>Antwar</a></h3>

                    <p>
                        <img className='inline-img' alt="Kryptoradio" src="images/antwar.jpg" />
                    </p>

                    <p>This site has been built on top of <a href='https://antwarjs.github.io/'>Antwar</a>, a static site generator developed on top of Webpack and React. It is based on <a href='http://braddenver.com/'>Brad Denver</a>'s pioneering work and has been taken much further than the initial concept. <a href='http://eldh.co/'>Andreas Eldh</a> in particular has helped to push it further.</p>

                    <h3><a href='http://survivejs.com/'>SurviveJS - Webpack and React</a></h3>

                    <p>
                        <img className='inline-img' alt="Kryptoradio" src="images/survivejs.jpg" />
                    </p>

                    <p>SurviveJS - Webpack and React is an ebook aimed towards developers interested in keeping their frontend fu up to date. These two technologies represent one of the biggest steps forward. The ebook helps you to get ahead of the competition.</p>

                    <h2>Members</h2>

                    <div className="members">
                        <a href="https://github.com/epeli" className="member">
                            <img src="images/professionals/epeli.jpg" alt="Epeli" />
                        </a>
                        <a href="https://twitter.com/maakuth" className="member">
                            <img src="images/professionals/maakuth.jpg" alt="Maakuth" />
                        </a>
                        <a href="http://blog.deggis.iki.fi" className="member">
                            <img src="images/professionals/deggis.png" alt="Deggis" />
                        </a>
                        <a href="https://twitter.com/eladith" className="member">
                            <img src="images/professionals/eladith.png" alt="Eladith" />
                        </a>
                        <a href="https://twitter.com/zouppen" className="member">
                            <img src="images/professionals/joell.jpg" alt="Zouppen" />
                        </a>
                        <a href="http://tjjr.fi" className="member">
                            <img src="images/professionals/tuomasjjrasanen.png" alt="tuomasjjrasanen" />
                        </a>
                        <a href="https://github.com/bebraw" className="member">
                            <img src="https://www.gravatar.com/avatar/b26ec3c2769168c2cbc64cc3df9cdd9c?s=200" alt="bebraw" />
                        </a>
                        <a href="http://cornix.info/" className="member">
                            <img src="/images/professionals/jouni_potila_3.jpg" alt="cornix" />
                        </a>
                        <a href="https://twitter.com/TuomoSipola" className="member">
                            <img src="/images/professionals/tuomo_sipola_20120803.png" alt="zipola" />
                        </a>
                        <a href="http://alexhanh.com" className="member">
                            <img src="http://www.gravatar.com/avatar/8a31cdd4db37fa32b99442ed071dd72c?s=200" alt="alexhanh" />
                        </a>
                        <a href="http://www.linkedin.com/in/airzero" className="member">
                            <img src="/images/professionals/airzero.jpg" alt="airzero" />
                        </a>
                    </div>
                </div>

                <h2>Contact</h2>

                <p><a href="mailto:info@koodilehto.fi">info@koodilehto.fi</a></p>
                <p>Phone: +358 40 4619296</p>
                <p>Business ID: 2446827-3</p>

                <h2>Attributions</h2>

                <p><a href="http://www.flickr.com/photos/13522901@N00/6945360545/">6LB6 by splorp (CC-BY-NC-ND)</a></p>
            </div>
        );
    }
});

module.exports = Index;
