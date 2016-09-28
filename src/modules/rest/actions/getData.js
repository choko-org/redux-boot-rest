export const GET_DATA = 'redux/getdata'

const getData = () => {
  return ({ db }) => ({
    type: GET_DATA,
    payload: {
      db
    }
  })
}

export default getData
