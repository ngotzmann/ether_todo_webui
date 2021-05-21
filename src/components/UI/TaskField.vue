<template>
	<div class="col-md-10">
		<label for="todo" type="text" @click="onLabelContentClick" v-if="!edit" :data-content="labelContent">{{labelContent}}</label>
		<input type="text" v-if="edit" v-model="content" v-on:blur="updateTextBlur" 
				ref="labeledit" :placeholder="placeholder" class="form-control" @keyup.enter="updateTextEnter"/>
	</div>
	<div class="col-md-1">
		<button type="button" class="btn btn-success btn" id="todo" name="todo" value="todo">Done</button>
	</div>
</template>

<script>
export default{
	name: 'TaskField',
	data: function(){
		return {
			edit: false,
			content: '',
			placeholder: 'Enter text...',
		}
	},
	props: ['text'],
	methods: {
		onLabelContentClick: function() {
			this.edit = true;
			console.log(this.text);
			this.content = this.text;
		},
		updateTextBlur: function(){
			this.edit = false;
			this.$emit('text-updated-blur',this.content)
		},
		updateTextEnter: function(){
			if(this.content=='' || this.content==undefined){
					this.content = this.placeholder;
			}
			this.edit = false;
			this.$emit('text-updated-enter',this.content)
		}
	},
	computed: {
		labelContent: function(){
			return this.content
		}
	},
	mounted: function(){
		if(this.text==''||this.text==undefined){
			this.content = this.placeholder
		}else{
			this.content = this.text
		}
	},
	updated: function(){
		const ed = this.$refs.labeledit;
		if(ed!=null){
			ed.focus();
		}
	}
}
</script>

<style scoped>
 body {
	 display: flex;
	 align-items: center;
	 justify-content: center;
	 margin: 0;
	 min-height: 100vh;
}
 input[type="checkbox"] {
	 position: relative;
	 width: 1.0em;
	 height: 1.0em;
	 color: #363839;
	 border: 1px solid #bdc1c6;
	 border-radius: 4px;
	 appearance: none;
	 outline: 0;
	 cursor: pointer;
	 transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
}
 input[type="checkbox"]:checked {
	 color: #fff;
	 border-color: #06842c;
	 background: #06842c;
}
 input[type="checkbox"]:checked::before {
	 opacity: 1;
}
 input[type="checkbox"]:checked ~ label::before {
	 clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
 label {
	 position: relative;
	 cursor: pointer;
	 font-size: 1.2em;
	 padding: 0 0.25em 0;
	 user-select: none;
}
 label::before {
	 position: absolute;
	 content: attr(data-content);
	 color: #9c9e9f;
	 clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
	 text-decoration: line-through;
	 text-decoration-thickness: 2px;
	 text-decoration-color: #363839;
	 transition: clip-path 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>