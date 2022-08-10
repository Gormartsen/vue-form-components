import FormControl from './src/components/FormControl/FormControl.vue';
FormControl.name = "FormControl";

export default {
  install:  function(app) {
    app.component(FormControl.name, FormControl)
  }
}
