<script setup>
  import Warning from '@/components/Warning.vue';
</script>

<template>
  <warning>
    <p>
      This page is under construction. Please check back soon.
    </p>
  </warning>
</template>

<style>
.action-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.action-buttons a {
  font-weight: normal;
  border: 1px;
  padding: 1rem;
  border-style: solid;
  border-color: #db1222;
  background-color: white;
  color: #db1222;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  font-size: medium;
}

.action-buttons a:hover {
  background-color: #db1222;
  color: white;
}

.account {
  width: 233px;
}
</style>