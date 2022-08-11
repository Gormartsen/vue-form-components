<style lang="scss"></style>
<template>
  <label v-if="label" :for="formId" class="form-label">{{ label }}</label>
  <input
    v-if="inputTypeTag == 'input'"
    :id="formId"
    ref="input"
    :class="inputClasses"
    :placeholder="placeholder"
    :aria-describedby="describedby"
    :type="inputType"
    :readonly="readonly"
    v-model="text"
    :aria-label="arialabel"
  />
  <textarea
    v-if="inputTypeTag == 'textarea'"
    :id="formId"
    ref="input"
    :class="inputClasses"
    :placeholder="placeholder"
    :aria-describedby="describedby"
    :aria-label="arialabel"
    v-model="text"
    :rows="rows"
    :readonly="readonly"
  ></textarea>
  <div v-if="describe" :id="formId + '-described'" class="form-text">
    {{ describe }}
  </div>
</template>
<script setup>
import { getFormItemId } from "./id-generator";
defineProps({
  label: {
    required: false,
  },
  size: {
    required: false,
  },
  type: {
    required: false,
  },
  placeholder: {
    required: false,
  },
  describe: {
    required: false,
  },
  id: {
    required: false,
  },
  disabled: {
    required: false,
  },
  rows: {
    required: false,
  },
  readonly: {
    required: false,
  },
  value: {
    required: false,
  },
  modelValue: {
    required: false,
  },
  "aria-label": {
    required: false,
  },
  "aria-describedby": {
    required: false,
  },
  autofocus: {
    required: false,
  }
});
</script>
<script>
var acceptedSizes = ["lg", "sm"];
var acceptedTypes = ["text", "email", "file", "password", "textarea", "color"];

export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      formId: "",
      text: "",
      inputTypeTag: "input",
      arialabel: undefined,
      describedby: undefined,
    };
  },
  computed: {
    inputType: function () {
      var defaultType = "text";
      if (this.type == "textarea") {
        return;
      }
      if (this.type) {
        if (acceptedTypes.indexOf(this.type) !== -1) {
          defaultType = this.type;
        }
      }
      return defaultType;
    },
    inputClasses: function () {
      var classes = "form-control";
      if (this.readonly) {
        classes = "form-control-plaintext";
      }
      if (this.type == "color") {
        classes = "form-control form-control-color";
      }
      if (this.size) {
        if (acceptedSizes.indexOf(this.size) !== -1) {
          classes = classes + " form-control-" + this.size;
        }
      }
      return classes;
    },
  },
  watch: {
    text: function (newValue) {
      return this.$emit("update:modelValue", newValue);
    },
  },
  updated: function () {
    if (this.disabled) {
      this.$refs["input"].disabled = true;
    } else {
      this.$refs["input"].disabled = false;
    }
    if (this.modelValue !== undefined) {
      this.text = this.modelValue;
    }
  },
  created: function () {
    this.formId = getFormItemId(this.inputType, this.id);
    this.text = this.modelValue;
    if (this.type == "textarea") {
      this.inputTypeTag = "textarea";
    }
    if (this.value) {
      this.text = this.value;
    }
    
    if(this['ariaLabel']) {
      this.arialabel = this['ariaLabel'];
    }
    if(this['ariaDescribedby']) {
      this.describedby = this['ariaDescribedby'];
    }
    if(this.describe) {
      this.describedby = this.formId + "-described";
    }
  },
  mounted: function () {
    if (this.disabled) {
      this.$refs["input"].disabled = true;
    }
    if(this.autofocus) {
      this.$refs["input"].focus();
    }
  },
};
</script>
