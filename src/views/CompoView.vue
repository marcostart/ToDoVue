<template id="">
    <div class="">
        <transition name="bounce" appear mode="out-in"><!-- :css="false" @enter="entre" @leave="sorti">-->
            <div v-if="visible" key="1">
                <input type="text" name="" v-model="message"><br><br>
                {{message}}
            </div>
            <div v-else key="2">
                <p>hfgqhfsgjhgsdgfjhdjfjhdg <br> fljshfjhfhgfhgdfhgdjhfgqhfsgjhgsdgfjhdjfjhdg <br> fljshfjhfhgfhgdfhgdjhfgqhfsgjhgsdgfjhdjfjhdg <br> fljshfjhfhgfhgdfhgdj</p>
            </div>
        </transition>
        <button class="button" name="button" @click="change">Change</button>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                message: "Votre texte ici :   ",
                visible: true
            }
        },
        methods: {
            change() {
                this.visible=!this.visible
            },
            entre: function(el, done) {
                (el).hide().slideDown(500, done)
            },
            leave: function(el, done) {
                (el).show().slideUp(500, done)
            }
        }
    }
</script>
<style>
    input[type="text"]{
        width: 30% ;
        border-radius: 20% ;
        border: solid black 2px;
    }
    .button{
        border: solid 1px blue;
        border-radius: 10%;
        padding: 5px;
    }

    .fade-enter-active, .fade-leave-active{
        opacity: 0;
        transform: translatey(20px);
        transition: opacity 1s, transform 1s;
    }
    .bounce-enter-active{
        animation: bounce-in .5s;
    }
    .bounce-leave-active{
        animation: bounce-out .5s;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes bounce-out {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
