<template>
<div class='row'>
<div id="app" class="container">
    <ais-index
        appId="67DCUGBIXL"
        apiKey="62ae78f3757533bc7202b4730189cf29"
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
