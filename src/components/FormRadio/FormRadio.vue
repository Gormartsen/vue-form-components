<style lang="scss"></style>
<template>

  <div class="form-check" v-for="(item, index) in options" :key="index">
    <span> text:{{text}}</span>
    <input
      :id="getFormItemId('radio')"
      ref="input"
      class="form-check-input"
      :aria-describedby="describedby"
      :readonly="readonly"
      v-on:click="selectRadio(index)"
      :name="name"
      type="radio"
    >
    <label v-if="label" :for="formId" class="form-label">{{ item }}</label>
  </div>

</template>
<script setup>
import { getFormItemId } from "../id-generator";

defineProps({
  label: {
    required: false,
  },
  size: {
    required: false,
  },
  describe: {
    required: false,
  },
  multiple: {
    required: false,
  },
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
var RadioName = function(){
  var name = 'form-radio';
  if(FormRadiosID == -1) {
    FormRadiosID++
    return name
  }
  FormRadiosID++;
  return name + '-' + FormRadiosID;
}
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      formId: "",
      text: "",
      type: "select",
      name: ""
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
    text: function (newValue) {
      return this.$emit("update:modelValue", newValue);
    },
  },
  methods: {
    selectRadio: function(i) {
      this.text = i
    }
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
    this.formId = getFormItemId(this.type, this.id);
    this.name = RadioName();
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
