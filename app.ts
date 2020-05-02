/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="circleNamespace.ts" />
/// <reference path="rectangleNamespace.ts" />

import { calculateCircumference } from './modules/circle';
import { calculateRectangle } from './modules/rectangle';

import CircleNamespace = MyMath.Circle;

console.log('App: Hi!');
console.log('Namespace MyMath: ', MyMath.calculateRectangle(10, 20));
console.log('Namespace MyMath.Circle: ', CircleNamespace.calculateCircumference(3));

console.log('Module Circle: ', calculateRectangle(10, 20));
console.log('Module Rectangle: ', calculateCircumference(3));
