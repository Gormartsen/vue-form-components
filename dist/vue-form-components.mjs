import { openBlock as l, createElementBlock as d, Fragment as m, toDisplayString as o, createCommentVNode as n, withDirectives as c, normalizeClass as b, vModelDynamic as T, vModelText as I, createElementVNode as p, renderList as k, vModelSelect as C, vModelCheckbox as S, vModelRadio as z } from "vue";
var V = 0, v = {}, x = {};
const h = function(e, s) {
  return s !== void 0 ? x[s] === void 0 ? (x[s] = 0, s) : (x[s]++, s + "-" + x[s]) : e !== void 0 ? v[e] === void 0 ? (v[e] = 0, "form-id-" + e) : (v[e]++, "form-id-" + e + "-" + v[e]) : (V++, "form-id-" + V);
}, y = (e, s) => {
  const i = e.__vccOpts || e;
  for (const [f, t] of s)
    i[f] = t;
  return i;
};
var F = ["lg", "sm"], O = ["text", "email", "file", "password", "textarea", "color"];
const D = {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      validationTimeOut: !1,
      validationStatus: {},
      formId: "",
      text: "",
      inputTypeTag: "input",
      arialabel: void 0,
      describedby: void 0
    };
  },
  props: ["label", "size", "type", "placeholder", "describe", "id", "disabled", "rows", "readonly", "value", "modelValue", "aria-label", "aria-describedby", "autofocus", "validation"],
  emits: ["focusout", "keyup", "update:modelValue"],
  computed: {
    inputType: function() {
      var e = "text";
      if (this.type != "textarea")
        return this.type && O.indexOf(this.type) !== -1 && (e = this.type), e;
    },
    inputClasses: function() {
      var e = "form-control";
      return this.readonly && (e = "form-control-plaintext"), this.type == "color" && (e = "form-control form-control-color"), this.size && F.indexOf(this.size) !== -1 && (e = e + " form-control-" + this.size), this.validationStatus.valid && (e = e + " is-valid"), this.validationStatus.valid == !1 && (e = e + " is-invalid"), this.$attrs.class && (e = e + " " + this.$attrs.class), e;
    }
  },
  methods: {
    Validate: function() {
      var e = this;
      this.validationTimeOut && clearTimeout(this.validationTimeOut), this.validation && typeof this.validation == "function" && (this.validationTimeOut = setTimeout(function() {
        e.validation(e.text, function(s) {
          e.validationStatus = s;
        });
      }, 300));
    }
  },
  watch: {
    text: function(e) {
      if (this.Validate(), e != null)
        return this.$emit("update:modelValue", e);
    }
  },
  updated: function() {
    this.disabled ? this.$refs.input.disabled = !0 : this.$refs.input.disabled = !1, this.modelValue !== void 0 && this.text != this.modelValue && (this.text = this.modelValue);
  },
  created: function() {
    this.formId = h(this.inputType, this.id), this.text = this.modelValue, this.type == "textarea" && (this.inputTypeTag = "textarea"), this.value && (this.text = this.value), this.ariaLabel && (this.arialabel = this.ariaLabel), this.ariaDescribedby && (this.describedby = this.ariaDescribedby), this.describe && (this.describedby = this.formId + "-described");
  },
  mounted: function() {
    this.disabled && (this.$refs.input.disabled = !0), this.autofocus && this.$refs.input.focus(), this.Validate();
  }
}, R = ["for"], w = ["id", "placeholder", "aria-describedby", "type", "readonly", "aria-label"], U = ["id", "placeholder", "aria-describedby", "aria-label", "rows", "readonly"], M = ["id"], B = {
  key: 4,
  class: "valid-feedback"
}, L = {
  key: 5,
  class: "invalid-feedback"
};
function N(e, s, i, f, t, a) {
  return l(), d(m, null, [
    i.label ? (l(), d("label", {
      key: 0,
      for: t.formId,
      class: "form-label"
    }, o(i.label), 9, R)) : n("", !0),
    t.inputTypeTag == "input" ? c((l(), d("input", {
      key: 1,
      id: t.formId,
      ref: "input",
      class: b(a.inputClasses),
      placeholder: i.placeholder,
      "aria-describedby": t.describedby,
      type: a.inputType,
      readonly: i.readonly,
      "onUpdate:modelValue": s[0] || (s[0] = (r) => t.text = r),
      "aria-label": t.arialabel,
      onFocusout: s[1] || (s[1] = (r) => e.$emit("focusout"))
    }, null, 42, w)), [
      [T, t.text]
    ]) : n("", !0),
    t.inputTypeTag == "textarea" ? c((l(), d("textarea", {
      key: 2,
      id: t.formId,
      ref: "input",
      class: b(a.inputClasses),
      placeholder: i.placeholder,
      "aria-describedby": t.describedby,
      "aria-label": t.arialabel,
      "onUpdate:modelValue": s[2] || (s[2] = (r) => t.text = r),
      rows: i.rows,
      readonly: i.readonly
    }, null, 10, U)), [
      [I, t.text]
    ]) : n("", !0),
    i.describe ? (l(), d("div", {
      key: 3,
      id: t.formId + "-described",
      class: "form-text"
    }, o(i.describe), 9, M)) : n("", !0),
    t.validationStatus.valid ? (l(), d("div", B, o(t.validationStatus.message), 1)) : n("", !0),
    t.validationStatus.valid ? n("", !0) : (l(), d("div", L, o(t.validationStatus.message), 1))
  ], 64);
}
const re = /* @__PURE__ */ y(D, [["render", N]]);
var E = ["lg", "sm"];
const j = {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      formId: "",
      text: "",
      type: "select"
    };
  },
  props: ["label", "size", "describe", "multiple", "id", "disabled", "readonly", "value", "options", "modelValue"],
  emits: ["update:modelValue"],
  computed: {
    describedby: function() {
      if (this.describe)
        return this.formId + "-described";
    },
    inputClasses: function() {
      var e = "form-select";
      return this.readonly && (e = "form-select-plaintext"), this.type == "color" && (e = "form-select form-select-color"), this.size && E.indexOf(this.size) !== -1 && (e = e + " form-select-" + this.size), e;
    }
  },
  watch: {
    text: function(e) {
      if (e != null)
        return this.$emit("update:modelValue", e);
    }
  },
  updated: function() {
    this.disabled ? this.$refs.input.disabled = !0 : this.$refs.input.disabled = !1, this.modelValue !== void 0 && this.text != this.modelValue && (this.text = this.modelValue);
  },
  created: function() {
    this.formId = h(this.type, this.id), this.text = this.modelValue, this.value && (this.text = this.value);
  },
  mounted: function() {
    this.disabled && (this.$refs.input.disabled = !0);
  }
}, q = ["for"], A = ["id", "aria-describedby", "readonly", "multiple"], G = ["value"], H = ["id"];
function J(e, s, i, f, t, a) {
  return l(), d(m, null, [
    i.label ? (l(), d("label", {
      key: 0,
      for: t.formId,
      class: "form-label"
    }, o(i.label), 9, q)) : n("", !0),
    c(p("select", {
      id: t.formId,
      ref: "input",
      class: b(a.inputClasses),
      "aria-describedby": a.describedby,
      readonly: i.readonly,
      "onUpdate:modelValue": s[0] || (s[0] = (r) => t.text = r),
      multiple: i.multiple
    }, [
      (l(!0), d(m, null, k(i.options, (r, u) => (l(), d("option", {
        key: u,
        value: u
      }, o(r), 9, G))), 128))
    ], 10, A), [
      [C, t.text]
    ]),
    i.describe ? (l(), d("div", {
      key: 1,
      id: t.formId + "-described",
      class: "form-text"
    }, o(i.describe), 9, H)) : n("", !0)
  ], 64);
}
const ne = /* @__PURE__ */ y(j, [["render", J]]), K = {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      formId: "",
      text: !1,
      type: "checkbox"
    };
  },
  props: ["label", "id", "disabled", "value", "modelValue"],
  emits: ["update:modelValue"],
  computed: {
    inputClasses: function() {
      var e = "form-check-input";
      return e;
    }
  },
  watch: {
    text: function(e) {
      return this.$emit("update:modelValue", e);
    }
  },
  updated: function() {
    this.disabled ? this.$refs.input.disabled = !0 : this.$refs.input.disabled = !1, this.modelValue ? this.text = !0 : this.text = !1;
  },
  created: function() {
    this.formId = h(this.type, this.id), this.modelValue ? this.text = !0 : this.$emit("update:modelValue", !1), this.value && (this.text = !0);
  },
  mounted: function() {
    this.disabled && (this.$refs.input.disabled = !0);
  }
}, P = { class: "form-check" }, Q = ["id"], W = ["for"];
function X(e, s, i, f, t, a) {
  return l(), d("div", P, [
    c(p("input", {
      id: t.formId,
      ref: "input",
      class: b(a.inputClasses),
      type: "checkbox",
      "onUpdate:modelValue": s[0] || (s[0] = (r) => t.text = r)
    }, null, 10, Q), [
      [S, t.text]
    ]),
    i.label ? (l(), d("label", {
      key: 0,
      for: t.formId,
      class: "form-check-label"
    }, o(i.label), 9, W)) : n("", !0)
  ]);
}
const oe = /* @__PURE__ */ y(K, [["render", X]]);
var _ = -1, Y = function() {
  var e = "form-radio";
  return _ == -1 ? (_++, e) : (_++, e + "-" + _);
};
const Z = {
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
  computed: {},
  watch: {
    selected: function(e) {
      return this.$emit("update:modelValue", e);
    }
  },
  methods: {
    getRadioId: function(e) {
      return this.generatedIds[e] ? this.generatedIds[e] : (this.generatedIds[e] = h("radio"), this.generatedIds[e]);
    },
    IsDisabled: function(e) {
      if (this.disabled && this.disabled.indexOf && this.disabled.indexOf(e) !== -1)
        return !0;
    }
  },
  updated: function() {
    this.modelValue !== void 0 && this.text != this.modelValue && (this.selected = this.modelValue);
  },
  created: function() {
    this.formId = h(this.type, this.id), this.name = Y(), this.selected = this.modelValue, this.value && (this.selected = this.value);
  },
  mounted: function() {
  }
}, $ = ["id", "readonly", "value", "name", "disabled"], ee = ["for"];
function te(e, s, i, f, t, a) {
  return l(!0), d(m, null, k(i.options, (r, u) => (l(), d("div", {
    class: "form-check",
    key: u
  }, [
    c(p("input", {
      id: a.getRadioId(u),
      ref_for: !0,
      ref: "input",
      class: "form-check-input",
      readonly: i.readonly,
      "onUpdate:modelValue": s[0] || (s[0] = (g) => t.selected = g),
      value: u,
      name: t.name,
      type: "radio",
      disabled: a.IsDisabled(u)
    }, null, 8, $), [
      [z, t.selected]
    ]),
    p("label", {
      for: a.getRadioId(u),
      class: "form-check-label"
    }, o(r), 9, ee)
  ]))), 128);
}
const ue = /* @__PURE__ */ y(Z, [["render", te]]), ie = {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      formId: "",
      text: 0,
      type: "range"
    };
  },
  props: ["label", "id", "min", "max", "step", "disabled", "value", "modelValue"],
  emits: ["update:modelValue"],
  computed: {
    inputClasses: function() {
      var e = "form-range";
      return e;
    }
  },
  watch: {
    text: function(e) {
      return e % 1 === 0 ? this.$emit("update:modelValue", parseInt(e)) : this.$emit("update:modelValue", parseFloat(e));
    }
  },
  updated: function() {
    this.disabled ? this.$refs.input.disabled = !0 : this.$refs.input.disabled = !1, this.modelValue && this.text != this.modelValue && (this.text = this.modelValue);
  },
  created: function() {
    this.formId = h(this.type, this.id), this.modelValue && (this.text = this.modelValue), this.value && (this.text = this.value);
  },
  mounted: function() {
    this.disabled && (this.$refs.input.disabled = !0);
  }
}, se = ["for"], le = ["id", "min", "max", "step"];
function de(e, s, i, f, t, a) {
  return l(), d(m, null, [
    i.label ? (l(), d("label", {
      key: 0,
      for: t.formId,
      class: "form-check-label"
    }, o(i.label), 9, se)) : n("", !0),
    c(p("input", {
      id: t.formId,
      ref: "input",
      class: b(a.inputClasses),
      type: "range",
      "onUpdate:modelValue": s[0] || (s[0] = (r) => t.text = r),
      min: i.min,
      max: i.max,
      step: i.step
    }, null, 10, le), [
      [I, t.text]
    ])
  ], 64);
}
const fe = /* @__PURE__ */ y(ie, [["render", de]]);
export {
  oe as FormCheckbox,
  re as FormInput,
  ue as FormRadio,
  fe as FormRange,
  ne as FormSelect
};
