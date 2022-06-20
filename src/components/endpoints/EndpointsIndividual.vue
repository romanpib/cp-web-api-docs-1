<script>
import SwaggerUI from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css'
export default {
    mounted() {
        SwaggerUI({
            spec: require('@/components/endpoints/swagger.json'),
            dom_id: '#swagger'
        })
    }
}
</script>

<template>
    <div id="swagger"></div>
</template>