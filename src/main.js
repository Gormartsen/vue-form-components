import { createApp, reactive } from "vue";
//import Debug from "@gormartsen/vue-debug";

import App from "./App.vue";

window.APP = createApp(App);

import FormControl from './components/FormControl/FormControl.vue';
window.APP.component("FormControl", FormControl);

//window.APP.use(Debug, true);

window.APP.mount("#app");
