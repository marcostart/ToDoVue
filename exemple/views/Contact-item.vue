
<template>
    <div>
        <h1>C'est la page conctact</h1>
        <h2>Aire d'un rectangle</h2>
        <input type="text" placeholder="Entrez la longueur" v-model.number="long">
        <input type="text" placeholder="Entrez la largeur" v-model.number="width">
        <p>{{ aire }}</p>
    </div>
</template>

<script>

export default {
    data() {
        return{
            long:40,
            width:30
        }
    },
    computed:{
        aire() {
          return this.long * this.width
        }
        
    }
}
</script>