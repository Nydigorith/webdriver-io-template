import fs from "fs";

import moment from "moment";

class File {
  async createTxtFile(strPath, strText) {
    const strDatTime = moment(new Date()).format("YYY-MM-DD HH:MM:SS");
    await fs.writeFile(
      `${strPath}.txt`,
      `[${strDatTime}] ${strText}\n`,
      async (err) => {
        if (err) throw err;
      }
    );
  }

  async appendTxtFile(strPath, strText) {
    const strDatTime = moment(new Date()).format("YYY-MM-DD HH:MM:SS");
    await fs.appendFile(
      `${strPath}.txt`,

      `[${strDatTime}] ${strText}\n`,
      { flag: "a+" },
      async (err) => {
        if (err) throw err;
      }
    );
  }
}

export default new File();
