import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const meta = document.createElement("meta");
meta.name = "naive-ui-style";
document.head.appendChild(meta);

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");
