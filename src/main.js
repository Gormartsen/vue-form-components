import { createApp } from "vue";
//import Debug from "@gormartsen/vue-debug";

import App from "./App.vue";

window.APP = createApp(App);

window.APP.mount("#app");
