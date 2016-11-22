var avm;
 
function AppViewModel() {
    var that = this;

    that.data = [
        {
            'title' : 'Case 1 : 2 events',
            'hideFilter' : false,
            'filters' : [
                { 'name' : 'Key Strategy Info' },
                { 'name' : 'Coupon Payment (5)' },
                { 'name' : 'Barriers (3)' },
                { 'name' : 'Salec Debit (2)' },
                { 'name' : 'Filter By Date' }
            ],
            'slots' : [
                {
                    'type'      : 'event',
                    'part1Type' : 'data',
                    'part1'     : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                    'part2Type' : 'time',
                    'part2'     : '23 MAR 2016'
                },
                {
                    'type'      : 'today',
                    'part1Type' : 'time',
                    'part1'     : '30 MAR 2016',
                    'part2Type' : 'data',
                    'part2'     : 'Today'
                },
                {
                    'type'      : 'event',
                    'part1Type' : 'data',
                    'part1'     : 'Redemption issue',
                    'part2Type' : 'time',
                    'part2'     : '30 SEPT 2016'
                }
            ]
        }
    ];
}
 
avm = new AppViewModel();
 
ko.applyBindings(avm);