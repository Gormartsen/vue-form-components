import { createApp } from "vue";
//import Debug from "@gormartsen/vue-debug";

import App from "./App.vue";

window.APP = createApp(App);

import VueForm from "../index";
//window.APP.component("FormInput", FormControl);

window.APP.use(VueForm, true);

window.APP.mount("#app");
