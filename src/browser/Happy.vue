<template>
<div class='row'>
<div id="app" class="container">
    <ais-index
        :appId="APP_ID"
        :apiKey="API_KEY"
        index-name="car_index">
        <div class="row">
            <FilterView />
            <div class="col-sm-9">
                <ais-results>
                    <template slot-scope="{ result }">
                        <Product :product='result' />
                    </template>
                </ais-results>
                <ais-no-results />
            </div>
        </div>
    </ais-index>
</div>
</div>
</template>

<script>
import Product from './components/Product.vue';
import FilterView from './components/Filter.vue';

export default {
    name: 'app',
    data() {
        return { APP_ID: APP_ID, API_KEY: API_KEY }
    },
    components: {
        Product,
        FilterView
    }
};
</script>

<style>
#app {
    padding-top: 40px;
}
</style>
