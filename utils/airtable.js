// Airtable data for serverless test
const Airtable = require('airtable');
Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

module.exports = {
  getUsers: () => {
    const base = new Airtable.base(process.env.AIRTABLE_BASE_ID);

    return new Promise((resolve, reject) => {
      const allAirtableUsers = [];

      base(process.env.AIRTABLE_TABLE_NAME)
        .select({
          sort: [
            {
              field: 'SN',
              direction: 'desc',
            },
          ],
        })
        .eachPage(
          (records, fetchNextPage) => {
            records.forEach((record) => {
              const user = {
                id: record.id,
                firstName: record.get('First name'),
                lastName: record.get('Last name'),
                publish_date: record.get('SN'),
              };
              allAirtableUsers.push(user);
            });
            fetchNextPage();
          },
          (error) => {
            if (error) {
              console.error(error);
              reject({ error });
            }
            resolve(allAirtableUsers);
          },
        );
    });
  },

  // Get a single Airtable user
  getUser: (recordId) => {
    const base = new Airtable.base(process.env.AIRTABLE_BASE_ID);

    return new Promise((resolve, reject) => {
      base(process.env.AIRTABLE_TABLE_NAME).find(recordId, (error, record) => {
        if (error) {
          console.error(error);
          reject({ error });
        }
        const airtableUser = {
          firstName: record.get('First name'),
          lastName: record.get('Last name'),
          email: record.get('Email'),
          publish_date: record.get('publish_date'),
        };
        resolve(airtableUser);
      });
    });
  },
};
