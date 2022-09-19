<template>
<body>
        <div class="flex flex-col w-1/2 mx-auto mt-20 py-10 border border-2 border-blue rounded-lg">
        <h1 class="text-2xl text-blue ">Connexion</h1>
        <form class="flex flex-col items-center " action="">
            <input class=" w-1/2 my-10 border p-3 rounded-full" type="text" placeholder="username" v-model="username">
                {{ username }}
            <input class="w-1/2 my-10 border p-3 rounded-full " type="password" placeholder="password" v-model="password">
            <div class="flex flex row">
                <router-link to="/register" class="border border-blue p-4 bg-blue rounded-lg text-white mx-2 no-underline">Register</router-link>
                <button class="border border-blue p-4 bg-white rounded-lg text-blue mx-2">Connexion</button>
            </div>
        </form>
        </div>
    </body>
</template>

<script>
export default {
    data(){
        return{
            username:'',
            password:''
        }
    }
    
}
</script>

<style>
body{
    background-image: url('../../assets/13.jpg');
    background-size: 500px 800px;
}
</style>