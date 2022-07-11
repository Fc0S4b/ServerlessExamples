require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appEbfTfaekERs4lN')
  .table('survey');

exports.handler = async (event, context, cb) => {
  const method = event.httpMethod;
  if (method === 'GET') {
    try {
      const { records } = await airtable.list();
      // console.log(records);
      const survey = records.map((item) => {
        const { id } = item;
        const { room, votes } = item.fields;
        return { id, room, votes };
      });
      return {
        statusCode: 200,
        body: JSON.stringify(survey),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Server Error',
      };
    }
  }
  if (method === 'PUT') {
  }
  // Default Response
  return {
    statusCode: 405,
    body: 'Only GET and PUT Requests Allowed',
  };
};
