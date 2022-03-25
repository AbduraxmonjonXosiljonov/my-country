const country = document.querySelector('.country')
const box = document.querySelector('.main-section')
const searchinput = document.querySelector('.search-input')

//api
const api ='https://restcountries.com/v3.1/all'

//asking data from server
const sendReq = async (url)=> {
    const req = await fetch(url)
    const data = await req.json()
    showContent(data)
}
sendReq(api)

const showContent = (countries) => {
    countries.forEach((countri) => {
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML =`
        <a href="#">
                    
                        <img src=${countri.flags.png} alt="" height="160" width="260">
                    
                    <h4>
                        ${countri.name.common}
                    </h4>
                    <p>
                        Population: <span>${countri.population}</span>
                    </p>
                    <p>Region: 
                        <span>${countri.region}</span>
                    </p>
                    <p>
                        Capital: <span>${
                            countri.capital == undefined ? 'No Capital' : countri.capital
                        }</span>
                    </p>
                    </a>`
        box.appendChild(countryDiv)
    })
}


