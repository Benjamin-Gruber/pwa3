<template>
  <div id="app" class="container d-flex flex-column justify-content-center align-items-center mt-5">
    <h3>Willkommen bei der Service Worker Untersuchung!</h3>
    <p>hallo</p>
    <ButtonGet @get="fetchData"></ButtonGet>
    <CardView :employees="employees" @del="delEmployee"></CardView>
  </div>
</template>

<script>
import axios from 'axios';
import ButtonGet from '@/components/ButtonGet.vue';
import CardView from '@/components/CardView.vue';

export default {
  name: 'app',
  components: {
    ButtonGet,
    CardView,
  },
  data() {
    return {
      employees: [],
    };
  },

  created() {
    document.addEventListener('swUpdated', this.updateAvailable, { once: true });
  },
  methods: {
    async fetchData() {
      try {
        const { data } = await axios({
          url: '/employees',
          method: 'GET',
        });
        this.employees = data;
      } catch (error) {
        console.error(error);
      }
      console.log('fetchData called');
    },

    async delEmployee(e) {
      try {
        await axios({
          url: `/employees/${e.id}`,
          method: 'DELETE',
        });
        this.fetchData();
      } catch (error) {
        console.error(error);
      }
      console.log('delEmployee called');
    },
  },
};
</script>

<style></style>
