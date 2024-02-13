<style lang="scss" scoped>
.invalid-feedback, .valid-feedback {
  display:block;
}
</style>
<template>
  <label v-if="label" :for="formId" class="form-label">{{ label }}</label>
  <div class="invalid-feedback" v-if="validationStatus.valid == false && validationStatus.message != ''">
    {{validationStatus.message}}
  </div>
  <div class="valid-feedback" v-if="validationStatus.valid && validationStatus.message != ''">
    {{validationStatus.message}}
  </div>
  <input
    v-if="inputTypeTag == 'input'"
    :id="formId"
    ref="input"
    :class="inputClasses"
    :placeholder="placeholder"
    :aria-describedby="describedby"
    :type="inputType"
    :readonly="readonly"
    :autocomplete="autocomplete"
    v-model="text"
    :aria-label="arialabel"
    v-on:focusout="focusOut()"
    v-on:focus="$emit('focus')"
    v-on:keyup.enter="enterPressed"
  />
  <textarea
    v-if="inputTypeTag == 'textarea'"
    :id="formId"
    ref="input"
    :class="inputClasses"
    :placeholder="placeholder"
    :aria-describedby="describedby"
    :aria-label="arialabel"
    :autocomplete="autocomplete"
    v-model="text"
    :rows="rows"
    :readonly="readonly"
    v-on:focusout="focusOut()"
    v-on:focus="$emit('focus')"
  ></textarea>
  <div v-if="describe" :id="formId + '-described'" class="form-text">
    {{ describe }}
  </div>
  
  
</template>
<script>
import { getFormItemId } from "./id-generator";
var acceptedSizes = ["lg", "sm"];
var acceptedTypes = ["text", "email", "file", "password", "textarea", "color"];

export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      validationTimeOut:false,
      validationStatus: {

      },
      formId: "",
      text: "",
      inputTypeTag: "input",
      arialabel: undefined,
      describedby: undefined,
    };
  },
  props: ["label", "size", "type", "placeholder", "describe", "id", "disabled", "rows", "readonly", "value", "modelValue", "aria-label", "aria-describedby", "autofocus", "validation", "autocomplete"],
  emits: ['focusout', 'focus', "keyup", "update:modelValue"],
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
      if(this.validationStatus.valid) {
        classes = classes + ' is-valid'
      }
      if(this.validationStatus.valid == false) {
        classes = classes + ' is-invalid'
      }
      if(this.$attrs.class) {
        classes = classes + ' ' + this.$attrs.class
      }
      return classes;
    },
  },
  methods: {
    focusOut: function(){
      this.Validate();
      this.$emit('focusout')
    },
    Validate: function(){
      var self = this;
      if(this.validationTimeOut) {
        clearTimeout(this.validationTimeOut);
      }

      if(this.validation && typeof this.validation === 'function') {
        this.validationTimeOut = setTimeout(function(){
          self.validation(self.text, function(status) {
            self.validationStatus = status
          })
        }, 300)
      }
      if(this.validation) {
        self.validationStatus = this.validation
      }
    },
    enterPressed: function(){
      this.$refs.input.blur();
    }
  },
  watch: {
    validation: function(){
      if(this.validation && typeof this.validation === 'function') {
      } else {
        this.validationStatus = this.validation
      }
    },
    text: function (newValue) {
      this.Validate();
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
