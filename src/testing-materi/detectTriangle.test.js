import { describe, expect, it } from 'vitest';
import detectTriangle from './detectTriangle';

describe('detectTriangle function', ()=> {
  it('should throw error when input is not a number', ()=> {
    expect(()=> detectTriangle('a', 2, 3)).toThrowError('Input must be a number');
    expect(()=> detectTriangle(1, 'b', 3)).toThrowError('Input must be a number');
    expect(()=> detectTriangle(1, 2, 'c')).toThrowError('Input must be a number');
  });
});