const Handlebars=require('handlebars');

module.exports = {
    sum: (a, b) => a + b, //Create sum method to use in view

    for:(from, to, incr, block) =>{
        var accum = '';
        for(var i = from; i < to; i += incr)
            accum += block.fn(i);
        return accum;
    },

    sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default';

        const icons = {
            default: 'fa fa-sort',
            asc: 'fa fa-caret-up',
            desc: 'fa fa-caret-down',
        }
        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        }

        const icon = icons[sortType];
        const type = types[sortType];

        const href=Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`);

        const output= `<a href="${href}">
                <i class="${icon}"></i>
              </a>`
        return new Handlebars.SafeString(output);
    }
}
