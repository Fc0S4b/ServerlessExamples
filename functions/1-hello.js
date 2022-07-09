// se accede al body del handler exportado escribiendo en la url: (domain es la url actual)
// domain/.netlify/functions/1-hello
const person = { name: 'john' };
exports.handler = async (event, context, cb) => {
  // console.log(event);
  return {
    statusCode: 200,
    // body: 'Our First Netlify Function Example',
    body: JSON.stringify(person),
  };
};

// otro enfoque sin async y con callback de tercer parámetro
// exports.handler = (event, context, cb) => {
//   cb(null, { statusCode: 200, body: 'Hello World' });
// };
