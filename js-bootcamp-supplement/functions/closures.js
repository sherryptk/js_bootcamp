const createTipper = (percent) => {
    return (amount) => {
        return percent * amount
    }
}

const tipper15 = createTipper(.15)
console.log(tipper15(100))

const tipper20 = createTipper(.20)
console.log(tipper20(100))