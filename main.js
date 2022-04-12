var elementos = document.querySelectorAll('.player-options div > img')
var playerOpt = ''
var enemyOpt = ''

function validateVictory() {
  let winner = document.querySelector('.winner')

  if (playerOpt == 'rock') {
    if (enemyOpt == 'rock') {
      winner.innerHTML = 'Empate'
    } else if (enemyOpt == 'paper') {
      winner.innerHTML = 'Você perdeu :('
    } else if (enemyOpt == 'scissor') {
      winner.innerHTML = 'Você ganhou! :)'
    }
  }

  if (playerOpt == 'paper') {
    if (enemyOpt == 'rock') {
      winner.innerHTML = 'Você ganhou! :)'
    } else if (enemyOpt == 'paper') {
      winner.innerHTML = 'Empate'
    } else if (enemyOpt == 'scissor') {
      winner.innerHTML = 'Você perdeu :('
    }
  }

  if (playerOpt == 'scissor') {
    if (enemyOpt == 'rock') {
      winner.innerHTML = 'Você perdeu :('
    } else if (enemyOpt == 'paper') {
      winner.innerHTML = 'Você ganhou! :)'
    } else if (enemyOpt == 'scissor') {
      winner.innerHTML = 'Empate'
    }
  }
}

function resetEnemy() {
  const enemyOpt = document.querySelectorAll('.enemy-options div > img')
  for (var i = 0; i < enemyOpt.length; i++) {
    enemyOpt[i].style.opacity = 0.3
  }
}

function enemyPlay() {
  let rand = Math.floor(Math.random() * 3)
  const enemy = document.querySelectorAll('.enemy-options div > img')
  resetEnemy()
  for (var i = 0; i < enemy.length; i++) {
    if (i == rand) {
      enemy[i].style.opacity = 1
      enemyOpt = enemy[i].getAttribute('opt')
    }
  }

  validateVictory()
}

function resetOpacityPlayer() {
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.opacity = 0.3
  }
}

for (var i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener('click', function (t) {
    resetOpacityPlayer()
    t.target.style.opacity = 1
    playerOpt = t.target.getAttribute('opt')

    enemyPlay()
  })
}
