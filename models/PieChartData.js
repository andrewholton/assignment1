var mongoose = require('mongoose');

var PieChartSchema = new mongoose.Schema({
  Recreational: String,
  Medical: String,
  Decriminalized: String,
  Illegal: String
}, 
{
  collection: 'pie-chart-data-collection'
});

mongoose.model('PieChartData', PieChartSchema);