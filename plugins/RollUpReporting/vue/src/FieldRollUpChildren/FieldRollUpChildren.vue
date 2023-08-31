<!--
  Copyright (C) InnoCraft Ltd - All rights reserved.

  NOTICE:  All information contained herein is, and remains the property of InnoCraft Ltd.
  The intellectual and technical concepts contained herein are protected by trade secret or
  copyright law. Redistribution of this information or reproduction of this material is strictly
  forbidden unless prior written permission is obtained from InnoCraft Ltd.

  You shall use this code only in accordance with the license agreement obtained from
  InnoCraft Ltd.

  @link https://www.innocraft.com/
  @license For license details see https://www.innocraft.com/license
-->

<template>
  <div>
    <ManageRollUp
      :name="name"
      :model-value="modelValue"
      @update:model-value="onChange($event)"
      v-bind="uiControlAttributes"
      :id="name"
    />
    <label :for="name" class="active" v-html="$sanitize(title)"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ManageRollUp from '../ManageRollUp/ManageRollUp.vue';

export default defineComponent({
  props: {
    name: String,
    uiControlAttributes: Object,
    modelValue: Array,
    title: String,
  },
  components: {
    ManageRollUp,
  },
  inheritAttrs: false,
  methods: {
    onChange(newValue: unknown[]) {
      this.$emit('update:modelValue', newValue);
    },
  },
});
</script>
