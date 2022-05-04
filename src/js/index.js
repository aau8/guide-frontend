import '../img/cola.png'
import '../scss/style.scss'

const catalogList = document.querySelector('.s-catalog__list')
catalogList.innerHTML = Object.entries(catalog).map(([titleBlock, pages]) => {
    const listCards = Object.entries(pages).map(([title, filename]) => {
        const url = `https%3A%2F%2F${config.githubNick}.github.io%2F${config.titleRep}%2F${filename}`
        return `
        <div class="sc-card" id="page-${filename.replace('.html', '')}">
            <div class="sc-card__header">
                <a href="./${filename}" class="sc-card__header-content">
                    <h4 class="sc-card__title">${title}</h4> 
                    <p class="sc-card__url">${filename}</p>
                </a>
                <!-- <div class="sc-card__tools">
                    <a href="https://validator.w3.org/nu/?doc=${url}" class="icon icon_fill sc-card__validator">
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.56047 14L0 0H2.1811L4.75875 7.86301L6.34501 2.87671L5.3536 0H7.33641L10.1124 8.24658L12.69 0H19.6299V1.53425L17.2505 5.36986C17.2505 5.36986 19.0908 6.5886 19.6299 7.86301C20.1576 9.11075 20.0879 10.0418 19.6299 11.3151C19.4197 11.8992 18.9779 12.5191 18.5646 13.0159C18.0112 13.6811 17.1659 14 16.3007 14C15.2708 14 14.2958 13.5359 13.6464 12.7365L13.1389 12.1118C12.8223 11.722 12.9846 11.1363 13.4566 10.9651L13.4866 10.9542C13.8289 10.8301 14.211 10.9695 14.4327 11.2585C14.73 11.646 15.1822 12.1321 15.6642 12.274C16.1828 12.4266 16.5578 12.4889 17.0522 12.274C17.6597 12.0098 18.0436 10.9315 18.0436 10.9315C18.0436 10.9315 18.5284 9.18441 18.0436 8.24658C17.7008 7.58343 17.3632 7.18927 16.6556 6.90411C16.2875 6.75574 15.7725 6.76021 15.3597 6.79944C15.005 6.83314 14.6728 6.56491 14.6728 6.20867C14.6728 5.91064 14.7528 5.61807 14.9044 5.36148L17.0522 1.72603H14.078L10.3106 14L7.33641 5.75342L4.56047 14Z" fill="#5C5C5C"/>
                        </svg>                                                        
                    </a>
                </div> -->
                <div class="sc-card__tools">
                <div class="sc-card__validator">
                    <a  class="icon icon_fill sc-card__validator-icon" href="https://validator.w3.org/nu/?doc=${url}">
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.56047 14L0 0H2.1811L4.75875 7.86301L6.34501 2.87671L5.3536 0H7.33641L10.1124 8.24658L12.69 0H19.6299V1.53425L17.2505 5.36986C17.2505 5.36986 19.0908 6.5886 19.6299 7.86301C20.1576 9.11075 20.0879 10.0418 19.6299 11.3151C19.4197 11.8992 18.9779 12.5191 18.5646 13.0159C18.0112 13.6811 17.1659 14 16.3007 14C15.2708 14 14.2958 13.5359 13.6464 12.7365L13.1389 12.1118C12.8223 11.722 12.9846 11.1363 13.4566 10.9651L13.4866 10.9542C13.8289 10.8301 14.211 10.9695 14.4327 11.2585C14.73 11.646 15.1822 12.1321 15.6642 12.274C16.1828 12.4266 16.5578 12.4889 17.0522 12.274C17.6597 12.0098 18.0436 10.9315 18.0436 10.9315C18.0436 10.9315 18.5284 9.18441 18.0436 8.24658C17.7008 7.58343 17.3632 7.18927 16.6556 6.90411C16.2875 6.75574 15.7725 6.76021 15.3597 6.79944C15.005 6.83314 14.6728 6.56491 14.6728 6.20867C14.6728 5.91064 14.7528 5.61807 14.9044 5.36148L17.0522 1.72603H14.078L10.3106 14L7.33641 5.75342L4.56047 14Z" fill="#5C5C5C"></path>
                        </svg>                                                        
                    </a>
                </div>
            </div>
            </div>
        </div>
        `
    }).join('')

    return `
    <div class="sc-block">
        <div class="sc-block-header">
            <h3 class="title_h3 sc-block-header__title">${titleBlock}</h3>
        </div>
        <div class="sc-block__list">${listCards}</div>
    </div>
    `
}).join('')

const validBtnElems = catalogList.querySelectorAll('.sc-card__validator-icon')

// Проверка на валидность раз в 30 минут
if (new Date().getTime() - localStorage.getItem('lastTimeCheckValidHTML') > 30*60000 || (localStorage.getItem('dataValid') == null && localStorage.getItem('dataValid') == '')) {
    console.log('прошло больше времени')
    
    localStorage.setItem('dataValid', '')

    for (let i = 0; i < validBtnElems.length; i++) {
        const validBtn = validBtnElems[i];
        const card = validBtn.closest('.sc-card')
        let valid

        checkOnError(validBtn.href)
            .then(data => {
                if (data[0] === 'error') {
                    validBtn.classList.add('_not-valid')
                    valid = 'error'
                }
                if (data[0] === 'nfp') {
                    validBtn.classList.add('_not-founded')
                    valid = 'nfp'
                }
                if (data[0] === 'valid') {
                    validBtn.classList.add('_valid')
                    valid = 'valid'
                }
    
                const dataValid = localStorage.getItem('dataValid') != null && localStorage.getItem('dataValid') != '' ? JSON.parse(localStorage.getItem('dataValid')) : []
                const elem = { 
                    id: card.id, 
                    valid,
                    info: {...quantityErrors(data[1])}
                }

                setConditionValidator(elem)
                dataValid.push(elem)
                localStorage.setItem('dataValid', JSON.stringify(dataValid))                
        })
        // .then(e => setConditionValidator(JSON.parse(localStorage.getItem('dataValid'))))
    }

    localStorage.setItem('lastTimeCheckValidHTML', new Date().getTime())
}
else {
    console.log('прошло меньше времени')
    const dataValid = JSON.parse(localStorage.getItem('dataValid'))

    for (let i = 0; i < dataValid.length; i++) {
        const elem = dataValid[i];
        const validBtn = document.getElementById(elem.id).querySelector('.sc-card__validator-icon')
        
        if (elem.valid === 'error') {
            validBtn.classList.add('_not-valid')
        }
        if (elem.valid === 'nfp') {
            validBtn.classList.add('_not-founded')
        }
        if (elem.valid === 'valid') {
            validBtn.classList.add('_valid')
        }
        
        setConditionValidator(elem)
    }
    // setConditionValidator(JSON.parse(localStorage.getItem('dataValid')))
}

function quantityErrors(arr) {
    const errorNum = arr.filter(e => e.type === 'error').length
    const warningNum = arr.filter(e => e.type === 'info').length

    return {
        error: errorNum != 0 ? errorNum : null,
        warning: warningNum != 0 ? warningNum : null
    }
}

function setConditionValidator(data) {
    // console.log(data)
    const validator = document.getElementById(data.id).querySelector('.sc-card__validator')
    let items = ''

    if (data.valid === 'error') {

        if (data.info.error != 0) {
            items += `<li class="validator-tooltip__item validator-tooltip__item_error"><span>${data.info.error}</span> ошибки</li>`
        }
        
        if (data.info.warning != 0) {
            items += `<li class="validator-tooltip__item validator-tooltip__item_warning"><span>${data.info.warning}</span> предупреждения</li>`
        }
    }
    if (data.valid === 'nfp') {
        items += '<li class="validator-tooltip__item validator-tooltip__item_nfp"><span>404</span> страница не найдена</li>'
    }
    if (data.valid === 'valid') {
        items += '<li class="validator-tooltip__item validator-tooltip__item_valid">Ошибок нет!</li>'
    }

    validator.insertAdjacentHTML('beforeend', `
    <div class="validator-tooltip">
        <ul class="validator-tooltip__list">${items}</ul>
    </div>
    `)

    // console.log(data)
}

async function checkOnError(url) {
    url = url + '&out=json'

    return await fetch(url)
        .then(data => data.json())
        .then(json => {
            let con

            if (json.messages.length == 0) {
                con = 'valid'
            }
            else if (json.messages[0].type == 'non-document-error') {
                con = 'nfp'
            }
            else {
                con = 'error'
            }

            return [con, json.messages]
        })
}