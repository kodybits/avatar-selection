<template lang="pug">
	div.btn-container
		button.btn(@click="randomize" :disabled="disabled || contestants.length <= 0 || winner.length > 0") Random Avatar
		button.btn.btn--small(:disabled="gameState || (rejected.length <= 0 && winner.length <= 0)" @click="setDefault") Reset
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';
  
  let vm;
  export default {
    props: {
    },
    data() {
      return {
        disabled: false,
			};
    },
    created() {
      vm = this;
    },
    computed: {
      ...mapGetters('players', [
        'gameState',
        'contestants',
        'gameEnd',
        'rejected',
        'winner',
        'losers',
        'names',
      ]),
    },
		methods: {
      ...mapMutations('players', [
        'setGameState',
        'setDefault',
        'shuffleArray',
        'setWinner',
        'setLosers',
        'setGameEnd',
      ]),
      randomize() {
        vm.setGameState(true);
        const shuffled = vm.contestants.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
        const winner = shuffled[0];
        const losers = shuffled.filter(player => player !== winner);
        vm.disabled = true;
        
        setTimeout(() => {
          vm.setGameState(false);
          vm.setGameEnd(true);
          vm.setWinner(winner);
          vm.setLosers(losers);
          vm.disabled = false;
				}, 2000);
			}
		},
  }
</script>

<style scoped lang="scss">
	
	button {
		&:focus, &:hover {
			outline: none;
		}
	}
	
	.btn {
		background-color: #4fcaaf;
		border: none;
		border-radius: 5px;
		color: #ffffff;
		cursor: pointer;
		display: inline;
		font-size: 24px;
		line-height: 28px;
		margin-top: 10px;
		padding: 10px 20px;
		position: relative;
		transform-origin: 50% 50%;
		transition: all 0.25s;
		
		&:hover { background-color: #31a68c; }
		&:first-child { margin-top: 50px; }
		
		&--small {
			background-color: #333333;
			font-size: 18px;
			line-height: 22px;
			padding: 5px 10px;
			&:hover { background-color: #111111; }
		}
		
		&[disabled] {
			background-color: rgba(0,0,0,0.5);
			cursor: not-allowed;
			opacity: 0.5;
			transition: all 0.25s;
			
			&:hover { background-color: rgba(0,0,0,0.5); }
		}
		
		&-container {
			align-items: center;
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative;
		}
	}
	
	
	/* animate global elements */
	
	.fade-enter { opacity: 0; }
	.fade-enter-active {
		transition: all .15s;
	}
	.fade-enter-to { opacity: 1; }
	.fade-leave { opacity: 1; }
	.fade-leave-active {
		transition: all .15s;
		//transition-delay: 0.15s;
		position: absolute;
	}
	.fade-leave-to { opacity: 0; }
	
</style>
