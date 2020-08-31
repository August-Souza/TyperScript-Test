"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(resquest, response) {
    var user = CreateUser_1.default({
        name: 'Louise',
        email: 'luizsouza@gmail.com',
        password: '123456',
        techs: ['ReactJS', 'NodeJS', {
                title: 'React Native',
                experience: 100,
            }]
    });
    return response.json({ message: "" + user });
}
exports.helloWorld = helloWorld;
