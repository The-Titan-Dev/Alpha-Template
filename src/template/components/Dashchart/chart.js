import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  data: () => ({
      options: 
      {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          labels: {
              fontColor: 'white'
              }
          },
        title: {
            display: true,
            fontColor: 'white',
        }     ,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: 'white'
                },
            }],
          xAxes: [{
                ticks: {
                    fontColor: 'white'
                },
            }]
        } 
      }
    }),
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
   
    this.renderChart(this.chartData, this.options);
    
  }
}