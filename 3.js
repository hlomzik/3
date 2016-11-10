// 3 TO 10
const e = { '-': -1, '+': 1, '0': 0 }

function convert (n) {
    // reverse string
    n = n.split('').reverse().join('')
    const len = n.length

    let res = 0;
    for (let exp = 0; exp < len; exp++) {
        res += Math.pow(3, exp) * e[n[exp]]
    }
    return res
}

// 10 TO 3
const limits = []
for (let i = 0; i <= 20; i++) {
    limits[i] = (Math.pow(3, i) - 1) / 2 + 1
}

function reverse (n) {
    let res = ''

    for (digit = 21; digit--; ) {
        if (Math.abs(n) >= limits[digit]) {
            let sign = n > 0 ? +1 : -1
            res += (n > 0 ? '+' : '-')
            n -= sign * Math.pow(3, digit)
        } else {
            if (res) res += '0'
        }
    }

    return res
}

if (process.argv.length > 3) {
    const arg1 = convert(process.argv[2])
    const sign = process.argv[3]
    const arg2 = convert(process.argv[4])
    const res = sign === '+' ? arg1 + arg2 : arg1 - arg2
    console.log(res)
    console.log(reverse(res))
} else {
    const arg = process.argv[2]
    if (arg[0] > 0) {
        console.log(reverse(arg))
    } else {
        console.log(convert(arg))
    }
}
