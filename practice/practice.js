const btnStart = document.querySelector('.btn-start')
const progress = document.querySelector('.progress')
const winner = document.querySelector('.winner')

const horses = [
    'Secretariat',
    'Eclipse',
    'West Australian',
    'Flying Fox',
    'Seabiscuit',
  ];

  const promises = horses.map((horse)=>{
    return run(horse)
  })

  btnStart.addEventListener('click', ()=>{
    progress.textContent = `🤖 Заїзд розпочався, ставки не приймаються!`

    Promise.race(promises)
    .then(({horse, time})=>{
        winner.textContent = `🎉 Переможець ${horse}, финишував за ${time}мс часу`
    })
    
    Promise.all(promises)
    .then(()=>{
        progress.textContent = `📝 Заїзд закінчився, приймаються ставки.`
    })

  })


console.log(`🤖 Заїзд розпочався, ставки не приймаються!`);


function run(horse){
    return new Promise((resolve, reject)=>{
        const time = getRandomTime(3000, 4000)

        setTimeout(()=>{
            resolve({
                horse,
                time
            })
        },time)
    })
}

// run('Secretariat')
// .then((win)=>{
//  console.log(win);
// })
// .catch((error)=>{
//     console.log(error);
// })

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}