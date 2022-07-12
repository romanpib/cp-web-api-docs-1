<script>
export default {
    props: {
        id: { type: String, required: true },
        title: { type: String, required: true },
        content: { type: String, required: true }
    }
}
</script>

<template>
    <h4 :id="`${this.id}`">{{ this.title }}</h4>
    <component :innerHTML="this.content" />
</template>

<style>
div.code {
  width: 100%;
  margin-block: 0.5rem;
  background-color: black;
  padding: 1rem 1.5rem;
  word-break: break-all;
}

code {
  color: white;
}

samp {
    color: white;
}
</style>