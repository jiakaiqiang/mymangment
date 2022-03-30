<template>
  <svg :class="svgClass" aria-hidden="true">
 <use :xlink:href="iconName"/>
 </svg>
</template>

<script lang="ts">
import { defineComponent} from "vue"

export default defineComponent({
    props:{
        iconName:{
            type:String,
            default:""
        },
        svgClass:{
            type:String,
            default:""
        }
    },
  setup(){

  }
})
</script>

<style>

</style>