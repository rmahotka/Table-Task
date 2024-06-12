export function tableSearch() {
  const table = document.querySelector("table")
  table.addEventListener("click", (e) => {
    if (e.target.tagName != 'TH') return
    let th = e.target
    sortTable(th.cellIndex, th.dataset.type)
  })
}

function sortTable(index, type) {

}