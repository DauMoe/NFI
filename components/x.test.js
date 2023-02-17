const data = [];

const services = {
  addProduct: async () => {
    data.push({ name: 'Iphone', brand: 'Apple' });
  },
  listProducts: async () => {
    return data;
  },
};

beforeAll(() => {
  console.log('18 - beforeAll');
});

describe('Test', () => {
  beforeAll(() => {
    console.log(' 23 --> before all');
    services.addProduct();
  });

  beforeEach(() => {
    console.log(' --> before each');
  });

  it('test case 1', async () => {
    console.log('--> inside test case 1');
    expect(true).toBeTruthy();

    await expect(services.listProducts()).resolves.toEqual([
      { brand: 'Apple', name: 'Iphone' },
    ]);
  });

  it('test case 2', () => {
    console.log('--> inside test case 2');
    expect(true).toBeTruthy();
  });

  afterEach(() => {
    console.log('--> after each');
  });

  afterAll(() => {
    console.log('--> after all');
  });
});

console.log('54 Log');
 
