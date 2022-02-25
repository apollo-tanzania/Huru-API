"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("./config/middleware/morgan"));
dotenv.config();
if (!process.env.PORT) {
    process.exit(1);
}
const PORT = parseInt(process.env.PORT, 10);
const app = (0, express_1.default)();
//app configuration
app.use(morgan_1.default);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//routes
app.get('/', (req, res) => {
    res.send('Something is happening!!');
});
// app.get("/logger", (_, res) => {
//     Logger.error("This is an error log");
//     Logger.warn("This is a warn log");
//     Logger.info("This is a info log");
//     Logger.http("This is a http log");
//     Logger.debug("This is a debug log");
//     res.send("Hello world");
//   });
//server activation
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUFpQztBQUNqQyxzREFBaUU7QUFFakUsZ0RBQXdCO0FBQ3hCLHdFQUEwRDtBQUUxRCxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEIsSUFBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDO0lBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7Q0FDbEI7QUFFRCxNQUFNLElBQUksR0FBVyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFcEQsTUFBTSxHQUFHLEdBQWlCLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBRXBDLG1CQUFtQjtBQUVuQixHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7QUFDekIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGNBQUksR0FBRSxDQUFDLENBQUM7QUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7QUFFdkIsUUFBUTtBQUNSLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtBQUNwQyxDQUFDLENBQ0osQ0FBQztBQUVGLG1DQUFtQztBQUNuQyw0Q0FBNEM7QUFDNUMseUNBQXlDO0FBQ3pDLHlDQUF5QztBQUN6Qyx5Q0FBeUM7QUFDekMsMkNBQTJDO0FBRTNDLCtCQUErQjtBQUMvQixRQUFRO0FBRVIsbUJBQW1CO0FBQ25CLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUUsRUFBRTtJQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFBIn0=