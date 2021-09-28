<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        :disabled="isDisableOptionButton"
        color="primary"
        v-bind="attrs"
        v-on="on"
        icon
        @click="() => {}"
      >
        <v-icon>mdi-file-document-outline</v-icon>
      </v-btn>
    </template>
    <span>Minutas</span>
  </v-tooltip>
</template>
<script>
export default {
    name:'CButtonIcon'
}
</script>
