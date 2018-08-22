<template>
    <div class="col-sm-3">
        <ais-price-range attribute-name="price" :classNames="{'ais-price-range__input': 'form-control'}">
            <h6 slot="header">Price</h6>
        </ais-price-range>
        <ais-refinement-list attribute-name="car.transmission" :classNames="{'ais-refinement-list__count': 'badge badge-secondary', 'ais-refinement-list__item': 'checkbox'}">
            <h6 slot="header">Transmission</h6>
        </ais-refinement-list>
        <ais-refinement-list attribute-name="car.fuelType" :classNames="{'ais-refinement-list__count': 'badge badge-secondary', 'ais-refinement-list__item': 'checkbox'}">
            <h6 slot="header">Fuel Type</h6>
        </ais-refinement-list>
        <ais-refinement-list attribute-name="supplier.name" :classNames="{'ais-refinement-list__count': 'badge badge-secondary','ais-refinement-list__item': 'checkbox'}">
            <h6 slot="header">Supplier</h6>
        </ais-refinement-list>
        <ais-refinement-list attribute-name="car.doors" :classNames="{'ais-refinement-list__count': 'badge badge-secondary','ais-refinement-list__item': 'checkbox'}">
            <h6 slot="header">Doors</h6>
        </ais-refinement-list>
        <ais-refinement-list attribute-name="car.insurance" :classNames="{'ais-refinement-list__count': 'badge badge-secondary','ais-refinement-list__item': 'checkbox'}">
            <h6 slot="header">Insurance Type</h6>
        </ais-refinement-list>
    </div>
</template>

<script>
export default {
    name: 'FilterView'
};
</script>

<style>
h6 {
    font-size: 0.9rem;
    text-decoration: underline;
}

.form-control {
    width: 35%;
    display: inline-block;
    margin-bottom: 10px;
}

.ais-refinement-list {
    margin-bottom: 10px;
}
</style>
