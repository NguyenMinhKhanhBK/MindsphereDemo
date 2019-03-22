/* ********************* GLOBAL VARIABLES ************************ */
let speedGauge, vibrationGauge, levelGauge, pressureGauge;
let speedChart, vibrationChart, levelChart, pressureChart;
let speedChartNow, speedChartWeek, speedChartMonth;
let levelChartNow, levelChartWeek, levelChartMonth;
let vibrationChartNow, vibrationChartWeek, vibrationChartMonth;
let pressureChartNow, pressureChartWeek, pressureChartMonth;
let analyzerMode = 0; //Now, 7 Day, 30 Day mode
let analyzerVariable = 'speed';
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="tab"]').tooltip({
        trigger: 'hover',
        placement: 'bottom',
        animate: true,
        container: 'body'
    });

    loadGauge();
    loadRealtimeChart();
    loadAnalyzer();

    $('#btnUpdate').click(function(){
        console.log('Click')
        chartUpdate();
    });

    $('#selectChart').on('change' , function() {
        switch ($(this).val()) {
            case 'speed' : {
                $('#speedChart').show();
                $('#vibrationChart').hide();
                $('#levelChart').hide();
                $('#pressureChart').hide();
                break;
            }
            case 'level' : {
                $('#levelChart').show();
                $('#vibrationChart').hide();
                $('#speedChart').hide();
                $('#pressureChart').hide();
                break;
            }
            case 'vibration' : {
                $('#vibrationChart').show();
                $('#speedChart').hide();
                $('#levelChart').hide();
                $('#pressureChart').hide();
                break;
            }
            case 'pressure' : {
                $('#pressureChart').show();
                $('#vibrationChart').hide();
                $('#levelChart').hide();
                $('#speedChart').hide();
                break;
            }
        }
    });
      
    $('[name = analyzerMode]').on('change' , function() {
        analyzerMode = $(this).val();
        switch (analyzerVariable) {
            case 'speed' : {
                $('#speedDiv').show();
                $('#vibrationDiv').hide();
                $('#levelDiv').hide();
                $('#pressureDiv').hide();
                switch (analyzerMode) {
                    case '0' : {
                        console.log('0 speed');
                        $('#analyzerSpeedNow').show();
                        $('#analyzerSpeedWeek').hide();
                        $('#analyzerSpeedMonth').hide();
                        break;
                    }
                    case '1' : {
                        console.log('1 speed');
                        $('#analyzerSpeedNow').hide();
                        $('#analyzerSpeedWeek').show();
                        $('#analyzerSpeedMonth').hide();
                        break;
                    }
                    case '2' : {
                        console.log('2 speed');
                        $('#analyzerSpeedNow').hide();
                        $('#analyzerSpeedWeek').hide();
                        $('#analyzerSpeedMonth').show();
                        break;
                    }
                }
                break;
            }
            case 'vibration' : {
                $('#speedDiv').hide();
                $('#vibrationDiv').show();
                $('#levelDiv').hide();
                $('#pressureDiv').hide();
                switch (analyzerMode) {
                    case '0' : {
                        $('#analyzerVibrationNow').show();
                        $('#analyzerVibrationWeek').hide();
                        $('#analyzerVibrationMonth').hide();
                        break;
                    }
                    case '1' : {
                        $('#analyzerVibrationNow').hide();
                        $('#analyzerVibrationWeek').show();
                        $('#analyzerVibrationMonth').hide();
                        break;
                    }
                    case '2' : {
                        $('#analyzerVibrationNow').hide();
                        $('#analyzerVibrationWeek').hide();
                        $('#analyzerVibrationMonth').show();
                        break;
                    }
                }
                break;
            }
            case 'level' : {
                $('#speedDiv').hide();
                $('#vibrationDiv').hide();
                $('#levelDiv').show();
                $('#pressureDiv').hide();
                switch (analyzerMode) {
                    case '0' : {
                        $('#analyzerLevelNow').show();
                        $('#analyzerLevelWeek').hide();
                        $('#analyzerLevelMonth').hide();
                        break;
                    }
                    case '1' : {
                        $('#analyzerLevelNow').hide();
                        $('#analyzerLevelWeek').show();
                        $('#analyzerLevelMonth').hide();
                        break;
                    }
                    case '2' : {
                        $('#analyzerLevelNow').hide();
                        $('#analyzerLevelWeek').hide();
                        $('#analyzerLevelMonth').show();
                        break;
                    }
                }
                break;
            }
            case 'pressure' : {
                $('#speedDiv').hide();
                $('#vibrationDiv').hide();
                $('#levelDiv').hide();
                $('#pressureDiv').show();
                switch (analyzerMode) {
                    case '0' : {
                        $('#analyzerPressureNow').show();
                        $('#analyzerPressureWeek').hide();
                        $('#analyzerPressureMonth').hide();
                        break;
                    }
                    case '1' : {
                        $('#analyzerPressureNow').hide();
                        $('#analyzerPressureWeek').show();
                        $('#analyzerPressureMonth').hide();
                        break;
                    }
                    case '2' : {
                        $('#analyzerPressureNow').hide();
                        $('#analyzerPressureWeek').hide();
                        $('#analyzerPressureMonth').show();
                        break;
                    }
                }
                break;
            }
        }
    });

    $('#selectAnalyzer').on('change' , function() {
        analyzerVariable = $(this).val();
        //console.log(analyzerVariable)
        switch (analyzerVariable) {
            case 'speed' : {
                $('#speedDiv').show();
    $('#vibrationDiv').hide();
    $('#levelDiv').hide();
    $('#pressureDiv').hide();
                switch (analyzerMode) {
                    case '0' : {
                        $('#analyzerSpeedNow').show();
                        $('#analyzerSpeedWeek').hide();
                        $('#analyzerSpeedMonth').hide();
                        break;
                    }
                    case '1' : {
                        $('#analyzerSpeedNow').hide();
                        $('#analyzerSpeedWeek').show();
                        $('#analyzerSpeedMonth').hide();
                        break;
                    }
                    case '2' : {
                        $('#analyzerSpeedNow').hide();
                        $('#analyzerSpeedWeek').hide();
                        $('#analyzerSpeedMonth').show();
                        break;
                    }
                }
                break;
            }
            case 'vibration' : {
                $('#speedDiv').hide();
    $('#vibrationDiv').show();
    $('#levelDiv').hide();
    $('#pressureDiv').hide();
                console.log('vibration ' + analyzerMode)
                switch (analyzerMode) {
                    case '0' : {
                        $('#analyzerVibrationNow').show();
                        $('#analyzerVibrationWeek').hide();
                        $('#analyzerVibrationMonth').hide();
                        break;
                    }
                    case '1' : {
                        $('#analyzerVibrationNow').hide();
                        $('#analyzerVibrationWeek').show();
                        $('#analyzerVibrationMonth').hide();
                        break;
                    }
                    case '2' : {
                        $('#analyzerVibrationNow').hide();
                        $('#analyzerVibrationWeek').hide();
                        $('#analyzerVibrationMonth').show();
                        break;
                    }
                }
                break;
            }
            case 'level' : {
                $('#speedDiv').hide();
                $('#vibrationDiv').hide();
                $('#levelDiv').show();
                $('#pressureDiv').hide();
                switch (analyzerMode) {
                    case '0' : {
                        $('#analyzerLevelNow').show();
                        $('#analyzerLevelWeek').hide();
                        $('#analyzerLevelMonth').hide();
                        break;
                    }
                    case '1' : {
                        $('#analyzerLevelNow').hide();
                        $('#analyzerLevelWeek').show();
                        $('#analyzerLevelMonth').hide();
                        break;
                    }
                    case '2' : {
                        $('#analyzerLevelNow').hide();
                        $('#analyzerLevelWeek').hide();
                        $('#analyzerLevelMonth').show();
                        break;
                    }
                }
                break;
            }
            case 'pressure' : {
                $('#speedDiv').hide();
                $('#vibrationDiv').hide();
                $('#levelDiv').hide();
                $('#pressureDiv').show();
                switch (analyzerMode) {
                    case'0' : {
                        $('#analyzerPressureNow').show();
                        $('#analyzerPressureWeek').hide();
                        $('#analyzerPressureMonth').hide();
                        break;
                    }
                    case '1' : {
                        $('#analyzerPressureNow').hide();
                        $('#analyzerPressureWeek').show();
                        $('#analyzerPressureMonth').hide();
                        break;
                    }
                    case '2' : {
                        $('#analyzerPressureNow').hide();
                        $('#analyzerPressureWeek').hide();
                        $('#analyzerPressureMonth').show();
                        break;
                    }
                }
                break;
            }
        }
    });
    

});

/* ********************* FUNCTIONS ************************ */

//Customize status text for status gauge
function customStatus(val) {
    if (val) return 'ON';
    else return 'OFF'
}

function loadGauge() {
    //Speed gauge
    speedGauge = new JustGage({
        id: 'motorSpeedGauge',
        value: 1200,
        min: 0,
        max: 3000,
        // symbol: ' RPM',
        label: 'RPM',
        donut: true,
        relativeGaugeSize: true,
        valueFontColor: 'white',
        valueFontSize: '10px',
        gaugeColor: 'rgba(255,255,255,0.15)',
        levelColors: [
            '#99ffa3',
            '#00cc14',
            '#00990f',
            '#00800d',
            '#00660a',
            '#00660a',

        ],
        pointer: true,
        pointerOptions: {
            toplength: 8,
            bottomlength: -20,
            bottomwidth: 6,
            color: '#00800d'
        },
        gaugeWidthScale: 0.2,
        counter: true,
    });

    //Level gauge
    levelGauge = new JustGage({
        id: 'levelGauge',
        value: 1,
        min: 0,
        max: 3,
        label: 'M',
        donut: true,
        relativeGaugeSize: true,
        valueFontColor: 'white',
        gaugeColor: 'rgba(255,255,255,0.15)',
        levelColors: [
            '#c9c9c9',
            '#e6e6e6',
            '#ffffff',
            '#ffffff',

        ],
        pointer: true,
        pointerOptions: {
            toplength: 8,
            bottomlength: -20,
            bottomwidth: 6,
            color: '#ffffff'
        },
        gaugeWidthScale: 0.2,
        counter: true,
    });

    //Vibration gauge
    vibrationGauge = new JustGage({
        id: 'vibrationGauge',
        value: 4,
        min: 0,
        max: 10,
        label: 'MM',
        donut: true,
        relativeGaugeSize: true,
        valueFontColor: 'white',
        gaugeColor: 'rgba(255,255,255,0.15)',
        levelColors: [
            '#efcda9',
            '#e3a868',
            '#d78228',
            '#c77824',

        ],
        pointer: true,
        pointerOptions: {
            toplength: 8,
            bottomlength: -20,
            bottomwidth: 6,
            color: '#c77824'
        },
        gaugeWidthScale: 0.2,
        counter: true,
    });

    //Pressure gauge
    pressureGauge = new JustGage({
        id: 'pressureGauge',
        value: 2,
        min: 0,
        max: 10,
        label: 'BAR',
        donut: true,
        relativeGaugeSize: true,
        valueFontColor: 'white',
        gaugeColor: 'rgba(255,255,255,0.15)',
        levelColors: [
            '#8452e0',
            '#5b22c3',
            '#4f1eaa',

        ],
        pointer: true,
        pointerOptions: {
            toplength: 8,
            bottomlength: -20,
            bottomwidth: 6,
            color: '#6526d9'
        },
        gaugeWidthScale: 0.2,
        counter: true,
    });
}

function loadSpeedChart() {
    var ctx = document.getElementById('speedChart').getContext('2d');
    speedChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        datasets: [{
            label: 'Speed',
           // backgroundColor: 'rgb(255, 255, 255, 0.2)',
            borderColor: 'rgb(0,102,10)',
            borderWidth : 2,
        }]
    },
   
    // Configuration options go here
    options: {
        legend : false,
        responsive: true,
        maintainAspectRatio: false, 
        title: {
            display: true,
            text: 'Motor speed chart',
            fontColor : 'white',
            fontSize : 20
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 16,
            bodyFontSize: 16
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        pan: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 0
			}
		},
		zoom: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 1000
            }
        },
        scales: {
            xAxes: [{
                display: true,
                type : 'realtime',
                scaleLabel: {
                    display: true,
                    labelString: 'Timestamp'
                },
                realtime: {
                    duration : 60000,
                    refresh : 1000,
                    delay: 2000,    
                    onRefresh: function(chart) {
                      chart.data.datasets.forEach(function(dataset) {
                        dataset.data.push({
                          x: Date.now(),
                          y: Math.random()
                        });
                      });
                    }
                  }
            }],
            yAxes: [{
                display: true,
                gridLines : {
                    color : '#282525    '
                },
                scaleLabel: {
                    display: true,
                    labelString: 'RPM'
                }
            }]
        }
    }
});
}

function loadVibrationChart() {
    var ctx = document.getElementById('vibrationChart').getContext('2d');
    vibrationChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        datasets: [{
            label: 'Vibration',
           // backgroundColor: 'rgb(255, 255, 255, 0.2)',
            borderColor: '#c77824',
            borderWidth : 2,
        }]
    },
   
    // Configuration options go here
    options: {
        legend : false,
        responsive: true,
        maintainAspectRatio: false, 
        title: {
            display: true,
            text: 'Motor vibration chart',
            fontColor : 'white',
            fontSize : 20
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 16,
            bodyFontSize: 16
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        pan: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 0
			}
		},
		zoom: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 1000
            }
        },
        scales: {
            xAxes: [{
                display: true,
                type : 'realtime',
                scaleLabel: {
                    display: true,
                    labelString: 'Timestamp'
                },
                realtime: {
                    duration : 60000,
                    refresh : 1000,
                    delay: 2000,    
                    onRefresh: function(chart) {
                      chart.data.datasets.forEach(function(dataset) {
                        dataset.data.push({
                          x: Date.now(),
                          y: Math.random()
                        });
                      });
                    }
                  }
            }],
            yAxes: [{
                display: true,
                gridLines : {
                    color : '#282525'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'MM'
                }
            }]
        }
    }
});
}

function loadLevelChart() {
    var ctx = document.getElementById('levelChart').getContext('2d');
    levelChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        datasets: [{
            label: 'Level',
           // backgroundColor: 'rgb(255, 255, 255, 0.2)',
            borderColor: 'rgb(201,201,201)',
            borderWidth : 2,
        }]
    },
   
    // Configuration options go here
    options: {
        legend : false,
        responsive: true,
        maintainAspectRatio: false, 
        title: {
            display: true,
            text: 'Water level chart',
            fontColor : 'white',
            fontSize : 20
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 16,
            bodyFontSize: 16
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        pan: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 0
			}
		},
		zoom: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 1000
            }
        },
        scales: {
            xAxes: [{
                display: true,
                type : 'realtime',
                scaleLabel: {
                    display: true,
                    labelString: 'Timestamp'
                },
                realtime: {
                    duration : 60000,
                    refresh : 1000,
                    delay: 2000,    
                    onRefresh: function(chart) {
                      chart.data.datasets.forEach(function(dataset) {
                        dataset.data.push({
                          x: Date.now(),
                          y: Math.random()
                        });
                      });
                    }
                  }
            }],
            yAxes: [{
                display: true,
                gridLines : {
                    color : '#282525'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'M'
                }
            }]
        }
    }
});
}

function loadPressureChart() {
    var ctx = document.getElementById('pressureChart').getContext('2d');
    pressureChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        datasets: [{
            label: 'Pressure',
           // backgroundColor: 'rgb(255, 255, 255, 0.2)',
            borderColor: '#9367e4',
            borderWidth : 2,
        }]
    },
   
    // Configuration options go here
    options: {
        legend : false,
        responsive: true,
        maintainAspectRatio: false, 
        title: {
            display: true,
            text: 'Pipe pressure chart',
            fontColor : 'white',
            fontSize : 20
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 16,
            bodyFontSize: 16
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        pan: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 0
			}
		},
		zoom: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 1000
            }
        },
        scales: {
            xAxes: [{
                display: true,
                type : 'realtime',
                scaleLabel: {
                    display: true,
                    labelString: 'Timestamp'
                },
                realtime: {
                    duration : 60000,
                    refresh : 1000,
                    delay: 2000,    
                    onRefresh: function(chart) {
                      chart.data.datasets.forEach(function(dataset) {
                        dataset.data.push({
                          x: Date.now(),
                          y: Math.random()
                        });
                      });
                    }
                  }
            }],
            yAxes: [{
                display: true,
                gridLines : {
                    color : '#282525'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'BAR'
                }
            }]
        }
    }
});
}

function loadRealtimeChart(){
    $('#vibrationChart').hide();
    $('#levelChart').hide();
    $('#pressureChart').hide();

    loadSpeedChart();
    loadVibrationChart();
    loadLevelChart();
    loadPressureChart()
}

function loadAnalyzer() {
    $('#speedDiv').show();
    $('#vibrationDiv').hide();
    $('#levelDiv').hide();
    $('#pressureDiv').hide();

    //Hide Speed Week and Month canvas
    $('#analyzerSpeedWeek').hide();
    $('#analyzerSpeedMonth').hide();

    //Load analyzer
    loadSpeedAnalyzer();
    loadVibrationAnalyzer();
    loadLevelAnalyzer();
    loadPressureAnalyzer();

}

function loadSpeedAnalyzer() {
    loadSpeedAnalyzerNow();
    loadSpeedAnalyzerWeek();
    loadSpeedAnalyzerMonth();
}

function loadVibrationAnalyzer() {
    loadVibrationAnalyzerNow();
    loadVibrationAnalyzerWeek();
    loadVibrationAnalyzerMonth();    
}

function loadLevelAnalyzer() {
    loadLevelAnalyzerNow();
    loadLevelAnalyzerWeek();
    loadLevelAnalyzerMonth();
}

function loadPressureAnalyzer() {
    loadPressureAnalyzerNow();
    loadPressureAnalyzerWeek();
    loadPressureAnalyzerMonth();
}

//Speed 
function loadSpeedAnalyzerNow() {

    var ctx = document.getElementById('analyzerSpeedNow').getContext('2d');
    speedChartNow = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        datasets: [{
            label: 'Speed',
           // backgroundColor: 'rgb(255, 255, 255, 0.2)',
            borderColor: 'rgb(0,102,10)',
            borderWidth : 2,
        }]
    },
   
    // Configuration options go here
    options: {
        legend : false,
        responsive: true,
        maintainAspectRatio: false, 
        title: {
            display: true,
            text: 'Motor speed now',
            fontColor : 'white',
            fontSize : 20
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 16,
            bodyFontSize: 16
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        pan: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 0
			}
		},
		zoom: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 1000
            }
        },
        scales: {
            xAxes: [{
                display: true,
                type : 'realtime',
                scaleLabel: {
                    display: true,
                    labelString: 'Timestamp'
                },
                realtime: {
                    duration : 60000,
                    refresh : 1000,
                    delay: 2000,    
                    onRefresh: function(chart) {
                      chart.data.datasets.forEach(function(dataset) {
                        dataset.data.push({
                          x: Date.now(),
                          y: Math.random()
                        });
                      });
                    }
                  }
            }],
            yAxes: [{
                display: true,
                gridLines : {
                    color : '#282525'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'RPM'
                }
            }]
        }
    }
});
}

function loadSpeedAnalyzerWeek() {
    var ctx = document.getElementById('analyzerSpeedWeek').getContext('2d');
    speedChartWeek = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            data: [1200, 900, 1300, 1000, 1150, 800, 950],
            label: 'Speed',
           // backgroundColor: 'rgb(255, 255, 255, 0.2)',
            borderColor: 'rgb(0,102,10)',
            borderWidth : 2,
        }]
    },
   
    // Configuration options go here
    options: {
        legend : false,
        responsive: true,
        maintainAspectRatio: false, 
        title: {
            display: true,
            text: 'Motor speed week',
            fontColor : 'white',
            fontSize : 20
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 16,
            bodyFontSize: 16
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        pan: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 0
			}
		},
		zoom: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 1000
            }
        },
        scales: {
            xAxes: [{
                display: true,
                // type : 'realtime',
                scaleLabel: {
                    display: true,
                    labelString: 'Day'
                },
                // realtime: {
                //     duration : 60000,
                //     refresh : 1000,
                //     delay: 2000,    
                //     onRefresh: function(chart) {
                //       chart.data.datasets.forEach(function(dataset) {
                //         dataset.data.push({
                //           x: Date.now(),
                //           y: Math.random()
                //         });
                //       });
                //     }
                //   }
            }],
            yAxes: [{
                display: true,
                gridLines : {
                    color : '#282525'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'RPM'
                }
            }]
        }
    }
});
}

function loadSpeedAnalyzerMonth() {
    var ctx = document.getElementById('analyzerSpeedMonth').getContext('2d');
    speedChartMonth = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            data: [1200, 900, 1300, 1000, 1150, 800, 950],
            label: 'Speed',
           // backgroundColor: 'rgb(255, 255, 255, 0.2)',
            borderColor: 'rgb(0,102,10)',
            borderWidth : 2,
        }]
    },
   
    // Configuration options go here
    options: {
        legend : false,
        responsive: true,
        maintainAspectRatio: false, 
        title: {
            display: true,
            text: 'Motor speed month',
            fontColor : 'white',
            fontSize : 20
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 16,
            bodyFontSize: 16
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        pan: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 0
			}
		},
		zoom: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 1000
            }
        },
        scales: {
            xAxes: [{
                display: true,
                // type : 'realtime',
                scaleLabel: {
                    display: true,
                    labelString: 'Day'
                },
                // realtime: {
                //     duration : 60000,
                //     refresh : 1000,
                //     delay: 2000,    
                //     onRefresh: function(chart) {
                //       chart.data.datasets.forEach(function(dataset) {
                //         dataset.data.push({
                //           x: Date.now(),
                //           y: Math.random()
                //         });
                //       });
                //     }
                //   }
            }],
            yAxes: [{
                display: true,
                gridLines : {
                    color : '#282525'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'RPM'
                }
            }]
        }
    }
});
}

//Level
function loadLevelAnalyzerNow() {
    var ctx = document.getElementById('analyzerLevelNow').getContext('2d');
    levelChartNow = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        datasets: [{
            label: 'Level',
           // backgroundColor: 'rgb(255, 255, 255, 0.2)',
            borderColor: 'rgb(0,102,10)',
            borderWidth : 2,
        }]
    },
   
    // Configuration options go here
    options: {
        legend : false,
        responsive: true,
        maintainAspectRatio: false, 
        title: {
            display: true,
            text: 'Water level now',
            fontColor : 'white',
            fontSize : 20
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 16,
            bodyFontSize: 16
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        pan: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 0
			}
		},
		zoom: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 1000
            }
        },
        scales: {
            xAxes: [{
                display: true,
                type : 'realtime',
                scaleLabel: {
                    display: true,
                    labelString: 'Timestamp'
                },
                realtime: {
                    duration : 60000,
                    refresh : 1000,
                    delay: 2000,    
                    onRefresh: function(chart) {
                      chart.data.datasets.forEach(function(dataset) {
                        dataset.data.push({
                          x: Date.now(),
                          y: Math.random()
                        });
                      });
                    }
                  }
            }],
            yAxes: [{
                display: true,
                gridLines : {
                    color : '#282525'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'M'
                }
            }]
        }
    }
});
}

function loadLevelAnalyzerWeek() {
    var ctx = document.getElementById('analyzerLevelWeek').getContext('2d');
    levelChartWeek = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            data: [1200, 900, 1300, 1000, 1150, 800, 950],
            label: 'Level',
           // backgroundColor: 'rgb(255, 255, 255, 0.2)',
            borderColor: 'rgb(0,102,10)',
            borderWidth : 2,
        }]
    },
   
    // Configuration options go here
    options: {
        legend : false,
        responsive: true,
        maintainAspectRatio: false, 
        title: {
            display: true,
            text: 'Water level week',
            fontColor : 'white',
            fontSize : 20
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 16,
            bodyFontSize: 16
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        pan: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 0
			}
		},
		zoom: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 1000
            }
        },
        scales: {
            xAxes: [{
                display: true,
                // type : 'realtime',
                scaleLabel: {
                    display: true,
                    labelString: 'Day'
                },
                // realtime: {
                //     duration : 60000,
                //     refresh : 1000,
                //     delay: 2000,    
                //     onRefresh: function(chart) {
                //       chart.data.datasets.forEach(function(dataset) {
                //         dataset.data.push({
                //           x: Date.now(),
                //           y: Math.random()
                //         });
                //       });
                //     }
                //   }
            }],
            yAxes: [{
                display: true,
                gridLines : {
                    color : '#282525'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'M'
                }
            }]
        }
    }
});
}

function loadLevelAnalyzerMonth() {
    var ctx = document.getElementById('analyzerLevelMonth').getContext('2d');
    levelChartMonth = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            data: [1200, 900, 1300, 1000, 1150, 800, 950],
            label: 'Level',
           // backgroundColor: 'rgb(255, 255, 255, 0.2)',
            borderColor: 'rgb(0,102,10)',
            borderWidth : 2,
        }]
    },
   
    // Configuration options go here
    options: {
        legend : false,
        responsive: true,
        maintainAspectRatio: false, 
        title: {
            display: true,
            text: 'Level month',
            fontColor : 'white',
            fontSize : 20
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 16,
            bodyFontSize: 16
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        pan: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 0
			}
		},
		zoom: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 1000
            }
        },
        scales: {
            xAxes: [{
                display: true,
                // type : 'realtime',
                scaleLabel: {
                    display: true,
                    labelString: 'Day'
                },
                // realtime: {
                //     duration : 60000,
                //     refresh : 1000,
                //     delay: 2000,    
                //     onRefresh: function(chart) {
                //       chart.data.datasets.forEach(function(dataset) {
                //         dataset.data.push({
                //           x: Date.now(),
                //           y: Math.random()
                //         });
                //       });
                //     }
                //   }
            }],
            yAxes: [{
                display: true,
                gridLines : {
                    color : '#282525'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'M'
                }
            }]
        }
    }
});
}


//Pressure
function loadPressureAnalyzerNow() {
    var ctx = document.getElementById('analyzerPressureNow').getContext('2d');
    pressureChartNow = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        datasets: [{
            label: 'Pressure',
           // backgroundColor: 'rgb(255, 255, 255, 0.2)',
            borderColor: 'rgb(0,102,10)',
            borderWidth : 2,
        }]
    },
   
    // Configuration options go here
    options: {
        legend : false,
        responsive: true,
        maintainAspectRatio: false, 
        title: {
            display: true,
            text: 'Pressure now',
            fontColor : 'white',
            fontSize : 20
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 16,
            bodyFontSize: 16
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        pan: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 0
			}
		},
		zoom: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 1000
            }
        },
        scales: {
            xAxes: [{
                display: true,
                type : 'realtime',
                scaleLabel: {
                    display: true,
                    labelString: 'Timestamp'
                },
                realtime: {
                    duration : 60000,
                    refresh : 1000,
                    delay: 2000,    
                    onRefresh: function(chart) {
                      chart.data.datasets.forEach(function(dataset) {
                        dataset.data.push({
                          x: Date.now(),
                          y: Math.random()
                        });
                      });
                    }
                  }
            }],
            yAxes: [{
                display: true,
                gridLines : {
                    color : '#282525'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'BAR'
                }
            }]
        }
    }
});
}

function loadPressureAnalyzerWeek() {
    var ctx = document.getElementById('analyzerPressureWeek').getContext('2d');
    pressureChartWeek = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            data: [1200, 900, 1300, 1000, 1150, 800, 950],
            label: 'Pressure',
           // backgroundColor: 'rgb(255, 255, 255, 0.2)',
            borderColor: 'rgb(0,102,10)',
            borderWidth : 2,
        }]
    },
   
    // Configuration options go here
    options: {
        legend : false,
        responsive: true,
        maintainAspectRatio: false, 
        title: {
            display: true,
            text: 'Pressure week',
            fontColor : 'white',
            fontSize : 20
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 16,
            bodyFontSize: 16
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        pan: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 0
			}
		},
		zoom: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 1000
            }
        },
        scales: {
            xAxes: [{
                display: true,
                // type : 'realtime',
                scaleLabel: {
                    display: true,
                    labelString: 'Day'
                },
                // realtime: {
                //     duration : 60000,
                //     refresh : 1000,
                //     delay: 2000,    
                //     onRefresh: function(chart) {
                //       chart.data.datasets.forEach(function(dataset) {
                //         dataset.data.push({
                //           x: Date.now(),
                //           y: Math.random()
                //         });
                //       });
                //     }
                //   }
            }],
            yAxes: [{
                display: true,
                gridLines : {
                    color : '#282525'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'BAR'
                }
            }]
        }
    }
});
}

function loadPressureAnalyzerMonth() {
    var ctx = document.getElementById('analyzerPressureMonth').getContext('2d');
    pressureChartMonth = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            data: [1200, 900, 1300, 1000, 1150, 800, 950],
            label: 'Pressure',
           // backgroundColor: 'rgb(255, 255, 255, 0.2)',
            borderColor: 'rgb(0,102,10)',
            borderWidth : 2,
        }]
    },
   
    // Configuration options go here
    options: {
        legend : false,
        responsive: true,
        maintainAspectRatio: false, 
        title: {
            display: true,
            text: 'Pressure month',
            fontColor : 'white',
            fontSize : 20
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 16,
            bodyFontSize: 16
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        pan: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 0
			}
		},
		zoom: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 1000
            }
        },
        scales: {
            xAxes: [{
                display: true,
                // type : 'realtime',
                scaleLabel: {
                    display: true,
                    labelString: 'Day'
                },
                // realtime: {
                //     duration : 60000,
                //     refresh : 1000,
                //     delay: 2000,    
                //     onRefresh: function(chart) {
                //       chart.data.datasets.forEach(function(dataset) {
                //         dataset.data.push({
                //           x: Date.now(),
                //           y: Math.random()
                //         });
                //       });
                //     }
                //   }
            }],
            yAxes: [{
                display: true,
                gridLines : {
                    color : '#282525'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'BAR'
                }
            }]
        }
    }
});
}

//Vibration
function loadVibrationAnalyzerNow() {
    var ctx = document.getElementById('analyzerVibrationNow').getContext('2d');
    vibrationChartNow = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        datasets: [{
            label: 'Vibration',
           // backgroundColor: 'rgb(255, 255, 255, 0.2)',
            borderColor: 'rgb(0,102,10)',
            borderWidth : 2,
        }]
    },
   
    // Configuration options go here
    options: {
        legend : false,
        responsive: true,
        maintainAspectRatio: false, 
        title: {
            display: true,
            text: 'Vibration now',
            fontColor : 'white',
            fontSize : 20
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 16,
            bodyFontSize: 16
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        pan: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 0
			}
		},
		zoom: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 1000
            }
        },
        scales: {
            xAxes: [{
                display: true,
                type : 'realtime',
                scaleLabel: {
                    display: true,
                    labelString: 'Timestamp'
                },
                realtime: {
                    duration : 60000,
                    refresh : 1000,
                    delay: 2000,    
                    onRefresh: function(chart) {
                      chart.data.datasets.forEach(function(dataset) {
                        dataset.data.push({
                          x: Date.now(),
                          y: Math.random()
                        });
                      });
                    }
                  }
            }],
            yAxes: [{
                display: true,
                gridLines : {
                    color : '#282525'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'MM'
                }
            }]
        }
    }
});
}

function loadVibrationAnalyzerWeek() {
    var ctx = document.getElementById('analyzerVibrationWeek').getContext('2d');
    vibrationChartWeek = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            data: [1200, 900, 1300, 1000, 1150, 800, 950],
            label: 'Vibration',
           // backgroundColor: 'rgb(255, 255, 255, 0.2)',
            borderColor: 'rgb(0,102,10)',
            borderWidth : 2,
        }]
    },
   
    // Configuration options go here
    options: {
        legend : false,
        responsive: true,
        maintainAspectRatio: false, 
        title: {
            display: true,
            text: 'Vibration week',
            fontColor : 'white',
            fontSize : 20
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 16,
            bodyFontSize: 16
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        pan: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 0
			}
		},
		zoom: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 1000
            }
        },
        scales: {
            xAxes: [{
                display: true,
                // type : 'realtime',
                scaleLabel: {
                    display: true,
                    labelString: 'Day'
                },
                // realtime: {
                //     duration : 60000,
                //     refresh : 1000,
                //     delay: 2000,    
                //     onRefresh: function(chart) {
                //       chart.data.datasets.forEach(function(dataset) {
                //         dataset.data.push({
                //           x: Date.now(),
                //           y: Math.random()
                //         });
                //       });
                //     }
                //   }
            }],
            yAxes: [{
                display: true,
                gridLines : {
                    color : '#282525'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'MM'
                }
            }]
        }
    }
});
}

function loadVibrationAnalyzerMonth() {
    var ctx = document.getElementById('analyzerVibrationMonth').getContext('2d');
    vibrationChartMonth = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            data: [1200, 900, 1300, 1000, 1150, 800, 950],
            label: 'Vibration',
           // backgroundColor: 'rgb(255, 255, 255, 0.2)',
            borderColor: 'rgb(0,102,10)',
            borderWidth : 2,
        }]
    },
   
    // Configuration options go here
    options: {
        legend : false,
        responsive: true,
        maintainAspectRatio: false, 
        title: {
            display: true,
            text: 'Vibration month',
            fontColor : 'white',
            fontSize : 20
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 16,
            bodyFontSize: 16
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        pan: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 0
			}
		},
		zoom: {
			enabled: true,
			mode: 'x',
			rangeMax: {
				x: 60000
			},
			rangeMin: {
				x: 1000
            }
        },
        scales: {
            xAxes: [{
                display: true,
                // type : 'realtime',
                scaleLabel: {
                    display: true,
                    labelString: 'Day'
                },
                // realtime: {
                //     duration : 60000,
                //     refresh : 1000,
                //     delay: 2000,    
                //     onRefresh: function(chart) {
                //       chart.data.datasets.forEach(function(dataset) {
                //         dataset.data.push({
                //           x: Date.now(),
                //           y: Math.random()
                //         });
                //       });
                //     }
                //   }
            }],
            yAxes: [{
                display: true,
                gridLines : {
                    color : '#282525'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'MM'
                }
            }]
        }
    }
});
}

