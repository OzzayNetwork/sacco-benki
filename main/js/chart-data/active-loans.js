
			Highcharts.chart('active-loans', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    backgroundColor: 'transparent'
                },
                title: {
                    text: null,
                    align: 'center',
                    verticalAlign: 'middle',
                    y: 60,
                    style: {
                            color: '#a5a8ad'
                        }
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f} %</b>'
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: true,
                           
                            style: {
                                fontWeight: 'bold',
                                color: 'white',
                                color: 'black',
                                
                                font: '600 14px "Muli", sans-serif'
                            }
                            
                            
                        },
                        startAngle: -90,
                        endAngle: 90,
                        center: ['50%', '75%'],
                        size: '110%',
                        borderWidth: 0,
                            
                    }
                },
                legend: {
                        enabled: true
                    },
                    
                    legend: {        
                    borderWidth: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#CCC',
                    borderWidth: 1,
                    itemStyle: {
                        color: 'white',
                        font: '600 12px "Muli", sans-serif'
                    },
                    itemHoverStyle: {
                        color: '#a7dbd8',
                        font: '600 14px "Muli", sans-serif'
                    },
                },
                    
            
                series: [{
                    type: 'pie',
                    name: 'Percentage',
                    innerSize: '50%',
                    // data: [
                    //     [name: 'Recovered Loans', y: 5119362, color: 'green'],
                    // 	[name: 'Unpaid Loans', y: 15250600, color: 'red'],			
                    // ],
            
                    data: [{
                        name: 'Loans with guarantors',
                        y: 15119362,
                        color: '#09af00' // green
                    },
                    {
                        name: 'Loans without guarantors',
                        y: 15250600,
                        color: '#fc1808' // red
                    },                          
            
            
                    ]
                }]
            });
            