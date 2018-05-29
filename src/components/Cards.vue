<template>
  <div>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
    <div class="flex justify-center my-2">
      <div class="w-full max-w-sm rounded shadow-lg bg-white">
        <img src="https://dummyimage.com/600x200/000/00ffd5.png" alt="Text alternatiu"class="rounded-t w-full">
        <div class="px-6 py-4">
          <div class="font-bold text-xl">Títol de la card</div>
          <p class="mt-4 text-grey-darker text-bas">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores, commodi cum distinctio hic labore obcaecati odit sint! Ab adipisci at facilis illum natus nemo odit perferendis perspiciatis ullam veniam!</p>
        </div>
        <div class="px-6 py-4">
          <span class="bg-grey-lighter rounded-full px-3 py-1 text-sm text-grey-darkest">#cool</span>
          <span class="bg-grey-lighter rounded-full px-3 py-1 text-sm text-grey-darkest">#wonderful</span>
          <span class="bg-grey-lighter rounded-full px-3 py-1 text-sm text-grey-darkest">#guau</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Cards'
}
</script>
