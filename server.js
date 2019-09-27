const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

const customers = [
    {
    image:'https://ww.namu.la/s/ce1149101612e67a7c1808c429c3685cf09446efdfa4f627c3f64bacddbb24e41dcfb4669622262df3c981dbf8e436ac4193f295ef582a5dc2d92082b16cd8879a70548703af7f540f4f467bd0f0b874e3d189055f7071f5ede88ebfdb41d5d9',
    name:'시노미야 카구야',
    birthday:'1월1일',
    gender:'여자',
    job:'부학생회장'
  },
  {
    image:'https://w.namu.la/s/fdec7b995e214536c3c098ab433ea1d6b11318b1bd9a8a46e0f05801a912378ee8f24b6d52a06a057b2125d8f1df6206c9b7bb7d717b6ef741e958663f4d1d3a6b8607005cf304f8bad3f74f834d430877ce38d26ca218a6fe9044790f5b5ec1',
    name:'시로가네 미유키',
    birthday:'9월9일',
    gender:'남자',
    job:'학생회장'
  },
  {
    image:'https://w.namu.la/s/e2b4426bc97a0af3bb1b9882aa68dd45b042eafed85bee6fb7ee05fc2eebf0ade4fa5b12b086c9c234a1c906ae73f9135e9fb0ae4d672854807ed52f9353f7b170c941dd3f05138fad32bf108f25a3029766fcd49aaca0f6ace4f900bc6126ed',
    name:'후지와라 치카',
    birthday:'3월3일',
    gender:'여자',
    job:'서기'
  }
  ]

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/customers', (req,res)=>{
    res.send(customers)
})

app.listen(port, ()=>console.log(`Listening on port ${port}`))