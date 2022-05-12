<template>
  <div class="dash">
    <graph />
  </div>
</template>

<script>
import Graph from '@/components/Graph.vue';

export default {
  name: 'Dash',
  components: { Graph }
};
</script>

<style lang="scss" scoped>
.dash {
  margin: auto;
  max-width: 1200px;
}
</style>
