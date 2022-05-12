<template>
  <div
    class="dash"
    :style="`max-width: ${maxWidth}px;`">
    <graph :max-width="maxWidth" />
  </div>
</template>

<script>
import Graph from '@/components/Graph.vue';

export default {
  name: 'Dash',
  components: { Graph },
  computed: {
    maxWidth() {
      return 1200;
    }
  }
};
</script>

<style lang="scss" scoped>
.dash {
  margin: auto;
}
</style>
