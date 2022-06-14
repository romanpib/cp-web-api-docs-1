<script>
import BaseView from './BaseView.vue'
import ExpandableCard from '@/components/ExpandableCard.vue'
import ResourceLink from '@/components/ResourceLink.vue'
import Warning from '@/components/Warning.vue'
export default {
  components: {
    BaseView,
    ExpandableCard,
    ResourceLink,
    Warning
  },
  data() {
    return {
      cards: [
        {
          title: 'Step One - Ensure your session is authenticated',
          content: 'This is the home page.'
        },
        {
          title: 'Step Two - Try calling other endpoints',
          content: 'In order to use the API, and IBKR PRO account is required. IBKR PRO accounts are free and can be created in just a few minutes.'
        },
        {
          title: 'Step Three - Generate request logs',
          content: 'This is the home page.'
        },
        {
          title: 'Get in touch with us',
          content: 'This is the home page.'
        }
      ],
      resources: [
        {
          title: 'IBKR Knowledge Base',
          url: 'https://www.ibkr.com/knowledge-base',
          description: 'this is an example description'
        },
        {
          title: 'Client Portal Video Tutorials',
          url: 'https://www.ibkr.com/knowledge-base',
          description: 'A collection of video tutorials allowing new clients to get familiar with the Client Portal website'
        }
      ]
    }
  }
}
</script>

<template>
  <base-view>
    <template #content>
      <h2>Support</h2>
      <warning>
        <span>For common integration questions, please see the <router-link to="/workflows"
            style="color: black; font-weight: bold;">workflows</router-link> section</span>
      </warning>
      <p>
        Before reaching out to us, please try the following troubleshooting steps:
      </p>
      <expandable-card v-for="card in cards" v-bind="card" />
    </template>
    <template #aside>
      <h2>Resources</h2>
      <ResourceLink v-for="resource in resources" v-bind="resource" />
    </template>
  </base-view>
</template>

<style>
.features-list {
  margin-bottom: 2rem;
  line-height: 2rem;
}
</style>