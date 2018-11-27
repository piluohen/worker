const exp = require('express')
const app = exp()

app.use(exp.static('src'))

app.listen(3000, () => console.log('Running...'))