import { defineCustomElement } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
// import vuetifyStyles from 'vuetify/styles?inline'

import HillsGovHubWrapper from "./components/Wrapper.vue";

const HillsGovHubWrapperElement = defineCustomElement(HillsGovHubWrapper, {
  configureApp: (app) => {
    app.use(
      createVuetify({
        components,
        directives,
        theme: {
          themes: {
            light: {
              colors: {
                primary: "#103260",
                secondary: "#1E81B2",
                accent: "#F5CA0E",
              },
            },
          },
        },
      })
    );
  },
  shadowRoot: false,
  // styles: [vuetifyStyles]
});

if (!customElements.get("hillsgovhub-wrapper")) {
  customElements.define("hillsgovhub-wrapper", HillsGovHubWrapperElement);
}
