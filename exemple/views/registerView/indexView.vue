<template>
        <div class="flex flex-col w-1/2 mx-auto mt-20 py-10 border border-2 border-blue rounded-lg">
        <h1 class="text-2xl text-blue ">Registration</h1>
        <form class="flex flex-col items-center " action="">
            <input class=" w-1/2 my-10 border p-3 rounded-full" type="text" placeholder="username" v-model="username">
            <input class="w-1/2 my-10 border p-3 rounded-full " type="password" placeholder="password" v-model="password">
            <input class="w-1/2 my-10 border p-3 rounded-full " type="email" placeholder="userlambda@gmail.com" v-model="email">
            <div class="flex flex row">
                <button class="border border-blue p-4 bg-white rounded-lg text-blue mx-2">Register</button>
            </div>
        </form>
        </div>
</template>