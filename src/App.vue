<style lang="scss"></style>
<template>
  <header></header>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h2># Form Input</h2>

        <fieldset>
          <div><label>No Label Control</label></div>
          <pre>{{ formControl }}</pre>
          <form-input v-model="formControl.noTitle" />
          <form-input
            :label="'Input Example Small'"
            :size="'sm'"
            v-model="formControl.inputSmall"
          />
          <form-input :label="'Input Example'" />
          <form-input :label="'Input Example Large'" :size="'lg'" />
          <form-input
            :label="'Input Example with Placeholder'"
            :placeholder="'placeholder: Please provide something'"
          />
          <form-input
            :label="'Input Example with description'"
            :describe="'input describe'"
          />
          <form-input :label="'Disabled Input Example'" :disabled="true" />
          <form-input
            :label="'readonly Input Example'"
            :readonly="true"
            :value="'readonly text'"
          />
          <form-input :label="'ID Input Example'" :id="'my-custom-id'" />
          <form-input :label="'ID Input Example second'" :id="'my-custom-id'" />
          <form-input
            :label="'Text area'"
            :type="'textarea'"
            v-model="formControl.textarea"
            :rows="5"
          />
        </fieldset>
        <fieldset>
          <pre>{{ formControl }}</pre>
          <form-input
            :label="'Input file'"
            :type="'file'"
            v-model="formControl.file"
          />
          <form-input
            :label="'Input Color'"
            :type="'color'"
            v-model="formControl.color"
          />
        </fieldset>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h2># Form Select</h2>
        <fieldset>
          <pre>{{ formControl }}</pre>
          <form-select
            :label="'select array'"
            :size="'sm'"
            :options="formSelectOptions.array"
            v-model="formControl.select"
          />
          <form-select
            :label="'select Color'"
            :size="'lg'"
            :options="formSelectOptions.array"
            v-model="formControl.select"
          />
          <form-select
            :label="'select Color'"
            :disabled="true"
            :options="formSelectOptions.array"
            v-model="formControl.select"
          />
          <form-select
            :describe="'select Color'"
            :options="formSelectOptions.array"
            v-model="formControl.select"
          />
          <form-select
            :describe="'select Color'"
            :multiple="true"
            :options="formSelectOptions.array"
            v-model="formControl.selectMultiple"
          />
        </fieldset>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      formControl: {
        noTitle: "no title",
        inputSmall: "",
        textarea: "some text",
        file: "",
        color: "",
        select: 2,
        selectMultiple: [1, 2],
      },
      formSelectOptions: {
        array: ["test", "test 2 ", "test 3"],
      },
    };
  },
  watch: {},
  mounted() {},
};
</script>
