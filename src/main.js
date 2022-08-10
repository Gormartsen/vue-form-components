import { createApp, reactive } from "vue";
//import Debug from "@gormartsen/vue-debug";

import App from "./App.vue";

window.APP = createApp(App);


//window.APP.use(Debug, true);

window.APP.mount("#app");
