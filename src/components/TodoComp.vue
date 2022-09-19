<template id="">
    <div class="container">
        <div class="boite">
            <header class="header">
                <h1 class="titre">ToDo</h1><br>
                <div class="row" >
                    <input class="col-6 offset-3" v-model="action" type="text" name="" placeholder="Insérer une nouvelle tâche" @keyup.enter="addNew">
                </div>
            </header >
            <div class="row" style="border: solid 2px red; text-align: left; background-color: rgb(200,200,200); margin-top: 20px;">
                <div class="col-6 offset-3">
                    <input type="checkbox" v-model="cocher" name="" value="" >
                    {{ retour }}
                </div>
            </div>
            <div class="row" style="border: solid 2px red; text-align: left; background-color: rgb(200,200,200);">
            <ul>
                <li class="col-6 offset-3" v-for="tache in filterTasks" :class="{barre: tache.completed}" :key="tache">
                    <input type="checkbox" v-model="tache.completed" name="" id="inp1" value="" :class="{editing1: ver}">
                    <label @dblclick="writeTask(tache)" for="edit" :class="{editing1: ver}">{{ tache.name }}</label>
                    <input type="checkbox" id="inp2" name="" value="" @click="deleteIt(tache)" :class="{editing1: ver}">
                    <input name="edit" type="text" v-model="tache.name" :class="{editing2: ver, editing1: !ver}" @keyup.enter="valider()" @keyup.escape="annuler(tache)"  @blur="valider()" v-focus="ver" style="border-radius: 0px;">
                </li>
            </ul>

            </div>
            <footer v-show="hideFoot">
                <strong>{{remain}} tâche(s) restante(s)</strong>
                <div class="">
                    <button type="button" class="btn btn-outline-danger" :class="{active: filter==='todo'}" name="button" @click="filter= 'todo'">A faire</button>
                    <button type="button" class="btn btn-outline-danger" :class="{active: filter==='done'}" name="button" @click="filter= 'done'">Faites</button>
                    <button type="button" class="btn btn-outline-danger" :class="{active: filter==='all'}" name="button" @click="filter= 'all'">Toutes</button>
                </div>
                <div class="" v-show="tacheFinie">
                    <button type="button" class="btn btn-secondary btn-large btn-block" name="button" @click="deleteTask">Supprimer les tâches achevées</button>
                </div>
            </footer>
        </div>
    </div>

</template>

<script>
    export default {
        name: "TodoComp",
        data() {
            return{
                taches: [{
                    name: "first action",
                    completed: false
                }],
                action: "",
                filter: "all",
                retour: "Tout cocher",
                ver: false,
                oldTask: ""
            }
        },
        methods: {
            addNew() {
                this.taches.push({
                    name: this.action,
                    completed: false
                    })
                    this.action=""
            },deleteIt(tache) {
                this.taches= this.taches.filter((ele) => ele!==tache)
            },
            deleteTask() {
                this.taches= this.taches.filter((task) => !task.completed)
            },
            writeTask(tache) {
                console.log('yesssss');
                this.ver=true
                this.oldTask=tache.name
            },
            valider() {
                this.ver=false
            },
            annuler(tache) {
                tache.name=this.oldTask
                this.valider()
            }
        },
        computed: {
            cocher: {
                get() {
                    return this.remain===0
                },
                set(value) {
                    this.taches.forEach((taches) => taches.completed=value);
                    if (value) {
                        this.retour="Tout décocher"
                    }
                    else{
                        this.retour="Tout cocher"
                    }
                }
            },
            hideFoot() {
                return this.taches.length >0
            },
            remain() {
                return this.taches.filter((taches) => !taches.completed).length
            },
            tacheFinie() {
                return this.taches.filter((taches) => taches.completed).length >0
            },
            filterTasks() {
                if (this.filter=="todo") {
                    return this.taches.filter((taches)=> !taches.completed)
                }
                else if (this.filter=="done") {
                    return this.taches.filter((taches)=> taches.completed)
                }
                else {
                    return this.taches
                }
            }

        },
        directives: {
            focus (el, binding) {
                if (binding){
                    el.focus()
                }
            }
        }
    }

</script>

<style media="screen">
    .titre{
        text-align: center;
        font-size: 50px;
        color: rgba(255, 0, 0,0.3);
    }
    .barre{
        text-decoration: line-through;
        color: rgba(0,0,0,0.2)
    }
    .btn {
        margin: 5px;
    }
    .select{
        text-decoration: underline;
    }
    input[type="text"]{
        border-radius: 15px;
    }
    .editing1{
        display: none;

    }
    .editing2{
        display: block;
    }
</style>
