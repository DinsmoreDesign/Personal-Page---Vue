<template>

    <div class="row skills">
        <div class="four columns">
            <h1>{{ title }}</h1>
        </div>
        <div class="seven columns offset-by-one">
            <span v-for="(skill, index) in skills" :key="index">
                {{ skill }}
            </span>
        </div>
    </div>

</template>




<script>

    export default {

        props: {
            title: {
                type: String,
                required: true
            },
            skills: {
                type: Array,
                required: true
            }
        }

    }

</script>




<style lang="scss" scoped>

    .skills {
        border-top: 1px solid #F9CE06;
        padding: 35px 0;
    }
    
    .skills span {
        padding: 5px 10px;
        background-color: #F9CE06;
        color: #ffffff;
        margin: 0 20px 20px 0;
        display: inline-block;
        text-align: center;
    }

</style>