<template>
  <div v-if="type === 'checkbox'" class="form-check">
    <input class="form-check-input" :type="type" :checked="value" :id="`checkbox-${stringToKebabCase(label)}`" @input="$emit('input', $event.target.checked)" />
    <label class="form-check-label" :for="`checkbox-${stringToKebabCase(label)}`">{{ label }}</label>
  </div>
  <div v-else class="form-group">
    <label v-if="label" :class="{ 'text-danger': error }">{{ label }}</label>
    <select v-if="type === 'select'" :value="value" :class="{ 'is-invalid': error }" class="form-control" @input="$emit('input', $event.target.value)">
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>
    <textarea v-else-if="type === 'textarea'" :value="value" :class="{ 'is-invalid': error }" class="form-control" :placeholder="placeholder" @input="$emit('input', $event.target.value)"></textarea>
    <input v-else-if="type === 'file'" :type="type" :class="{ 'is-invalid': error }" class="form-control-file" :placeholder="placeholder" @change="$emit('fileSelected', $event.target.files[0])" />
    <input v-else :value="value" :type="type" :class="{ 'is-invalid': error }" class="form-control" :placeholder="placeholder" :min="min" :max="max" @input="$emit('input', $event.target.value)" />
    <p v-if="error" class="text-danger">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String | Number
    },
    type: {
      type: String,
      required: true
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    error: {
      type: String
    },
    min: {
      type: String | Number
    },
    max: {
      type: String | Number
    },
    options: {
      type: Array
    }
  }
}
</script>
