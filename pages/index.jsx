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
                <div className='post__content' dangerouslySetInnerHTML={{__html: require('./index.md').content}} />
                <div className='post__content'>
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

