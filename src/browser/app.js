import Vue from 'vue';
import Happy from './Happy.vue';
import InstantSearch from 'vue-instantsearch';

Vue.use(InstantSearch);

new Vue({
    el: '#app-root',
    render: h => h(Happy),
});