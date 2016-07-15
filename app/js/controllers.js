'use strict';

/* Controllers */
var flightControllers = angular.module('flightControllers', []);

flightControllers.controller('HeaderCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});

flightControllers.controller('TypeaheadFromCtrl', function($scope, $http, IATAService) {

    $scope.selected = undefined;
    $scope.statesWithFlags = IATAService.getIATAJson();
    $scope.states = $scope.statesWithFlags.map(getListName);

    function getListName(json) {
        return json.name;
    }

    $scope.$watch('customPopupSelected', function () {
        $scope.$parent.customPopupFromSelected = $scope.customPopupSelected;
    });

    $scope.modelOptions = {
        debounce: {
            default: 500,
            blur: 250
        },
        getterSetter: true
    };

});

flightControllers.controller('TypeaheadToCtrl', function($scope, $http, IATAService) {

    $scope.selected = undefined;
    $scope.statesWithFlags = IATAService.getIATAJson();
    $scope.states = $scope.statesWithFlags.map(getListName);

    function getListName(json) {
        return json.name;
    }

    $scope.$watch('customPopupSelected', function () {
        $scope.$parent.customPopupToSelected = $scope.customPopupSelected;
    });

    $scope.modelOptions = {
        debounce: {
            default: 500,
            blur: 250
        },
        getterSetter: true
    };
});

flightControllers.controller('ButtonsSingleCtrl', function ($scope) {
    $scope.radioModel = $scope.$parent.ButtonsSingleCtrlCheckModel;
    $scope.$watch('radioModel', function () {
        $scope.$parent.ButtonsSingleCtrlCheckModel = $scope.radioModel;
    });
});
flightControllers.controller('ButtonsDirectCtrl', function ($scope) {
    $scope.radioModel = $scope.$parent.ButtonsDirectCtrlCheckModel;
    $scope.$watch('radioModel', function () {
        $scope.$parent.ButtonsDirectCtrlCheckModel = $scope.radioModel;
    });

});
flightControllers.controller('ButtonsEcoCtrl', function ($scope) {
    $scope.radioModel = $scope.$parent.ButtonsEcoCtrlCheckModel;
    $scope.$watch('radioModel', function () {
        $scope.$parent.ButtonsEcoCtrlCheckModel = $scope.radioModel;
    });
});

flightControllers.controller('AdultNumberCtrl', function ($scope) {
    $scope.number = {
        options: [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        selected: $scope.$parent.AdultNumberCtrlSelected
    };

    $scope.update = function(){
        $scope.$parent.AdultNumberCtrlSelected = $scope.number.selected;
    }

});

flightControllers.controller('ChildNumberCtrl', function ($scope) {
    $scope.number = {
        options: [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        selected: $scope.$parent.ChildNumberCtrlSelected
    };

    $scope.update = function(){
        $scope.$parent.ChildNumberCtrlSelected = $scope.number.selected;
    }

});

flightControllers.controller('ButtonsGoCtrl', function ($scope, $location, FlightService) {
    $scope.AdultNumberCtrlSelected = 0;
    $scope.ChildNumberCtrlSelected = 0;
    $scope.ButtonsEcoCtrlCheckModel = 'Y';
    $scope.ButtonsDirectCtrlCheckModel = 'on';
    $scope.ButtonsSingleCtrlCheckModel = 'RT';
    $scope.DatepickerFromCtrlSelected = new Date();
    $scope.DatepickerBackCtrlSelected = new Date();
    $scope.customPopupFromSelected = {};
    $scope.customPopupToSelected = {};

    $scope.addAlert = function() {

        $scope.alert = false;
        if (($scope.AdultNumberCtrlSelected == 0) && ($scope.ChildNumberCtrlSelected == 0)) {
            $scope.alert = true;
            $("#AdultNumberCtrlTooltip").tooltip('show');
            $("#ChildNumberCtrlTooltip").tooltip('show');
        } else {
            $("#AdultNumberCtrlTooltip").tooltip('hide');
            $("#ChildNumberCtrlTooltip").tooltip('hide');
        }
        if (($scope.DatepickerFromCtrlSelected > $scope.DatepickerBackCtrlSelected) && $scope.ButtonsSingleCtrlCheckModel == 'RT') {
            $scope.alert = true;
            $("#DatepickerFromCtrlTooltip").tooltip('show');
        } else
            $("#DatepickerFromCtrlTooltip").tooltip('hide');

        if ($scope.customPopupFromSelected && typeof $scope.customPopupFromSelected == "object")
            $("#TypeaheadFromCtrlTooltip").tooltip('hide');
        else {
            $scope.alert = true;
            $("#TypeaheadFromCtrlTooltip").tooltip('show');
        }

        if ($scope.customPopupToSelected && typeof $scope.customPopupToSelected == "object")
            $("#TypeaheadToCtrlTooltip").tooltip('hide');
        else {
            $scope.alert = true;
            $("#TypeaheadToCtrlTooltip").tooltip('show');
        }

        console.info($scope.customPopupFromSelected);

        if ($scope.alert == false) {
            var param = {};
            param.ddate = $scope.DatepickerFromCtrlSelected;
            param.adate = $scope.DatepickerBackCtrlSelected;
            param.dcity = $scope.customPopupFromSelected;
            param.acity = $scope.customPopupToSelected;
            param.flightway = $scope.ButtonsSingleCtrlCheckModel;
            param.seatclass = $scope.ButtonsEcoCtrlCheckModel;
            param.adult = $scope.AdultNumberCtrlSelected;
            param.child = $scope.ChildNumberCtrlSelected;
            param.nonstoponly=$scope.ButtonsDirectCtrlCheckModel;
            FlightService.setData(param);

            $location.path("/result");
        }
    };

    $scope.$watch('ButtonsSingleCtrlCheckModel', function () {
        var div = document.getElementById('DatepickerBackCtrl');
        if ($scope.ButtonsSingleCtrlCheckModel == 'RT') div.style.visibility = 'visible';
        else div.style.visibility = 'hidden';
    });

});

flightControllers.controller('CarouselCtrl', function ($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: 'app/img/' + currIndex + '.jpg',
            text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
            ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4],
            id: currIndex++
        });
    };

    $scope.randomize = function() {
        var indexes = generateIndexesArray();
        assignNewIndexesToSlides(indexes);
    };

    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }

    // Randomize logic below

    function assignNewIndexesToSlides(indexes) {
        for (var i = 0, l = slides.length; i < l; i++) {
            slides[i].id = indexes.pop();
        }
    }

    function generateIndexesArray() {
        var indexes = [];
        for (var i = 0; i < currIndex; ++i) {
            indexes[i] = i;
        }
        return shuffle(indexes);
    }

    // http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
        var tmp, current, top = array.length;

        if (top) {
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        }

        return array;
    }
});

flightControllers.controller('DatepickerFromCtrl', function ($scope) {
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = new Date();
    };

    $scope.$watch('dt', function () {
        $scope.$parent.DatepickerFromCtrlSelected = $scope.dt;
    });
    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();
    $scope.maxDate = new Date(2020, 5, 22);

    $scope.open = function() {
        $scope.status.opened = true;
    };

    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.dateOptions = {
        dateDisabled: false,
        formatYear: 'yy',
        maxDate: new Date(2050, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.status = {
        opened: false
    };



});

flightControllers.controller('DatepickerBackCtrl', function ($scope) {
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = new Date();
    };

    // Disable weekend selection
    function disabled(data) {
/*        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        */
        return false;
    }

    $scope.$watch('dt', function () {
        $scope.$parent.DatepickerBackCtrlSelected = $scope.dt;
    });

    $scope.open = function() {
        $scope.status.opened = true;
    };

    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2050, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.status = {
        opened: false
    };

});


flightControllers.controller('TableCtrl', function($scope, FlightService, $location) {
    $scope.loadFinished = false;
    $scope.filters = '';
    $scope.resource = {};
    $scope.resource.header = [
        {
            "key": "departureTimeStr",
            "name": "出发时间",
            "style": {},
            "class": []
        },
        {
            "key": "arrivalTimeStr",
            "name": "到达时间",
            "style": {},
            "class": []
        },
        {
            "key": "allTime",
            "name": "总时间",
            "style": {},
            "class": []
        },
        {
            "key": "price",
            "name": "总价格(人民币)",
            "style": {},
            "class": []
        },
        {
            "key": "airlineName",
            "name": "航空公司名",
            "style": {},
            "class": []
        },
        {
            "key": "classTypeStr",
            "name": "舱位",
            "style": {},
            "class": []
        },
        {
            "key": "stop",
            "name": "直飞/转机",
            "style": {},
            "class": []
        },
        {
            "key": "detail",
            "name": "详情",
            "style": {},
            "class": []
        }
    ];

    $scope.resource.rows = [];

    $scope.customTheme = {
        iconUp: 'fa fa-chevron-circle-up',
        iconDown: 'fa fa-chevron-circle-down',
        listItemsPerPage: [10, 20, 50],
        itemsPerPage: 10,
        loadOnInit: true
    };

    $scope.param = FlightService.getData();
    $scope.param.direction = "出发";

    console.info("ddd");
    if (!($scope)) $location.path("flight");

    FlightService.getFlightRequests().then(function(result){
        $scope.resource.rows = result;
        $scope.loadFinished = true;
    });

    $scope.returnFlight = function() {
        $scope.param.direction = "返回";
        var tmp = $scope.param.dcity;
        $scope.param.dcity = $scope.param.acity;
        $scope.param.acity = tmp;
        $scope.param.ddate.setDate($scope.param.adate.getDate());
        $scope.param.ddate.setMonth($scope.param.adate.getMonth());
        $scope.param.ddate.setFullYear($scope.param.adate.getFullYear());
        $scope.param.adate.setDate($scope.param.adate.getDate()+5);
        FlightService.setData($scope.param);
        $scope.loadFinished = false;
        FlightService.getFlightRequests().then(function(result){
            $scope.resource.rows = result;
            $scope.loadFinished = true;
        });
    };


});
