exports.handler = async (event, context, cb) => {
  const method = event.httpMethod;
  console.log(method);
  return {
    statusCode: 200,
    body: 'Our Weather Example',
  };
};
