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

table {
  border-collapse: collapse;
  width: 100%;
}


table th {
  text-align: left;
  padding: 0.5rem 0.5rem;
  font-size: small;
  border: 1px solid black;
  background-color: #ddd;
}

table td {
  padding: 0.5rem 0.5rem;
  padding-left: 0.5rem;
  font-size: small;
  border: 1px solid black;
}
</style>