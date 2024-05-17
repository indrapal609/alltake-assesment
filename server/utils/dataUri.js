import dataUriParser from "datauri/parser.js";
import path from "path";
import logger from "./logger.js";

export const getDataUri = (file) => {
  logger.info(`getDataUri | Get data uri of file.`);
  const parser = new dataUriParser();
  const extensionName = path.extname(file.originalname).toString();
  return parser.format(extensionName, file.buffer);
};
