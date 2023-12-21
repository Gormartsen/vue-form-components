<style lang="scss"></style>
<template>
<label v-if="label" :for="formId" class="form-check-label">{{ label }}</label>
<input
  :id="formId"
  ref="input"
  :class="inputClasses"
  type="range"
  v-model="text"
  :min="min"
  :max="max"
  :step="step"
/>
    
</template>

<script>
import { getFormItemId } from "./id-generator";
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      formId: "",
      text: 0,
      type: "range",
    };
  },
  props: ["label", "id", "min", "max", "step", "disabled", "value", "modelValue"],
  emits: ["update:modelValue"],
  computed: {
    inputClasses: function () {
      var classes = "form-range";
      return classes;
    },
  },
  watch: {
    text: function (newValue) {
      if(newValue % 1 === 0){
        return this.$emit("update:modelValue", parseInt(newValue));
      } else {
        return this.$emit("update:modelValue", parseFloat(newValue));
      }
    },
  },
  updated: function () {
    if (this.disabled) {
      this.$refs["input"].disabled = true;
    } else {
      this.$refs["input"].disabled = false;
    }
    if (this.modelValue) {
      if(this.text != this.modelValue) {
        this.text = this.modelValue;
      }
    }
  },
  created: function () {
    this.formId = getFormItemId(this.type, this.id);
    if (this.modelValue) {
      this.text = this.modelValue;
    }
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
