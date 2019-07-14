import {
  is32
} from './../src/index';
import {
  expect
} from 'chai';

import {
  max_safe_32_bit_integer,
  min_safe_32_bit_integer
} from '../src/index';

describe('is32', () => {

  it('Returns `true` for safe 32 bit int', () => {
    expect(is32(max_safe_32_bit_integer)).to.be.true;
  });

  it('Returns `true` for safe negative 32 bit int', () => {
    expect(is32(min_safe_32_bit_integer)).to.be.true;
  });

  it('Returns `false` for unsafe 32 bit int', () => {
    expect(is32(max_safe_32_bit_integer + 1)).to.be.false;
  });

  it('Returns `false` for unsafe negative 32 bit int', () => {
    expect(is32(min_safe_32_bit_integer -1)).to.be.false;
  });

  it('Returns `false` for `Number.MAX_SAFE_INTEGER`', () => {
    expect(is32(Number.MAX_SAFE_INTEGER)).to.be.false;
  });

  it('Returns `true` for `0`', () => {
    expect(is32(0)).to.be.true;
  });

  it('Returns `true` for `-0`', () => {
    expect(is32(0)).to.be.true;
  });



});
