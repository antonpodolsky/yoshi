import { method } from 'yoshi-serverless';

export const greet = method(function (name: string) {
  if (name === 'Yaniv') {
    throw new Error('A cool error!');
  }
  return {
    greeting: `hello ${name}`,
  };
});
