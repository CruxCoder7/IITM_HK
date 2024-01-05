import jwt from "jsonwebtoken"

const getData = (token: string) => {
  const data = jwt.decode(token)
  return data
}
export default getData
