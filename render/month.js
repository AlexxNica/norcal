var template = require('html-template');
var monthdays = require('month-days');

module.exports = function (date) {
    var Y = date.getFullYear()
    var M = date.getMonth() + 1;
    var D = date.getDate();
    var first = new Date(Y + '-' + M + '-01 00:00');
    var mdays = monthdays(Y, M - 1);
    
    var html = template();
    var days = html.template('day');
    for (var i = 0; i < first.getDay(); i++) {
        days.write({ '*': { class: { append: ' empty' } } });
    }
    for (var i = 1; i <= mdays; i++) {
        days.write({ '.date': i });
    }
    days.end();
    return html;
};
