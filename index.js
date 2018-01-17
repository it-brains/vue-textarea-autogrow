import component from './src/TextareaAutogrow';

const plugin = {
  install: function (Vue, name) {
    if (typeof name !== 'string') {
      name = 'TextareaAutogrow';
    }

    Vue.component(name, component);
  }
};

component.install = plugin.install;

export default component;
