<style lang="scss"></style>
<template>
<div class="form-check">
  <input
    :id="formId"
    ref="input"
    :class="inputClasses"
    type="checkbox"
    v-model="text"
  />
  <label v-if="label" :for="formId" class="form-check-label">{{ label }}</label>
</div>
</template>
<script setup>
import { getFormItemId } from "../id-generator";
defineProps({
  label: {
    required: false,
  },
  id: {
    required: false,
  },
  disabled: {
    required: false,
  },
  value: {
    required: false,
  },
  modelValue: {
    required: false,
  },
});
</script>
<script>


export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      formId: "",
      text: false,
      type: "checkbox",
    };
  },
  computed: {
    inputClasses: function () {
      var classes = "form-check-input";
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
    if (this.modelValue) {
      this.text = true;
    } else {
      this.text = false;
    }
  },
  created: function () {
    this.formId = getFormItemId(this.type, this.id);
    if(this.modelValue) {
      this.text = true;
    } else {
      this.$emit("update:modelValue", false);
    }
    if (this.value) {
      this.text = true;
    }
  },
  mounted: function () {
    if (this.disabled) {
      this.$refs["input"].disabled = true;
    }
  },
};
</script>
