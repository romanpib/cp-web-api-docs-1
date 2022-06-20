<script>
import SwaggerUI from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css'
export default {
    mounted() {
        SwaggerUI({
            spec: require('@/docs/endpoints/swagger-individual.json'),
            dom_id: '#swagger'
        })
    }
}
</script>

<template>
    <div id="swagger"></div>
</template>