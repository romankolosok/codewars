const customers = [
    {
      id: '00000001',
      personalInfo: {
        name: {
          first: 'Ashley',
          last: 'Fox',
        },
        dob: '12/01/1990',
        contactInfo: {
          phone: '+17008009000',
          email: 'qwe@qwe.com',
          address: {
            zip: '33021',
            city: {
              'city name': 'Golden city',
              street: 'Elm',
            },
          }
        }
      },
      purchases: [{
        order: {
          number: 1,
          date: '12.12.2018',
          item: {
            brand: {
              'brand name': 'aaa',
              code: {
                'unique number': '1b2n3n4m5lk9',
                color: 'red',
                size: [{
                  size0: {
                    count: 1
                  },
                }, {
                  size2: {
                    count: 2
                  },
                }],
              }
            }
          }
        }
      }],
    },
    {
      id: '00000002',
      personalInfo: {
        name: {
          first: 'John',
          last: 'Black',
        },
        dob: '10/01/1980',
        contactInfo: {
          phone: '+17778009900',
          email: null,
          address: null,
        }
      },
      purchases: [null],
    }];