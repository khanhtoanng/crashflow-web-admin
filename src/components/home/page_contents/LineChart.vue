<script>
import { Line } from "vue-chartjs";
export default {
  name: "LineChart",
  extends: Line,
  props: {
    label: {
      type: String
    },
    chartData: {
      type: Array
    },
    options: {
      type: Object
    }
  },
  mounted() {
    this.render();
  },
  methods: {
    render() {
      const dates = this.chartData.map(item => item.date).reverse();
      const totals = this.chartData.map(item => item.totalAmount).reverse();
      this.renderChart(
        {
          labels: dates,
          datasets: [
            {
              label: this.label,
              data: totals
            }
          ]
        },
        this.options
      );
    }
  },
  watch: {
    chartData() {
      this.render();
    }
  }
};
</script>

<style></style>
