<template>
<div class='card'>
    <div class='card-body'>
        <div class='row'>
            <div class='col-sm-4'>
                <h4 class='card-title'>{{ product.car.make }}</h4>
                <h5>{{ product.car.model }}</h5>
                <img class='img-thumbnail' :src='product.car.image' alt='Generic placeholder image'>
            </div>
            <div class='col-sm-5'>
                <img class='mr-12' :src='product.supplier.logo' :alt='product.supplier.name'>
                <ul>
                    <li><i class='fa fa-cogs'></i> {{product.car.transmission}} transmission</li>
                    <li><i class='fa fa-door-open'></i> {{product.car.doors}} doors</li>
                    <li><i class='fa fa-users'></i> {{product.car.seats}} passengers</li>
                    <li><i class='fa fa-suitcase'></i> {{product.car.luggage}} luggage</li>
                </ul>
            </div>
            <div class='col-sm-2'>
                <h5>Price</h5>
                <div>${{ product.price }} / day</div>
                <button type='button' class='btn btn-primary'>Select Offer</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Product',
    props: ['product'],
};
</script>

<style scoped>
.card {
    margin-bottom: 10px;
}
ul {
    list-style: none;
}
</style>

