<template>
  <div class="chart">
    <line-chart :chartData="chartData" :label="label" :options="options">
    </line-chart>
    <input type="button" value="abc" @click="click">
  </div>
</template>

<script>
import { mapState } from "vuex";
// import moment from 'moment';
import LineChart from "./LineChart";
export default {
  name: "ChartPage",
  components: {
    LineChart
  },
  computed: {
    ...mapState("shop", ["listRevenue"])
  },
  data() {
    return {
      listRevenue2: [
      {
        date: "2020-07-08",
        totalAmount: "800"
      },
      {
        date: "2020-07-09",
        totalAmount: "300"
      },
      {
        date: "2020-07-10",
        totalAmount: "400"
      },
      {
        date: "2020-07-11",
        totalAmount: "400"
      },
      {
        date: "2020-07-12",
        totalAmount: "500"
      },
      {
        date: "2020-07-13",
        totalAmount: "200"
      },
      {
        date: "2020-07-14",
        totalAmount: "800"
      },
      {
        date: "2020-07-15",
        totalAmount: "900"
      },
      {
        date: "2020-07-16",
        totalAmount: "1000"
      }
    ],
      chartData: [],
      label: "test",
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },

        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  // do not use mounted -> u have to use created before line chart render !!
  created() {
    this.init();
  },
  methods: {
    init() {
      this.chartData = this.listRevenue;
    },
    click(){
      this.chartData = this.listRevenue2;
    }
   }
};
</script>
