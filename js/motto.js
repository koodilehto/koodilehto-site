define(['utils'], function(utils) {
    var mottos = ['Conclave of contankerous tinkerers', 'Club of thoughtful tinkerers', 'Happening of happy hipsters', 'Collection of gaudy geeks', 'Motley crew of nice nerds'];

    return {
        pick: function() {
            utils.pick($('#motto'), mottos);
        }
    };
});
