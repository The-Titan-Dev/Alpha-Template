<template>
  <div class="small">
    <Dashchart shadow="8px" radius="5px" variant="primary" :datacollection="chartdata">
        <button @click="fillData()">Randomize</button>
    </Dashchart>

    <Dashchart shadow="8px" radius="5px" variant="info" :datacollection="chartdata">
        <button @click="fillData()">Randomize</button>
    </Dashchart>

    <Dashchart shadow="8px" radius="5px" variant="success" :datacollection="chartdata">
        <button @click="fillData()">Randomize</button>
    </Dashchart>

    <Dashchart shadow="8px" radius="5px" variant="warning" :datacollection="chartdata">
        <button @click="fillData()">Randomize</button>
    </Dashchart>

    <Dashchart shadow="8px" radius="5px" variant="error" :datacollection="chartdata">
        <button @click="fillData()">Randomize</button>
    </Dashchart>
 
  </div>
</template>

<script>


  export default {
    name: "Chart",
    data () {
      return {
        chartdata: {}
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.chartdata = {
          labels: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: 'rgba(255,255,255,0.3)',
              data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt()],
              pointBackgroundColor: 'rgb(255,255,255)',
              type : 'line',
            },
            {
              label: 'Data One',
              backgroundColor: 'rgba(255,255,255,0.3)',
              data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt()],
              type : 'bar',
              borderWidth : '5px'
            },
            {
              label: 'Data Two',
              backgroundColor: 'rgba(255,0,0,0.2)',
              data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt()],
              type : 'bar'
            }
          ], 
        };
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