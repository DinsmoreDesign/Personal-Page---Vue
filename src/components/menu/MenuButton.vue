<template>

        <button class="floating-button" href="#" @click.prevent="$emit('clicked')" title="View my recent projects">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </button>

</template>




<script>

    export default {


        
    }

</script>





<style lang="scss" scoped>

    .floating-button {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: #333;
        position: fixed;
        bottom: 30px;
        right: 30px;
        cursor: pointer;
        border: none;
        color: #F9CE06;
        line-height: 55px;
        font-size: 25px;
        animation: plus-out 0.3s;
        transition: all 0.3s;

        &:hover {
            color: #333;
            background-color: #F9CE06;
        }

    }

</style>