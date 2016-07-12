'use strict';

/* Controllers */
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('TypeaheadCtrl', function($scope, $http) {

    var _selected;

    $scope.selected = undefined;
    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    // Any function returning a promise object can be used to load values asynchronously
    $scope.getLocation = function(val) {
        return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: val,
                sensor: false
            }
        }).then(function(response){
            return response.data.results.map(function(item){
                return item.formatted_address;
            });
        });
    };

    $scope.ngModelOptionsSelected = function(value) {
        if (arguments.length) {
            _selected = value;
        } else {
            return _selected;
        }
    };

    $scope.modelOptions = {
        debounce: {
            default: 500,
            blur: 250
        },
        getterSetter: true
    };

    $scope.statesWithFlags = [{'name':'Alabama','flag':'5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},{'name':'Alaska','flag':'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'},{'name':'Arizona','flag':'9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'},{'name':'Arkansas','flag':'9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'},{'name':'California','flag':'0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'},{'name':'Colorado','flag':'4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'},{'name':'Connecticut','flag':'9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'},{'name':'Delaware','flag':'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'},{'name':'Florida','flag':'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'},{'name':'Georgia','flag':'5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'},{'name':'Hawaii','flag':'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'},{'name':'Idaho','flag':'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'},{'name':'Illinois','flag':'0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'},{'name':'Indiana','flag':'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'},{'name':'Iowa','flag':'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'},{'name':'Kansas','flag':'d/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'},{'name':'Kentucky','flag':'8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'},{'name':'Louisiana','flag':'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'},{'name':'Maine','flag':'3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'},{'name':'Maryland','flag':'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'},{'name':'Massachusetts','flag':'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'},{'name':'Michigan','flag':'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'},{'name':'Minnesota','flag':'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'},{'name':'Mississippi','flag':'4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'},{'name':'Missouri','flag':'5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'},{'name':'Montana','flag':'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'},{'name':'Nebraska','flag':'4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'},{'name':'Nevada','flag':'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'},{'name':'New Hampshire','flag':'2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'},{'name':'New Jersey','flag':'9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'},{'name':'New Mexico','flag':'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'},{'name':'New York','flag':'1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'},{'name':'North Carolina','flag':'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'},{'name':'North Dakota','flag':'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'},{'name':'Ohio','flag':'4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'},{'name':'Oklahoma','flag':'6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'},{'name':'Oregon','flag':'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'},{'name':'Pennsylvania','flag':'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'},{'name':'Rhode Island','flag':'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'},{'name':'South Carolina','flag':'6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'},{'name':'South Dakota','flag':'1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'},{'name':'Tennessee','flag':'9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'},{'name':'Texas','flag':'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'},{'name':'Utah','flag':'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'},{'name':'Vermont','flag':'4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'},{'name':'Virginia','flag':'4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'},{'name':'Washington','flag':'5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'},{'name':'West Virginia','flag':'2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'},{'name':'Wisconsin','flag':'2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'},{'name':'Wyoming','flag':'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'}];
});

phonecatControllers.controller('ButtonsSingleCtrl', function ($scope) {
    $scope.radioModel = $scope.$parent.ButtonsSingleCtrlCheckModel;
    $scope.$watch('radioModel', function () {
        $scope.$parent.ButtonsSingleCtrlCheckModel = $scope.radioModel;
    });
});
phonecatControllers.controller('ButtonsDirectCtrl', function ($scope) {
    $scope.radioModel = $scope.$parent.ButtonsDirectCtrlCheckModel;
    $scope.$watch('radioModel', function () {
        $scope.$parent.ButtonsDirectCtrlCheckModel = $scope.radioModel;
    });

});
phonecatControllers.controller('ButtonsEcoCtrl', function ($scope) {
    $scope.radioModel = $scope.$parent.ButtonsEcoCtrlCheckModel;
    $scope.$watch('radioModel', function () {
        $scope.$parent.ButtonsEcoCtrlCheckModel = $scope.radioModel;
    });
});

phonecatControllers.controller('AdultNumberCtrl', function ($scope) {
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

phonecatControllers.controller('ChildNumberCtrl', function ($scope) {
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

phonecatControllers.controller('ButtonsGoCtrl', function ($scope, $location) {
    $scope.alerts = [
    ];

    $scope.AdultNumberCtrlSelected = 0;
    $scope.ChildNumberCtrlSelected = 0;
    $scope.ButtonsEcoCtrlCheckModel = 'economy';
    $scope.ButtonsDirectCtrlCheckModel = 'direct';
    $scope.ButtonsSingleCtrlCheckModel = 'round';
    $scope.DatepickerFromCtrlSelected = new Date();
    $scope.DatepickerBackCtrlSelected = new Date();


    $scope.addAlert = function() {
        console.info($scope.ButtonsEcoCtrlCheckModel + $scope.ButtonsDirectCtrlCheckModel + $scope.ButtonsSingleCtrlCheckModel);

        console.info($scope.DatepickerFromCtrlSelected + "----" + $scope.DatepickerBackCtrlSelected);

        $scope.alert = false;
        if (($scope.AdultNumberCtrlSelected == 0) && ($scope.ChildNumberCtrlSelected == 0)) {
            $scope.alert = true;
            $("#AdultNumberCtrlTooltip").tooltip('show');
            $("#ChildNumberCtrlTooltip").tooltip('show');
        } else {
            $("#AdultNumberCtrlTooltip").tooltip('hide');
            $("#ChildNumberCtrlTooltip").tooltip('hide');
        }
        if (($scope.DatepickerFromCtrlSelected > $scope.DatepickerBackCtrlSelected) && $scope.ButtonsSingleCtrlCheckModel == 'round') {
            $scope.alert = true;
            $("#DatepickerFromCtrlTooltip").tooltip('show');
        } else
            $("#DatepickerFromCtrlTooltip").tooltip('hide');

        if ($scope.alert == false) {
            $location.path("/result");
        }
    };

    $scope.$watch('ButtonsSingleCtrlCheckModel', function () {
        var div = document.getElementById('DatepickerBackCtrl');
        if ($scope.ButtonsSingleCtrlCheckModel == 'round') div.style.visibility = 'visible';
        else div.style.visibility = 'hidden';
    });

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
});

phonecatControllers.controller('CarouselCtrl', function ($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: 'img/' + currIndex + '.jpg',
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

phonecatControllers.controller('DatepickerFromCtrl', function ($scope) {
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

phonecatControllers.controller('DatepickerBackCtrl', function ($scope) {
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


phonecatControllers.controller('TableCtrl', ["$scope", "FlightService", function($scope, FlightService) {
    $scope.filters = '';
    $scope.resource = {};

    $scope.resource.header = [
        {
            "key": "allTime",
            "name": "allTime",
            "style": {},
            "class": []
        },
        {
            "key": "airlineName",
            "name": "airlineName",
            "style": {},
            "class": []
        },
        {
            "key": "classTypeStr",
            "name": "classTypeStr",
            "style": {},
            "class": []
        }
    ];
    $scope.resource.sortBy = "allTime";
    $scope.resource.sortOrder = "dsc";
//    $scope.resource.rows = [];

    $scope.resource.rows = FlightService.getPullRequests().then(function(result){
//        angular.copy($scope.resource.rows, result);

        return result;
//        $scope.resource.rows = result;

  //      console.info($scope);

    });

    console.info($scope.resource.rows);

}]);
