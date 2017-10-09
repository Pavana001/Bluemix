google.load('visualization', '1', {packages:['table']});
// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {packages: ['corechart']});

google.setOnLoadCallback(initialize);

function initialize() {

function getMyData(linkToGs, myQuery, responseCallback) {

    var my_query = new google.visualization.Query(linkToGs);
    my_query.setQuery(myQuery);
    my_query.send(handleQueryReposnse);
    
    function handleQueryReposnse(response) {

        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }
         responseCallback(response);
    };
    
};


    var summary = getMyData('https://spreadsheets.google.com/tq?tqx=out:html&tq=select%20A&key=1STNiOXklLF7xcwOD0z4IsKRpZUz8J50V0_bvuByvmTA&gid=0','select A', function(result) {

    document.getElementById("summary").innerHTML = result.getDataTable().getValue(0,0);

});

var table = getMyData('https://spreadsheets.google.com/tq?tqx=out:html&tq=select%20A%2CB%2CC%2CD%2CE%2CF%2CG%2CH&key=1STNiOXklLF7xcwOD0z4IsKRpZUz8J50V0_bvuByvmTA&gid=1459949785','select A, B, C, D, E, F, G, H', function(result) {
    

    var data = result.getDataTable();
	
    
    var formatter = new google.visualization.PatternFormat('<a href="{1}">{0}</a>');
                formatter.format(data, [0, 1]); // Apply formatter and set the formatted value of the first column.

                var view = new google.visualization.DataView(data);
                view.setColumns([0,1,2,3,4,5,6,7]); // Create a view with the first column only.

                        

    var KPI_by_Level_17 = new google.visualization.Table(document.getElementById('KPI_by_Level_17'));
    KPI_by_Level_17.draw(data, {allowHtml : true, showRowNumber: true});     

});
var Pipeline_by_level_15 = getMyData('https://spreadsheets.google.com/tq?tqx=out:html&tq=select%20B%20%2C%20sum(I)%20GROUP%20BY%20B&key=1STNiOXklLF7xcwOD0z4IsKRpZUz8J50V0_bvuByvmTA&gid=1905394276','select B, sum(I) GROUP BY B', function(result) {
    
    var data = result.getDataTable();

    var options = {
        'title': 'Pipeline by level 15',
        'width': 540,
        'height': 400,
        'pieSliceText': 'Dollar',
        'titleTextStyle': {
            fontSize: 26
        },
        'chartArea': {
            left: 50,
            top: 40,
            width: "100%",
            height: "100%"
        },
        'slices': {

        }
    };

    var formatter = new google.visualization.NumberFormat({prefix: '$'});
      
    for (var i=0; i<data.getNumberOfColumns(); i++) {
        formatter.format(data, i);  
    }    


    var chart = new google.visualization.PieChart(document.getElementById('Pipeline_by_level_15'));
    chart.draw(data, options);    

});
var chart = getMyData('https://spreadsheets.google.com/tq?tqx=out:html&tq=select%20B%20%2C%20sum(E)%20group%20by%20B&key=1STNiOXklLF7xcwOD0z4IsKRpZUz8J50V0_bvuByvmTA&gid=1905394276','select B, sum(E) GROUP BY B', function(result) {

    var data = result.getDataTable();

    var options = {
        'title': 'Cov% by Level 17',
        'width': 540,
        'height': 400,
        'pieSliceText': 'percentage',
        'titleTextStyle': {

            fontSize: 26
        },
        'chartArea': {
            left: 50,
            top: 40,
            width: "100%",
            height: "100%"
        },
        'slices': {
        }
    };

    var formatter = new google.visualization.NumberFormat(
      {});
    formatter.format(data, 1);     



    var chart = new google.visualization.PieChart(document.getElementById('Cov%_by_Level_17'));
    chart.draw(data, options);    
});


var ttv = getMyData('https://spreadsheets.google.com/tq?tqx=out:html&tq=select%20A%20%2C%20sum(I)%20GROUP%20BY%20A%20pivot%20B&key=1STNiOXklLF7xcwOD0z4IsKRpZUz8J50V0_bvuByvmTA&gid=1905394276','select A , sum(I) GROUP BY A pivot B', function(result) {
    
    var data = result.getDataTable();

    //var table = new google.visualization.Table(document.getElementById('table_div'));

    var options = {
        'fontSize' : 12,
        'width': 800,
        'height': 300,
        'vAxis': {
            'gridlines' : {
                'color':'71035a',
                'count': 2
            }
        },
        'legend': {
            'position':'bottom',
            'textStyle' : {
                'fontSize':'12'
            }
        },
        'hAxis': {
            'format' : '$###,###',
            gridlines : {
                color : 'dddddd',
                count: 17
            }          
        },
        'titleTextStyle': {
            fontSize: 26
        },
        'isStacked': true,
        'chartArea': {
            left: 50,
            top: 0,
            width: "100%",
            height: "65%"
        },        
        'series': {

        },


    };

    var formatter = new google.visualization.NumberFormat({prefix: '$'});
      
    for (var i=0; i<data.getNumberOfColumns(); i++) {
        formatter.format(data, i);  
    }

    var chart = new google.visualization.BarChart(document.getElementById('VP contribution by Level 17'));

    chart.draw(data, options);

});



}


