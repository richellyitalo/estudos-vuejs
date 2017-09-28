new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    isGameIsRunning: false,
    turns: [],
    currentTurn: 0
  },
  methods: {
    startGame: function () {
      this.isGameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function () {
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Você atacou o monstro com dano de ' + damage,
        id: this.currentTurn + 1
      });
      
      if (this.checkWin()) {
        return;
      }
      this.currentTurn++;
      this.monsterAttacks();
      this.checkWin();
    },
    specialAttack: function () {
      var damage = this.calculateDamage(10, 20)
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Você deu um ataque especial no monstro com dano de ' + damage,
        id: this.currentTurn + 1
      });
      this.currentTurn++;

      if (this.checkWin()) {
        return;
      }

      this.monsterAttacks();
    },
    heal: function () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'Você se curou em 10',
        id: this.currentTurn + 1
      });
      this.currentTurn++;
      this.monsterAttacks();
    },
    giveUp: function () {
      this.isGameIsRunning = false;
    },
    monsterAttacks: function () {
      var vm = this;
      setTimeout(function() {
        var damage = vm.calculateDamage(5, 12);
        vm.playerHealth -= damage;
        vm.turns.unshift({
          isPlayer: false,
          text: 'O monstro lhe atacou com dano de ' + damage,
          id: vm.currentTurn + 1
        });
      }, 400);
      this.currentTurn++;
    },
    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function () {
      if (this.monsterHealth <= 0) {
        if (confirm('Você venceu! Iniciar um novo jogo?'))
          this.startGame();
        else
          this.isGameIsRunning = false;
        return true;
        
      } else if (this.playerHealth <= 0) {
        if (confirm('Você perdeu! Iniciar um novo jogo?'))
          this.startGame();
        else
          this.isGameIsRunning = false;
        return true;
      }
      return false;
    }
  }
})