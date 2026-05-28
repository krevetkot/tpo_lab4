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
        data: {"result": {"minY": 536.0, "minX": 0.0, "maxY": 6291.0, "series": [{"data": [[0.0, 536.0], [0.1, 555.0], [0.2, 561.0], [0.3, 562.0], [0.4, 564.0], [0.5, 568.0], [0.6, 570.0], [0.7, 572.0], [0.8, 573.0], [0.9, 575.0], [1.0, 576.0], [1.1, 576.0], [1.2, 577.0], [1.3, 578.0], [1.4, 578.0], [1.5, 579.0], [1.6, 579.0], [1.7, 580.0], [1.8, 580.0], [1.9, 582.0], [2.0, 584.0], [2.1, 585.0], [2.2, 586.0], [2.3, 587.0], [2.4, 588.0], [2.5, 588.0], [2.6, 589.0], [2.7, 590.0], [2.8, 590.0], [2.9, 591.0], [3.0, 591.0], [3.1, 591.0], [3.2, 592.0], [3.3, 592.0], [3.4, 593.0], [3.5, 593.0], [3.6, 594.0], [3.7, 594.0], [3.8, 595.0], [3.9, 596.0], [4.0, 596.0], [4.1, 596.0], [4.2, 597.0], [4.3, 598.0], [4.4, 599.0], [4.5, 600.0], [4.6, 600.0], [4.7, 601.0], [4.8, 601.0], [4.9, 602.0], [5.0, 603.0], [5.1, 603.0], [5.2, 604.0], [5.3, 604.0], [5.4, 605.0], [5.5, 605.0], [5.6, 606.0], [5.7, 606.0], [5.8, 606.0], [5.9, 607.0], [6.0, 607.0], [6.1, 608.0], [6.2, 608.0], [6.3, 608.0], [6.4, 609.0], [6.5, 609.0], [6.6, 610.0], [6.7, 610.0], [6.8, 610.0], [6.9, 610.0], [7.0, 611.0], [7.1, 611.0], [7.2, 611.0], [7.3, 612.0], [7.4, 612.0], [7.5, 613.0], [7.6, 613.0], [7.7, 613.0], [7.8, 614.0], [7.9, 614.0], [8.0, 615.0], [8.1, 615.0], [8.2, 615.0], [8.3, 616.0], [8.4, 616.0], [8.5, 616.0], [8.6, 617.0], [8.7, 617.0], [8.8, 617.0], [8.9, 617.0], [9.0, 618.0], [9.1, 618.0], [9.2, 618.0], [9.3, 618.0], [9.4, 619.0], [9.5, 619.0], [9.6, 619.0], [9.7, 620.0], [9.8, 620.0], [9.9, 620.0], [10.0, 621.0], [10.1, 621.0], [10.2, 621.0], [10.3, 621.0], [10.4, 621.0], [10.5, 622.0], [10.6, 622.0], [10.7, 622.0], [10.8, 622.0], [10.9, 622.0], [11.0, 623.0], [11.1, 623.0], [11.2, 623.0], [11.3, 623.0], [11.4, 624.0], [11.5, 624.0], [11.6, 624.0], [11.7, 624.0], [11.8, 625.0], [11.9, 625.0], [12.0, 625.0], [12.1, 625.0], [12.2, 626.0], [12.3, 626.0], [12.4, 626.0], [12.5, 626.0], [12.6, 627.0], [12.7, 627.0], [12.8, 627.0], [12.9, 627.0], [13.0, 628.0], [13.1, 628.0], [13.2, 628.0], [13.3, 629.0], [13.4, 629.0], [13.5, 630.0], [13.6, 630.0], [13.7, 631.0], [13.8, 631.0], [13.9, 632.0], [14.0, 632.0], [14.1, 633.0], [14.2, 633.0], [14.3, 634.0], [14.4, 635.0], [14.5, 635.0], [14.6, 635.0], [14.7, 636.0], [14.8, 636.0], [14.9, 637.0], [15.0, 637.0], [15.1, 637.0], [15.2, 637.0], [15.3, 638.0], [15.4, 638.0], [15.5, 638.0], [15.6, 638.0], [15.7, 639.0], [15.8, 639.0], [15.9, 639.0], [16.0, 640.0], [16.1, 640.0], [16.2, 641.0], [16.3, 641.0], [16.4, 641.0], [16.5, 642.0], [16.6, 642.0], [16.7, 642.0], [16.8, 643.0], [16.9, 643.0], [17.0, 643.0], [17.1, 643.0], [17.2, 644.0], [17.3, 644.0], [17.4, 644.0], [17.5, 644.0], [17.6, 645.0], [17.7, 645.0], [17.8, 646.0], [17.9, 646.0], [18.0, 646.0], [18.1, 647.0], [18.2, 647.0], [18.3, 648.0], [18.4, 648.0], [18.5, 648.0], [18.6, 648.0], [18.7, 649.0], [18.8, 649.0], [18.9, 649.0], [19.0, 650.0], [19.1, 650.0], [19.2, 650.0], [19.3, 651.0], [19.4, 651.0], [19.5, 651.0], [19.6, 651.0], [19.7, 652.0], [19.8, 652.0], [19.9, 652.0], [20.0, 653.0], [20.1, 653.0], [20.2, 653.0], [20.3, 654.0], [20.4, 654.0], [20.5, 654.0], [20.6, 655.0], [20.7, 655.0], [20.8, 655.0], [20.9, 656.0], [21.0, 656.0], [21.1, 657.0], [21.2, 657.0], [21.3, 658.0], [21.4, 658.0], [21.5, 658.0], [21.6, 659.0], [21.7, 659.0], [21.8, 660.0], [21.9, 660.0], [22.0, 661.0], [22.1, 662.0], [22.2, 662.0], [22.3, 662.0], [22.4, 663.0], [22.5, 663.0], [22.6, 663.0], [22.7, 664.0], [22.8, 664.0], [22.9, 664.0], [23.0, 665.0], [23.1, 665.0], [23.2, 665.0], [23.3, 666.0], [23.4, 666.0], [23.5, 666.0], [23.6, 666.0], [23.7, 667.0], [23.8, 667.0], [23.9, 668.0], [24.0, 668.0], [24.1, 668.0], [24.2, 669.0], [24.3, 669.0], [24.4, 669.0], [24.5, 669.0], [24.6, 670.0], [24.7, 670.0], [24.8, 670.0], [24.9, 671.0], [25.0, 671.0], [25.1, 671.0], [25.2, 671.0], [25.3, 672.0], [25.4, 672.0], [25.5, 672.0], [25.6, 673.0], [25.7, 673.0], [25.8, 674.0], [25.9, 674.0], [26.0, 674.0], [26.1, 674.0], [26.2, 674.0], [26.3, 675.0], [26.4, 675.0], [26.5, 675.0], [26.6, 675.0], [26.7, 676.0], [26.8, 676.0], [26.9, 676.0], [27.0, 676.0], [27.1, 677.0], [27.2, 677.0], [27.3, 677.0], [27.4, 677.0], [27.5, 678.0], [27.6, 678.0], [27.7, 678.0], [27.8, 678.0], [27.9, 679.0], [28.0, 679.0], [28.1, 679.0], [28.2, 680.0], [28.3, 680.0], [28.4, 681.0], [28.5, 681.0], [28.6, 681.0], [28.7, 682.0], [28.8, 682.0], [28.9, 682.0], [29.0, 682.0], [29.1, 682.0], [29.2, 683.0], [29.3, 683.0], [29.4, 683.0], [29.5, 683.0], [29.6, 684.0], [29.7, 684.0], [29.8, 684.0], [29.9, 684.0], [30.0, 684.0], [30.1, 685.0], [30.2, 685.0], [30.3, 685.0], [30.4, 685.0], [30.5, 686.0], [30.6, 686.0], [30.7, 686.0], [30.8, 686.0], [30.9, 686.0], [31.0, 687.0], [31.1, 687.0], [31.2, 687.0], [31.3, 688.0], [31.4, 688.0], [31.5, 688.0], [31.6, 688.0], [31.7, 689.0], [31.8, 689.0], [31.9, 689.0], [32.0, 689.0], [32.1, 689.0], [32.2, 690.0], [32.3, 690.0], [32.4, 690.0], [32.5, 691.0], [32.6, 691.0], [32.7, 691.0], [32.8, 691.0], [32.9, 691.0], [33.0, 692.0], [33.1, 692.0], [33.2, 693.0], [33.3, 693.0], [33.4, 693.0], [33.5, 693.0], [33.6, 694.0], [33.7, 694.0], [33.8, 694.0], [33.9, 695.0], [34.0, 695.0], [34.1, 695.0], [34.2, 695.0], [34.3, 695.0], [34.4, 696.0], [34.5, 696.0], [34.6, 696.0], [34.7, 696.0], [34.8, 696.0], [34.9, 697.0], [35.0, 697.0], [35.1, 697.0], [35.2, 697.0], [35.3, 697.0], [35.4, 697.0], [35.5, 698.0], [35.6, 698.0], [35.7, 698.0], [35.8, 699.0], [35.9, 699.0], [36.0, 699.0], [36.1, 699.0], [36.2, 699.0], [36.3, 699.0], [36.4, 700.0], [36.5, 700.0], [36.6, 700.0], [36.7, 700.0], [36.8, 700.0], [36.9, 700.0], [37.0, 701.0], [37.1, 701.0], [37.2, 701.0], [37.3, 701.0], [37.4, 702.0], [37.5, 702.0], [37.6, 702.0], [37.7, 702.0], [37.8, 703.0], [37.9, 703.0], [38.0, 703.0], [38.1, 703.0], [38.2, 704.0], [38.3, 704.0], [38.4, 704.0], [38.5, 704.0], [38.6, 704.0], [38.7, 704.0], [38.8, 705.0], [38.9, 705.0], [39.0, 705.0], [39.1, 705.0], [39.2, 705.0], [39.3, 706.0], [39.4, 706.0], [39.5, 706.0], [39.6, 706.0], [39.7, 707.0], [39.8, 707.0], [39.9, 707.0], [40.0, 707.0], [40.1, 707.0], [40.2, 707.0], [40.3, 708.0], [40.4, 708.0], [40.5, 708.0], [40.6, 708.0], [40.7, 709.0], [40.8, 709.0], [40.9, 709.0], [41.0, 709.0], [41.1, 709.0], [41.2, 710.0], [41.3, 710.0], [41.4, 710.0], [41.5, 710.0], [41.6, 710.0], [41.7, 711.0], [41.8, 711.0], [41.9, 711.0], [42.0, 711.0], [42.1, 711.0], [42.2, 712.0], [42.3, 712.0], [42.4, 712.0], [42.5, 712.0], [42.6, 712.0], [42.7, 712.0], [42.8, 713.0], [42.9, 713.0], [43.0, 713.0], [43.1, 713.0], [43.2, 713.0], [43.3, 714.0], [43.4, 714.0], [43.5, 714.0], [43.6, 714.0], [43.7, 714.0], [43.8, 714.0], [43.9, 715.0], [44.0, 715.0], [44.1, 715.0], [44.2, 715.0], [44.3, 715.0], [44.4, 715.0], [44.5, 716.0], [44.6, 716.0], [44.7, 716.0], [44.8, 716.0], [44.9, 716.0], [45.0, 717.0], [45.1, 717.0], [45.2, 717.0], [45.3, 717.0], [45.4, 717.0], [45.5, 717.0], [45.6, 717.0], [45.7, 718.0], [45.8, 718.0], [45.9, 718.0], [46.0, 718.0], [46.1, 718.0], [46.2, 718.0], [46.3, 719.0], [46.4, 719.0], [46.5, 719.0], [46.6, 719.0], [46.7, 719.0], [46.8, 719.0], [46.9, 719.0], [47.0, 720.0], [47.1, 720.0], [47.2, 720.0], [47.3, 720.0], [47.4, 720.0], [47.5, 720.0], [47.6, 721.0], [47.7, 721.0], [47.8, 721.0], [47.9, 721.0], [48.0, 721.0], [48.1, 721.0], [48.2, 722.0], [48.3, 722.0], [48.4, 722.0], [48.5, 722.0], [48.6, 723.0], [48.7, 723.0], [48.8, 723.0], [48.9, 723.0], [49.0, 723.0], [49.1, 724.0], [49.2, 724.0], [49.3, 724.0], [49.4, 724.0], [49.5, 724.0], [49.6, 725.0], [49.7, 725.0], [49.8, 725.0], [49.9, 725.0], [50.0, 725.0], [50.1, 726.0], [50.2, 726.0], [50.3, 726.0], [50.4, 726.0], [50.5, 726.0], [50.6, 727.0], [50.7, 727.0], [50.8, 727.0], [50.9, 727.0], [51.0, 728.0], [51.1, 728.0], [51.2, 728.0], [51.3, 728.0], [51.4, 728.0], [51.5, 729.0], [51.6, 729.0], [51.7, 730.0], [51.8, 730.0], [51.9, 730.0], [52.0, 730.0], [52.1, 730.0], [52.2, 731.0], [52.3, 731.0], [52.4, 731.0], [52.5, 731.0], [52.6, 731.0], [52.7, 732.0], [52.8, 732.0], [52.9, 732.0], [53.0, 732.0], [53.1, 732.0], [53.2, 733.0], [53.3, 733.0], [53.4, 733.0], [53.5, 733.0], [53.6, 734.0], [53.7, 734.0], [53.8, 734.0], [53.9, 735.0], [54.0, 735.0], [54.1, 735.0], [54.2, 736.0], [54.3, 736.0], [54.4, 736.0], [54.5, 737.0], [54.6, 737.0], [54.7, 737.0], [54.8, 738.0], [54.9, 738.0], [55.0, 738.0], [55.1, 739.0], [55.2, 739.0], [55.3, 739.0], [55.4, 739.0], [55.5, 739.0], [55.6, 740.0], [55.7, 740.0], [55.8, 740.0], [55.9, 741.0], [56.0, 741.0], [56.1, 741.0], [56.2, 741.0], [56.3, 741.0], [56.4, 742.0], [56.5, 742.0], [56.6, 742.0], [56.7, 742.0], [56.8, 743.0], [56.9, 743.0], [57.0, 743.0], [57.1, 743.0], [57.2, 744.0], [57.3, 744.0], [57.4, 744.0], [57.5, 744.0], [57.6, 744.0], [57.7, 745.0], [57.8, 745.0], [57.9, 745.0], [58.0, 745.0], [58.1, 745.0], [58.2, 745.0], [58.3, 746.0], [58.4, 746.0], [58.5, 746.0], [58.6, 746.0], [58.7, 746.0], [58.8, 747.0], [58.9, 747.0], [59.0, 747.0], [59.1, 747.0], [59.2, 747.0], [59.3, 747.0], [59.4, 748.0], [59.5, 748.0], [59.6, 748.0], [59.7, 748.0], [59.8, 748.0], [59.9, 749.0], [60.0, 749.0], [60.1, 749.0], [60.2, 749.0], [60.3, 750.0], [60.4, 750.0], [60.5, 750.0], [60.6, 750.0], [60.7, 750.0], [60.8, 751.0], [60.9, 751.0], [61.0, 751.0], [61.1, 751.0], [61.2, 752.0], [61.3, 752.0], [61.4, 752.0], [61.5, 752.0], [61.6, 752.0], [61.7, 753.0], [61.8, 753.0], [61.9, 753.0], [62.0, 753.0], [62.1, 753.0], [62.2, 754.0], [62.3, 754.0], [62.4, 754.0], [62.5, 754.0], [62.6, 755.0], [62.7, 755.0], [62.8, 755.0], [62.9, 755.0], [63.0, 755.0], [63.1, 756.0], [63.2, 756.0], [63.3, 756.0], [63.4, 757.0], [63.5, 757.0], [63.6, 757.0], [63.7, 757.0], [63.8, 757.0], [63.9, 758.0], [64.0, 758.0], [64.1, 758.0], [64.2, 758.0], [64.3, 759.0], [64.4, 759.0], [64.5, 759.0], [64.6, 759.0], [64.7, 759.0], [64.8, 760.0], [64.9, 760.0], [65.0, 760.0], [65.1, 760.0], [65.2, 761.0], [65.3, 761.0], [65.4, 761.0], [65.5, 761.0], [65.6, 762.0], [65.7, 762.0], [65.8, 762.0], [65.9, 763.0], [66.0, 763.0], [66.1, 763.0], [66.2, 763.0], [66.3, 763.0], [66.4, 764.0], [66.5, 764.0], [66.6, 764.0], [66.7, 764.0], [66.8, 764.0], [66.9, 765.0], [67.0, 765.0], [67.1, 765.0], [67.2, 765.0], [67.3, 765.0], [67.4, 766.0], [67.5, 766.0], [67.6, 766.0], [67.7, 766.0], [67.8, 767.0], [67.9, 767.0], [68.0, 767.0], [68.1, 767.0], [68.2, 768.0], [68.3, 768.0], [68.4, 768.0], [68.5, 768.0], [68.6, 768.0], [68.7, 768.0], [68.8, 769.0], [68.9, 769.0], [69.0, 769.0], [69.1, 769.0], [69.2, 769.0], [69.3, 770.0], [69.4, 770.0], [69.5, 770.0], [69.6, 771.0], [69.7, 771.0], [69.8, 771.0], [69.9, 771.0], [70.0, 771.0], [70.1, 772.0], [70.2, 772.0], [70.3, 772.0], [70.4, 772.0], [70.5, 773.0], [70.6, 773.0], [70.7, 773.0], [70.8, 773.0], [70.9, 774.0], [71.0, 774.0], [71.1, 774.0], [71.2, 774.0], [71.3, 775.0], [71.4, 775.0], [71.5, 775.0], [71.6, 775.0], [71.7, 776.0], [71.8, 776.0], [71.9, 776.0], [72.0, 776.0], [72.1, 776.0], [72.2, 777.0], [72.3, 777.0], [72.4, 777.0], [72.5, 777.0], [72.6, 778.0], [72.7, 778.0], [72.8, 778.0], [72.9, 779.0], [73.0, 779.0], [73.1, 779.0], [73.2, 779.0], [73.3, 780.0], [73.4, 780.0], [73.5, 780.0], [73.6, 780.0], [73.7, 780.0], [73.8, 781.0], [73.9, 781.0], [74.0, 781.0], [74.1, 781.0], [74.2, 782.0], [74.3, 782.0], [74.4, 782.0], [74.5, 782.0], [74.6, 782.0], [74.7, 783.0], [74.8, 783.0], [74.9, 783.0], [75.0, 784.0], [75.1, 784.0], [75.2, 784.0], [75.3, 784.0], [75.4, 785.0], [75.5, 785.0], [75.6, 785.0], [75.7, 786.0], [75.8, 786.0], [75.9, 786.0], [76.0, 786.0], [76.1, 786.0], [76.2, 787.0], [76.3, 787.0], [76.4, 787.0], [76.5, 787.0], [76.6, 788.0], [76.7, 788.0], [76.8, 788.0], [76.9, 788.0], [77.0, 789.0], [77.1, 789.0], [77.2, 789.0], [77.3, 789.0], [77.4, 789.0], [77.5, 790.0], [77.6, 790.0], [77.7, 790.0], [77.8, 790.0], [77.9, 791.0], [78.0, 791.0], [78.1, 791.0], [78.2, 791.0], [78.3, 791.0], [78.4, 792.0], [78.5, 792.0], [78.6, 792.0], [78.7, 792.0], [78.8, 792.0], [78.9, 792.0], [79.0, 793.0], [79.1, 793.0], [79.2, 793.0], [79.3, 793.0], [79.4, 793.0], [79.5, 793.0], [79.6, 794.0], [79.7, 794.0], [79.8, 794.0], [79.9, 794.0], [80.0, 794.0], [80.1, 794.0], [80.2, 794.0], [80.3, 795.0], [80.4, 795.0], [80.5, 795.0], [80.6, 795.0], [80.7, 795.0], [80.8, 795.0], [80.9, 795.0], [81.0, 795.0], [81.1, 795.0], [81.2, 796.0], [81.3, 796.0], [81.4, 796.0], [81.5, 796.0], [81.6, 796.0], [81.7, 796.0], [81.8, 796.0], [81.9, 796.0], [82.0, 797.0], [82.1, 797.0], [82.2, 797.0], [82.3, 797.0], [82.4, 797.0], [82.5, 798.0], [82.6, 798.0], [82.7, 798.0], [82.8, 798.0], [82.9, 798.0], [83.0, 798.0], [83.1, 798.0], [83.2, 798.0], [83.3, 798.0], [83.4, 798.0], [83.5, 798.0], [83.6, 799.0], [83.7, 799.0], [83.8, 799.0], [83.9, 799.0], [84.0, 799.0], [84.1, 799.0], [84.2, 799.0], [84.3, 799.0], [84.4, 799.0], [84.5, 800.0], [84.6, 800.0], [84.7, 800.0], [84.8, 800.0], [84.9, 800.0], [85.0, 800.0], [85.1, 800.0], [85.2, 801.0], [85.3, 801.0], [85.4, 801.0], [85.5, 801.0], [85.6, 801.0], [85.7, 801.0], [85.8, 801.0], [85.9, 801.0], [86.0, 801.0], [86.1, 802.0], [86.2, 802.0], [86.3, 802.0], [86.4, 802.0], [86.5, 802.0], [86.6, 802.0], [86.7, 802.0], [86.8, 802.0], [86.9, 802.0], [87.0, 802.0], [87.1, 803.0], [87.2, 803.0], [87.3, 803.0], [87.4, 803.0], [87.5, 803.0], [87.6, 803.0], [87.7, 803.0], [87.8, 803.0], [87.9, 804.0], [88.0, 804.0], [88.1, 804.0], [88.2, 804.0], [88.3, 804.0], [88.4, 804.0], [88.5, 804.0], [88.6, 804.0], [88.7, 805.0], [88.8, 805.0], [88.9, 805.0], [89.0, 805.0], [89.1, 805.0], [89.2, 805.0], [89.3, 805.0], [89.4, 805.0], [89.5, 806.0], [89.6, 806.0], [89.7, 806.0], [89.8, 806.0], [89.9, 806.0], [90.0, 806.0], [90.1, 806.0], [90.2, 807.0], [90.3, 807.0], [90.4, 807.0], [90.5, 807.0], [90.6, 807.0], [90.7, 807.0], [90.8, 807.0], [90.9, 807.0], [91.0, 807.0], [91.1, 808.0], [91.2, 808.0], [91.3, 808.0], [91.4, 808.0], [91.5, 808.0], [91.6, 808.0], [91.7, 808.0], [91.8, 808.0], [91.9, 809.0], [92.0, 809.0], [92.1, 809.0], [92.2, 809.0], [92.3, 809.0], [92.4, 810.0], [92.5, 810.0], [92.6, 810.0], [92.7, 810.0], [92.8, 810.0], [92.9, 811.0], [93.0, 811.0], [93.1, 811.0], [93.2, 811.0], [93.3, 812.0], [93.4, 812.0], [93.5, 812.0], [93.6, 812.0], [93.7, 812.0], [93.8, 813.0], [93.9, 813.0], [94.0, 813.0], [94.1, 813.0], [94.2, 814.0], [94.3, 814.0], [94.4, 814.0], [94.5, 815.0], [94.6, 815.0], [94.7, 815.0], [94.8, 816.0], [94.9, 816.0], [95.0, 816.0], [95.1, 816.0], [95.2, 817.0], [95.3, 817.0], [95.4, 817.0], [95.5, 818.0], [95.6, 818.0], [95.7, 818.0], [95.8, 819.0], [95.9, 819.0], [96.0, 819.0], [96.1, 820.0], [96.2, 820.0], [96.3, 820.0], [96.4, 821.0], [96.5, 821.0], [96.6, 821.0], [96.7, 822.0], [96.8, 823.0], [96.9, 823.0], [97.0, 823.0], [97.1, 824.0], [97.2, 824.0], [97.3, 825.0], [97.4, 827.0], [97.5, 827.0], [97.6, 828.0], [97.7, 828.0], [97.8, 829.0], [97.9, 831.0], [98.0, 831.0], [98.1, 832.0], [98.2, 832.0], [98.3, 833.0], [98.4, 833.0], [98.5, 834.0], [98.6, 835.0], [98.7, 836.0], [98.8, 837.0], [98.9, 838.0], [99.0, 839.0], [99.1, 841.0], [99.2, 845.0], [99.3, 847.0], [99.4, 854.0], [99.5, 857.0], [99.6, 871.0], [99.7, 872.0], [99.8, 5998.0], [99.9, 6239.0], [100.0, 6291.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 2799.0, "series": [{"data": [[600.0, 1856.0], [700.0, 2799.0], [5800.0, 1.0], [5700.0, 1.0], [6100.0, 4.0], [5900.0, 1.0], [6200.0, 7.0], [800.0, 891.0], [900.0, 1.0], [500.0, 260.0], [1000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1289.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 4533.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4533.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [[3.0, 1289.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.6090225563909768, "minX": 1.77999816E12, "maxY": 14.689748201438846, "series": [{"data": [[1.77999834E12, 7.177293934681185], [1.77999816E12, 1.6090225563909768], [1.77999864E12, 13.462427745664753], [1.77999822E12, 3.3777089783281755], [1.77999852E12, 12.851086956521725], [1.77999858E12, 14.689748201438846], [1.7799984E12, 9.101542416452437], [1.77999846E12, 11.027777777777777], [1.77999828E12, 5.26113360323887]], "isOverall": false, "label": "jp@gc - Stepping Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999864E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 589.2962962962962, "minX": 1.0, "maxY": 908.9777327935223, "series": [{"data": [[2.0, 595.242990654206], [8.0, 680.8140161725066], [9.0, 700.1497584541061], [10.0, 713.5248868778281], [11.0, 730.3139293139302], [3.0, 599.7639751552797], [12.0, 750.9999999999994], [13.0, 771.4795539033456], [14.0, 908.9777327935223], [15.0, 804.9387576552936], [1.0, 589.2962962962962], [4.0, 614.1014492753626], [5.0, 623.1478599221789], [6.0, 646.2200000000005], [7.0, 663.5887573964501]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[10.420817588457611, 734.7141875644127]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 15.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 350.23333333333335, "minX": 1.77999816E12, "maxY": 4281.2, "series": [{"data": [[1.77999834E12, 2475.55], [1.77999816E12, 512.05], [1.77999864E12, 1998.15], [1.77999822E12, 1243.55], [1.77999852E12, 3542.0], [1.77999858E12, 4281.2], [1.7799984E12, 2995.3], [1.77999846E12, 3465.0], [1.77999828E12, 1901.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77999834E12, 1693.2333333333333], [1.77999816E12, 350.23333333333335], [1.77999864E12, 1366.7], [1.77999822E12, 850.5666666666667], [1.77999852E12, 2422.6666666666665], [1.77999858E12, 2928.266666666667], [1.7799984E12, 2048.733333333333], [1.77999846E12, 2370.0], [1.77999828E12, 1300.8666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999864E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 590.1804511278195, "minX": 1.77999816E12, "maxY": 840.5206521739134, "series": [{"data": [[1.77999834E12, 663.2830482115077], [1.77999816E12, 590.1804511278195], [1.77999864E12, 793.015414258189], [1.77999822E12, 602.9133126934986], [1.77999852E12, 840.5206521739134], [1.77999858E12, 792.7122302158277], [1.7799984E12, 700.0437017994857], [1.77999846E12, 729.4844444444442], [1.77999828E12, 628.0566801619432]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999864E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 590.1428571428575, "minX": 1.77999816E12, "maxY": 840.5152173913056, "series": [{"data": [[1.77999834E12, 663.2768273716956], [1.77999816E12, 590.1428571428575], [1.77999864E12, 793.0115606936419], [1.77999822E12, 602.9040247678016], [1.77999852E12, 840.5152173913056], [1.77999858E12, 792.7068345323743], [1.7799984E12, 700.0398457583549], [1.77999846E12, 729.4777777777776], [1.77999828E12, 628.0465587044538]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999864E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5144444444444445, "minX": 1.77999816E12, "maxY": 0.7822736030828515, "series": [{"data": [[1.77999834E12, 0.5800933125972003], [1.77999816E12, 0.6917293233082707], [1.77999864E12, 0.7822736030828515], [1.77999822E12, 0.5789473684210523], [1.77999852E12, 0.7086956521739131], [1.77999858E12, 0.7320143884892086], [1.7799984E12, 0.5784061696658107], [1.77999846E12, 0.5144444444444445], [1.77999828E12, 0.6012145748987852]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999864E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 536.0, "minX": 1.77999816E12, "maxY": 790.0, "series": [{"data": [[1.77999834E12, 744.0], [1.77999816E12, 655.0], [1.77999864E12, 790.0], [1.77999822E12, 671.0], [1.77999852E12, 790.0], [1.77999858E12, 790.0], [1.7799984E12, 790.0], [1.77999846E12, 789.0], [1.77999828E12, 710.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77999834E12, 607.0], [1.77999816E12, 536.0], [1.77999864E12, 631.0], [1.77999822E12, 547.0], [1.77999852E12, 628.0], [1.77999858E12, 635.0], [1.7799984E12, 643.0], [1.77999846E12, 680.0], [1.77999828E12, 576.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77999834E12, 689.0], [1.77999816E12, 619.4000000000001], [1.77999864E12, 788.4], [1.77999822E12, 629.6], [1.77999852E12, 781.6], [1.77999858E12, 788.0], [1.7799984E12, 721.0], [1.77999846E12, 754.0], [1.77999828E12, 655.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77999834E12, 718.1199999999999], [1.77999816E12, 650.24], [1.77999864E12, 790.0], [1.77999822E12, 651.52], [1.77999852E12, 789.0], [1.77999858E12, 790.0], [1.7799984E12, 757.4200000000001], [1.77999846E12, 774.0], [1.77999828E12, 697.05]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77999834E12, 665.0], [1.77999816E12, 591.0], [1.77999864E12, 758.0], [1.77999822E12, 604.0], [1.77999852E12, 761.0], [1.77999858E12, 776.0], [1.7799984E12, 700.0], [1.77999846E12, 727.0], [1.77999828E12, 624.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77999834E12, 697.0], [1.77999816E12, 628.2], [1.77999864E12, 789.7], [1.77999822E12, 637.0], [1.77999852E12, 785.0], [1.77999858E12, 789.0], [1.7799984E12, 728.05], [1.77999846E12, 763.25], [1.77999828E12, 666.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999864E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 591.0, "minX": 1.0, "maxY": 6146.5, "series": [{"data": [[2.0, 591.0], [8.0, 625.0], [9.0, 679.5], [10.0, 653.0], [11.0, 671.0], [3.0, 594.5], [12.0, 682.0], [13.0, 717.0], [14.0, 718.0], [15.0, 732.0], [1.0, 592.0], [4.0, 593.0], [16.0, 744.0], [17.0, 755.0], [18.0, 746.5], [19.0, 723.0], [5.0, 609.0], [20.0, 767.0], [21.0, 779.0], [6.0, 607.5], [24.0, 663.5], [25.0, 783.0], [7.0, 618.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[10.0, 6146.5], [12.0, 796.5], [13.0, 801.0], [14.0, 817.5], [15.0, 804.0], [16.0, 808.5], [4.0, 795.5], [17.0, 805.0], [18.0, 807.0], [19.0, 804.0], [20.0, 802.0], [21.0, 802.0], [25.0, 807.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 591.0, "minX": 1.0, "maxY": 6146.5, "series": [{"data": [[2.0, 591.0], [8.0, 625.0], [9.0, 679.5], [10.0, 653.0], [11.0, 671.0], [3.0, 594.5], [12.0, 682.0], [13.0, 717.0], [14.0, 718.0], [15.0, 732.0], [1.0, 592.0], [4.0, 593.0], [16.0, 744.0], [17.0, 755.0], [18.0, 746.5], [19.0, 723.0], [5.0, 609.0], [20.0, 767.0], [21.0, 779.0], [6.0, 607.0], [24.0, 663.5], [25.0, 783.0], [7.0, 618.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[10.0, 6146.5], [12.0, 796.5], [13.0, 801.0], [14.0, 817.5], [15.0, 804.0], [16.0, 808.5], [4.0, 795.5], [17.0, 805.0], [18.0, 807.0], [19.0, 804.0], [20.0, 802.0], [21.0, 802.0], [25.0, 807.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.25, "minX": 1.77999816E12, "maxY": 18.55, "series": [{"data": [[1.77999834E12, 10.75], [1.77999816E12, 2.25], [1.77999864E12, 8.4], [1.77999822E12, 5.416666666666667], [1.77999852E12, 15.366666666666667], [1.77999858E12, 18.55], [1.7799984E12, 13.0], [1.77999846E12, 15.033333333333333], [1.77999828E12, 8.266666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999864E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.216666666666667, "minX": 1.77999816E12, "maxY": 18.533333333333335, "series": [{"data": [[1.77999834E12, 10.716666666666667], [1.77999816E12, 2.216666666666667], [1.77999864E12, 8.65], [1.77999822E12, 5.383333333333334], [1.77999852E12, 15.333333333333334], [1.77999858E12, 18.533333333333335], [1.7799984E12, 12.966666666666667], [1.77999846E12, 15.0], [1.77999828E12, 8.233333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999864E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.77999816E12, "maxY": 14.9, "series": [{"data": [[1.77999834E12, 10.716666666666667], [1.77999816E12, 2.216666666666667], [1.77999864E12, 1.75], [1.77999822E12, 5.383333333333334], [1.77999852E12, 14.216666666666667], [1.77999858E12, 5.166666666666667], [1.7799984E12, 12.966666666666667], [1.77999846E12, 14.9], [1.77999828E12, 8.233333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.77999864E12, 6.9], [1.77999852E12, 1.1166666666666667], [1.77999858E12, 13.366666666666667], [1.77999846E12, 0.1]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999864E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.77999816E12, "maxY": 14.9, "series": [{"data": [[1.77999834E12, 10.716666666666667], [1.77999816E12, 2.216666666666667], [1.77999864E12, 1.75], [1.77999822E12, 5.383333333333334], [1.77999852E12, 14.216666666666667], [1.77999858E12, 5.166666666666667], [1.7799984E12, 12.966666666666667], [1.77999846E12, 14.9], [1.77999828E12, 8.233333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.77999864E12, 6.9], [1.77999852E12, 1.1166666666666667], [1.77999858E12, 13.366666666666667], [1.77999846E12, 0.1]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999864E12, "title": "Total Transactions Per Second"}},
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

