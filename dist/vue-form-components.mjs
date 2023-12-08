import { openBlock as l, createElementBlock as r, Fragment as h, toDisplayString as u, createCommentVNode as o, withDirectives as c, normalizeClass as b, vModelDynamic as T, vModelText as V, createElementVNode as p, renderList as k, vModelSelect as C, vModelCheckbox as z, vModelRadio as F } from "vue";
var I = 0, x = {}, _ = {};
const m = function(e, s) {
  return s !== void 0 ? _[s] === void 0 ? (_[s] = 0, s) : (_[s]++, s + "-" + _[s]) : e !== void 0 ? x[e] === void 0 ? (x[e] = 0, "form-id-" + e) : (x[e]++, "form-id-" + e + "-" + x[e]) : (I++, "form-id-" + I);
}, y = (e, s) => {
  const i = e.__vccOpts || e;
  for (const [f, t] of s)
    i[f] = t;
  return i;
};
var w = ["lg", "sm"], D = ["text", "email", "file", "password", "textarea", "color"];
const R = {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      formId: "",
      text: "",
      inputTypeTag: "input",
      arialabel: void 0,
      describedby: void 0
    };
  },
  props: ["label", "size", "type", "placeholder", "describe", "id", "disabled", "rows", "readonly", "value", "modelValue", "aria-label", "aria-describedby", "autofocus"],
  emits: ["focusout", "keyup", "update:modelValue"],
  computed: {
    inputType: function() {
      var e = "text";
      if (this.type != "textarea")
        return this.type && D.indexOf(this.type) !== -1 && (e = this.type), e;
    },
    inputClasses: function() {
      var e = "form-control";
      return this.readonly && (e = "form-control-plaintext"), this.type == "color" && (e = "form-control form-control-color"), this.size && w.indexOf(this.size) !== -1 && (e = e + " form-control-" + this.size), e;
    }
  },
  watch: {
    text: function(e) {
      return this.$emit("update:modelValue", e);
    }
  },
  updated: function() {
    this.disabled ? this.$refs.input.disabled = !0 : this.$refs.input.disabled = !1, this.modelValue !== void 0 && this.text != this.modelValue && (this.text = this.modelValue);
  },
  created: function() {
    this.formId = m(this.inputType, this.id), this.text = this.modelValue, this.type == "textarea" && (this.inputTypeTag = "textarea"), this.value && (this.text = this.value), this.ariaLabel && (this.arialabel = this.ariaLabel), this.ariaDescribedby && (this.describedby = this.ariaDescribedby), this.describe && (this.describedby = this.formId + "-described");
  },
  mounted: function() {
    this.disabled && (this.$refs.input.disabled = !0), this.autofocus && this.$refs.input.focus();
  }
}, O = ["for"], U = ["id", "placeholder", "aria-describedby", "type", "readonly", "aria-label"], M = ["id", "placeholder", "aria-describedby", "aria-label", "rows", "readonly"], S = ["id"];
function B(e, s, i, f, t, d) {
  return l(), r(h, null, [
    i.label ? (l(), r("label", {
      key: 0,
      for: t.formId,
      class: "form-label"
    }, u(i.label), 9, O)) : o("", !0),
    t.inputTypeTag == "input" ? c((l(), r("input", {
      key: 1,
      id: t.formId,
      ref: "input",
      class: b(d.inputClasses),
      placeholder: i.placeholder,
      "aria-describedby": t.describedby,
      type: d.inputType,
      readonly: i.readonly,
      "onUpdate:modelValue": s[0] || (s[0] = (a) => t.text = a),
      "aria-label": t.arialabel,
      onFocusout: s[1] || (s[1] = (a) => e.$emit("focusout"))
    }, null, 42, U)), [
      [T, t.text]
    ]) : o("", !0),
    t.inputTypeTag == "textarea" ? c((l(), r("textarea", {
      key: 2,
      id: t.formId,
      ref: "input",
      class: b(d.inputClasses),
      placeholder: i.placeholder,
      "aria-describedby": t.describedby,
      "aria-label": t.arialabel,
      "onUpdate:modelValue": s[2] || (s[2] = (a) => t.text = a),
      rows: i.rows,
      readonly: i.readonly
    }, null, 10, M)), [
      [V, t.text]
    ]) : o("", !0),
    i.describe ? (l(), r("div", {
      key: 3,
      id: t.formId + "-described",
      class: "form-text"
    }, u(i.describe), 9, S)) : o("", !0)
  ], 64);
}
const re = /* @__PURE__ */ y(R, [["render", B]]);
var L = ["lg", "sm"];
const N = {
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
      return this.readonly && (e = "form-select-plaintext"), this.type == "color" && (e = "form-select form-select-color"), this.size && L.indexOf(this.size) !== -1 && (e = e + " form-select-" + this.size), e;
    }
  },
  watch: {
    text: function(e) {
      return this.$emit("update:modelValue", e);
    }
  },
  updated: function() {
    this.disabled ? this.$refs.input.disabled = !0 : this.$refs.input.disabled = !1, this.modelValue !== void 0 && (this.text = this.modelValue);
  },
  created: function() {
    this.formId = m(this.type, this.id), this.text = this.modelValue, this.value && (this.text = this.value);
  },
  mounted: function() {
    this.disabled && (this.$refs.input.disabled = !0);
  }
}, E = ["for"], j = ["id", "aria-describedby", "readonly", "multiple"], q = ["value"], A = ["id"];
function G(e, s, i, f, t, d) {
  return l(), r(h, null, [
    i.label ? (l(), r("label", {
      key: 0,
      for: t.formId,
      class: "form-label"
    }, u(i.label), 9, E)) : o("", !0),
    c(p("select", {
      id: t.formId,
      ref: "input",
      class: b(d.inputClasses),
      "aria-describedby": d.describedby,
      readonly: i.readonly,
      "onUpdate:modelValue": s[0] || (s[0] = (a) => t.text = a),
      multiple: i.multiple
    }, [
      (l(!0), r(h, null, k(i.options, (a, n) => (l(), r("option", {
        key: n,
        value: n
      }, u(a), 9, q))), 128))
    ], 10, j), [
      [C, t.text]
    ]),
    i.describe ? (l(), r("div", {
      key: 1,
      id: t.formId + "-described",
      class: "form-text"
    }, u(i.describe), 9, A)) : o("", !0)
  ], 64);
}
const de = /* @__PURE__ */ y(N, [["render", G]]), H = {
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
    this.formId = m(this.type, this.id), this.modelValue ? this.text = !0 : this.$emit("update:modelValue", !1), this.value && (this.text = !0);
  },
  mounted: function() {
    this.disabled && (this.$refs.input.disabled = !0);
  }
}, J = { class: "form-check" }, K = ["id"], P = ["for"];
function Q(e, s, i, f, t, d) {
  return l(), r("div", J, [
    c(p("input", {
      id: t.formId,
      ref: "input",
      class: b(d.inputClasses),
      type: "checkbox",
      "onUpdate:modelValue": s[0] || (s[0] = (a) => t.text = a)
    }, null, 10, K), [
      [z, t.text]
    ]),
    i.label ? (l(), r("label", {
      key: 0,
      for: t.formId,
      class: "form-check-label"
    }, u(i.label), 9, P)) : o("", !0)
  ]);
}
const ae = /* @__PURE__ */ y(H, [["render", Q]]);
var v = -1, W = function() {
  var e = "form-radio";
  return v == -1 ? (v++, e) : (v++, e + "-" + v);
};
const X = {
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
      return this.generatedIds[e] ? this.generatedIds[e] : (this.generatedIds[e] = m("radio"), this.generatedIds[e]);
    },
    IsDisabled: function(e) {
      if (this.disabled && this.disabled.indexOf && this.disabled.indexOf(e) !== -1)
        return !0;
    }
  },
  updated: function() {
    this.modelValue !== void 0 && (this.selected = this.modelValue);
  },
  created: function() {
    this.formId = m(this.type, this.id), this.name = W(), this.selected = this.modelValue, this.value && (this.selected = this.value);
  },
  mounted: function() {
  }
}, Y = ["id", "readonly", "value", "name", "disabled"], Z = ["for"];
function $(e, s, i, f, t, d) {
  return l(!0), r(h, null, k(i.options, (a, n) => (l(), r("div", {
    class: "form-check",
    key: n
  }, [
    c(p("input", {
      id: d.getRadioId(n),
      ref_for: !0,
      ref: "input",
      class: "form-check-input",
      readonly: i.readonly,
      "onUpdate:modelValue": s[0] || (s[0] = (g) => t.selected = g),
      value: n,
      name: t.name,
      type: "radio",
      disabled: d.IsDisabled(n)
    }, null, 8, Y), [
      [F, t.selected]
    ]),
    p("label", {
      for: d.getRadioId(n),
      class: "form-check-label"
    }, u(a), 9, Z)
  ]))), 128);
}
const ne = /* @__PURE__ */ y(X, [["render", $]]), ee = {
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
    this.disabled ? this.$refs.input.disabled = !0 : this.$refs.input.disabled = !1, this.modelValue && (this.text = this.modelValue);
  },
  created: function() {
    this.formId = m(this.type, this.id), this.modelValue && (this.text = this.modelValue), this.value && (this.text = this.value);
  },
  mounted: function() {
    this.disabled && (this.$refs.input.disabled = !0);
  }
}, te = ["for"], ie = ["id", "min", "max", "step"];
function se(e, s, i, f, t, d) {
  return l(), r(h, null, [
    i.label ? (l(), r("label", {
      key: 0,
      for: t.formId,
      class: "form-check-label"
    }, u(i.label), 9, te)) : o("", !0),
    c(p("input", {
      id: t.formId,
      ref: "input",
      class: b(d.inputClasses),
      type: "range",
      "onUpdate:modelValue": s[0] || (s[0] = (a) => t.text = a),
      min: i.min,
      max: i.max,
      step: i.step
    }, null, 10, ie), [
      [V, t.text]
    ])
  ], 64);
}
const oe = /* @__PURE__ */ y(ee, [["render", se]]);
export {
  ae as FormCheckbox,
  re as FormInput,
  ne as FormRadio,
  oe as FormRange,
  de as FormSelect
};
