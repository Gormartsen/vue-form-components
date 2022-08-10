var latestId = 0;
var latestByType = {};
var latestById = {};
const getFormItemId = function(type, id) {
  if (id !== void 0) {
    if (latestById[id] === void 0) {
      latestById[id] = 0;
      return id;
    }
    latestById[id]++;
    return id + "-" + latestById[id];
  }
  if (type !== void 0) {
    if (latestByType[type] === void 0) {
      latestByType[type] = 0;
      return "form-id-" + type;
    }
    latestByType[type]++;
    return "form-id-" + type + "-" + latestByType[type];
  }
  latestId++;
  return "form-id-" + latestId;
};
const _hoisted_1 = ["for"];
const _hoisted_2 = ["id", "placeholder", "aria-describedby", "type", "readonly"];
const _hoisted_3 = ["id", "placeholder", "aria-describedby", "rows", "readonly"];
const _hoisted_4 = ["id"];
var acceptedSizes = ["lg", "sm"];
var acceptedTypes = ["text", "email", "file", "password", "textarea"];
const __default__ = {
  data() {
    return {
      formId: "",
      text: "",
      inputTypeTag: "input"
    };
  },
  computed: {
    describedby: function() {
      if (!this.describe) {
        return;
      }
      return this.formId + "-described";
    },
    inputType: function() {
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
    inputClasses: function() {
      var classes = "form-control";
      if (this.readonly) {
        classes = "form-control-plaintext";
      }
      if (this.size) {
        if (acceptedSizes.indexOf(this.size) !== -1) {
          classes = classes + " form-control-" + this.size;
        }
      }
      return classes;
    }
  },
  watch: {
    text: function(newValue) {
      return this.$emit("update:modelValue", newValue);
    }
  },
  updated: function() {
    if (this.disabled) {
      this.$refs["input"].disabled = true;
    } else {
      this.$refs["input"].disabled = false;
    }
    if (this.modelValue !== void 0) {
      this.text = this.modelValue;
    }
  },
  created: function() {
    this.formId = getFormItemId(this.inputType, this.id);
    this.text = this.modelValue;
    if (this.type == "textarea") {
      this.inputTypeTag = "textarea";
    }
    if (this.value) {
      this.text = this.value;
    }
  },
  mounted: function() {
    if (this.disabled) {
      this.$refs["input"].disabled = true;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "FormControl",
  props: {
    label: {
      required: false
    },
    size: {
      required: false
    },
    type: {
      required: false
    },
    placeholder: {
      required: false
    },
    describe: {
      required: false
    },
    id: {
      required: false
    },
    disabled: {
      required: false
    },
    rows: {
      required: false
    },
    readonly: {
      required: false
    },
    value: {
      required: false
    },
    modelValue: {
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        __props.label ? (Vue.openBlock(), Vue.createElementBlock("label", {
          key: 0,
          for: _ctx.formId,
          class: "form-label"
        }, Vue.toDisplayString(__props.label), 9, _hoisted_1)) : Vue.createCommentVNode("", true),
        _ctx.inputTypeTag == "input" ? Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("input", {
          key: 1,
          id: _ctx.formId,
          ref: "input",
          class: Vue.normalizeClass(_ctx.inputClasses),
          placeholder: __props.placeholder,
          "aria-describedby": _ctx.describedby,
          type: _ctx.inputType,
          readonly: __props.readonly,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => Vue.isRef(text) ? text.value = $event : null)
        }, null, 10, _hoisted_2)), [
          [Vue.vModelDynamic, _ctx.text]
        ]) : Vue.createCommentVNode("", true),
        _ctx.inputTypeTag == "textarea" ? Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("textarea", {
          key: 2,
          id: _ctx.formId,
          ref: "input",
          class: Vue.normalizeClass(_ctx.inputClasses),
          placeholder: __props.placeholder,
          "aria-describedby": _ctx.describedby,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => Vue.isRef(text) ? text.value = $event : null),
          rows: __props.rows,
          readonly: __props.readonly
        }, null, 10, _hoisted_3)), [
          [Vue.vModelText, _ctx.text]
        ]) : Vue.createCommentVNode("", true),
        __props.describe ? (Vue.openBlock(), Vue.createElementBlock("div", {
          key: 3,
          id: _ctx.formId + "-described",
          class: "form-text"
        }, Vue.toDisplayString(__props.describe), 9, _hoisted_4)) : Vue.createCommentVNode("", true)
      ], 64);
    };
  }
});
var index = {
  components: {
    FormControl: _sfc_main
  }
};
export { index as default };
