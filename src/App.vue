<template lang="pug">
	div#app
		router-view
		Footer
</template>

<script>
  import Footer from './components/Footer.vue';
	
  export default {
    name: 'app',
    components: {
      Footer,
		}
  }
</script>

<style lang="scss">
	* {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		margin: 0;
		padding: 0;
	}
	
	body {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	
	#app {
		align-items: center;
		background-color: #d2dbdd;
		background-image: url('assets/background.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		display: flex;
		flex-direction: column;
		height: 100%;
		flex-grow: 1;
		justify-content: center;
		width: 100%;
	}
</style>
