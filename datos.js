
$(document).ready(function () {
    $('.min-chart#chart-sales').easyPieChart({
        barColor: "#e91e63",
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    $('.min-chart#chart-sales2').easyPieChart({
        barColor: "#607d8b",
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    $('.min-chart#chart-sales3').easyPieChart({
        barColor: "#00bcd4",
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    $('.min-chart#chart-sales4').easyPieChart({
        barColor: "#9c27b0",
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    $('.min-chart#chart-sales5').easyPieChart({
        barColor: "#ff9800",
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
});
