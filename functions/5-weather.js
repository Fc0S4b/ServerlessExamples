exports.handler = async (event, context, cb) => {
  const method = event.httpMethod;

  if (method !== 'POST') {
    return {
      statusCode: 405,
      body: 'Only POST Requests Allowed',
    };
  }
  const { city } = JSON.parse(event.body);
  console.log(city);
  return {
    statusCode: 200,
    body: JSON.stringify(city),
  };
};
