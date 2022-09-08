module.exports = function reverse (n) {
    let a = Math.abs(n)
            let b = String(a)
        return b.split("").reverse().join("")
}
