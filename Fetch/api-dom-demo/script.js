let BASEURL = 'https://rickandmortyapi.com/api/'
let characterURL = 'character'
let locationURL = 'location'
let episodeURL = 'episode'

fetch(`${BASEURL}${characterURL}`)
    .then(unconvertedRes => unconvertedRes.json())
    .then(convertedJson => {
        let data = convertedJson.results

        console.log(data)

        for (let i = 0; i < data.length; i++) {
            // console.log(data[i])
            let name = data[i].name
            let status = data[i].status
            let gender = data[i].gender
            let species = data[i].species
            console.log(name)

            let grabBody = document.querySelector('body')
            let createH1 = document.createElement('h1')
            let createH2 = document.createElement('h2')
            let createPara = document.createElement('p')

            createH1.innerHTML = name
            createH2.innerHTML = status
            createPara.innerHTML = `${name} is a ${species} of the gender ${gender} who's status is ${status}.`

            grabBody.appendChild(createH1)
            grabBody.appendChild(createH2)
            grabBody.appendChild(createPara)

        }

    })
    .catch(err => console.log(err))

let arr = ["Roger", "Trey", "Jeremiah"]


let obj = {
    name: "Roger"
}

console.log(obj.name)

// let grabBody = document.querySelector('body')
// let grabH1 = document.querySelector('h1')
// console.log(grabH1)
// grabH1.innerHTML = "Ha I am a wizard"

// createPara.innerHTML = "Holy crap I just created this p tag"

// grabBody.appendChild(createPara)


// let grabOneH1 = document.querySelector('#header')
// let grabAllH1 = document.querySelectorAll('h1')


// console.log(grabOneH1)

// for (let i = 0; i < grabAllH1.length; i++) {
//     console.log(grabAllH1[i])
// }



// let createPara = document.createElement('p')
// console.log(createPara)
// createPara.innerHTML = "Hey I made one"

// let grabBody = document.querySelector('body')
// grabBody.appendChild(createPara)