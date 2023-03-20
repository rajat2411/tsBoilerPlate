"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// getting controller fOR getting all data 
const Controller = __importStar(require("./auth/userController"));
class userRouter {
    constructor() {
        // this.router=
        // this.basePath=`/`
        this.router = express_1.default.Router();
        this.basePath = '/';
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router
            // .all(`${this.basePath}/*`)
            .get(`${this.basePath}`, Controller.getAllData)
            // added post request successfully
            .post(`${this.basePath}login`, Controller.registeruser)
            .get(`${this.basePath}:id`, Controller.getUserById)
            .delete(`${this.basePath}:id`, Controller.deleteUserById);
    }
}
exports.default = new userRouter();
