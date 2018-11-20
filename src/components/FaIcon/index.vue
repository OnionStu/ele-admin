<template>
    <font-awesome-icon :icon="icon" class="svg-icon" />
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'FaIcon',
  components: {
    FontAwesomeIcon
  },
  props: {
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.svg-icon {
  /* width: 1em; */
  /* height: 1em; */
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
