const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.get("/scrap", async (req, res) => {
  try {
    const { data } = await axios.get("https://coinmarketcap.com/");
    const $ = cheerio.load(data);
    const precios = {
      precioBit: $(
        " table > tbody > tr:nth-child(1) > td:nth-child(4) > div > span"
      ).text(),
      nombreBit: $(
        " #__next > div.sc-2fcd5aa6-1.czfcBY.global-layout-v2 > div.main-content > div.cmc-body-wrapper > div > div:nth-child(1) > div.sc-7b3ac367-2.cFnHu > table > tbody > tr:nth-child(1) > td:nth-child(3) > div > a > div > div > div > div > p"
      ).text(),
      imgBit: $("tr:nth-child(1) > td:nth-child(3) > div > a > div > img").attr(
        "src"
      ),
      precioEth: $(" tr:nth-child(2) > td:nth-child(4) > div > span").text(),
      nombreEth: $(
        " #__next > div.sc-2fcd5aa6-1.czfcBY.global-layout-v2 > div.main-content > div.cmc-body-wrapper > div > div:nth-child(1) > div.sc-7b3ac367-2.cFnHu > table > tbody > tr:nth-child(2) > td:nth-child(3) > div > a > div > div > div > div > p"
      ).text(),
      imgEth: $(
        " tr:nth-child(2) > td:nth-child(3) > div > a > div > img"
      ).attr("src"),
      precioUsdt: $(" tr:nth-child(3) > td:nth-child(4) > div > span").text(),
      nombreUsdt: $(
        "#__next > div.sc-2fcd5aa6-1.czfcBY.global-layout-v2 > div.main-content > div.cmc-body-wrapper > div > div:nth-child(1) > div.sc-7b3ac367-2.cFnHu > table > tbody > tr:nth-child(3) > td:nth-child(3) > div > a > div > div > div > div > p"
      ).text(),

      imgUsdt: $(
        " tr:nth-child(3) > td:nth-child(3) > div > a > div > img"
      ).attr("src"),
      precioBnb: $(" tr:nth-child(4) > td:nth-child(4) > div > span").text(),
      nombreBnb: $(
        "#__next > div.sc-2fcd5aa6-1.czfcBY.global-layout-v2 > div.main-content > div.cmc-body-wrapper > div > div:nth-child(1) > div.sc-7b3ac367-2.cFnHu > table > tbody > tr:nth-child(4) > td:nth-child(3) > div > a > div > div > div > div > p"
      ).text(),

      imgBnb: $(
        " tr:nth-child(4) > td:nth-child(3) > div > a > div > img"
      ).attr("src"),
      precioSolana: $(" tr:nth-child(4) > td:nth-child(4) > div > span").text(),
      nombreSolana: $(
        "#__next > div.sc-2fcd5aa6-1.czfcBY.global-layout-v2 > div.main-content > div.cmc-body-wrapper > div > div:nth-child(1) > div.sc-7b3ac367-2.cFnHu > table > tbody > tr:nth-child(5) > td:nth-child(3) > div > a > div > div > div > div > p"
      ).text(),
      imgSol: $(
        " #__next > div.sc-2fcd5aa6-1.czfcBY.global-layout-v2 > div.main-content > div.cmc-body-wrapper > div > div:nth-child(1) > div.sc-7b3ac367-2.cFnHu > table > tbody > tr:nth-child(5) > td:nth-child(3) > div > a > div > img"
      ).attr("src"),
      precioUsdc: $(" tr:nth-child(6) > td:nth-child(4) > div > span").text(),
      nombreUsdc: $(
        "#__next > div.sc-2fcd5aa6-1.czfcBY.global-layout-v2 > div.main-content > div.cmc-body-wrapper > div > div:nth-child(1) > div.sc-7b3ac367-2.cFnHu > table > tbody > tr:nth-child(6) > td:nth-child(3) > div > a > div > div > div > div > p"
      ).text(),

      imgUsdc: $(
        " tr:nth-child(6) > td:nth-child(3) > div > a > div > img"
      ).attr("src"),
      precioXrp: $(" tr:nth-child(7) > td:nth-child(4) > div > span").text(),
      nombreXrp: $(
        "#__next > div.sc-2fcd5aa6-1.czfcBY.global-layout-v2 > div.main-content > div.cmc-body-wrapper > div > div:nth-child(1) > div.sc-7b3ac367-2.cFnHu > table > tbody > tr:nth-child(7) > td:nth-child(3) > div > a > div > div > div > div > p"
      ).text(),

      imgXrp: $(
        " tr:nth-child(7) > td:nth-child(3) > div > a > div > img"
      ).attr("src"),
      precioDoge: $(" tr:nth-child(7) > td:nth-child(4) > div > span").text(),
      nombreDoge: $(
        "#__next > div.sc-2fcd5aa6-1.czfcBY.global-layout-v2 > div.main-content > div.cmc-body-wrapper > div > div:nth-child(1) > div.sc-7b3ac367-2.cFnHu > table > tbody > tr:nth-child(7) > td:nth-child(3) > div > a > div > div > div > div > p"
      ).text(),

      imgDoge: $(
        " tr:nth-child(8) > td:nth-child(3) > div > a > div > img"
      ).attr("src"),
      precioTon: $(" tr:nth-child(9) > td:nth-child(4) > div > span").text(),
      nombreTon: $(
        "#__next > div.sc-2fcd5aa6-1.czfcBY.global-layout-v2 > div.main-content > div.cmc-body-wrapper > div > div:nth-child(1) > div.sc-7b3ac367-2.cFnHu > table > tbody > tr:nth-child(7) > td:nth-child(3) > div > a > div > div > div > div > p"
      ).text(),

      imgTon: $(
        " tr:nth-child(9) > td:nth-child(3) > div > a > div > img"
      ).attr("src"),
      precioTrx: $(" tr:nth-child(10) > td:nth-child(4) > div > span").text(),
      nombreTrx: $(
        "#__next > div.sc-2fcd5aa6-1.czfcBY.global-layout-v2 > div.main-content > div.cmc-body-wrapper > div > div:nth-child(1) > div.sc-7b3ac367-2.cFnHu > table > tbody > tr:nth-child(10) > td:nth-child(3) > div > a > div > div > div > div > p"
      ).text(),
      imgTrx: $(
        " tr:nth-child(10) > td:nth-child(3) > div > a > div > img"
      ).attr("src"),
    };
    res.send(precios);
  } catch (err) {
    res.status(500).json({ error: "Error scrapping" });
    console.log(err);
  }
});
app.listen(4000, () => {
  console.log("puerto 400");
});
