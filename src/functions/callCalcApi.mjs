import fetch from 'node-fetch'

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a query string
  const params = JSON.parse(event.body)
  const jsonBody = JSON.stringify(params)
  console.log(jsonBody)

  try {
    const response = await fetch('http://18.134.179.34/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonBody,
    })
    const resJson = await response.json()

    return { statusCode: 200, body: JSON.stringify(resJson) }
  } catch (err) {
    console.error(err)
    return { statusCode: 500, body: JSON.stringify({ msg: err.message }) }
  }
}
