import fs from "fs";

// 读取origin中的数据
const originData = fs.readFileSync("./origin/fx_content.json", "utf8");
const originDataObj = JSON.parse(originData);
const translations = originDataObj.data;

// 分别保存各个语种,并使用key-value的格式
translations.forEach((translation) => {
  const fileName = `${translation.language}.json`;
  const data = {};
  translation.contents.forEach((content) => {
    data[content.key] = content.value;
  });
  fs.writeFileSync(`./target/${fileName}`, JSON.stringify(data, null, 2));
});
