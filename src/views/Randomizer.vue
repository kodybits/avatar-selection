<template lang="pug">
	section
		ul.list
			Avatar(v-for="name in names" :name="name")
		Button
		//Info
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';
  import Button from '../components/Button.vue';
  import Avatar from '../components/Avatar.vue';
  import Info from '../components/Info.vue';
  
  let vm;
  
  export default {
    props: {},
    data() {
      return {
      };
    },
    created() {
      vm = this;
      vm.setDefault();
    },
    computed: {
      ...mapGetters('players', [
        'names',
        'rejected',
        'contestants',
        'winner',
        'gameState',
      ]),
    },
    components: {
      Button,
      Avatar,
      Info,
    },
    methods: {
      ...mapMutations('players', [
        'setDefault',
      ]),
    }
  }
</script>

<style scoped lang="scss">
	
	section {
		align-items: center;
		display: flex;
		flex-direction: column;
		flex: 1 0 auto;
		justify-content: center;
		padding: 25px;
		width: 100%;
	}
	
	.list {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		list-style: none;
		
		li {
			margin: 10px;
			width: 100px;
			
			@media screen and (min-width: 640px) {
				width: 150px;
			}
			
			@media screen and (min-width: 992px) {
				width: 200px;
			}
		}
	}

</style>
