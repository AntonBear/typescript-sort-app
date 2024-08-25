import { Sorter } from './Sorter'
import { NumbersCollection } from './NubmersCollection'

const numbersCollection = new NumbersCollection([4, -3, -1000])
const sorter = new Sorter(numbersCollection)
sorter.sort()
console.log(numbersCollection.data) // Вывод отсортированного массива npm start
