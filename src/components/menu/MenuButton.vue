<template>

    <div class="floating-button">
        <a href="#" @click="$emit('clicked')" title="View my recent projects">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </a>
    </div>

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
    }

    .floating-button a {
        color: #F9CE06;
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        line-height: 55px;
        font-size: 25px;
        animation: plus-out 0.3s;
        transition: all 0.3s;
    }
    .floating-button a:hover {
        color: #333;
    }
    .floating-button:hover {
        background-color: #F9CE06;
    }

</style>