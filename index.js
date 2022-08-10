import FormInput from "./src/components/FormInput/FormInput.vue";
FormInput.name = "FormInput";

import FormSelect from "./src/components/FormSelect/FormSelect.vue";
FormSelect.name = "FormSelect";

import FormCheckbox from "./src/components/FormCheckbox/FormCheckbox.vue";
FormCheckbox.name = "FormCheckbox";

export default {
  install: function (app) {
    app.component(FormInput.name, FormInput);
    app.component(FormSelect.name, FormSelect);
    app.component(FormCheckbox.name, FormCheckbox);
  },
};
