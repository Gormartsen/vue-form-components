<style lang="scss"></style>
<template>
  <label v-if="label" :for="formId" class="form-label">{{ label }}</label>

  <select
    :id="formId"
    ref="input"
    :class="inputClasses"
    :aria-describedby="describedby"
    :readonly="readonly"
    v-model="text"
    :multiple="multiple"
  >
    <option v-for="(name, index) in options" :key="index" :value="index">
      {{ name }}
    </option>
  </select>
  <div v-if="describe" :id="formId + '-described'" class="form-text">
    {{ describe }}
  </div>
</template>
<script>
import { getFormItemId } from "./id-generator";
var acceptedSizes = ["lg", "sm"];

export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      formId: "",
      text: "",
      type: "select",
    };
  },
  props: ["label", "size", "describe", "multiple", "id", "disabled", "readonly", "value", "options", "modelValue"],
  emits: ["update:modelValue"],
  computed: {
    describedby: function () {
      if (!this.describe) {
        return;
      }
      return this.formId + "-described";
    },

    inputClasses: function () {
      var classes = "form-select";
      if (this.readonly) {
        classes = "form-select-plaintext";
      }
      if (this.type == "color") {
        classes = "form-select form-select-color";
      }
      if (this.size) {
        if (acceptedSizes.indexOf(this.size) !== -1) {
          classes = classes + " form-select-" + this.size;
        }
      }
      return classes;
    },
  },
  watch: {
    text: function (newValue) {
      if(newValue != undefined) {
        return this.$emit("update:modelValue", newValue);
      }
    },
  },
  updated: function () {
    if (this.disabled) {
      this.$refs["input"].disabled = true;
    } else {
      this.$refs["input"].disabled = false;
    }
    if (this.modelValue !== undefined) {
      if(this.text != this.modelValue) {
        this.text = this.modelValue;
      }
    }
  },
  created: function () {
    this.formId = getFormItemId(this.type, this.id);
    this.text = this.modelValue;
    if (this.value) {
      this.text = this.value;
    }
  },
  mounted: function () {
    if (this.disabled) {
      this.$refs["input"].disabled = true;
    }
  },
};
</script>
