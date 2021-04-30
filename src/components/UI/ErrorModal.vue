<template>
<!-- template for the modal component -->
  <transition name="error-modal">
    <div class="error-modal-mask">
      <div class="error-modal-wrapper">
        <div class="error-modal-container">
		  <center>
			<div class="error-modal-header">
				<h4>
					<slot name="header">
						An unexpected error has occurred
					</slot>
				</h4>
			</div>
			<div class="error-modal-body">
				<slot name="body">
					please try it again or contact the administrator
				</slot>
			</div>
			<button class="btn btn-warning" @click="$emit('close')">OK</button>
		  </center>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default{
	template: "#modal-template",
	name: 'ErrorModal',
}
</script>

<style scoped>
#app {
	padding: 1rem;
}

.error-modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);;
	display: table;
	transition: opacity 0.3s ease;
}

.error-modal-wrapper {
	display: table-cell;
	vertical-align: middle;
}

.error-modal-container {
	width: 300px;
	margin: 0px auto;
	padding: 20px 30px;
	background-color: #da4b59;
	color: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 0.3s ease;
	font-family: Helvetica, Arial, sans-serif;
}

.error-modal-body {
	margin: 20px 0;
}

.error-modal-default-button {
	display: block;
	margin-top: 1rem;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
.error-modal-enter {
	opacity: 0;
}

.error-modal-leave-active {
	opacity: 0;
}

.error-modal-enter .error-modal-container,
.error-modal-leave-active .error-modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
</style>