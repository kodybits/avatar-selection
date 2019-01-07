<template lang="pug">
	li.avatar(@click="rejectPlayer(name)" :class="{ 'avatar--rejected': rejected.includes(name) || losers.includes(name), 'avatar--participating': gameState, 'avatar--winner': name === winner }")
		img.avatar(:src='path')
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex';
  let vm;
  
  export default {
    props: {
      name: {
        default: '',
        type: String,
      }
    },
    data() {
      return {};
    },
    created() {
      vm = this;
    },
    computed: {
			...mapGetters('players', [
				'rejected',
				'gameState',
				'winner',
				'losers',
			]),
      path() {
        return require(`../assets/${vm.name}.jpg`);
      }
    },
		methods: {
      ...mapMutations('players', [
        'rejectUser',
      ]),
      rejectPlayer(name) {
        if(!vm.rejected.includes(name) && !vm.losers.includes(name) && !vm.winner.includes(name)) vm.rejectUser(name);
      },
		}
  }
</script>

<style scoped lang="scss">
	
	.avatar {
		align-items: center;
		border: solid 5px rgba(0, 0, 0, 0.35);
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		filter: grayscale(1);
		justify-content: center;
		overflow: hidden;
		position: relative;
		transition: all 0.5s;
		transform-origin: 50% 50%;
		
		@media screen and (min-width: 640px) {
			border-width: 10px;
		}
		
		&--rejected {
			border-color: rgba(0, 0, 0, 0.25);
			cursor: default;
			transition: all 0.25s;
			transform: scale(0.75);
			animation: none !important;
			
			&:after {
				content: '';
				background-color: rgba(0, 0, 0, 0.2);
				bottom: 0;
				height: 100%;
				left: 0;
				position: absolute;
				right: 0;
				top: 0;
				width: 100%;
				z-index: 1;
				transition: all 0.25s;
			}
			.avatar {
				display: block;
				filter: blur(2px);
				min-height: 100px;
				min-width: 100px;
				opacity: 0.5;
				transition: all 0.25s;
			}
		}
		
		&--participating {
			transition: all 0.25s;
			animation: spin 0.5s infinite linear;
		}
		
		&--winner {
			border-color: #4fcaaf;
			filter: grayscale(0);
			transition: all 0.4s linear;
			transform: scale(1.25) rotateZ(-12deg);
		}
	}
	
	.avatar {
		display: block;
		height: 100%;
		object-fit: cover;
		transition: all 0.4s;
		width: 100%;
	}
	
	@keyframes spin {
		0% { transform: rotateZ(0); }
		100% { transform: rotateZ(360deg); }
	}
</style>
