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
    tagAttrs({tag: t})
  } else {
    tagAttrs(t)
  }
}

const tableCell = tag('tr')
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

const validateInputs = () => {

  DESCRIPTION.value ? '' : DESCRIPTION.classList.add('is-invalid')
  CALORIES.value ? '' : CALORIES.classList.add('is-invalid')
  CARBS.value ? '' : CARBS.classList.add('is-invalid')
  PROTEIN.value ? '' : PROTEIN.classList.add('is-invalid')

  if (
    DESCRIPTION.value
    && CALORIES.value
    && CARBS.value
    && PROTEIN.value
  ) add()
}

const add = () => {
  const newItem = {
    description: DESCRIPTION.value,
    calories: parseInt(CALORIES.value),
    carbs: parseInt(CARBS.value),
    protein: parseInt(PROTEIN.value)
  }

  list.push(newItem)
  cleanInputs()
  console.log(list)
}

const cleanInputs = () => {
  DESCRIPTION.value = ''
  CALORIES.value = ''
  CARBS.value = ''
  PROTEIN.value = ''
}