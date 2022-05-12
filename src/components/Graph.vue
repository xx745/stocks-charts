<template>
  <div class="graph">
    <div class="card">
      <div
        class="ticker"
        :style="`width: ${maxWidth - 1000}px;`">
        TSLA
      </div>
      <div
        class="chart"
        :style="`width: ${maxWidth - 200}px;`" />
    </div>
  </div>
</template>

<script>
import Chartist from 'chartist';

export default {
  name: 'Graph',
  props: {
    maxWidth: {
      type: Number,
      required: true
    }
  },
  mounted() {
    const data = {
      // A labels array that can contain any sort of values
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      // Our series array that contains series objects or in this case series data arrays
      series: [
        [5, 2, 4, 2, 0]
      ]
    };

    const options = {
      // width: 300,
      height: 200
    };

    // Create a new line chart object where as first parameter we pass in a selector
    // that is resolving to our chart container element. The Second parameter
    // is the actual data object.
    new Chartist.Line('.chart', data, options);
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}
.ticker {
  background-color: lightgreen;
}
.chart {
  background-color: lightcyan;
}
</style>
