<template id="">
    <div class="">
        <Carousel>
            <CarouselSlide>
                Salut tout le monde
            </CarouselSlide>
            <CarouselSlide>
                Bye Bye tout le monde
            </CarouselSlide>
        </Carousel>
    </div>
</template>

<script>
    import Carousel from '../../components/carouselComp.vue'
    import CarouselSlide from '../../components/carouselSlide.vue'
    export default{
        mounted() {
            console.log(this.children)
        },
        components: {
            Carousel,
            CarouselSlide
        }
    }
</script>
