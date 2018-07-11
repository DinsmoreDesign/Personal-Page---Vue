<template>
    
    <div class="contact">
        <div class="container">
            <div class="row">

                <div class="columns six">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i> {{ email }}
                </div>

                <div class="columns six">
                    <i class="fa fa-phone" aria-hidden="true"></i> {{ phone }}
                </div>

            </div>
        </div>
    </div>

</template>




<script>

    export default {

        props: {
            email: {
                type: String,
                required: true
            },
            phone: {
                type: String,
                required: true
            }
        }

    }

</script>




<style lang="scss" scoped>

    .contact {
        border-top: 1px solid #F9CE06;
        padding: 35px 0;
    }

    .contact {
        text-align: center;
        background: rgba(249,206,6, .2);
        font-size: 1.75rem;
    }
    
    .contact i {
        font-size: 2rem;
        color: #F9CE06;
        padding-right: 1rem;
    }

</style>