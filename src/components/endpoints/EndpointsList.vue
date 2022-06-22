<script>
import SwaggerUI from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css'
export default {
    props: {
        accountType: {type: String, required: true}
    },
    methods: {
        renderSwagger() {
            SwaggerUI({
                spec: require(`@/docs/endpoints/swagger-${this.accountType}.json`),
                dom_id: '#swagger'
            });
        }
    },
    updated() {
        this.renderSwagger();
    },
    mounted() {
        this.renderSwagger();
    }
}
</script>

<template>
    <div id="swagger"></div>
</template>

<style></style>