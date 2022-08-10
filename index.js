import FormControl from './src/components/FormControl/FormControl.vue';

export default {
  install:  function(app) {
    app.component('form-control', FormControl)
  }
}
