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

    var data = {"OkPercent": 77.85984197870148, "KoPercent": 22.14015802129852};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.38929920989350736, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.38929920989350736, 500, 1500, "HTTP Request"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 5822, 1289, 22.14015802129852, 734.7141875644127, 536, 6291, 725.0, 806.0, 816.0, 839.0, 11.436788270121932, 2.579978603904459, 1.7646606901164696], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["HTTP Request", 5822, 1289, 22.14015802129852, 734.7141875644127, 536, 6291, 725.0, 806.0, 816.0, 839.0, 11.436788270121932, 2.579978603904459, 1.7646606901164696], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 840 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 857 milliseconds, but should not have lasted longer than 790 milliseconds.", 2, 0.1551590380139643, 0.034352456200618345], "isController": false}, {"data": ["The operation lasted too long: It took 795 milliseconds, but should not have lasted longer than 790 milliseconds.", 51, 3.95655546935609, 0.8759876331157678], "isController": false}, {"data": ["The operation lasted too long: It took 804 milliseconds, but should not have lasted longer than 790 milliseconds.", 49, 3.8013964313421256, 0.8416351769151494], "isController": false}, {"data": ["The operation lasted too long: It took 851 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 825 milliseconds, but should not have lasted longer than 790 milliseconds.", 6, 0.46547711404189296, 0.10305736860185503], "isController": false}, {"data": ["The operation lasted too long: It took 872 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 846 milliseconds, but should not have lasted longer than 790 milliseconds.", 3, 0.23273855702094648, 0.05152868430092752], "isController": false}, {"data": ["The operation lasted too long: It took 856 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 835 milliseconds, but should not have lasted longer than 790 milliseconds.", 4, 0.3103180760279286, 0.06870491240123669], "isController": false}, {"data": ["The operation lasted too long: It took 794 milliseconds, but should not have lasted longer than 790 milliseconds.", 39, 3.025601241272304, 0.6698728959120577], "isController": false}, {"data": ["The operation lasted too long: It took 871 milliseconds, but should not have lasted longer than 790 milliseconds.", 6, 0.46547711404189296, 0.10305736860185503], "isController": false}, {"data": ["The operation lasted too long: It took 6,239 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 814 milliseconds, but should not have lasted longer than 790 milliseconds.", 16, 1.2412723041117144, 0.27481964960494676], "isController": false}, {"data": ["The operation lasted too long: It took 824 milliseconds, but should not have lasted longer than 790 milliseconds.", 8, 0.6206361520558572, 0.13740982480247338], "isController": false}, {"data": ["The operation lasted too long: It took 850 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 5,825 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 803 milliseconds, but should not have lasted longer than 790 milliseconds.", 46, 3.5686578743211794, 0.790106492614222], "isController": false}, {"data": ["The operation lasted too long: It took 852 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 813 milliseconds, but should not have lasted longer than 790 milliseconds.", 20, 1.5515903801396431, 0.3435245620061834], "isController": false}, {"data": ["The operation lasted too long: It took 6,290 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 974 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 816 milliseconds, but should not have lasted longer than 790 milliseconds.", 21, 1.6291698991466252, 0.36070079010649264], "isController": false}, {"data": ["The operation lasted too long: It took 845 milliseconds, but should not have lasted longer than 790 milliseconds.", 2, 0.1551590380139643, 0.034352456200618345], "isController": false}, {"data": ["The operation lasted too long: It took 6,280 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 842 milliseconds, but should not have lasted longer than 790 milliseconds.", 2, 0.1551590380139643, 0.034352456200618345], "isController": false}, {"data": ["The operation lasted too long: It took 797 milliseconds, but should not have lasted longer than 790 milliseconds.", 34, 2.6377036462373935, 0.5839917554105118], "isController": false}, {"data": ["The operation lasted too long: It took 855 milliseconds, but should not have lasted longer than 790 milliseconds.", 3, 0.23273855702094648, 0.05152868430092752], "isController": false}, {"data": ["The operation lasted too long: It took 810 milliseconds, but should not have lasted longer than 790 milliseconds.", 29, 2.2498060512024827, 0.49811061490896597], "isController": false}, {"data": ["The operation lasted too long: It took 826 milliseconds, but should not have lasted longer than 790 milliseconds.", 4, 0.3103180760279286, 0.06870491240123669], "isController": false}, {"data": ["The operation lasted too long: It took 829 milliseconds, but should not have lasted longer than 790 milliseconds.", 3, 0.23273855702094648, 0.05152868430092752], "isController": false}, {"data": ["The operation lasted too long: It took 823 milliseconds, but should not have lasted longer than 790 milliseconds.", 18, 1.3964313421256789, 0.3091721058055651], "isController": false}, {"data": ["The operation lasted too long: It took 830 milliseconds, but should not have lasted longer than 790 milliseconds.", 2, 0.1551590380139643, 0.034352456200618345], "isController": false}, {"data": ["The operation lasted too long: It took 6,184 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 6,148 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 833 milliseconds, but should not have lasted longer than 790 milliseconds.", 14, 1.0861132660977502, 0.2404671934043284], "isController": false}, {"data": ["The operation lasted too long: It took 836 milliseconds, but should not have lasted longer than 790 milliseconds.", 6, 0.46547711404189296, 0.10305736860185503], "isController": false}, {"data": ["The operation lasted too long: It took 820 milliseconds, but should not have lasted longer than 790 milliseconds.", 18, 1.3964313421256789, 0.3091721058055651], "isController": false}, {"data": ["The operation lasted too long: It took 6,145 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 862 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 839 milliseconds, but should not have lasted longer than 790 milliseconds.", 5, 0.3878975950349108, 0.08588114050154586], "isController": false}, {"data": ["The operation lasted too long: It took 843 milliseconds, but should not have lasted longer than 790 milliseconds.", 2, 0.1551590380139643, 0.034352456200618345], "isController": false}, {"data": ["The operation lasted too long: It took 798 milliseconds, but should not have lasted longer than 790 milliseconds.", 59, 4.577191621411948, 1.0133974579182412], "isController": false}, {"data": ["The operation lasted too long: It took 801 milliseconds, but should not have lasted longer than 790 milliseconds.", 51, 3.95655546935609, 0.8759876331157678], "isController": false}, {"data": ["The operation lasted too long: It took 792 milliseconds, but should not have lasted longer than 790 milliseconds.", 35, 2.7152831652443754, 0.601167983510821], "isController": false}, {"data": ["The operation lasted too long: It took 807 milliseconds, but should not have lasted longer than 790 milliseconds.", 51, 3.95655546935609, 0.8759876331157678], "isController": false}, {"data": ["The operation lasted too long: It took 849 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 828 milliseconds, but should not have lasted longer than 790 milliseconds.", 14, 1.0861132660977502, 0.2404671934043284], "isController": false}, {"data": ["The operation lasted too long: It took 854 milliseconds, but should not have lasted longer than 790 milliseconds.", 2, 0.1551590380139643, 0.034352456200618345], "isController": false}, {"data": ["The operation lasted too long: It took 1,006 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 808 milliseconds, but should not have lasted longer than 790 milliseconds.", 46, 3.5686578743211794, 0.790106492614222], "isController": false}, {"data": ["The operation lasted too long: It took 791 milliseconds, but should not have lasted longer than 790 milliseconds.", 26, 2.017067494181536, 0.44658193060803847], "isController": false}, {"data": ["The operation lasted too long: It took 822 milliseconds, but should not have lasted longer than 790 milliseconds.", 9, 0.6982156710628394, 0.15458605290278254], "isController": false}, {"data": ["The operation lasted too long: It took 817 milliseconds, but should not have lasted longer than 790 milliseconds.", 17, 1.3188518231186968, 0.2919958777052559], "isController": false}, {"data": ["The operation lasted too long: It took 5,743 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 6,291 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 6,117 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 821 milliseconds, but should not have lasted longer than 790 milliseconds.", 14, 1.0861132660977502, 0.2404671934043284], "isController": false}, {"data": ["The operation lasted too long: It took 838 milliseconds, but should not have lasted longer than 790 milliseconds.", 6, 0.46547711404189296, 0.10305736860185503], "isController": false}, {"data": ["The operation lasted too long: It took 811 milliseconds, but should not have lasted longer than 790 milliseconds.", 21, 1.6291698991466252, 0.36070079010649264], "isController": false}, {"data": ["The operation lasted too long: It took 819 milliseconds, but should not have lasted longer than 790 milliseconds.", 20, 1.5515903801396431, 0.3435245620061834], "isController": false}, {"data": ["The operation lasted too long: It took 806 milliseconds, but should not have lasted longer than 790 milliseconds.", 46, 3.5686578743211794, 0.790106492614222], "isController": false}, {"data": ["The operation lasted too long: It took 832 milliseconds, but should not have lasted longer than 790 milliseconds.", 13, 1.008533747090768, 0.22329096530401923], "isController": false}, {"data": ["The operation lasted too long: It took 800 milliseconds, but should not have lasted longer than 790 milliseconds.", 45, 3.491078355314197, 0.7729302645139128], "isController": false}, {"data": ["The operation lasted too long: It took 827 milliseconds, but should not have lasted longer than 790 milliseconds.", 8, 0.6206361520558572, 0.13740982480247338], "isController": false}, {"data": ["The operation lasted too long: It took 831 milliseconds, but should not have lasted longer than 790 milliseconds.", 10, 0.7757951900698216, 0.1717622810030917], "isController": false}, {"data": ["The operation lasted too long: It took 873 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 809 milliseconds, but should not have lasted longer than 790 milliseconds.", 31, 2.404965089216447, 0.5324630711095844], "isController": false}, {"data": ["The operation lasted too long: It took 866 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 869 milliseconds, but should not have lasted longer than 790 milliseconds.", 2, 0.1551590380139643, 0.034352456200618345], "isController": false}, {"data": ["The operation lasted too long: It took 837 milliseconds, but should not have lasted longer than 790 milliseconds.", 6, 0.46547711404189296, 0.10305736860185503], "isController": false}, {"data": ["The operation lasted too long: It took 6,237 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 834 milliseconds, but should not have lasted longer than 790 milliseconds.", 6, 0.46547711404189296, 0.10305736860185503], "isController": false}, {"data": ["The operation lasted too long: It took 847 milliseconds, but should not have lasted longer than 790 milliseconds.", 2, 0.1551590380139643, 0.034352456200618345], "isController": false}, {"data": ["The operation lasted too long: It took 805 milliseconds, but should not have lasted longer than 790 milliseconds.", 44, 3.4134988363072147, 0.7557540364136036], "isController": false}, {"data": ["The operation lasted too long: It took 844 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 6,240 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 6,246 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 802 milliseconds, but should not have lasted longer than 790 milliseconds.", 55, 4.266873545384018, 0.9446925455170044], "isController": false}, {"data": ["The operation lasted too long: It took 5,998 milliseconds, but should not have lasted longer than 790 milliseconds.", 1, 0.07757951900698215, 0.017176228100309172], "isController": false}, {"data": ["The operation lasted too long: It took 812 milliseconds, but should not have lasted longer than 790 milliseconds.", 31, 2.404965089216447, 0.5324630711095844], "isController": false}, {"data": ["The operation lasted too long: It took 793 milliseconds, but should not have lasted longer than 790 milliseconds.", 38, 2.948021722265322, 0.6526966678117485], "isController": false}, {"data": ["The operation lasted too long: It took 818 milliseconds, but should not have lasted longer than 790 milliseconds.", 18, 1.3964313421256789, 0.3091721058055651], "isController": false}, {"data": ["The operation lasted too long: It took 799 milliseconds, but should not have lasted longer than 790 milliseconds.", 53, 4.1117145073700545, 0.9103400893163861], "isController": false}, {"data": ["The operation lasted too long: It took 796 milliseconds, but should not have lasted longer than 790 milliseconds.", 47, 3.6462373933281613, 0.8072827207145311], "isController": false}, {"data": ["The operation lasted too long: It took 815 milliseconds, but should not have lasted longer than 790 milliseconds.", 21, 1.6291698991466252, 0.36070079010649264], "isController": false}, {"data": ["The operation lasted too long: It took 841 milliseconds, but should not have lasted longer than 790 milliseconds.", 2, 0.1551590380139643, 0.034352456200618345], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 5822, 1289, "The operation lasted too long: It took 798 milliseconds, but should not have lasted longer than 790 milliseconds.", 59, "The operation lasted too long: It took 802 milliseconds, but should not have lasted longer than 790 milliseconds.", 55, "The operation lasted too long: It took 799 milliseconds, but should not have lasted longer than 790 milliseconds.", 53, "The operation lasted too long: It took 795 milliseconds, but should not have lasted longer than 790 milliseconds.", 51, "The operation lasted too long: It took 801 milliseconds, but should not have lasted longer than 790 milliseconds.", 51], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HTTP Request", 5822, 1289, "The operation lasted too long: It took 798 milliseconds, but should not have lasted longer than 790 milliseconds.", 59, "The operation lasted too long: It took 802 milliseconds, but should not have lasted longer than 790 milliseconds.", 55, "The operation lasted too long: It took 799 milliseconds, but should not have lasted longer than 790 milliseconds.", 53, "The operation lasted too long: It took 795 milliseconds, but should not have lasted longer than 790 milliseconds.", 51, "The operation lasted too long: It took 801 milliseconds, but should not have lasted longer than 790 milliseconds.", 51], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
