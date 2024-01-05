const axios = require("axios")

async function data() {
  const data = await axios.post("http://localhost:5555/transaction", {
    val: "hi",
    em: "ok",
  })
  console.log(data.data)
}

data()
