<style lang="scss"></style>
<template>
  <div class="form-check" v-for="(item, index) in options" :key="index">
    <input
      :id="getRadioId(index)"
      ref="input"
      class="form-check-input"
      :readonly="readonly"
      v-model="selected"
      :value="index"
      :name="name"
      type="radio"
      :disabled="IsDisabled(index)"
    />
    <label :for="getRadioId(index)" class="form-check-label">{{ item }}</label>
  </div>
</template>
<script>
import { getFormItemId } from "./id-generator";
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
      generatedIds: {}
    };
  },
  props: ["id", "disabled", "readonly", "value", "options", "modelValue"],
  emits: ["update:modelValue"],
  computed: {
  },
  watch: {
    selected: function (newValue) {
      return this.$emit("update:modelValue", newValue);
    },
  },
  methods: {
    getRadioId: function (item) {
      if(this.generatedIds[item]) {
        return this.generatedIds[item]
      }
      this.generatedIds[item] = getFormItemId("radio")
      return this.generatedIds[item]
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
      if(this.text != this.modelValue) {
        this.selected = this.modelValue;
      }
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
