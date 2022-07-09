// se accede al body del handler exportado escribiendo en la url: (domain es la url actual)
// domain/.netlify/functions/1-hello
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: 'Our First Netlify Function Example',
  };
};
