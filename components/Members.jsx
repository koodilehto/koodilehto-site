var React = require('react');

module.exports = React.createClass({
    render: function() {
        var members = this.props.data || [];

        return (
            <div className='members'>
                {members.map((member, i) =>
                    <a key={'member-' + i} href={member.url} className='member'>
                        <img src={member.image} alt={member.nick} />
                    </a>
                )}
            </div>
        );
    }
});
