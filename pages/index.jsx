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
            }
        };

        return (
            <div className='post post--front'>
                <div className='header-image header-image--front' style={styles.headerImage}></div>
                <div className='post__heading'>
                    <h1 className='front-header' style={styles.frontHeader}>Koodilehto</h1>
                    <h3>Combines open technologies for your benefit</h3>
                    <div className='front__buttons'>
                        <a href='blog' className='btn btn--inverted'>Read the Blog</a>
                        <a href='https://github.com/koodilehto' className='btn btn--inverted'>View on GitHub</a>
                    </div>
                </div>
                <div className='post__content'>
                    <h2>What is Koodilehto?</h2>

                    <p>Koodilehto is a collective of happy hipsters. Most of us have a university background. We focus on web and embedded development.</p>

                    <p>Our members have some serious open source chops. In particular we have experience on Linux, Raspberry Pi and React.</p>

                    <h2>Showcase</h2>

                    <p>We prefer to work using open source technologies. This is visible in our showcase below. In fact the technology this site is built upon is available. Check out <a href='https://antwarjs.github.io/'>Antwar</a>, the static site generator developed on top of Webpack and React.</p>

                    <h3>Kryptoradio</h3>

                    <p>...</p>

                    <h3>Päätökset.fi - Jyväskylä</h3>

                    <p>...</p>

                    <h3>Elovalo</h3>

                    <p>...</p>
                </div>
            </div>
        );
    }
});

module.exports = Index;

