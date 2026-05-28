/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 0.0, "KoPercent": 100.0};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.0, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.0, 500, 1500, "HTTP Request #1"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 100, 100, 100.0, 2031.0000000000007, 1111, 10267, 1146.0, 4491.0, 9484.99999999997, 10266.96, 2.0432348494135915, 0.46092504903763637, 0.3152647521556128], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["HTTP Request #1", 100, 100, 100.0, 2031.0000000000007, 1111, 10267, 1146.0, 4491.0, 9484.99999999997, 10266.96, 2.0432348494135915, 0.46092504903763637, 0.3152647521556128], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 1,143 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 4,491 milliseconds, but should not have lasted longer than 790 milliseconds.", 2, 2.0, 2.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,133 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,149 milliseconds, but should not have lasted longer than 790 milliseconds.", 2, 2.0, 2.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,670 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 10,263 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,153 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,132 milliseconds, but should not have lasted longer than 790 milliseconds.", 4, 4.0, 4.0], "isController": false}, {"data": ["The operation lasted too long: It took 7,053 milliseconds, but should not have lasted longer than 790 milliseconds.", 3, 3.0, 3.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,138 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,159 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,111 milliseconds, but should not have lasted longer than 790 milliseconds.", 2, 2.0, 2.0], "isController": false}, {"data": ["The operation lasted too long: It took 10,259 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,503 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,170 milliseconds, but should not have lasted longer than 790 milliseconds.", 2, 2.0, 2.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,134 milliseconds, but should not have lasted longer than 790 milliseconds.", 2, 2.0, 2.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,131 milliseconds, but should not have lasted longer than 790 milliseconds.", 10, 10.0, 10.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,127 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,639 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,163 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,253 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,121 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,600 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,349 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,186 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,141 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,295 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 4,045 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,140 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 9,613 milliseconds, but should not have lasted longer than 790 milliseconds.", 2, 2.0, 2.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,136 milliseconds, but should not have lasted longer than 790 milliseconds.", 5, 5.0, 5.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,115 milliseconds, but should not have lasted longer than 790 milliseconds.", 2, 2.0, 2.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,310 milliseconds, but should not have lasted longer than 790 milliseconds.", 3, 3.0, 3.0], "isController": false}, {"data": ["The operation lasted too long: It took 10,267 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,146 milliseconds, but should not have lasted longer than 790 milliseconds.", 3, 3.0, 3.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,151 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,125 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,130 milliseconds, but should not have lasted longer than 790 milliseconds.", 3, 3.0, 3.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,225 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,156 milliseconds, but should not have lasted longer than 790 milliseconds.", 2, 2.0, 2.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,167 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,100 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,135 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,148 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,730 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,068 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 4,798 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,113 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,145 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 4,490 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,142 milliseconds, but should not have lasted longer than 790 milliseconds.", 2, 2.0, 2.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,116 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,698 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,162 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,126 milliseconds, but should not have lasted longer than 790 milliseconds.", 2, 2.0, 2.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,287 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,129 milliseconds, but should not have lasted longer than 790 milliseconds.", 2, 2.0, 2.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,158 milliseconds, but should not have lasted longer than 790 milliseconds.", 3, 3.0, 3.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,528 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,194 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,120 milliseconds, but should not have lasted longer than 790 milliseconds.", 2, 2.0, 2.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,152 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 1.0, 1.0], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 100, 100, "The operation lasted too long: It took 1,131 milliseconds, but should not have lasted longer than 790 milliseconds.", 10, "The operation lasted too long: It took 1,136 milliseconds, but should not have lasted longer than 790 milliseconds.", 5, "The operation lasted too long: It took 1,132 milliseconds, but should not have lasted longer than 790 milliseconds.", 4, "The operation lasted too long: It took 7,053 milliseconds, but should not have lasted longer than 790 milliseconds.", 3, "The operation lasted too long: It took 1,310 milliseconds, but should not have lasted longer than 790 milliseconds.", 3], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HTTP Request #1", 100, 100, "The operation lasted too long: It took 1,131 milliseconds, but should not have lasted longer than 790 milliseconds.", 10, "The operation lasted too long: It took 1,136 milliseconds, but should not have lasted longer than 790 milliseconds.", 5, "The operation lasted too long: It took 1,132 milliseconds, but should not have lasted longer than 790 milliseconds.", 4, "The operation lasted too long: It took 7,053 milliseconds, but should not have lasted longer than 790 milliseconds.", 3, "The operation lasted too long: It took 1,310 milliseconds, but should not have lasted longer than 790 milliseconds.", 3], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
