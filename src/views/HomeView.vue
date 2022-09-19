<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <h4> To Do List</h4>
    <div class="container">
        <div class="row" v-if="filterTasks.length==0">
            <strong class="text-center">Pas de taches today.</strong>
        </div>
        <template v-else>
            <div class="row">
                <div class="col-4">Task</div>
                <div class="col-2 offset-6">Done</div>
            </div>
            <div v-for="t in filterTasks" v-bind:key="t.action">
                <div class="row">
                    <div class="col-4">{{t.action}}</div>
                    <div class="col-2 offset-6"><input type="checkbox" v-model="t.done"/>
                    </div>
                </div>
            </div>
        </template>
        <div class="row">
            <div class="col-md-4 offset-4">
                <input style="border: solid 2px blue; border-radius: 10% " type="text" name="newTask" v-model="newText">
            </div>
            <div class="col-md-2 text-center">
                <button type="button" name="button" class="btn btn-primary" v-on:click="addNew">Add</button>
            </div>
        </div>
        <div class="row bg-secondary text-white">
            <div class="col text-center">
                <input type="checkbox" name="hide" value="" id="hide" v-model="completed">
                <label for="hide">Hide completed tasks</label>
            </div>
            <div class="col text-center">
                <button type="button" class="btn btn-warning" v-on:click="deleteComp" name="button">Delete completed tasks</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  //components: {
    //HelloWorld
 // }
    data(){
        return {
        tasks: [],
        completed: false,
        newText: ""
        }
    },
    computed: {
        filterTasks:function () {
            return this.completed=== true ? this.tasks.filter(t=> !t.done) : this.tasks
        }
    },
    methods: {
        deleteComp: function() {
            this.tasks=this.tasks.filter(t=> !t.done);
            this.store();
        },
        store() {
            localStorage.setItem('chaine',JSON.stringify(this.tasks));
        },
        addNew() {
            this.tasks.push({
                action : this.newText,
                done : false
            });
            this.store();
            this.newText="";
        }
    },
    created: function() {
        let data=localStorage.getItem("chaine");
        if (data !=null)
        {
            this.tasks=JSON.parse(data)
        }
    }
}
</script>
