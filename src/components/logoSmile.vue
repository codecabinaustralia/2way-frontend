<template>
  <div>
    <div class="inline-block text-white text-6xl header flex">
      <div
        :class="dark ? 'text-gray-900' : 'text-primaryGreen'"
        class="flex-shrink flex items-center ml-1 text-4xl"
      >
        <div>:</div>
      </div>
      <div
      :class="dark ? 'text-gray-900' : 'text-primaryGreen'"
        class="flex-shrink flex items-center mt-1 text-4xl"
      >
        <div>)</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['dark']
}
</script>
