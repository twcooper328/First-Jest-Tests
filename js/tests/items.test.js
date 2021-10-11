const items = require('./items');

describe('testing a list of objects inside of an array', () => {
  it('has not been changed', () => {
    expect(items.items).toMatchSnapshot();

    expect(items.items).toEqual(
      expect.arrayContaining([
        {
          id: 2,
          name: "coat",
          size: "small",
          desc: "Looks like this coat is back in fashion"
        }
      ])
    )
  });

  it('has id properties', () => {
    expect(items.items).toEqual(
      expect.arrayContaining([        // going into the array
        expect.objectContaining({        // going into the object
          "id": 1
        })
      ])
    );

    expect(items.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          "id": 4
        })
      ])
    );
  });

  it('array of objects has the correct length', () => {
    expect(items.items).toHaveLength(4);
  });

  it('has the correct property names in order', () => {
    const itemNames = items.items.map(item => item.name);
    expect(itemNames).toEqual([
      'hat',
      'coat',
      'boots',
      'watch'
    ]);

    const itemsOutOfOrder = [
      'coat',
      'hat',
      'boots',
      'watch'
    ];

    expect(itemNames).not.toEqual(itemsOutOfOrder);

  })

  it('does not contain incorrect object', () => {
    const notExpected = {
      id: 5,
      name: 'pinky-ring',
      size: 'small',
      desc: 'makes a statement'
    }

    expect(items.items).toEqual(
      expect.not.arrayContaining([notExpected])
    )

  })

})
