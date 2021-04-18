function plus(x) {
    console.log("plus")
    this.value = this.value + x
    return this
}

function minus(x) {
    console.log("minus")
    this.value = this.value - x
    return this
}

let valueObject = {
    value: 11,
    plus,
    minus,
    prin: function () {
        console.log(this.value)
    },
}

valueObject.plus(5).minus(4).prin()