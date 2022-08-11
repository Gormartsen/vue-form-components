import FormInput from "./src/components/FormInput.vue";
FormInput.name = "FormInput";

import FormSelect from "./src/components/FormSelect.vue";
FormSelect.name = "FormSelect";

import FormCheckbox from "./src/components/FormCheckbox.vue";
FormCheckbox.name = "FormCheckbox";

import FormRadio from "./src/components/FormRadio.vue";
FormRadio.name = "FormRadio";

import FormRange from "./src/components/FormRange.vue";
FormRange.name = "FormRange";

export default {
  install: function (app) {
    app.component(FormInput.name, FormInput);
    app.component(FormSelect.name, FormSelect);
    app.component(FormCheckbox.name, FormCheckbox);
    app.component(FormRadio.name, FormRadio);
    app.component(FormRange.name, FormRange);
  },
};
