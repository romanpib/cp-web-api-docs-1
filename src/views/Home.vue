<script>
  import ExpandableCard from '../components/ExpandableCard.vue'
  export default {
    components: {
      ExpandableCard
    },
    props: {
      cards: {
        type: Array,
        required: true,
        default: () => [
          {
            title: 'How to use this guide',
            content: 'This is the home page.'
          },
          {
            title: 'Account Requirements',
            content: 'This is the home page.'
          },
          {
            title: 'Information for institutional clients',
            content: 'This is the home page.'
          },
          {
            title: 'Comparison between CP API and TWS API',
            content: 'This is the home page.'
          }
        ]
      }
    }
  }
</script>

<template>
  <div class="container">
    <div class="content">
      <h2>Client Portal Web API Documentation</h2>
      <p>
        Interactive Brokers offers the ability to trade, monitor and manage your IB account using a single RESTful API.
      </p>
      <p>
        With the Client Portal Web API:
      </p>
      <ul id="features-list">
        <li>There is no need for special libraries to integrate with your application.</li>
        <li>You use only a small, headless gateway to connect to your application.</li>
        <li>Additional security with IP restrictions is available.</li>
        <li>Enjoy access to data that's not available through our existing APIs, including PortfolioAnalyst, Statements, Transaction History (up to 90 days) and more.</li>
      </ul>
      <ExpandableCard v-for="card in cards" :title="card.title" :content="card.content" />
    </div>
  </div>
</template>

<style>
  .container {
    display: flex;
    flex-direction: row;
    gap: 50px;
    padding-inline: 50px;
  }

  .container .content {
    width: 100%;
    max-width: 800px;
  }

  .container .latest-changes {
    width: 300px;
    max-width: 300px;
    text-align: left;
  }

  .latest-changes .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }

  #features-list {
    margin-bottom: 2rem;
    line-height: 2rem;
  }
</style>