import { configTailwind } from './config-tailwind';

describe('configTailwind', () => {
  it('should work', () => {
    expect(configTailwind()).toEqual('config-tailwind');
  });
});
