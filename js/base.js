require(['jquery', 'utils'],
        function($, utils) {
    $(function() {
        console.log('foo')
        var mottos = ['Conclave of contankerous tinkerers', 'Club of thoughtful tinkerers', 'Happening of happy hipsters', 'Collection of gaudy geeks', 'Motley crew of nice nerds'];

        utils.pick($('#motto'), mottos);
    });
});
