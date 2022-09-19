<template>
     <body>
        <div class="flex flex-row  justify-between m-5 ">
            <img class=" w-16 " src="../../assets/tr.png" alt="Image - logo">
            <div class="flex flex-row  items-center text-xl">
                <router-link  class="mx-2 no-underline text-blue" to="/login">Connexion</router-link>
                <router-link class="mx-2 no-underline text-blue" to="/register">Registration</router-link>
            </div>
        </div>
        <div>
                <input id="inp" class=" w-1/4 my-10 border p-3 rounded-full" type="search" placeholder="search books..." v-model="search">
        </div>
       <!-- <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 ">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"  aria-label="Slide 3"></button>
            </div>
                <div class="carousel-inner relative w-full overflow-hidden">
                    <div class="carousel-item active relative float-left w-full">
                    <img
                        src="../../assets/4.jpg"
                        class="block w-full"
                        alt="..."
                    />
                    <div class="carousel-caption hidden md:block absolute text-center">
                        <h5 class="text-xl">First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                    <img
                        src="../../assets/6.jpg"
                        class="block w-full"
                        alt="..."
                    />
                    <div class="carousel-caption hidden md:block absolute text-center">
                        <h5 class="text-xl">Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                    <img
                        src="../../assets/7.jpg"
                        class="block w-full"
                        alt="..."
                    />
                    <div class="carousel-caption hidden md:block absolute text-center">
                        <h5 class="text-xl">Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                    </div>
                </div>
                <button
                    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
             </div>-->
                            
        </body>
        <footer>
            <p>Copyright</p>
        </footer>
</template>


<style>
body{
    margin: 0px;
    padding: 0px;
   background-image:url('../../assets/9.jpg');
   /*height: 1000px;*/
   }
 #inp:hover{
     background-image: url('../../assets/search.png');
     background-size: 20px;
     background-repeat: no-repeat;
     background-position: 10px 12px;
     padding-inline-end:  44px; 
     padding-inline-start: 40px;
     color: blue;
 }  
 #read{
     margin-top: 100px;
     margin-left: -80%;
     /*background-color: aqua;*/
 }  
</style>