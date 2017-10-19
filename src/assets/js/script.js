(function () {
    var target = '',
        isAdded = false,
        tableHeaderList = [],
        tableHeaderNameList = [];

    var tableResponsive = function () {

        target = $('table.table-responsive');

        tableHeaderList = target.find('th');

        for(var i = 0; i < tableHeaderList.length; i++) {
            var name = tableHeaderList[i].getAttribute('data-column-name');
            tableHeaderNameList.push(name);
        }

        for(var i = 0; i < tableHeaderNameList.length; i++) {
            $('head').append(
                '<style>' +
                'td:nth-of-type(' + (i + 1) + '):before { content: "' + tableHeaderNameList[i] + '"; }'
                + '</style>'
            )
        }
    };

    if($(window).width() <= 992) {
        tableResponsive();
    }

    $(window).resize(function () {
        if($(window).width() <= 992) {
            if(!isAdded) {
                tableResponsive();
                isAdded = !isAdded;
            }
        } else {
            if(isAdded) {
                var styleList = $('head').find('style');

                for(var i = 0; i < styleList.length; i++) {
                    var containTest = 'td:nth-of-type';
                    console.log(styleList[i]);
                    if(styleList[i].innerHTML.indexOf(containTest) > -1) {
                        styleList[i].remove(i);
                    }
                }
                isAdded = !isAdded;
            }
        }
    });
})();