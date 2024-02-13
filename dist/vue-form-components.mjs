import { openBlock as a, createElementBlock as n, Fragment as h, toDisplayString as r, createCommentVNode as o, withDirectives as c, normalizeClass as b, withKeys as T, vModelDynamic as S, vModelText as I, createElementVNode as p, renderList as k, vModelSelect as F, vModelCheckbox as C, vModelRadio as O } from "vue";
var V = 0, y = {}, x = {};
const m = function(e, i) {
  return i !== void 0 ? x[i] === void 0 ? (x[i] = 0, i) : (x[i]++, i + "-" + x[i]) : e !== void 0 ? y[e] === void 0 ? (y[e] = 0, "form-id-" + e) : (y[e]++, "form-id-" + e + "-" + y[e]) : (V++, "form-id-" + V);
};
const v = (e, i) => {
  const s = e.__vccOpts || e;
  for (const [f, t] of i)
    s[f] = t;
  return s;
};
var z = ["lg", "sm"], w = ["text", "email", "file", "password", "textarea", "color"];
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
  props: ["label", "size", "type", "placeholder", "describe", "id", "disabled", "rows", "readonly", "value", "modelValue", "aria-label", "aria-describedby", "autofocus", "validation", "autocomplete"],
  emits: ["focusout", "focus", "keyup", "update:modelValue"],
  computed: {
    inputType: function() {
      var e = "text";
      if (this.type != "textarea")
        return this.type && w.indexOf(this.type) !== -1 && (e = this.type), e;
    },
    inputClasses: function() {
      var e = "form-control";
      return this.readonly && (e = "form-control-plaintext"), this.type == "color" && (e = "form-control form-control-color"), this.size && z.indexOf(this.size) !== -1 && (e = e + " form-control-" + this.size), this.validationStatus.valid && (e = e + " is-valid"), this.validationStatus.valid == !1 && (e = e + " is-invalid"), this.$attrs.class && (e = e + " " + this.$attrs.class), e;
    }
  },
  methods: {
    focusOut: function() {
      this.Validate(), this.$emit("focusout");
    },
    Validate: function() {
      var e = this;
      this.validationTimeOut && clearTimeout(this.validationTimeOut), this.validation && typeof this.validation == "function" && (this.validationTimeOut = setTimeout(function() {
        e.validation(e.text, function(i) {
          e.validationStatus = i;
        });
      }, 300)), this.validation && (e.validationStatus = this.validation);
    },
    enterPressed: function() {
      this.$refs.input.blur();
    }
  },
  watch: {
    validation: function() {
      this.validation && typeof this.validation == "function" || (this.validationStatus = this.validation);
    },
    text: function(e) {
      if (this.Validate(), e != null)
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
}, R = ["for"], U = {
  key: 1,
  class: "invalid-feedback"
}, M = {
  key: 2,
  class: "valid-feedback"
}, B = ["id", "placeholder", "aria-describedby", "type", "readonly", "autocomplete", "aria-label"], L = ["id", "placeholder", "aria-describedby", "aria-label", "autocomplete", "rows", "readonly"], N = ["id"];
function P(e, i, s, f, t, d) {
  return a(), n(h, null, [
    s.label ? (a(), n("label", {
      key: 0,
      for: t.formId,
      class: "form-label"
    }, r(s.label), 9, R)) : o("", !0),
    t.validationStatus.valid == !1 && t.validationStatus.message != "" ? (a(), n("div", U, r(t.validationStatus.message), 1)) : o("", !0),
    t.validationStatus.valid && t.validationStatus.message != "" ? (a(), n("div", M, r(t.validationStatus.message), 1)) : o("", !0),
    t.inputTypeTag == "input" ? c((a(), n("input", {
      key: 3,
      id: t.formId,
      ref: "input",
      class: b(d.inputClasses),
      placeholder: s.placeholder,
      "aria-describedby": t.describedby,
      type: d.inputType,
      readonly: s.readonly,
      autocomplete: s.autocomplete,
      "onUpdate:modelValue": i[0] || (i[0] = (l) => t.text = l),
      "aria-label": t.arialabel,
      onFocusout: i[1] || (i[1] = (l) => d.focusOut()),
      onFocus: i[2] || (i[2] = (l) => e.$emit("focus")),
      onKeyup: i[3] || (i[3] = T((...l) => d.enterPressed && d.enterPressed(...l), ["enter"]))
    }, null, 42, B)), [
      [S, t.text]
    ]) : o("", !0),
    t.inputTypeTag == "textarea" ? c((a(), n("textarea", {
      key: 4,
      id: t.formId,
      ref: "input",
      class: b(d.inputClasses),
      placeholder: s.placeholder,
      "aria-describedby": t.describedby,
      "aria-label": t.arialabel,
      autocomplete: s.autocomplete,
      "onUpdate:modelValue": i[4] || (i[4] = (l) => t.text = l),
      rows: s.rows,
      readonly: s.readonly,
      onFocusout: i[5] || (i[5] = (l) => d.focusOut()),
      onFocus: i[6] || (i[6] = (l) => e.$emit("focus"))
    }, null, 42, L)), [
      [I, t.text]
    ]) : o("", !0),
    s.describe ? (a(), n("div", {
      key: 5,
      id: t.formId + "-described",
      class: "form-text"
    }, r(s.describe), 9, N)) : o("", !0)
  ], 64);
}
const oe = /* @__PURE__ */ v(D, [["render", P], ["__scopeId", "data-v-25a708f1"]]);
var E = ["lg", "sm"];
const K = {
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
    this.formId = m(this.type, this.id), this.text = this.modelValue, this.value && (this.text = this.value);
  },
  mounted: function() {
    this.disabled && (this.$refs.input.disabled = !0);
  }
}, j = ["for"], q = ["id", "aria-describedby", "readonly", "multiple"], A = ["value"], G = ["id"];
function H(e, i, s, f, t, d) {
  return a(), n(h, null, [
    s.label ? (a(), n("label", {
      key: 0,
      for: t.formId,
      class: "form-label"
    }, r(s.label), 9, j)) : o("", !0),
    c(p("select", {
      id: t.formId,
      ref: "input",
      class: b(d.inputClasses),
      "aria-describedby": d.describedby,
      readonly: s.readonly,
      "onUpdate:modelValue": i[0] || (i[0] = (l) => t.text = l),
      multiple: s.multiple
    }, [
      (a(!0), n(h, null, k(s.options, (l, u) => (a(), n("option", {
        key: u,
        value: u
      }, r(l), 9, A))), 128))
    ], 10, q), [
      [F, t.text]
    ]),
    s.describe ? (a(), n("div", {
      key: 1,
      id: t.formId + "-described",
      class: "form-text"
    }, r(s.describe), 9, G)) : o("", !0)
  ], 64);
}
const re = /* @__PURE__ */ v(K, [["render", H]]), J = {
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
}, Q = { class: "form-check" }, W = ["id"], X = ["for"];
function Y(e, i, s, f, t, d) {
  return a(), n("div", Q, [
    c(p("input", {
      id: t.formId,
      ref: "input",
      class: b(d.inputClasses),
      type: "checkbox",
      "onUpdate:modelValue": i[0] || (i[0] = (l) => t.text = l)
    }, null, 10, W), [
      [C, t.text]
    ]),
    s.label ? (a(), n("label", {
      key: 0,
      for: t.formId,
      class: "form-check-label"
    }, r(s.label), 9, X)) : o("", !0)
  ]);
}
const ue = /* @__PURE__ */ v(J, [["render", Y]]);
var _ = -1, Z = function() {
  var e = "form-radio";
  return _ == -1 ? (_++, e) : (_++, e + "-" + _);
};
const $ = {
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
    this.modelValue !== void 0 && this.text != this.modelValue && (this.selected = this.modelValue);
  },
  created: function() {
    this.formId = m(this.type, this.id), this.name = Z(), this.selected = this.modelValue, this.value && (this.selected = this.value);
  },
  mounted: function() {
  }
}, ee = ["id", "readonly", "value", "name", "disabled"], te = ["for"];
function ie(e, i, s, f, t, d) {
  return a(!0), n(h, null, k(s.options, (l, u) => (a(), n("div", {
    class: "form-check",
    key: u
  }, [
    c(p("input", {
      id: d.getRadioId(u),
      ref_for: !0,
      ref: "input",
      class: "form-check-input",
      readonly: s.readonly,
      "onUpdate:modelValue": i[0] || (i[0] = (g) => t.selected = g),
      value: u,
      name: t.name,
      type: "radio",
      disabled: d.IsDisabled(u)
    }, null, 8, ee), [
      [O, t.selected]
    ]),
    p("label", {
      for: d.getRadioId(u),
      class: "form-check-label"
    }, r(l), 9, te)
  ]))), 128);
}
const fe = /* @__PURE__ */ v($, [["render", ie]]), se = {
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
    this.formId = m(this.type, this.id), this.modelValue && (this.text = this.modelValue), this.value && (this.text = this.value);
  },
  mounted: function() {
    this.disabled && (this.$refs.input.disabled = !0);
  }
}, le = ["for"], de = ["id", "min", "max", "step"];
function ae(e, i, s, f, t, d) {
  return a(), n(h, null, [
    s.label ? (a(), n("label", {
      key: 0,
      for: t.formId,
      class: "form-check-label"
    }, r(s.label), 9, le)) : o("", !0),
    c(p("input", {
      id: t.formId,
      ref: "input",
      class: b(d.inputClasses),
      type: "range",
      "onUpdate:modelValue": i[0] || (i[0] = (l) => t.text = l),
      min: s.min,
      max: s.max,
      step: s.step
    }, null, 10, de), [
      [I, t.text]
    ])
  ], 64);
}
const ce = /* @__PURE__ */ v(se, [["render", ae]]);
export {
  ue as FormCheckbox,
  oe as FormInput,
  fe as FormRadio,
  ce as FormRange,
  re as FormSelect
};
