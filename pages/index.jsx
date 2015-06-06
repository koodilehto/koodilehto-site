var React = require('react');
var Members = require('../components/Members.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div className='post post--front'>
                <div className='header-image header-image--front'></div>
                <div className='post__heading'>
                    <span className='logo logo--front' dangerouslySetInnerHTML={{__html: require('../images/koodilehto_logo_white.svg')}} />
                    <h1 className='front-header'>Koodilehto</h1>
                    <h3>Combines open technologies for your benefit</h3>
                    <div className='front__buttons'>
                        {/*<a href='blog' className='btn btn--inverted'>Read the Blog</a>*/}
                        <a href='https://github.com/koodilehto' className='btn btn--inverted'>View on GitHub</a>
                    </div>
                    <div className='front-arrow' />
                </div>
                <div className='post__content' dangerouslySetInnerHTML={{__html: require('./index.md').content}} />
                <div className='post__content'>
                    <h2>Members</h2>

                    <Members data={require('./members.json')} />
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
