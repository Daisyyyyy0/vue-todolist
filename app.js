new Vue({
    el:'#app',
    data:{
        input: '',
        items: [
            'apple',
            'banana',
            'camel',
        ],
    },
    methods:{
        addItem(){
            this.items.push(this.input);
            this.input = '';
        },
    },
});