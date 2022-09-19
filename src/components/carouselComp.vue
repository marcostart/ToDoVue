<template id="">
    <div class="">
        <slot></slot>
    </div>
</template>

<script>
    export default{
        name: "carouselComp",
        data() {
            console.log(this.$children)
            return{
                index: 0,
                slides: this.$children
            }
        },
        mounted() {
            //this.slides=this.$children
            console.log(this.children)
            //this.slides.forEach((slide, i) => {
            //    slide.index=i
            //})
    }
}
</script>
