<template lang="pug">
	footer
		a(href="https://www.freepik.com/free-photos-vectors/character" target="_blank" rel="noopener noreferrer") Character vector created by Freepik
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
      };
    },
    created() {
    },
    computed: {
    },
  }
</script>

<style scoped lang="scss">
	
	footer {
		height: 100px;
		
		a {
			color: rgba(255,255,255,0.75);
			transition: color 0.2s linear;
			&:hover {
				color: #4fcaaf;
			}
		}
	}

</style>
