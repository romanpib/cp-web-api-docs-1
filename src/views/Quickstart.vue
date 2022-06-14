<script>
import BaseView from './BaseView.vue'
import DownloadCard from '@/components/DownloadCard.vue'
import QuickstartIndividual from '@/components/QuickstartIndividual.vue'
import QuickstartInstitutional from '@/components/QuickstartInstitutional.vue'
export default {
  components: {
    BaseView,
    DownloadCard,
    QuickstartIndividual,
    QuickstartInstitutional
  },
  data() {
    return {
      activeTab: 'QuickstartIndividual',
      downloads: [
        {
          title: 'Gateway',
          content: 'Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper. Maecenas id fermentum sem.',
          url: 'https://www.interactivebrokers.com/en/?f=%2Fen%2Ftrading%2Fibgateway-stable.php'
        },
        {
          title: 'OLD CP WEB API',
          url: 'https://interactivebrokers.github.io/cpwebapi/index.html',
          content: 'Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper.',
        },
        {
          title: 'TWS API',
          content: 'Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper. Maecenas id fermentum sem. Etiam egestas lorem ac elit iaculis dignissim.',
          url: 'https://interactivebrokers.github.io/tws-api/introduction.html'
        },
        {
          title: 'Java',
          content: 'Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper. Maecenas id fermentum sem. Etiam egestas lorem ac elit iaculis dignissim.',
          url: 'https://java.com/en/'
        },
        {
          title: 'grgaresgh5wbtresh',
          content: 'Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper. Maecenas id fermentum sem. Etiam egestas lorem ac elit iaculis dignissim.',
          url: 'https://interactivebrokers.github.io/tws-api/introduction.html'
        },
      ]
    }
  },
}


</script>

<template>
  <BaseView>
    <template #content>
      <div class="page_header">
      <h2>Quickstart Guide</h2>
      <div class="toggle_switch">
        <button class="QuickstartIndividualTab" @click="activeTab = 'QuickstartIndividual'">Individual</button>
        <button class="QuickstartInstitutionalTab" @click="activeTab = 'QuickstartInstitutional'">Institutional</button>
        </div>
      </div>
      

  <keep-alive>
    <component :is="activeTab"></component>
  </keep-alive>
    </template>
    <template #aside>
      <div class="download-header">
        <h2>Downloads</h2>
      </div>
      <DownloadCard v-for="download in downloads" v-bind="download" />
    </template>
  </BaseView>
</template>

<style>
.page_header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  
}

.toggle_switch{
  margin: 0;
  padding: 0;
  background-color: #C4C4C4;
  border-radius: 40px;
  width: 200px;
  height: 30px;
}

.QuickstartIndividualTab{
  padding: 0px;
  background-color: #344D78;
  color: white;
  opacity: 1;
  border-radius: 40px;
  height: 30px;
  width: 100px;
  font-weight: bold;
  border: none;
  cursor: pointer;
}
.QuickstartInstitutionalTab{
  padding: 0px;
  background-color: #C4C4C4;
  opacity: 1;
  border-radius: 40px;
  height: 30px;
  width: 100px;
  color: grey;
  border: none;
  cursor: pointer;
}



.QuickstartInstitutionalTab:focus{
  background-color: #344D78;
  color: white;
  font-weight: bold;
}

</style>