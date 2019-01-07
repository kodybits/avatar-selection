<template lang="pug">
	div.info
		p All: {{names}}
		p Rejected: {{rejected}}
		p Contestants: {{contestants}}
		p Winner: {{winner}}
		p Losers: {{losers}}
		p Running: {{gameState}}
		p Ending: {{gameEnd}}
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
      ...mapGetters('players', [
        'names',
        'rejected',
        'contestants',
        'winner',
        'losers',
        'gameState',
        'gameEnd',
      ]),
    },
  }
</script>

<style scoped lang="scss">
	
	.info {
		background-color: rgba(0,0,0,0.5);
		color: #ffffff;
		font-size: 12px;
		line-height: 14px;
		padding: 8px;
		position: fixed;
		right: 0;
		top: 0;
		width: 280px;
		
		p { margin-bottom: 5px; &:last-child { margin-bottom: 0; } }
	}

</style>
