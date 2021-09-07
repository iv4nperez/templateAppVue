<template>
    <v-btn
        style="border-radius:0px"
        color="primary"
        :elevation="elevation"
        :icon="icon"
        :outlined="outlined"
        :block="block"
        :disabled="disabled"
        :large="large"
        :loading="loading"
        :small="small"
        v-bind="$attrs"
    >
        <v-icon v-if="showIcon && left" class="mr-4">{{ claveIcon }}</v-icon>
        <slot />
        <v-icon v-if="showIcon && right" class="mr-4">{{ claveIcon }}</v-icon>
    </v-btn>
</template>
<script>

export default {
    name: 'CButton',
    props:{
        elevation:{
            type: [String, Number],
            default: '1'
        },
        icon: {
            type: Boolean,
            default: false
        },
        outlined:{
            type: Boolean,
            default: false
        },
        block:{
            type: Boolean,
            default: false
        },
        disabled:{
            type: Boolean,
            default: false
        },
        large: {
            type: Boolean,
            default: false
        },
        loading:{
            type: Boolean,
            default: false
        },
        small:{
            type: Boolean,
            default: false
        },
        showIcon:{
            type: Boolean,
            default: false
        },
        claveIcon:{
            type: String,
            default: ''
        },
        left:{
            type: Boolean,
            default: true,
        },
        right:{
            type: Boolean,
            default: false,
        }
    },
}
</script>