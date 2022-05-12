<template>
  <div class="graph">
    <button
      class="get-data-btn"
      @click="fetchData()">
      Get data
    </button>
    <label
      class="days-label"
      for="days">Output size</label>
    <input
      v-model="days"
      name="days"
      type="number">
    <div
      v-for="(tickerName, index) in tickers"
      :key="index"
      class="card">
      <div class="ticker">
        {{ tickerName }}
      </div>
      <div
        :id="`chart-${index}`"
        class="ct-chart" />
    </div>
  </div>
</template>

<script>
import { API_URL, API_HEADERS } from '@/secrets';
import Chartist from 'chartist';

const mocks = require('./data.json');

export default {
  name: 'Graph',
  data() {
    return {
      mockData: mocks,
      rawData: {},
      dataForGraphs: {},
      days: 30
    };
  },
  computed: {
    tickers() {
      return ['AMZN', 'TSLA', 'GME'];
    }
  },
  methods: {
    fetchData() {
      let URL = `${API_URL}?`;

      URL += `interval=1day&symbol=${this.tickers.join()}&format=json&outputsize=${this.days}`;

      fetch(URL, { headers: API_HEADERS })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not OK');
          }
          return response.json();
        })
        .then(responseJson => {
          this.rawData = responseJson;
          this.setupDataForGraph();
          this.drawGraphs();

          console.log('Success:', responseJson);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },
    setupDataForGraph() {
      this.tickers.forEach(tickerName => {
        this.dataForGraphs[tickerName] = { series: [[]] };

        this.rawData[tickerName].values.forEach(value => {
          this.dataForGraphs[tickerName].series[0].unshift(Math.floor(value.close));
        });
      });
    },
    drawGraphs() {
      const options = {
        height: 200,
        width: 800,
        low: 0,
        showArea: true,
        axisX: {
          offset: 0
        }
      };

      this.tickers.forEach((tickerName, index) => {
        new Chartist.Line(`#chart-${index}`, this.dataForGraphs[tickerName], options);
      });
    }
  }
};
</script>

<style lang="scss">
@import "node_modules/chartist/dist/scss/chartist.scss";

.get-data-btn {
  position:relative;
  background-color: chocolate;
  margin: 1rem;
  padding: 10px;
  border-radius: 6px;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 1px 2px 1px rgba(105, 105, 105, 0.4);

  &:hover {
    background-color: rgb(201, 60, 60);
    box-shadow: 0px 1px 4px 2px rgba(105, 105, 105, 0.8);
  }

  &:active{
    top: 1px;
  }
}

.card {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 10px;
}
.ticker {
  width: 100px;
  background-color: lightgreen;
}

.days-label {
  margin-right: 0.5rem;
}

.ct-label {
  color: black;
  font-size: 8px;

  &.ct-start {
    font-size: 10px;
    position: relative;
    bottom: -4px;
  }
}
.ct-point {
  display: none;
}
.ct-line {
  stroke-width: 1px;
}
.ct-horizontal {
    stroke: none;
}
</style>
