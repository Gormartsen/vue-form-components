<style lang="scss"></style>
<template>
  <div>text: {{ selected }}</div>
  <div class="form-check" v-for="(item, index) in options" :key="index">
    <span> </span>
    <input
      :id="getRadioId(true)"
      ref="input"
      class="form-check-input"
      :aria-describedby="describedby"
      :readonly="readonly"
      v-model="selected"
      :value="index"
      :name="name"
      type="radio"
      :disabled="IsDisabled(index)"
    />
    <label :for="getRadioId()" class="form-check-label">{{ item }}</label>
  </div>
</template>
<script setup>
import { getFormItemId } from "../id-generator";

defineProps({
  id: {
    required: false,
  },
  disabled: {
    required: false,
  },
  readonly: {
    required: false,
  },
  value: {
    required: false,
  },
  options: {
    required: true,
  },
  modelValue: {
    required: false,
  },
});
</script>
<script>
var FormRadiosID = -1;
var RadioName = function () {
  var name = "form-radio";
  if (FormRadiosID == -1) {
    FormRadiosID++;
    return name;
  }
  FormRadiosID++;
  return name + "-" + FormRadiosID;
};

export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      formId: "",
      type: "select",
      name: "",
      selected: 0,
      lastFormRadioID: 0,
    };
  },
  computed: {
    describedby: function () {
      if (!this.describe) {
        return;
      }
      return this.formId + "-described";
    },
  },
  watch: {
    selected: function (newValue) {
      return this.$emit("update:modelValue", newValue);
    },
  },
  methods: {
    getRadioId: function (isNew) {
      if (isNew) {
        this.lastFormRadioID = getFormItemId("radio");
      }
      return this.lastFormRadioID;
    },
    IsDisabled: function (index) {
      if (!this.disabled) {
        return;
      }
      if (!this.disabled.indexOf) {
        return;
      }
      if (this.disabled.indexOf(index) !== -1) {
        return true;
      }
      return;
    },
  },
  updated: function () {
    if (this.modelValue !== undefined) {
      this.selected = this.modelValue;
    }
  },
  created: function () {
    this.formId = getFormItemId(this.type, this.id);
    this.name = RadioName();
    this.selected = this.modelValue;
    if (this.value) {
      this.selected = this.value;
    }
  },
  mounted: function () {},
};
</script>
