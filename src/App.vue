<style lang="scss"></style>
<template>
<header>
</header>
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <h2> # Form Components</h2>
      
      <fieldset>
        <div><label>No Label Control</label></div>
        <pre>{{formControl}}</pre>
      <FormControl v-model="formControl.noTitle"/>
      <FormControl :label="'Input Example Small'" :size="'sm'" v-model="formControl.inputSmall"/>
      <FormControl :label="'Input Example'" />
      <FormControl :label="'Input Example Large'" :size="'lg'"/>
      <FormControl :label="'Input Example with Placeholder'" :placeholder="'placeholder: Please provide something'"/>
      <FormControl :label="'Input Example with description'" :describe="'input describe'"/>
      <FormControl :label="'Disabled Input Example'" :disabled="true"/>
      <FormControl :label="'readonly Input Example'" :readonly="true" :value="'readonly text'"/>
      <FormControl :label="'ID Input Example'" :id="'my-custom-id'"/>
      <FormControl :label="'ID Input Example second'" :id="'my-custom-id'"/>
      <FormControl :label="'Text area'" :type="'textarea'" v-model="formControl.textarea" :rows="5"/>
      </fieldset>
    </div>
  </div>
</div>
</template>
<script setup>
</script>
<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      formControl: {
        noTitle: "no title",
        inputSmall: "",
        textarea: "some text"
      }
    };
  },
  watch: {
  },
  mounted() {
  },
};
</script>
