/* global Dashboard */

/** Utilities **************************************************************************************/

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

function randomInt(max) {
    max = max || 65535;
    return Math.floor(max * Math.random())
}

// Add today function to Date prototype
Date.prototype.today = function () { 
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
}

// For now function to Date prototype
Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}


/** Dashboard Set **********************************************************************************/

var harness = new DashboardSet()

/** Assignment ***************************************************************************************/

var assignment = harness.addDashboard('Assignment')

assignment.addWidget('assignment', 'Assignment', {
    scope: {
        title: 'Pull Review Duty',
        primaryAssignee: 'Kerri Pace',
        secondaryAssignee: 'Sherry Blackwell'
    }
})

assignment.addWidget('assignment_short', 'Assignment', {
    row: 1,
    col: 3,
    scope: {
        title: 'Dish Duty',
        primaryAssignee: 'Matthew de Verteuil',
    }
})

assignment.addWidget('assignment_full', 'Assignment', {
    scope: {
        title: 'Active Python',
        primaryAssignee: 'John Cleese',
        secondaryAssignee: 'Eric Idle',
        until: 'Tomorrow',
        updatedAt: new Date().today() + " @ " + new Date().timeNow()
    }
})

/** BuildStatus ************************************************************************************/

var buildstatus = harness.addDashboard('Build Status');

buildstatus.addWidget('build_status_change_test', 'BuildStatus', {
    getData: function () {
        $.extend(this.scope, {
            title: 'Changing Builder',
            buildNumber: randomInt(),
            buildStatus: randomChoice(['progress', 'failure', 'success', 'unstable']),
            updatedAt: new Date().today() + " @ " + new Date().timeNow()
        })
    },
    interval: 5000
});

buildstatus.addWidget('build_status_failure_test', 'BuildStatus', {
    scope: {
        title: 'Failure Builder',
        buildNumber: randomInt(),
        buildStatus: 'failure',
        updatedAt: new Date().today() + " @ " + new Date().timeNow()
    },
    interval: 5000
});

buildstatus.addWidget('build_status_progress_test', 'BuildStatus', {
    scope: {
        title: 'Progress Builder',
        buildNumber: randomInt(99) + "%",
        buildStatus: 'progress',
        updatedAt: new Date().today() + " @ " + new Date().timeNow()
    },
    interval: 5000
});

buildstatus.addWidget('build_status_unstable_test', 'BuildStatus', {
    scope: {
        title: 'Unstable Builder',
        buildNumber: randomInt(),
        buildStatus: 'unstable',
        updatedAt: new Date().today() + " @ " + new Date().timeNow()
    },
    interval: 5000
});

buildstatus.addWidget('build_status_success_test', 'BuildStatus', {
    scope: {
        title: 'Success Builder',
        buildNumber: randomInt(),
        buildStatus: 'success',
        updatedAt: new Date().today() + " @ " + new Date().timeNow()
    },
    interval: 5000
});

/** CommitList *************************************************************************************/

var commitlist = harness.addDashboard('Commit List');

commitlist.addWidget('commit_list_long', 'CommitList', {
    scope: {
        title: 'Long list of commits',
        data: [
        {
            "url": "#",
            "message": "Sit cillum ullamco laborum consectetur Lorem reprehenderit nulla labore ad.",
            "author": "leblanc",
            "sha": "b78e5fe"
        },
        {
            "url": "#",
            "message": "Commodo minim ipsum sint labore sunt tempor commodo ullamco dolor minim.",
            "author": "olsen",
            "sha": "639d2a3"
        },
        {
            "url": "#",
            "message": "Enim enim adipisicing mollit dolor voluptate nisi amet est nisi enim incididunt.",
            "author": "coffey",
            "sha": "75418da"
        },
        {
            "url": "#",
            "message": "Minim dolore elit irure adipisicing nisi mollit minim qui ex mollit dolore tempor.",
            "author": "prince",
            "sha": "44b73ca"
        },
        {
            "url": "#",
            "message": "Aute pariatur amet incididunt sint consectetur sit irure duis sit ex.",
            "author": "gill",
            "sha": "72f6721"
        },
        {
            "url": "#",
            "message": "Tempor amet aliquip voluptate elit ad mollit deserunt exercitation esse officia officia culpa.",
            "author": "zimmerman",
            "sha": "79ec91a"
        },
        {
            "url": "#",
            "message": "Duis proident sint do et.",
            "author": "richards",
            "sha": "7003ded"
        },
        {
            "url": "#",
            "message": "Eiusmod non id veniam irure cupidatat mollit esse sit culpa velit nostrud sunt aliquip mollit.",
            "author": "mendoza",
            "sha": "a7126f1"
        },
        {
            "url": "#",
            "message": "Mollit aliqua enim qui nulla.",
            "author": "calhoun",
            "sha": "947e880"
        },
        {
            "url": "#",
            "message": "Commodo sunt voluptate sit commodo.",
            "author": "holder",
            "sha": "0d61c9d"
        }
        ]
    },
    interval: 5000,
});


commitlist.addWidget('commit_list_truncated', 'CommitList', {
    row: 1,
    scope: {
        title: 'Stretched list of commits',
        data: [
        {
            "url": "#",
            "message": "Culpa laborum exercitation sunt ex sint officia ullamco velit proident.",
            "author": "wilcox",
            "sha": "e825350"
        },
        {
            "url": "#",
            "message": "Eiusmod est incididunt ullamco qui mollit dolore labore ea labore labore pariatur.",
            "author": "holder",
            "sha": "4459b00"
        },
        {
            "url": "#",
            "message": "Eu commodo aliquip eu pariatur consectetur.",
            "author": "molina",
            "sha": "d2397ec"
        },
        {
            "url": "#",
            "message": "Voluptate incididunt quis excepteur cillum quis proident aute.",
            "author": "donaldson",
            "sha": "8154315"
        },
        {
            "url": "#",
            "message": "Et officia ipsum in ex id dolor cillum quis Lorem culpa eu nostrud.",
            "author": "vance",
            "sha": "9e97cf2"
        },
        {
            "url": "#",
            "message": "Duis quis incididunt nulla consequat ut fugiat.",
            "author": "bates",
            "sha": "022d7ea"
        },
        {
            "url": "#",
            "message": "Pariatur occaecat enim nulla fugiat consequat laboris eu minim qui sunt laboris dolore.",
            "author": "levine",
            "sha": "2f39be2"
        }
        ]
    },
    interval: 5000,
});

commitlist.addWidget('commit_list_empty', 'CommitList', {
    row: 1,
    scope: {
        title: 'Boring repository',
        data: []
    },
    interval: 5000,
});

commitlist.addWidget('commit_list_short', 'CommitList', {
    row: 1,
    scope: {
        title: 'Short list of commits',
        data: [
        {
            "url": "#",
            "message": "Magna ut ipsum do non et.",
            "author": "wolf",
            "sha": "c84c700"
        },
        {
            "url": "#",
            "message": "Occaecat et est in qui eu magna.",
            "author": "blankenship",
            "sha": "ed7af6c"
        },
        {
            "url": "#",
            "message": "Commodo occaecat quis commodo nulla ad ullamco do tempor pariatur incididunt fugiat pariatur deserunt non.",
            "author": "lynn",
            "sha": "66d2a90"
        }
        ]
    },
    interval: 5000,
});

/** FatList ****************************************************************************************/

var fatlist = harness.addDashboard('Fat List')

fatlist.addWidget('fat_list_short', 'FatList', {
    row: 1,
    scope: {
        title: 'Top Sellers',
        fatLabel: true,
        data: [
        {
            'value': '5%',
            'label': 'Garza Clements'
        },
        {
            'value': '2%',
            'label': 'Marlene Thomas'
        },
        {
            'value': '5%',
            'label': 'Beth Bass'
        },
        {
            'value': '10%',
            'label': 'Myrna Baird'
        }
        ]
    }
})

fatlist.addWidget('fat_list_wide', 'FatList', {
    scope: {
        title: 'Quotable People',
        fatLabel: false,
        fatValue: true,
        data: [
        {
            "value": "cillum laborum ea commodo dolor ad",
            "label": "Donovan Padilla"
        },
        {
            "value": "culpa veniam reprehenderit exercitation tempor",
            "label": "Olivia Bender"
        },
        {
            "value": "veniam eu laborum incididunt laborum ex",
            "label": "Lupe Holden"
        },
        {
            "value": "anim Lorem aliquip esse laboris in",
            "label": "Madeleine Gamble"
        },
        {
            "value": "ullamco Lorem sunt nulla qui eiusmod",
            "label": "Coleman Ford"
        },
        {
            "value": "cillum est aliquip dolor ex in",
            "label": "Alyssa Vinson"
        },
        {
            "value": "tempor magna cillum nisi aute",
            "label": "Katelyn Gaines"
        },
        {
            "value": "ex aute nostrud culpa excepteur elit",
            "label": "Matthews Mcconnell"
        }
        ]
    }
})

/** FatNumber **************************************************************************************/

var fatnumber = harness.addDashboard('Fat Number');

fatnumber.addWidget('fat_number_simple', 'FatNumber', {
    scope: {
        title: 'Simple',
        value: randomInt(9),
        updatedAt: new Date().today() + " @ " + new Date().timeNow()
    },
    interval: 5000
});

fatnumber.addWidget('fat_number_large', 'FatNumber', {
    scope: {
        title: 'Large',
        value: 1293021,
        updatedAt: new Date().today() + " @ " + new Date().timeNow()
    },
    interval: 5000
});

fatnumber.addWidget('fat_number_details', 'FatNumber', {
    scope: {
        title: 'With Detail',
        value: randomInt(999),
        detail: 'unstable',
        updatedAt: new Date().today() + " @ " + new Date().timeNow()
    },
    interval: 5000
});

fatnumber.addWidget('fat_number_short', 'FatNumber', {
    row: 1,
    scope: {
        title: 'Short',
        value: randomInt(999),
        updatedAt: new Date().today() + " @ " + new Date().timeNow()
    },
    interval: 5000
});

/** InformedNumber **************************************************************************************/

var informednumber = harness.addDashboard('Informed Number');

informednumber.addWidget('informed_number_simple', 'InformedNumber', {
    scope: {
        title: 'Simple',
        value: randomInt(9),
        extra: [
            {label: 'Daily Average', value: 4},
            {label: 'Weekly Average', value: 5},
            {label: 'Quarterly Average', value: 5},
        ],
        updatedAt: new Date().today() + " @ " + new Date().timeNow()
    },
    interval: 5000
});

informednumber.addWidget('informed_number_large', 'InformedNumber', {
    scope: {
        title: 'Large',
        value: 1293021,
        extra: [
            {label: 'max', value: 1293021},
            {label: 'median', value: 25000},
            {label: 'min', value: 0},
        ],
        updatedAt: new Date().today() + " @ " + new Date().timeNow()
    },
    interval: 5000
});

informednumber.addWidget('informed_number_details', 'InformedNumber', {
    scope: {
        title: 'Wait Factor',
        value: randomInt(999) + 'x',
        extra: [
            {label: 'max', value: 1500},
            {label: 'median', value: 1},
            {label: 'min', value: 0},
            {label: 'sample std', value: 85},
            {label: 'var', value: 850},
            {label: 'total', value: 120},
            {label: 'resolved', value: 65},
            {label: 'unresolved', value: 55}
        ],
        updatedAt: new Date().today() + " @ " + new Date().timeNow()
    },
    interval: 5000
});

informednumber.addWidget('informed_number_short', 'InformedNumber', {
    row: 1,
    scope: {
        title: 'Short',
        value: randomInt(999),
        updatedAt: new Date().today() + " @ " + new Date().timeNow()
    },
    interval: 5000
});

/** LinkList ***************************************************************************************/

var linklist = harness.addDashboard('Link List');

linklist.addWidget('link_list_long', 'LinkList', {
    scope: {
        title: 'Long list of Customers',
        data: [
        {
            "url": "http://newcube.io",
            "message": "Newcube"
        },
        {
            "url": "http://orbalix.tv",
            "message": "Orbalix"
        },
        {
            "url": "http://bostonic.net",
            "message": "Bostonic"
        },
        {
            "url": "http://spherix.com",
            "message": "Spherix"
        },
        {
            "url": "http://memora.biz",
            "message": "Memora"
        },
        {
            "url": "http://equitox.info",
            "message": "Equitox"
        },
        {
            "url": "http://cinaster.co.uk",
            "message": "Cinaster"
        },
        {
            "url": "http://optyk.us",
            "message": "Optyk"
        }
        ]
    },
    interval: 5000,
});


linklist.addWidget('link_list_truncated', 'LinkList', {
    row: 1,
    scope: {
        title: 'Stretched list of Customers',
        data: [
        {
            "url": "http://daycore.me",
            "message": "Daycore"
        },
        {
            "url": "http://matrixity.co.uk",
            "message": "Matrixity"
        },
        {
            "url": "http://xymonk.ca",
            "message": "Xymonk"
        },
        {
            "url": "http://coash.biz",
            "message": "Coash"
        },
        {
            "url": "http://accruex.us",
            "message": "Accruex"
        },
        {
            "url": "http://cemention.net",
            "message": "Cemention"
        },
        {
            "url": "http://ginkle.org",
            "message": "Ginkle"
        },
        {
            "url": "http://undertap.name",
            "message": "Undertap"
        }
        ]
    },
    interval: 5000,
});

linklist.addWidget('link_list_empty', 'LinkList', {
    row: 1,
    scope: {
        title: 'Angry Customer List',
        data: []
    },
    interval: 5000,
});

linklist.addWidget('link_list_short', 'LinkList', {
    row: 1,
    scope: {
        title: 'Short list of Suppliers',
            data: [
            {
                "url": "http://qnekt.tv",
                "message": "Qnekt"
            },
            {
                "url": "http://deminimum.com",
                "message": "Deminimum"
            },
            {
                "url": "http://keengen.io",
                "message": "Keengen"
            }         
        ]
    },
    interval: 5000,
});

/** SizedNumber ************************************************************************************/

var sizednumber = harness.addDashboard('Sized Number');

sizednumber.addWidget('sized_number_big_digit', 'SizedNumber', {
    scope: {
        title: 'Big Digit',
        fontSize: '120pt',
        value: randomInt(9),
        updatedAt: new Date().today() + " @ " + new Date().timeNow()
    },
    interval: 5000
});

sizednumber.addWidget('sized_number_wide_value', 'SizedNumber', {
    scope: {
        title: 'Wide Value',
        fontSize: '24pt',
        value: '1293021 Times This Week',
        updatedAt: new Date().today() + " @ " + new Date().timeNow()
    },
    interval: 5000
});

sizednumber.addWidget('sized_number_details', 'SizedNumber', {
    scope: {
        title: 'With Detail',
        fontSize: '50pt',
        value: randomInt(999),
        detail: 'unstable',
        updatedAt: new Date().today() + " @ " + new Date().timeNow()
    },
    interval: 5000
});

sizednumber.addWidget('sized_number_short', 'SizedNumber', {
    row: 1,
    scope: {
        title: 'Short',
        value: randomInt(999),
        updatedAt: new Date().today() + " @ " + new Date().timeNow()
    },
    interval: 5000
});

/** SkinnyList ****************************************************************************************/

var skinnylist = harness.addDashboard('Skinny List')

skinnylist.addWidget('skinny_list_short', 'SkinnyList', {
    row: 1,
    scope: {
        title: 'Top Sellers',
        skinnyLabel: true,
        data: [
        {
            'value': '5%',
            'label': 'Garza Clements'
        },
        {
            'value': '2%',
            'label': 'Marlene Thomas'
        },
        {
            'value': '5%',
            'label': 'Beth Bass'
        },
        {
            'value': '10%',
            'label': 'Myrna Baird'
        }
        ]
    }
})

skinnylist.addWidget('skinny_list_wide', 'SkinnyList', {
    scope: {
        title: 'Quotable People',
        data: [
        {
            "label": "cillum laborum ea commodo dolor ad",
            "value": "Donovan Padilla"
        },
        {
            "label": "culpa veniam reprehenderit exercitation tempor",
            "value": "Olivia Bender"
        },
        {
            "label": "veniam eu laborum incididunt laborum ex",
            "value": "Lupe Holden"
        },
        {
            "label": "anim Lorem aliquip esse laboris in",
            "value": "Madeleine Gamble"
        },
        {
            "label": "ullamco Lorem sunt nulla qui eiusmod",
            "value": "Coleman Ford"
        },
        {
            "label": "cillum est aliquip dolor ex in",
            "value": "Alyssa Vinson"
        },
        {
            "label": "tempor magna cillum nisi aute",
            "value": "Katelyn Gaines"
        },
        {
            "label": "ex aute nostrud culpa excepteur elit",
            "value": "Matthews Mcconnell"
        }
        ]
    }
})

skinnylist.addWidget('skinny_list_short', 'SkinnyList', {
    row: 1,
    scope: {
        title: 'Short list of Suppliers',
            data: [
            {
                "value": "http://qnekt.tv",
                "label": "Qnekt"
            },
            {
                "value": "http://deminimum.com",
                "label": "Deminimum"
            },
            {
                "value": "http://keengen.io",
                "label": "Keengen"
            }         
        ]
    },
    interval: 5000,
});

/** Classic Widgets ********************************************************************************/

var classic = harness.addDashboard('Classic')

classic.addWidget('classic_list', 'List', {
    row: 1,
    scope: {
        title: 'Classic List',
        data: [
        {
            "value": "Culpa laborum exercitation sunt ex sint officia ullamco velit proident.",
            "label": "e825350"
        },
        {
            "value": "Eiusmod est incididunt ullamco qui mollit dolore labore ea labore labore pariatur.",
            "label": "4459b00"
        }
        ]
    },
    interval: 5000,
});

classic.addWidget('classic_number', 'Number', {
    scope: {
        title: 'Classic Number',
        value: randomInt(9),
        updatedAt: new Date().today() + " @ " + new Date().timeNow()
    },
    interval: 5000
});

classic.addWidget('classic_clock', 'Clock', {
    scope: {
        title: 'Classic Clock',
    },
});
