//Cho mảng yêu cầu viết hàm render là giao diện như hình
const arrCategory = [
  { id: "Fol1", name: "Folder 1", idParent: null },
  { id: "Fol2", name: "Folder 2", idParent: null },
  { id: "Fol3", name: "Folder 3", idParent: null },
  { id: "Fol4", name: "Folder 4", idParent: null },
  { id: "Fol1_1", name: "Folder 1.1", idParent: "Fol1" },
  { id: "Fol1_2", name: "Folder 1.2", idParent: "Fol1" },
  { id: "Fol1_3", name: "Folder 1.3", idParent: "Fol1" },
  { id: "Fol2_1", name: "Folder 2.1", idParent: "Fol2" },
  { id: "Fol2_2", name: "Folder 2.2", idParent: "Fol2" },
  { id: "Fol2_3", name: "Folder 2.3", idParent: "Fol2" },
  { id: "Fol3_1", name: "Folder 3.1", idParent: "Fol3" },
  { id: "Fol3_2", name: "Folder 3.2", idParent: "Fol3" },
  { id: "Fol3_3", name: "Folder 3.3", idParent: "Fol3" },
  { id: "Fol1_1_1", name: "Folder 1.1.1", idParent: "Fol1_1" },
  { id: "Fol1_1_2", name: "Folder 1.1.2", idParent: "Fol1_1" },
  { id: "Fol1_2_2", name: "Folder 1.2.2", idParent: "Fol1_2" },
  { id: "Fol1_2_3", name: "Folder 1.2.3", idParent: "Fol1_2" },
  { id: "Fol2_2_2", name: "Folder 2.2.2", idParent: "Fol2_2" },
  { id: "Fol3_2_2", name: "Folder 3.2.2", idParent: "Fol1_1" },
  { id: "Fol3_2_2_3", name: "Folder 3.2.2.3", idParent: "Fol3_2_2" },
  { id: "Fol3_2_2_3_1", name: "Folder 3.2.2.3.1", idParent: "Fol3_2_2_3" },
  { id: "Fol3_2_2_3_1_1", name: "Folder 3.2.2.3.1.1", idParent: "Fol3_2_2_3_1" },
  { id: "Fol3_2_2_3_1_1_1", name: "Folder 3.2.2.3.1.1.1", idParent: "Fol3_2_2_3_1_1" }
];

const elt = function (ele, id, text) {
  let childElem = document.createElement(ele)
  childElem.setAttribute('id', id)

  let icon = document.createElement('i')
  icon.setAttribute('class', 'fa fa-folder')
  icon.innerText = ' ' + text

  childElem.appendChild(icon)
  return childElem
}

const renderCategories = function (arr) {
  let parentWrapper = document.createElement('ul')
  let result = document.getElementById('result')

  arr.forEach((folder) => {
    if (!folder.idParent) {
      let child = elt('li', folder.id, folder.name)

      parentWrapper.appendChild(child)
      result.appendChild(parentWrapper)
    } else {
      let subParent = document.getElementById(folder.idParent)
      let wrapper = document.createElement('ul')
      let child = elt('li', folder.id, folder.name)

      if (subParent.childElementCount === 1) {
        wrapper.appendChild(child)
        subParent.appendChild(wrapper)
      } else {
        subParent.childNodes[1].appendChild(child)
      }
    }
  })
}

renderCategories(arrCategory)