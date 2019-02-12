<template>
	<div>
	<!--<div class="todo-item" v-for="item in todoList"></div>-->
	</div>
</template>

<script>
let item = 'Get groc';

//вызов мутации через actions, а не напрямую
this.$store.dispatch('SAVE_TODO', item);

this.$store.commit('SET_NAME', your_name);

//SAVE_TODO делает POST-запрос к эндпоинту, а затем инициирует мутацию ADD_TODO, которая добавляет элемент списка дел в переменную состояния todos.
export default {
	data() {
		return {
				
		}
	},

	mounted() {
		this.$store.dispatch('GET_TODO');
	},

	// для получения доступа к элементу todos в компоненте:
	computed: {
		todoList() {
			//получаем значене по имени TODOS из GETTERS from index.js
			return this.$store.getters.TODOS;
		}
	},

	//более простой метод для доступа к элементу дел внутри компонента с помощью mapGetters: 

	computed: {
		...mapGetters(['TODOS']),
		// and another computed peoperirs

	}

	
}


</script>

<style>

</style>
