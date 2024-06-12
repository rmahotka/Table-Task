import './style.css'
import ok from '/ok.svg'
import no from '/no.svg'
import { tableSearch } from './JS/sortTable'
const app = document.querySelector('#app')

const theadTable = `
  <thead>
    <tr>
      <th data-type="number">ID</th>
      <th data-type="string">Название</th>
      <th data-type="string">Описание</th>
      <th data-type="number">Цена</th>
      <th data-type="number">Количество на складе</th>
      <th data-type="string">Цвет</th>
      <th data-type="number">В наличии</th>
    </tr>
  </thead>
`


function tableGenerate(data) {
  return `
    <tr>
      <td align='center'>${data.id}</td>
      <td>${data.name}</td>
      <td>${data.description}</td>
      <td align='center'>${data.price}</td>
      <td align='center'>${data.count_storage}</td>
      <td>${data.color}</td>
      <td align='center'>
       <img src="${data.availability_storage ? ok : no}" alt="${data.availability_storage ? 'Available' : 'Not Available'}" />
      </td>
    </tr>
`
}

function renderTable(resultData) {
  const table = document.createElement("table")
  table.classList.add("table")
  const tbody = document.createElement("tbody")
  resultData.forEach((elem) => {
    tbody.innerHTML += tableGenerate(elem)
  })
  table.innerHTML = theadTable;
  table.append(tbody)
  return table;
}

async function fetchData() {
  const responce = await fetch('/data.json')
  const result = await responce.json();
  const table = renderTable(result);

  app.append(table)
}


await fetchData()
tableSearch()