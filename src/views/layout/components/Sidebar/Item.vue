<script>
/* eslint-disable */
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props;
    const vnodes = [];
    if (icon) {
      let ele = null;
      try {
        ele = <fa-icon icon={icon} class="svg-icon"/>;
      } catch (error) {
        console.log('make icon error', error);
      }
      if (ele) vnodes.push(ele);
    }

    if (title) {
      vnodes.push(<span slot="title">{title}</span>);
    }
    return vnodes;
  }
};
</script>
