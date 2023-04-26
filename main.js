const list = document.querySelector('.list');
const items = document.querySelectorAll('.block__item');
const listItems = document.querySelectorAll('.list__item')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target

        

        if(target.classList.contains('list__item')) {
            listItems.forEach(listItem => listItem.classList.remove('active'))
            target.classList.add('active')
        }

        switch(targetId) {
            case 'all':
                getItems('block__item')
                break
            case 'winter':
                getItems(targetId)
                break
            case 'spring':
                getItems(targetId)
                break
            case 'autumn':
                getItems(targetId)
                break
            case 'summer':
                getItems(targetId)
                break

        }
    })
}

filter()

function getItems(className) {
    items.forEach(item =>{
        if (item.classList.contains(className)) {
            item.style.display = 'block'
            item.style.margin = 'auto'
            item.style.marginBottom = '2rem'
        } else {
            item.style.display = 'none'
        }
    }) 
}