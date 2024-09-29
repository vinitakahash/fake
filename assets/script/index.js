document.querySelectorAll("a").forEach(a => a.setAttribute("target", "_blank"))
document.querySelectorAll("nav a").forEach(a => a.setAttribute("target", "_self"))
const buttonAcess = "Acessar";

const checkbox = document.querySelector('.opções__botão');

document.addEventListener('click', function(event) {
    if (!checkbox.contains(event.target)) {
        checkbox.checked = false;
    }
});

fetch('https://fakestoreapi.com/products?limit=50')
  .then(res => res.json())
  .then((json) => {
    const ulApplications = document.getElementById('listApplications');
    const ulIntranet = document.querySelector('.lista-menu')

    console.log(ulIntranet)

    const linksIntranet = document.querySelectorAll('.lista-menu__link')
    console.log(linksIntranet)


    json.forEach((item) => {

    //internet
    if(item.title.includes('Gold')){
      console.log(item.title)
      const li = document.createElement('li');
      li.setAttribute("class", "lista-menu__item")
      li.innerHTML = `
        <a href="${item.url}">
          <span class="item-name">${item.title}</span>
        </a>`
        ulIntranet.appendChild(li)
    }

    //cards
    if(item.title.includes('SSD')){
      
      const apex = document.getElementById('apex');
      
      const card = document.createElement('div');
      const cardIcon = document.createElement('div');
      const tittle = document.createElement('h3');
      const button = document.createElement('a');
      const description = document.createElement('span');
      const ul = document.createElement('ul');
      const li = document.createElement('li')
      ul.appendChild(li)


      card.setAttribute('class', 'card apex')
      cardIcon.setAttribute('class', 'icon')
      tittle.setAttribute('class', 'card-title apex')
      button.setAttribute('class', 'button apex')

      tittle.innerHTML = `${item.title}`;
      description.innerHTML = `${item.description}`;
      li.innerHTML =  `${item.price}`;
      ul.innerHTML = `${item.id}`
      button.innerHTML = `${buttonAcess}`

    card.appendChild(cardIcon)
    card.appendChild(tittle)
    card.appendChild(button)
    card.appendChild(description)
    card.appendChild(ul)

    apex.appendChild(card)

    } else if(item.title.includes('Casual')){

      const grafana = document.getElementById('grafana');
      
      const card = document.createElement('div');
      const cardIcon = document.createElement('div');
      const tittle = document.createElement('h3');
      const button = document.createElement('a');
      const description = document.createElement('span');
      const ul = document.createElement('ul');
      const li = document.createElement('li')
      ul.appendChild(li)


      card.setAttribute('class', 'card grafana')
      cardIcon.setAttribute('class', 'icon')
      tittle.setAttribute('class', 'card-title grafana')
      button.setAttribute('class', 'button grafana')

      tittle.innerHTML = `${item.title}`;
      description.innerHTML = `${item.description}`;
      li.innerHTML =  `${item.price}`;
      ul.innerHTML = `${item.id}`
      button.innerHTML = `${buttonAcess}`

    card.appendChild(cardIcon)
    card.appendChild(tittle)
    card.appendChild(button)
    card.appendChild(description)
    card.appendChild(ul)

    grafana.appendChild(card)

    } else if (item.title.includes('Gold')){
      const grafana = document.getElementById('oxar');
      
      const card = document.createElement('div');
      const cardIcon = document.createElement('div');
      const tittle = document.createElement('h3');
      const button = document.createElement('a');
      const description = document.createElement('span');
      const ul = document.createElement('ul');
      const li = document.createElement('li')
      ul.appendChild(li)


      card.setAttribute('class', 'card oxar')
      cardIcon.setAttribute('class', 'icon')
      tittle.setAttribute('class', 'card-title oxar')
      button.setAttribute('class', 'button oxar')

      tittle.innerHTML = `${item.title}`;
      description.innerHTML = `${item.description}`;
      li.innerHTML =  `${item.price}`;
      ul.innerHTML = `${item.id}`
      button.innerHTML = `${buttonAcess}`

    card.appendChild(cardIcon)
    card.appendChild(tittle)
    card.appendChild(button)
    card.appendChild(description)
    card.appendChild(ul)

    oxar.appendChild(card)

    }

      const li = document.createElement('li');
      li.innerHTML = `
        <a href="${item.url}">
          <span class="item-name">${item.title}</span>
        </a>
      `;
      ulApplications.appendChild(li);
    });
  })
  
  .catch(err => console.error('Erro ao buscar dados:', err));


            function filtrar() {
                var input,
                filter,
                ul,
                li,
                a,
                i,
                span,
                txtValue,
                count = 0

                input = document.getElementById('filter')
                ul = document.getElementById('listApplications')

                const texto = document.querySelector('description')

                input.addEventListener('focus', function() {
                  if (ul.children.length > 0) {
                    ul.style.display = 'block';
                  }
                });

                input.addEventListener('blur', function(event) {
                  setTimeout(() => {
                    ul.style.display = 'none';
                  }, 250);
                });

                filter = input.value.toUpperCase();

                li = ul.getElementsByTagName('li');

                for(i = 0; i < li.length; i++){
    
                    a = li[i].getElementsByTagName('a')[0]

                    txtValue = a.textContent || a.innerText;

                    if(txtValue.toUpperCase().indexOf(filter) > -1){

                        li[i].style.display = '';

                        count++

                        span = li[i].querySelector('.item-name');
  
                        if(span){
                            span.innerHTML = txtValue.replace(new RegExp(filter, 'gi'),(match)=>{
                                return "" + match + ""
                            })
                        }
                    } else {

                        li[i].style.display = 'none'
                    }
                }


                  if (filter === '') {
                    ul.style.display = 'none';
                    return;
                  }

                if (count === 0){
                    ul.style.display = 'none'
                } else{
                    ul.style.display = 'block'
                }
            }