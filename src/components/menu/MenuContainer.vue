<template>

    <div class="overlay">
        <a class="closebtn" @click="closeMenu()">&times;</a>
        <div class="overlay-content">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>
    </div>

</template>




<script>

    export default {

        created() {

            document.body.style.overflow = "hidden";

        },
        methods: {

            closeMenu() {

                this.$emit('close')

                document.body.style.overflow = "auto";

            }

        }
        
    }

</script>





<style lang="scss" scoped>

    @import 'flexboxgrid';

    .overlay {
        height: 100%;
        width: 100%;
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        background-color: #FFF;
        overflow-x: hidden;
        transition: 0.5s;
    }

    .overlay-content {
        position: relative;
        margin: 90px;
    }

    .overlay a {
        padding: 8px;
        text-decoration: none;
        font-size: 36px;
        color: #333;
        display: block;
        transition: 0.3s;
    }

    .overlay a:hover, .overlay a:focus {
        color: #CCC;
    }

    .overlay .closebtn {
        cursor: pointer;
        position: fixed;
        top: 30px;
        right: 30px;
        font-size: 60px;
        line-height: 1;
    }

    @media screen and (max-height: 450px) {

        .overlay a {font-size: 20px}
        .overlay .closebtn {
            font-size: 40px;
            top: 15px;
            right: 15px;
        }

        .overlay-content {

            margin: 45px;

        }

    }

</style>