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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 530.0, "minX": 0.0, "maxY": 634.0, "series": [{"data": [[0.0, 530.0], [0.1, 530.0], [0.2, 530.0], [0.3, 530.0], [0.4, 530.0], [0.5, 530.0], [0.6, 530.0], [0.7, 530.0], [0.8, 530.0], [0.9, 530.0], [1.0, 531.0], [1.1, 531.0], [1.2, 531.0], [1.3, 531.0], [1.4, 531.0], [1.5, 531.0], [1.6, 531.0], [1.7, 531.0], [1.8, 531.0], [1.9, 531.0], [2.0, 531.0], [2.1, 531.0], [2.2, 531.0], [2.3, 531.0], [2.4, 531.0], [2.5, 531.0], [2.6, 531.0], [2.7, 531.0], [2.8, 531.0], [2.9, 531.0], [3.0, 531.0], [3.1, 531.0], [3.2, 531.0], [3.3, 531.0], [3.4, 531.0], [3.5, 531.0], [3.6, 531.0], [3.7, 531.0], [3.8, 531.0], [3.9, 531.0], [4.0, 531.0], [4.1, 531.0], [4.2, 531.0], [4.3, 531.0], [4.4, 531.0], [4.5, 531.0], [4.6, 531.0], [4.7, 531.0], [4.8, 531.0], [4.9, 531.0], [5.0, 531.0], [5.1, 531.0], [5.2, 531.0], [5.3, 531.0], [5.4, 531.0], [5.5, 531.0], [5.6, 531.0], [5.7, 531.0], [5.8, 531.0], [5.9, 531.0], [6.0, 531.0], [6.1, 531.0], [6.2, 531.0], [6.3, 531.0], [6.4, 531.0], [6.5, 531.0], [6.6, 531.0], [6.7, 531.0], [6.8, 531.0], [6.9, 531.0], [7.0, 531.0], [7.1, 531.0], [7.2, 531.0], [7.3, 531.0], [7.4, 531.0], [7.5, 531.0], [7.6, 531.0], [7.7, 531.0], [7.8, 531.0], [7.9, 531.0], [8.0, 531.0], [8.1, 531.0], [8.2, 531.0], [8.3, 531.0], [8.4, 531.0], [8.5, 531.0], [8.6, 531.0], [8.7, 531.0], [8.8, 531.0], [8.9, 531.0], [9.0, 531.0], [9.1, 531.0], [9.2, 531.0], [9.3, 531.0], [9.4, 531.0], [9.5, 531.0], [9.6, 531.0], [9.7, 531.0], [9.8, 531.0], [9.9, 531.0], [10.0, 531.0], [10.1, 531.0], [10.2, 531.0], [10.3, 531.0], [10.4, 531.0], [10.5, 531.0], [10.6, 531.0], [10.7, 531.0], [10.8, 531.0], [10.9, 531.0], [11.0, 531.0], [11.1, 531.0], [11.2, 531.0], [11.3, 531.0], [11.4, 531.0], [11.5, 531.0], [11.6, 531.0], [11.7, 531.0], [11.8, 531.0], [11.9, 531.0], [12.0, 531.0], [12.1, 531.0], [12.2, 531.0], [12.3, 531.0], [12.4, 531.0], [12.5, 531.0], [12.6, 531.0], [12.7, 531.0], [12.8, 531.0], [12.9, 531.0], [13.0, 532.0], [13.1, 532.0], [13.2, 532.0], [13.3, 532.0], [13.4, 532.0], [13.5, 532.0], [13.6, 532.0], [13.7, 532.0], [13.8, 532.0], [13.9, 532.0], [14.0, 532.0], [14.1, 532.0], [14.2, 532.0], [14.3, 532.0], [14.4, 532.0], [14.5, 532.0], [14.6, 532.0], [14.7, 532.0], [14.8, 532.0], [14.9, 532.0], [15.0, 532.0], [15.1, 532.0], [15.2, 532.0], [15.3, 532.0], [15.4, 532.0], [15.5, 532.0], [15.6, 532.0], [15.7, 532.0], [15.8, 532.0], [15.9, 532.0], [16.0, 532.0], [16.1, 532.0], [16.2, 532.0], [16.3, 532.0], [16.4, 532.0], [16.5, 532.0], [16.6, 532.0], [16.7, 532.0], [16.8, 532.0], [16.9, 532.0], [17.0, 532.0], [17.1, 532.0], [17.2, 532.0], [17.3, 532.0], [17.4, 532.0], [17.5, 532.0], [17.6, 532.0], [17.7, 532.0], [17.8, 532.0], [17.9, 532.0], [18.0, 532.0], [18.1, 532.0], [18.2, 532.0], [18.3, 532.0], [18.4, 532.0], [18.5, 532.0], [18.6, 532.0], [18.7, 532.0], [18.8, 532.0], [18.9, 532.0], [19.0, 532.0], [19.1, 532.0], [19.2, 532.0], [19.3, 532.0], [19.4, 532.0], [19.5, 532.0], [19.6, 532.0], [19.7, 532.0], [19.8, 532.0], [19.9, 532.0], [20.0, 532.0], [20.1, 532.0], [20.2, 532.0], [20.3, 532.0], [20.4, 532.0], [20.5, 532.0], [20.6, 532.0], [20.7, 532.0], [20.8, 532.0], [20.9, 532.0], [21.0, 533.0], [21.1, 533.0], [21.2, 533.0], [21.3, 533.0], [21.4, 533.0], [21.5, 533.0], [21.6, 533.0], [21.7, 533.0], [21.8, 533.0], [21.9, 533.0], [22.0, 533.0], [22.1, 533.0], [22.2, 533.0], [22.3, 533.0], [22.4, 533.0], [22.5, 533.0], [22.6, 533.0], [22.7, 533.0], [22.8, 533.0], [22.9, 533.0], [23.0, 533.0], [23.1, 533.0], [23.2, 533.0], [23.3, 533.0], [23.4, 533.0], [23.5, 533.0], [23.6, 533.0], [23.7, 533.0], [23.8, 533.0], [23.9, 533.0], [24.0, 533.0], [24.1, 533.0], [24.2, 533.0], [24.3, 533.0], [24.4, 533.0], [24.5, 533.0], [24.6, 533.0], [24.7, 533.0], [24.8, 533.0], [24.9, 533.0], [25.0, 534.0], [25.1, 534.0], [25.2, 534.0], [25.3, 534.0], [25.4, 534.0], [25.5, 534.0], [25.6, 534.0], [25.7, 534.0], [25.8, 534.0], [25.9, 534.0], [26.0, 534.0], [26.1, 534.0], [26.2, 534.0], [26.3, 534.0], [26.4, 534.0], [26.5, 534.0], [26.6, 534.0], [26.7, 534.0], [26.8, 534.0], [26.9, 534.0], [27.0, 534.0], [27.1, 534.0], [27.2, 534.0], [27.3, 534.0], [27.4, 534.0], [27.5, 534.0], [27.6, 534.0], [27.7, 534.0], [27.8, 534.0], [27.9, 534.0], [28.0, 534.0], [28.1, 534.0], [28.2, 534.0], [28.3, 534.0], [28.4, 534.0], [28.5, 534.0], [28.6, 534.0], [28.7, 534.0], [28.8, 534.0], [28.9, 534.0], [29.0, 535.0], [29.1, 535.0], [29.2, 535.0], [29.3, 535.0], [29.4, 535.0], [29.5, 535.0], [29.6, 535.0], [29.7, 535.0], [29.8, 535.0], [29.9, 535.0], [30.0, 535.0], [30.1, 535.0], [30.2, 535.0], [30.3, 535.0], [30.4, 535.0], [30.5, 535.0], [30.6, 535.0], [30.7, 535.0], [30.8, 535.0], [30.9, 535.0], [31.0, 535.0], [31.1, 535.0], [31.2, 535.0], [31.3, 535.0], [31.4, 535.0], [31.5, 535.0], [31.6, 535.0], [31.7, 535.0], [31.8, 535.0], [31.9, 535.0], [32.0, 536.0], [32.1, 536.0], [32.2, 536.0], [32.3, 536.0], [32.4, 536.0], [32.5, 536.0], [32.6, 536.0], [32.7, 536.0], [32.8, 536.0], [32.9, 536.0], [33.0, 537.0], [33.1, 537.0], [33.2, 537.0], [33.3, 537.0], [33.4, 537.0], [33.5, 537.0], [33.6, 537.0], [33.7, 537.0], [33.8, 537.0], [33.9, 537.0], [34.0, 538.0], [34.1, 538.0], [34.2, 538.0], [34.3, 538.0], [34.4, 538.0], [34.5, 538.0], [34.6, 538.0], [34.7, 538.0], [34.8, 538.0], [34.9, 538.0], [35.0, 541.0], [35.1, 541.0], [35.2, 541.0], [35.3, 541.0], [35.4, 541.0], [35.5, 541.0], [35.6, 541.0], [35.7, 541.0], [35.8, 541.0], [35.9, 541.0], [36.0, 541.0], [36.1, 541.0], [36.2, 541.0], [36.3, 541.0], [36.4, 541.0], [36.5, 541.0], [36.6, 541.0], [36.7, 541.0], [36.8, 541.0], [36.9, 541.0], [37.0, 543.0], [37.1, 543.0], [37.2, 543.0], [37.3, 543.0], [37.4, 543.0], [37.5, 543.0], [37.6, 543.0], [37.7, 543.0], [37.8, 543.0], [37.9, 543.0], [38.0, 544.0], [38.1, 544.0], [38.2, 544.0], [38.3, 544.0], [38.4, 544.0], [38.5, 544.0], [38.6, 544.0], [38.7, 544.0], [38.8, 544.0], [38.9, 544.0], [39.0, 544.0], [39.1, 544.0], [39.2, 544.0], [39.3, 544.0], [39.4, 544.0], [39.5, 544.0], [39.6, 544.0], [39.7, 544.0], [39.8, 544.0], [39.9, 544.0], [40.0, 545.0], [40.1, 545.0], [40.2, 545.0], [40.3, 545.0], [40.4, 545.0], [40.5, 545.0], [40.6, 545.0], [40.7, 545.0], [40.8, 545.0], [40.9, 545.0], [41.0, 545.0], [41.1, 545.0], [41.2, 545.0], [41.3, 545.0], [41.4, 545.0], [41.5, 545.0], [41.6, 545.0], [41.7, 545.0], [41.8, 545.0], [41.9, 545.0], [42.0, 546.0], [42.1, 546.0], [42.2, 546.0], [42.3, 546.0], [42.4, 546.0], [42.5, 546.0], [42.6, 546.0], [42.7, 546.0], [42.8, 546.0], [42.9, 546.0], [43.0, 546.0], [43.1, 546.0], [43.2, 546.0], [43.3, 546.0], [43.4, 546.0], [43.5, 546.0], [43.6, 546.0], [43.7, 546.0], [43.8, 546.0], [43.9, 546.0], [44.0, 546.0], [44.1, 546.0], [44.2, 546.0], [44.3, 546.0], [44.4, 546.0], [44.5, 546.0], [44.6, 546.0], [44.7, 546.0], [44.8, 546.0], [44.9, 546.0], [45.0, 546.0], [45.1, 546.0], [45.2, 546.0], [45.3, 546.0], [45.4, 546.0], [45.5, 546.0], [45.6, 546.0], [45.7, 546.0], [45.8, 546.0], [45.9, 546.0], [46.0, 546.0], [46.1, 546.0], [46.2, 546.0], [46.3, 546.0], [46.4, 546.0], [46.5, 546.0], [46.6, 546.0], [46.7, 546.0], [46.8, 546.0], [46.9, 546.0], [47.0, 547.0], [47.1, 547.0], [47.2, 547.0], [47.3, 547.0], [47.4, 547.0], [47.5, 547.0], [47.6, 547.0], [47.7, 547.0], [47.8, 547.0], [47.9, 547.0], [48.0, 548.0], [48.1, 548.0], [48.2, 548.0], [48.3, 548.0], [48.4, 548.0], [48.5, 548.0], [48.6, 548.0], [48.7, 548.0], [48.8, 548.0], [48.9, 548.0], [49.0, 548.0], [49.1, 548.0], [49.2, 548.0], [49.3, 548.0], [49.4, 548.0], [49.5, 548.0], [49.6, 548.0], [49.7, 548.0], [49.8, 548.0], [49.9, 548.0], [50.0, 549.0], [50.1, 549.0], [50.2, 549.0], [50.3, 549.0], [50.4, 549.0], [50.5, 549.0], [50.6, 549.0], [50.7, 549.0], [50.8, 549.0], [50.9, 549.0], [51.0, 550.0], [51.1, 550.0], [51.2, 550.0], [51.3, 550.0], [51.4, 550.0], [51.5, 550.0], [51.6, 550.0], [51.7, 550.0], [51.8, 550.0], [51.9, 550.0], [52.0, 550.0], [52.1, 550.0], [52.2, 550.0], [52.3, 550.0], [52.4, 550.0], [52.5, 550.0], [52.6, 550.0], [52.7, 550.0], [52.8, 550.0], [52.9, 550.0], [53.0, 550.0], [53.1, 550.0], [53.2, 550.0], [53.3, 550.0], [53.4, 550.0], [53.5, 550.0], [53.6, 550.0], [53.7, 550.0], [53.8, 550.0], [53.9, 550.0], [54.0, 550.0], [54.1, 550.0], [54.2, 550.0], [54.3, 550.0], [54.4, 550.0], [54.5, 550.0], [54.6, 550.0], [54.7, 550.0], [54.8, 550.0], [54.9, 550.0], [55.0, 551.0], [55.1, 551.0], [55.2, 551.0], [55.3, 551.0], [55.4, 551.0], [55.5, 551.0], [55.6, 551.0], [55.7, 551.0], [55.8, 551.0], [55.9, 551.0], [56.0, 551.0], [56.1, 551.0], [56.2, 551.0], [56.3, 551.0], [56.4, 551.0], [56.5, 551.0], [56.6, 551.0], [56.7, 551.0], [56.8, 551.0], [56.9, 551.0], [57.0, 551.0], [57.1, 551.0], [57.2, 551.0], [57.3, 551.0], [57.4, 551.0], [57.5, 551.0], [57.6, 551.0], [57.7, 551.0], [57.8, 551.0], [57.9, 551.0], [58.0, 551.0], [58.1, 551.0], [58.2, 551.0], [58.3, 551.0], [58.4, 551.0], [58.5, 551.0], [58.6, 551.0], [58.7, 551.0], [58.8, 551.0], [58.9, 551.0], [59.0, 552.0], [59.1, 552.0], [59.2, 552.0], [59.3, 552.0], [59.4, 552.0], [59.5, 552.0], [59.6, 552.0], [59.7, 552.0], [59.8, 552.0], [59.9, 552.0], [60.0, 553.0], [60.1, 553.0], [60.2, 553.0], [60.3, 553.0], [60.4, 553.0], [60.5, 553.0], [60.6, 553.0], [60.7, 553.0], [60.8, 553.0], [60.9, 553.0], [61.0, 553.0], [61.1, 553.0], [61.2, 553.0], [61.3, 553.0], [61.4, 553.0], [61.5, 553.0], [61.6, 553.0], [61.7, 553.0], [61.8, 553.0], [61.9, 553.0], [62.0, 553.0], [62.1, 553.0], [62.2, 553.0], [62.3, 553.0], [62.4, 553.0], [62.5, 553.0], [62.6, 553.0], [62.7, 553.0], [62.8, 553.0], [62.9, 553.0], [63.0, 554.0], [63.1, 554.0], [63.2, 554.0], [63.3, 554.0], [63.4, 554.0], [63.5, 554.0], [63.6, 554.0], [63.7, 554.0], [63.8, 554.0], [63.9, 554.0], [64.0, 554.0], [64.1, 554.0], [64.2, 554.0], [64.3, 554.0], [64.4, 554.0], [64.5, 554.0], [64.6, 554.0], [64.7, 554.0], [64.8, 554.0], [64.9, 554.0], [65.0, 556.0], [65.1, 556.0], [65.2, 556.0], [65.3, 556.0], [65.4, 556.0], [65.5, 556.0], [65.6, 556.0], [65.7, 556.0], [65.8, 556.0], [65.9, 556.0], [66.0, 556.0], [66.1, 556.0], [66.2, 556.0], [66.3, 556.0], [66.4, 556.0], [66.5, 556.0], [66.6, 556.0], [66.7, 556.0], [66.8, 556.0], [66.9, 556.0], [67.0, 556.0], [67.1, 556.0], [67.2, 556.0], [67.3, 556.0], [67.4, 556.0], [67.5, 556.0], [67.6, 556.0], [67.7, 556.0], [67.8, 556.0], [67.9, 556.0], [68.0, 556.0], [68.1, 556.0], [68.2, 556.0], [68.3, 556.0], [68.4, 556.0], [68.5, 556.0], [68.6, 556.0], [68.7, 556.0], [68.8, 556.0], [68.9, 556.0], [69.0, 557.0], [69.1, 557.0], [69.2, 557.0], [69.3, 557.0], [69.4, 557.0], [69.5, 557.0], [69.6, 557.0], [69.7, 557.0], [69.8, 557.0], [69.9, 557.0], [70.0, 558.0], [70.1, 558.0], [70.2, 558.0], [70.3, 558.0], [70.4, 558.0], [70.5, 558.0], [70.6, 558.0], [70.7, 558.0], [70.8, 558.0], [70.9, 558.0], [71.0, 558.0], [71.1, 558.0], [71.2, 558.0], [71.3, 558.0], [71.4, 558.0], [71.5, 558.0], [71.6, 558.0], [71.7, 558.0], [71.8, 558.0], [71.9, 558.0], [72.0, 558.0], [72.1, 558.0], [72.2, 558.0], [72.3, 558.0], [72.4, 558.0], [72.5, 558.0], [72.6, 558.0], [72.7, 558.0], [72.8, 558.0], [72.9, 558.0], [73.0, 559.0], [73.1, 559.0], [73.2, 559.0], [73.3, 559.0], [73.4, 559.0], [73.5, 559.0], [73.6, 559.0], [73.7, 559.0], [73.8, 559.0], [73.9, 559.0], [74.0, 559.0], [74.1, 559.0], [74.2, 559.0], [74.3, 559.0], [74.4, 559.0], [74.5, 559.0], [74.6, 559.0], [74.7, 559.0], [74.8, 559.0], [74.9, 559.0], [75.0, 559.0], [75.1, 559.0], [75.2, 559.0], [75.3, 559.0], [75.4, 559.0], [75.5, 559.0], [75.6, 559.0], [75.7, 559.0], [75.8, 559.0], [75.9, 559.0], [76.0, 560.0], [76.1, 560.0], [76.2, 560.0], [76.3, 560.0], [76.4, 560.0], [76.5, 560.0], [76.6, 560.0], [76.7, 560.0], [76.8, 560.0], [76.9, 560.0], [77.0, 561.0], [77.1, 561.0], [77.2, 561.0], [77.3, 561.0], [77.4, 561.0], [77.5, 561.0], [77.6, 561.0], [77.7, 561.0], [77.8, 561.0], [77.9, 561.0], [78.0, 562.0], [78.1, 562.0], [78.2, 562.0], [78.3, 562.0], [78.4, 562.0], [78.5, 562.0], [78.6, 562.0], [78.7, 562.0], [78.8, 562.0], [78.9, 562.0], [79.0, 562.0], [79.1, 562.0], [79.2, 562.0], [79.3, 562.0], [79.4, 562.0], [79.5, 562.0], [79.6, 562.0], [79.7, 562.0], [79.8, 562.0], [79.9, 562.0], [80.0, 563.0], [80.1, 563.0], [80.2, 563.0], [80.3, 563.0], [80.4, 563.0], [80.5, 563.0], [80.6, 563.0], [80.7, 563.0], [80.8, 563.0], [80.9, 563.0], [81.0, 564.0], [81.1, 564.0], [81.2, 564.0], [81.3, 564.0], [81.4, 564.0], [81.5, 564.0], [81.6, 564.0], [81.7, 564.0], [81.8, 564.0], [81.9, 564.0], [82.0, 564.0], [82.1, 564.0], [82.2, 564.0], [82.3, 564.0], [82.4, 564.0], [82.5, 564.0], [82.6, 564.0], [82.7, 564.0], [82.8, 564.0], [82.9, 564.0], [83.0, 566.0], [83.1, 566.0], [83.2, 566.0], [83.3, 566.0], [83.4, 566.0], [83.5, 566.0], [83.6, 566.0], [83.7, 566.0], [83.8, 566.0], [83.9, 566.0], [84.0, 566.0], [84.1, 566.0], [84.2, 566.0], [84.3, 566.0], [84.4, 566.0], [84.5, 566.0], [84.6, 566.0], [84.7, 566.0], [84.8, 566.0], [84.9, 566.0], [85.0, 568.0], [85.1, 568.0], [85.2, 568.0], [85.3, 568.0], [85.4, 568.0], [85.5, 568.0], [85.6, 568.0], [85.7, 568.0], [85.8, 568.0], [85.9, 568.0], [86.0, 568.0], [86.1, 568.0], [86.2, 568.0], [86.3, 568.0], [86.4, 568.0], [86.5, 568.0], [86.6, 568.0], [86.7, 568.0], [86.8, 568.0], [86.9, 568.0], [87.0, 569.0], [87.1, 569.0], [87.2, 569.0], [87.3, 569.0], [87.4, 569.0], [87.5, 569.0], [87.6, 569.0], [87.7, 569.0], [87.8, 569.0], [87.9, 569.0], [88.0, 570.0], [88.1, 570.0], [88.2, 570.0], [88.3, 570.0], [88.4, 570.0], [88.5, 570.0], [88.6, 570.0], [88.7, 570.0], [88.8, 570.0], [88.9, 570.0], [89.0, 570.0], [89.1, 570.0], [89.2, 570.0], [89.3, 570.0], [89.4, 570.0], [89.5, 570.0], [89.6, 570.0], [89.7, 570.0], [89.8, 570.0], [89.9, 570.0], [90.0, 571.0], [90.1, 571.0], [90.2, 571.0], [90.3, 571.0], [90.4, 571.0], [90.5, 571.0], [90.6, 571.0], [90.7, 571.0], [90.8, 571.0], [90.9, 571.0], [91.0, 572.0], [91.1, 572.0], [91.2, 572.0], [91.3, 572.0], [91.4, 572.0], [91.5, 572.0], [91.6, 572.0], [91.7, 572.0], [91.8, 572.0], [91.9, 572.0], [92.0, 572.0], [92.1, 572.0], [92.2, 572.0], [92.3, 572.0], [92.4, 572.0], [92.5, 572.0], [92.6, 572.0], [92.7, 572.0], [92.8, 572.0], [92.9, 572.0], [93.0, 575.0], [93.1, 575.0], [93.2, 575.0], [93.3, 575.0], [93.4, 575.0], [93.5, 575.0], [93.6, 575.0], [93.7, 575.0], [93.8, 575.0], [93.9, 575.0], [94.0, 576.0], [94.1, 576.0], [94.2, 576.0], [94.3, 576.0], [94.4, 576.0], [94.5, 576.0], [94.6, 576.0], [94.7, 576.0], [94.8, 576.0], [94.9, 576.0], [95.0, 578.0], [95.1, 578.0], [95.2, 578.0], [95.3, 578.0], [95.4, 578.0], [95.5, 578.0], [95.6, 578.0], [95.7, 578.0], [95.8, 578.0], [95.9, 578.0], [96.0, 578.0], [96.1, 578.0], [96.2, 578.0], [96.3, 578.0], [96.4, 578.0], [96.5, 578.0], [96.6, 578.0], [96.7, 578.0], [96.8, 578.0], [96.9, 578.0], [97.0, 586.0], [97.1, 586.0], [97.2, 586.0], [97.3, 586.0], [97.4, 586.0], [97.5, 586.0], [97.6, 586.0], [97.7, 586.0], [97.8, 586.0], [97.9, 586.0], [98.0, 591.0], [98.1, 591.0], [98.2, 591.0], [98.3, 591.0], [98.4, 591.0], [98.5, 591.0], [98.6, 591.0], [98.7, 591.0], [98.8, 591.0], [98.9, 591.0], [99.0, 634.0], [99.1, 634.0], [99.2, 634.0], [99.3, 634.0], [99.4, 634.0], [99.5, 634.0], [99.6, 634.0], [99.7, 634.0], [99.8, 634.0], [99.9, 634.0]], "isOverall": false, "label": "HTTP Request #3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 99.0, "series": [{"data": [[600.0, 1.0], [500.0, 99.0]], "isOverall": false, "label": "HTTP Request #3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 100.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 100.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 4.583333333333334, "minX": 1.78000032E12, "maxY": 4.973684210526316, "series": [{"data": [[1.78000038E12, 4.583333333333334], [1.78000032E12, 4.973684210526316]], "isOverall": false, "label": "Thread Group #3", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78000038E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 532.0, "minX": 1.0, "maxY": 572.0, "series": [{"data": [[4.0, 532.0], [2.0, 534.0], [1.0, 572.0], [5.0, 549.8], [3.0, 549.5]], "isOverall": false, "label": "HTTP Request #3", "isController": false}, {"data": [[4.880000000000001, 549.6799999999996]], "isOverall": false, "label": "HTTP Request #3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 63.2, "minX": 1.78000032E12, "maxY": 292.6, "series": [{"data": [[1.78000038E12, 92.4], [1.78000032E12, 292.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78000038E12, 63.2], [1.78000032E12, 200.13333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78000038E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 544.5833333333334, "minX": 1.78000032E12, "maxY": 551.2894736842102, "series": [{"data": [[1.78000038E12, 544.5833333333334], [1.78000032E12, 551.2894736842102]], "isOverall": false, "label": "HTTP Request #3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78000038E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 544.5833333333334, "minX": 1.78000032E12, "maxY": 551.2763157894734, "series": [{"data": [[1.78000038E12, 544.5833333333334], [1.78000032E12, 551.2763157894734]], "isOverall": false, "label": "HTTP Request #3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78000038E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.78000032E12, "maxY": 0.06578947368421051, "series": [{"data": [[1.78000038E12, 0.0], [1.78000032E12, 0.06578947368421051]], "isOverall": false, "label": "HTTP Request #3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78000038E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 530.0, "minX": 1.78000032E12, "maxY": 634.0, "series": [{"data": [[1.78000038E12, 575.0], [1.78000032E12, 634.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78000038E12, 531.0], [1.78000032E12, 530.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78000038E12, 571.5], [1.78000032E12, 570.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78000038E12, 575.0], [1.78000032E12, 634.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78000038E12, 543.5], [1.78000032E12, 551.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78000038E12, 574.25], [1.78000032E12, 579.1999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78000038E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 548.5, "minX": 2.0, "maxY": 549.0, "series": [{"data": [[4.0, 548.5], [2.0, 549.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 548.5, "minX": 2.0, "maxY": 549.0, "series": [{"data": [[4.0, 548.5], [2.0, 549.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.35, "minX": 1.78000032E12, "maxY": 1.3166666666666667, "series": [{"data": [[1.78000038E12, 0.35], [1.78000032E12, 1.3166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78000038E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.4, "minX": 1.78000032E12, "maxY": 1.2666666666666666, "series": [{"data": [[1.78000038E12, 0.4], [1.78000032E12, 1.2666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78000038E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.4, "minX": 1.78000032E12, "maxY": 1.2666666666666666, "series": [{"data": [[1.78000038E12, 0.4], [1.78000032E12, 1.2666666666666666]], "isOverall": false, "label": "HTTP Request #3-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78000038E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.4, "minX": 1.78000032E12, "maxY": 1.2666666666666666, "series": [{"data": [[1.78000038E12, 0.4], [1.78000032E12, 1.2666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78000038E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

