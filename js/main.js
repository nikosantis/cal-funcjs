const compose = (...functions) => data => functions.reduceRight((value, func) => func(value), data)

const attrsToString = (obj = {}) => {
  const keys = Object.keys(obj)
  const attrs = []

  for (let i = 0; i < keys.length; i++) {
    let attr = keys[i]
    attrs.push(`${attr}="${obj[attr]}"`)
  }

  const string = attrs.join(' ')

  return string
}


const tagAttrs = obj => (content = '') =>
  `<${obj.tag}${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>`

const tag = t => {
  if (typeof t === 'string') {
    return tagAttrs({tag: t})
  } else {
    return tagAttrs(t)
  }
}

const tableRowTag = tag('tr')
const tableRow = items => compose(tableRowTag, tableCells)(items)

const tableCell = tag('td')
const tableCells = items => items.map(tableCell).join('')


const DESCRIPTION = document.getElementById('description')
const CALORIES = document.getElementById('calories')
const CARBS = document.getElementById('carbs')
const PROTEIN = document.getElementById('protein')

const list = []

const keyInputs = value => {
  value.addEventListener('keypress', () => {
    value.value ? '' : value.classList.remove('is-invalid')
  })
}

keyInputs(DESCRIPTION)
keyInputs(CALORIES)
keyInputs(CARBS)
keyInputs(PROTEIN)

// function to validate if the inputs have content, otherwise, a class is added 'is-invalid'
const validateInputs = () => {

  DESCRIPTION.value ? '' : DESCRIPTION.classList.add('is-invalid')
  CALORIES.value ? '' : CALORIES.classList.add('is-invalid')
  CARBS.value ? '' : CARBS.classList.add('is-invalid')
  PROTEIN.value ? '' : PROTEIN.classList.add('is-invalid')

  if (
    DESCRIPTION.value &&
    CALORIES.value &&
    CARBS.value &&
    PROTEIN.value
  ) add()
}


// function that adds the values ​​of the inputs in an array
const add = () => {
  const newItem = {
    description: DESCRIPTION.value,
    calories: parseInt(CALORIES.value),
    carbs: parseInt(CARBS.value),
    protein: parseInt(PROTEIN.value)
  }

  list.push(newItem)
  cleanInputs()
  updateTotals()
  renderItems()
}

// update the totals
const updateTotals = () => {
  let calories = 0, carbs = 0, protein = 0

  list.map(item => {
    calories += item.calories,
    carbs += item.carbs,
    protein += item.protein
  })

  document.getElementById('totalCalories').textContent = calories
  document.getElementById('totalCarbs').textContent = carbs
  document.getElementById('totalProtein').textContent = protein
}

// function that cleans the value of the inputs
const cleanInputs = () => {
  DESCRIPTION.value = ''
  CALORIES.value = ''
  CARBS.value = ''
  PROTEIN.value = ''
}

const renderItems = () => {
  const tableBody = document.querySelector('tbody')

  tableBody.innerHTML = ''

  list.map(item => {
    tableBody.innerHTML += tableRow([item.description, item.calories, item.carbs, item.protein])
  })
}