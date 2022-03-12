import { str } from './foo.js'

import { name } from '../package.json'

import answer from "the-answer";

import { createApp } from 'vue'

console.log(str)

console.log(name)

console.log(createApp)


export function main() {
  console.log("the answer is " + answer);
}