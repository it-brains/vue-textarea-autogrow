<template>
  <textarea
      :value="value"
      @input="$emit('input', $event.target.value)"

      @keydown="setAutoHeight"
      :style="{height: height}"
      :id="id"
      :class="textareaClasses"
      :name="name"
  ></textarea>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        required: true,
      },

      /**
       * The 'id' that will be applied to the end textarea.
       */
      id: String,

      /**
       * The classes that will be applied to the end textarea.
       */
      classes: String,

      /**
       * The 'name' attribute that will be applied to the end textarea.
       */
      name: String,
    },

    data() {
      return {
        height: 'auto',
      };
    },

    mounted() {
      this.setAutoHeight();
    },

    computed: {
      textareaClasses() {
        return this.classes + ` v-autogrow`;
      }
    },

    methods: {
      setAutoHeight() {
        let oldHeight = this.$el.clientHeight;
        this.height = 'auto';

        Vue.nextTick(() => {
          let totalHeight = this.$el.scrollHeight;

          if (oldHeight !== totalHeight) {
            this.height = `${totalHeight}px`;
          }
        });
      },
    }
  }
</script>

<style scoped>
  .v-autogrow {
    overflow-y: hidden;
  }
</style>
