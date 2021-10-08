const items = require('./items');

test('the pizza data is correct', () => {
    //tests to see if element has changed - stores snapshot and tests against to monitor changes
    expect(items.items).toMatchSnapshot();
    expect(items.items).toEqual(        
        expect.arrayContaining([    
          expect.objectContaining({ 
            "desc": "Connects to my phone"             
          })
        ])
      )
    expect(items.items).toHaveLength(4);
    expect(items.items.map(item => item.name)).toEqual([
        "hat",
        "coat",
        "boots",
        "watch"
    ])
});


