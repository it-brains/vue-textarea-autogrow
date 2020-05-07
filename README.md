# TextareaAutogrow

> A native Vue.js textarea component that auto grow height typing.

## Install

```bash
$ npm install vue-textarea-autogrow
```

Register the component

```js
import Vue from 'vue';
import TextareaAutogrow from 'vue-textarea-autogrow';
```

```js
Vue.component('TextareaAutogrow', TextareaAutogrow);
```

or

```js
Vue.use(TextareaAutogrow);
```

You may now use the component in your markup

```html
<TextareaAutogrow v-model="form.guidance"
                  id="general-guidance"
                  name="guidance"
                  classes="form-control form-control-line textarea"
/>
```

## Props config

``` javascript
props: {
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
  
  /**
   * The 'rows' attribute that will be applied to the end textarea. Controlls initial height of the element.
   */
  rows: String,
}
```
                        
