<template>
  <div class="small">
  

    <Dashcard shadow="8px" radius="5px" variant="primary">
        <line-chart :chart-data="datacollection" :options="option_list"></line-chart>
        <button @click="fillData()">Randomize</button>
    </Dashcard>
 
  </div>
</template>

<script>
  import LineChart from './Sample/sampleChart.js'

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: {},
        option_list :{}
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: 'rgba(255,255,255,0.3)',
              data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt()],
              pointBackgroundColor: 'rgb(255,255,255)'
            },
            // {
            //   label: 'Data One',
            //   backgroundColor: 'rgba(0,255,0,0.2)',
            //   data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt()],
            //   type : 'bar',
            //   borderWidth : '5px'
            // },{
            //   label: 'Data One',
            //   backgroundColor: 'rgba(255,0,0,0.2)',
            //   data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt()],
            //   type : 'bar'
            // }
          ]
        };
        
        this.option_list = {
              legend: {
                    labels: {
                        fontColor: 'white'
                        }
                    },
              title: {
                  display: true,
                  fontColor: 'white',
                  text: 'Custom Chart Title'
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
        };
        //  console.log(this.option_list);
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>