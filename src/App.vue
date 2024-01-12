<style lang="scss">

</style>
<template>
  <header></header>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h2># Form Input</h2>

        <form>
          <div><label>No Label Control</label></div>
          <pre>{{ formControl }}</pre>
          <FormInput v-model="formControl.noTitle" />
          <FormInput
            label="Input Example Small"
            size="sm"
            v-model="formControl.inputSmall"
          />
          <FormInput label="Input Example" />
          <FormInput label="Input Example Large" size="lg" />
          <FormInput
            label="Input Example with Placeholder"
            placeholder="placeholder: Please provide something"
          />
          <FormInput
            label="Input Example with description"
            describe="input describe"
          />
          <FormInput label="Disabled Input Example" :disabled="true" />
          <FormInput label="Extra class example" :class="{'text-danger': true}" />
          <FormInput label="Validation example"  :validation="validateInput" />
          <FormInput
            label="readonly Input Example"
            :readonly="true"
            value="readonly text"
          />
          <FormInput label="ID Input Example" id="my-custom-id" />
          <FormInput label="ID Input Example second" id="my-custom-id" />
          <FormInput
            :label="'Text area'"
            :type="'textarea'"
            v-model="formControl.textarea"
            :rows="5"
          />
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <FormInput placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </form>
        <fieldset>
          <pre>{{ formControl }}</pre>
          <FormInput
            :label="'Input file'"
            :type="'file'"
            v-model="formControl.file"
          />
          <FormInput
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
          <pre>{{ select }}</pre>
          <FormSelect
            :label="'select array'"
            :size="'sm'"
            :options="formSelectOptions.array"
            v-model="select.select1"
          />
          <FormSelect
            :label="'select Color'"
            :size="'lg'"
            :options="formSelectOptions.array"
            v-model="select.select1"
          />
          <FormSelect
            :label="'select Color'"
            :disabled="true"
            :options="formSelectOptions.array"
            v-model="select.select1"
          />
          <FormSelect
            :describe="'select Object'"
            :options="formSelectOptions.object"
            v-model="select.select2"
          />
          <FormSelect
            :describe="'select Color'"
            :multiple="true"
            :options="formSelectOptions.array"
            v-model="select.selectMultiple"
          />
          <FormSelect
            :describe="'select Color'"
            :multiple="true"
            :options="formSelectOptions.object"
            v-model="select.selectMultiple2"
          />
        </fieldset>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h2># Form Checkbox</h2>
        <fieldset>
          <pre>{{ checkbox }}</pre>
          <FormCheckbox v-model="checkbox.checkbox1" />
          <span>Some text</span>
          <FormCheckbox v-model="checkbox.checkbox2" class="form-switch" />
          <FormCheckbox v-model="checkbox.checkbox3" class="btn-check" />

          <FormCheckbox
            :label="'select true/false'"
            v-model="checkbox.checkbox4"
          />

          <FormCheckbox
            :label="'select true/false'"
            :disabled="true"
            v-model="checkbox.checkbox1"
          />
          <div>
            <FormCheckbox
              :label="'select true/false'"
              v-model="checkbox.checkbox2"
              class="form-check-inline"
            />

            <FormCheckbox
              :label="'select true/false'"
              :disabled="true"
              class="form-check-inline"
              v-model="checkbox.checkbox3"
            />
          </div>
          <div>
            <FormCheckbox
              :label="'select true/false'"
              v-model="checkbox.checkbox4"
              class="form-switch"
            />

            <FormCheckbox
              :label="'select true/false'"
              :disabled="true"
              class="form-switch"
              v-model="checkbox.checkbox1"
            />
          </div>
        </fieldset>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h2># Form Radio</h2>
        <fieldset>
          <pre>{{ formRadio }}</pre>
          <div class="form-control">
            <FormRadio
              :options="formRadioOptions.array"
              v-model="formRadio.radio1"
            />
          </div>
          <div class="form-control">
            <FormRadio
              :options="formRadioOptions.object"
              v-model="formRadio.radio2"
            />
          </div>
          <div class="form-control">
            <FormRadio
              :options="formRadioOptions.object"
              v-model="formRadio.radio3"
              :disabled="['test2']"
            />
          </div>
          <div class="form-control">
            <FormRadio
              :options="formRadioOptions.array"
              v-model="formRadio.radio4"
            />
          </div>
          <div class="form-control">
            <FormRadio
              :disabled="[0, 3]"
              :options="formRadioOptions.array"
              v-model="formRadio.radio5"
            />
          </div>
        </fieldset>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h2># Form Range</h2>
        <fieldset>
          <pre>{{ formRange }}</pre>
          <div class="form-control">
            <FormRange
              v-model="formRange.range1"
            />
          </div>
          <div class="form-control">
            <FormRange
              :label="'range 2'"
              v-model="formRange.range2"
            />
          </div>
          <div class="form-control">
            <FormRange
              :label="'range 3'"
              v-model="formRange.range3"
              :disabled="true"
            />
          </div>
          <div class="form-control">
            <FormRange
              :label="'range 4'"
              v-model="formRange.range4"
              :min="0"
              :max="1"
              :step="0.1"
            />
          </div>
          <div class="form-control">
            <FormRange
              :label="'range 5'"
              v-model="formRange.range5"
              :min="0"
              :max="10"
              :step="1"
            />
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<script>
import {FormInput,
  FormSelect,
  FormCheckbox,
  FormRadio,
  FormRange} from "../index"
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  components: {
    FormInput,
    FormSelect,
    FormCheckbox,
    FormRadio,
    FormRange
  },
  data() {
    return {
      formControl: {
        noTitle: "no title",
        inputSmall: "",
        textarea: "some text",
        file: "",
        color: "",
        checkbox: false,
      },
      select: {
        select1: 2,
        select2: "test2",
        selectMultiple: [1, 2],
        selectMultiple2: ["test1", "test3"],
      },
      checkbox: {
        checkbox1: 0,
        checkbox2: 1,
        checkbox3: true,
        checkbox4: false,
      },

      formRadio: {
        radio1: 0,
        radio2: "test2",
        radio3: "test3",
        radio4: 3,
        radio5: -1,
      },
      formSelectOptions: {
        array: ["test", "test 2 ", "test 3", "test 4"],
        object: {
          test1: "test 1",
          test2: "test 2",
          test3: "test 3",
        },
      },
      formRadioOptions: {
        array: ["test", "test 2 ", "test 3", "test 4"],
        object: {
          test1: "test 1",
          test2: "test 2",
          test3: "test 3",
        },
      },
      formRange: {
        range1: 0,
        range2: 100,
        range3: 0.5,
        range4: 1,
        range5: 2,
      },
    };
  },
  watch: {},
  methods: {
    validateInput: function(value, callback){
      console.log('validateInput', this, value)
      if(value !== '111') {
        return callback({
          valid: false,
          message: "set 111"
        })
      }
      return callback({
        valid:true,
        message: 'horay'
      })
    }
  },
  mounted() {},
};
</script>
