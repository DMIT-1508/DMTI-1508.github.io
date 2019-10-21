/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "27c0c193d4d05775c9e500f0406286b3"
  },
  {
    "url": "about/index.html",
    "revision": "4cadbe59606b8aadd1f6990422988366"
  },
  {
    "url": "about/LOGs.html",
    "revision": "4012da406df9dcd976f3ddfb6eb398ad"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "assets/css/0.styles.f478b41c.css",
    "revision": "3c4a7be98a29f497086db6c6f0306464"
  },
  {
    "url": "assets/img/CustomerOrdersView.6311d5d4.png",
    "revision": "6311d5d419093fd2e1ad7a6b03b308ec"
  },
  {
    "url": "assets/img/ESP-1-ERD-CustomerOrdersView.40628f59.png",
    "revision": "40628f5970c156e3e1c3614ab8353341"
  },
  {
    "url": "assets/img/ESP-2-ERD-PaymentLogView.3f72a51c.png",
    "revision": "3f72a51c875f924d916787c0d69da45d"
  },
  {
    "url": "assets/img/ESP-2-Payments-Log-View-A.60658a0d.png",
    "revision": "60658a0da24855d4a15c767972abbfd8"
  },
  {
    "url": "assets/img/ESP-2-Payments-Log-View-B.38eedb63.png",
    "revision": "38eedb63265a820934ebdcb645f0917d"
  },
  {
    "url": "assets/img/ESP-2-Payments-Log-View-C.57734797.png",
    "revision": "5773479785995bda45c142c6574be0dd"
  },
  {
    "url": "assets/img/ESP-3-ERD-Inventory-Control-View.035f952a.png",
    "revision": "035f952a5c1510c52cfb8063aead6eb2"
  },
  {
    "url": "assets/img/ESP-3-ERD-Purchase-Orders-View.a538692a.png",
    "revision": "a538692a19b1db735c47c22623362e88"
  },
  {
    "url": "assets/img/ESP-3-Inventory-Control-View.a6309142.png",
    "revision": "a63091421adb8b779bd31748de46d211"
  },
  {
    "url": "assets/img/ESP-3-Purchase-Orders-View.56b0efed.png",
    "revision": "56b0efed3a25ca6688515447086bd0a6"
  },
  {
    "url": "assets/img/ESP-4-Cheque-Register-View.b55c141a.png",
    "revision": "b55c141a089c58ca93c4ee1a1a1692f7"
  },
  {
    "url": "assets/img/ESP-4-ERD-Cheque-Register-View.5dce58fc.png",
    "revision": "5dce58fcc57eec752e7059eeda0e4f34"
  },
  {
    "url": "assets/img/ESP-5-ERD-OrderShipment.48f96eda.png",
    "revision": "48f96eda9d4d9e8ad8d95908d38f3e99"
  },
  {
    "url": "assets/img/ESP-5-Order-Shipment-View.6bb435b4.png",
    "revision": "6bb435b4c8168c378bfa599ef80c4632"
  },
  {
    "url": "assets/img/ESP-6-Driver-Details-View.90181f44.png",
    "revision": "90181f44628c808d5658b50eb0fb4a28"
  },
  {
    "url": "assets/img/ESP-6-ERD-Driver-Details-View.a66d7cc0.png",
    "revision": "a66d7cc0c42d116e7e722cb9aa6d4f1a"
  },
  {
    "url": "assets/img/ESP-Merge-With-ESP-3.ffca8ca0.png",
    "revision": "ffca8ca0cc7040a1163e04196c3f3526"
  },
  {
    "url": "assets/img/ESP-Merged-ERD-Physical-Part-1.685f2816.png",
    "revision": "685f281667153030ac47c5dd53a03c98"
  },
  {
    "url": "assets/img/ESP-Merged-ERD-Physical-Part-2.beecb18b.png",
    "revision": "beecb18b0dd7a0f1f9eedd4e3653d2a5"
  },
  {
    "url": "assets/img/ESP-Merged-ERD-Physical-Part-3.9d5b39aa.png",
    "revision": "9d5b39aa64ba764c17acd05a3dd42aaf"
  },
  {
    "url": "assets/img/ESP-Merged-ERD-Physical-Part-4.b375e458.png",
    "revision": "b375e458737fa6b3af034b87361af987"
  },
  {
    "url": "assets/img/ESP-Merged-ERD-Physical.8a64b161.png",
    "revision": "8a64b161121f1b02d0bd8d5a7bd8f3f4"
  },
  {
    "url": "assets/img/ESP-Physical-ERD.8a64b161.png",
    "revision": "8a64b161121f1b02d0bd8d5a7bd8f3f4"
  },
  {
    "url": "assets/img/ESP-Physical-Spec-1.685f2816.png",
    "revision": "685f281667153030ac47c5dd53a03c98"
  },
  {
    "url": "assets/img/ESP-Physical-Spec-2.beecb18b.png",
    "revision": "beecb18b0dd7a0f1f9eedd4e3653d2a5"
  },
  {
    "url": "assets/img/ESP-Physical-Spec-3.9d5b39aa.png",
    "revision": "9d5b39aa64ba764c17acd05a3dd42aaf"
  },
  {
    "url": "assets/img/ESP-Physical-Spec-4.b375e458.png",
    "revision": "b375e458737fa6b3af034b87361af987"
  },
  {
    "url": "assets/img/ESP.fb67f7da.png",
    "revision": "fb67f7da9ac37ca9287672e0a2bd610e"
  },
  {
    "url": "assets/img/IQSchool-ERD.9589c95f.png",
    "revision": "9589c95f711c7726c88b9d1d1cb5c52c"
  },
  {
    "url": "assets/img/IQSchool-ERD.f2f3ede0.png",
    "revision": "f2f3ede04ac83e7ec400ffd56e59f45d"
  },
  {
    "url": "assets/img/Logical-ERD.2053813d.svg",
    "revision": "2053813d8e67dea7ae14019be06aa316"
  },
  {
    "url": "assets/img/Merge-ESP-1and2.cd8ae504.png",
    "revision": "cd8ae50456d45d43430845bcf14ec328"
  },
  {
    "url": "assets/img/SampleForm.9387c4d4.png",
    "revision": "9387c4d460c5493156564791ecaeeb7d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/SQL-Developer.c1d66211.png",
    "revision": "c1d6621182bee5a6440137fbedadb37e"
  },
  {
    "url": "assets/img/view1.fa1dab5e.png",
    "revision": "fa1dab5eccde499b8ff8a02d5d4cf701"
  },
  {
    "url": "assets/img/view2.440b8485.png",
    "revision": "440b8485c7ea8e4368dc90a0e4834408"
  },
  {
    "url": "assets/js/10.5ff0441a.js",
    "revision": "fb7efb29c89a7a08ec98c95fa8778ea4"
  },
  {
    "url": "assets/js/11.d2070140.js",
    "revision": "872719551951d6bfaed9bbf4be903011"
  },
  {
    "url": "assets/js/12.fe968b22.js",
    "revision": "4d2737c4e7793f062b283e39826ebb2c"
  },
  {
    "url": "assets/js/13.f98284d2.js",
    "revision": "809e0e46cc0532d28c669202bc82e6a8"
  },
  {
    "url": "assets/js/14.a15e2898.js",
    "revision": "356ea8fa3646be3e80185fc582876554"
  },
  {
    "url": "assets/js/15.0fc2c706.js",
    "revision": "df832e801e7aa85b7ab5f481196d7db8"
  },
  {
    "url": "assets/js/16.39589c9a.js",
    "revision": "98f1ae4d7f76d1ff140c4b27681ddf33"
  },
  {
    "url": "assets/js/17.904c812e.js",
    "revision": "4df82be8356a991226f44024bb5bf551"
  },
  {
    "url": "assets/js/18.43fc5654.js",
    "revision": "25134d1f017d926e3377958c5fcb6116"
  },
  {
    "url": "assets/js/19.7288f784.js",
    "revision": "959907b72e1d34ec2854dbed3309861e"
  },
  {
    "url": "assets/js/2.1bfd86dc.js",
    "revision": "de71737a709c168200a2c637246f7158"
  },
  {
    "url": "assets/js/20.90e6826a.js",
    "revision": "15feebfe9c7a407a243ee4007396f613"
  },
  {
    "url": "assets/js/21.2a92004b.js",
    "revision": "81f3c3bfa55fda0653b6a59c24b9c7ce"
  },
  {
    "url": "assets/js/22.e6679674.js",
    "revision": "d4137276b503453f6c05018632c1ac07"
  },
  {
    "url": "assets/js/23.ce45819d.js",
    "revision": "eaf3a69b220d1b7d4676cd41936048b8"
  },
  {
    "url": "assets/js/24.e0abc457.js",
    "revision": "8cc5f25e0fa50e234c70772093a91afc"
  },
  {
    "url": "assets/js/25.8c6b5d2a.js",
    "revision": "03891718158ba913a60a742be47a637c"
  },
  {
    "url": "assets/js/26.15e389ef.js",
    "revision": "9c88eff9105834645be08e5f87fc49da"
  },
  {
    "url": "assets/js/27.ed21e2f6.js",
    "revision": "d5f92f4f19ec72bd69450aafcd3ee880"
  },
  {
    "url": "assets/js/28.134829fe.js",
    "revision": "0fc8636ae31fc1400c8b450b303f47ba"
  },
  {
    "url": "assets/js/29.177a5222.js",
    "revision": "40b17a4ca3bb7f2594ef6bd460e59318"
  },
  {
    "url": "assets/js/3.49b99580.js",
    "revision": "1f8a100c447a7b2a5b981de6b33d45f5"
  },
  {
    "url": "assets/js/30.e4229393.js",
    "revision": "90a1481c598a8d3c4db8d5a2ff5d46db"
  },
  {
    "url": "assets/js/31.75ea6454.js",
    "revision": "57c89c3ab4e34890cb88fe02c0a96ee2"
  },
  {
    "url": "assets/js/32.778d187c.js",
    "revision": "3e649c224c2b09e3c83831896102c539"
  },
  {
    "url": "assets/js/33.4bc2b7b0.js",
    "revision": "b1c8ca08d930494fd8dba4c1dcebbce6"
  },
  {
    "url": "assets/js/34.b40b6e5a.js",
    "revision": "671386fd32f65ea6c272be6153959531"
  },
  {
    "url": "assets/js/35.a82e03e9.js",
    "revision": "b3ab216f88772cad1d2a455c13c0f458"
  },
  {
    "url": "assets/js/36.a3cacb6a.js",
    "revision": "38567fddc083794e0b8b7a809e2adb36"
  },
  {
    "url": "assets/js/37.1fe8b1f4.js",
    "revision": "4ba63ee9cc712863652ea1c9b112ab71"
  },
  {
    "url": "assets/js/38.86493fe9.js",
    "revision": "c217f1da98001c78a567183755d1da70"
  },
  {
    "url": "assets/js/39.6ace55d6.js",
    "revision": "e8a4372b105c7fd19f40386c4fd7057e"
  },
  {
    "url": "assets/js/4.b594903e.js",
    "revision": "6305658afd059f775c96beecf21c659f"
  },
  {
    "url": "assets/js/40.73b0c31e.js",
    "revision": "b1d11a98fbcad2acc5aa678c22c79cf3"
  },
  {
    "url": "assets/js/41.529243cb.js",
    "revision": "d1fabf12230a0461000d9c8fd2bcca2d"
  },
  {
    "url": "assets/js/42.d4f570cc.js",
    "revision": "0703dc4e3fe4e249e606a7bf5504be86"
  },
  {
    "url": "assets/js/43.daa07d97.js",
    "revision": "099f49e257d55f1c4fb248c581e7cd81"
  },
  {
    "url": "assets/js/44.9ecd6b0d.js",
    "revision": "15304339b114ba00b47f17da8d15e279"
  },
  {
    "url": "assets/js/45.43748d6f.js",
    "revision": "ecf166f6b46189fe00925a02d826bfc3"
  },
  {
    "url": "assets/js/46.d55f0a81.js",
    "revision": "8ef39bb94c293344b9cf2a9478a1a2ca"
  },
  {
    "url": "assets/js/47.dd8ad39b.js",
    "revision": "cbcf844176ac34f6f35632749e9844c8"
  },
  {
    "url": "assets/js/48.846aa66f.js",
    "revision": "8cdf67aa0594cd78ede338a26c24f6d9"
  },
  {
    "url": "assets/js/49.005a6676.js",
    "revision": "52943a429d962789a1155ad4dc42d2ec"
  },
  {
    "url": "assets/js/5.766ca9db.js",
    "revision": "15bc0262c42f0fbba22a85b902b8dcc5"
  },
  {
    "url": "assets/js/50.b2f07153.js",
    "revision": "226410073ec3cc6ef3baf347e803439b"
  },
  {
    "url": "assets/js/51.9a58a6f9.js",
    "revision": "5ee1f4ee3bc54cdeed444ab35bfaa208"
  },
  {
    "url": "assets/js/52.8f360e4f.js",
    "revision": "5d8a8684e88f023f50347405739caf21"
  },
  {
    "url": "assets/js/53.aff2e32e.js",
    "revision": "814cf89d3280130a31283ec5c3ccdd7f"
  },
  {
    "url": "assets/js/54.39496236.js",
    "revision": "d8ae5f60a26fa8db423cb46c9d906777"
  },
  {
    "url": "assets/js/55.b56d9035.js",
    "revision": "be0c36ac951fade107404217b1ced763"
  },
  {
    "url": "assets/js/56.a22775d8.js",
    "revision": "9bfd6e40ebec474f5352c1f2ecc625dc"
  },
  {
    "url": "assets/js/57.bb5fbe80.js",
    "revision": "d771211cf4bbb1d5201cc9a546e0561c"
  },
  {
    "url": "assets/js/58.74db21c8.js",
    "revision": "5d2d950db39551e40332028877bf7f3d"
  },
  {
    "url": "assets/js/59.9cdfa862.js",
    "revision": "2aca3f2aaa1e19b38e3c2634095daba8"
  },
  {
    "url": "assets/js/6.bfb1556b.js",
    "revision": "3554471729d7683be21a19b1b8e91530"
  },
  {
    "url": "assets/js/60.996dc31f.js",
    "revision": "a6ede5870984f27d9023f0c52c2ae820"
  },
  {
    "url": "assets/js/61.93b65625.js",
    "revision": "6a68d01866f09f10d6b6b77bc17fb7c0"
  },
  {
    "url": "assets/js/62.19a2900a.js",
    "revision": "1c7e9b0cee5622261f18b555055b5fa9"
  },
  {
    "url": "assets/js/63.22000365.js",
    "revision": "9107a5b635696cae8df931c701a60ea1"
  },
  {
    "url": "assets/js/64.4528df3d.js",
    "revision": "33b4b9ac634341673f03761a3bf9f498"
  },
  {
    "url": "assets/js/65.a1bce00b.js",
    "revision": "dd21a6cd90cbb2f2479f50fe23761dc5"
  },
  {
    "url": "assets/js/66.d5f30bb6.js",
    "revision": "b419f342608c614826c5c6e4b9322545"
  },
  {
    "url": "assets/js/67.8c1895a3.js",
    "revision": "04276e28f8c6f280f7e928f2eb12f3b1"
  },
  {
    "url": "assets/js/68.2ac21414.js",
    "revision": "b431b00e7be32a95767cf6381c6708b5"
  },
  {
    "url": "assets/js/69.cad74521.js",
    "revision": "0544ee786e3455b73baedb9f30db7ad6"
  },
  {
    "url": "assets/js/7.89e95296.js",
    "revision": "bdd0f1b568f096af5800952e413685cc"
  },
  {
    "url": "assets/js/70.704eb060.js",
    "revision": "75eb5eb0c4d0f5c5c54dc6ce7907155e"
  },
  {
    "url": "assets/js/71.21acf687.js",
    "revision": "5befcad008159ef5b9dba17f0b34be57"
  },
  {
    "url": "assets/js/8.32acd4c6.js",
    "revision": "5c9c9d1cc7759b3b18831e47003172d1"
  },
  {
    "url": "assets/js/9.7b76c61c.js",
    "revision": "65fb093aab2cb11e2708ac752db5bfc2"
  },
  {
    "url": "assets/js/app.e76809b0.js",
    "revision": "38b7b3e379729cd1a77117ef43a7984c"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "c65bb6191a4be8783a41fff838a25441"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "b16c3118bf6dd04260ba9ece86fa8634"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "7fdf5cd7d95bc84650af11c25d47e8e7"
  },
  {
    "url": "DDL/createView.html",
    "revision": "4d659ab1133e8d6feef3d59f0d59fd71"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "def1a4cfa2d0ca5635cb6455e86ad1eb"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "84fdde79d714a603c06e4d0f4029a897"
  },
  {
    "url": "DDL/index.html",
    "revision": "879d94ef6666126a873c1c2b3e84da29"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "91d614ab01552b611d2d5ee5e297b985"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "68b6e3079a149229408812a3ecdb0db1"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "58baf4e082dc848eef36973a4077e7c3"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "61bdf1e293397572c228de368faf5cd2"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "5f419874052a90e37319c871bcd67429"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "947a91c131ad81903c51935b0c575389"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "69b06d5507574c550c4bea5e634305bc"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "2024380a773d9c8995efe81b3234c8a1"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "9d479a66e208be48f57f40cdacff41a9"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "4b5d2d38e199f09f5888eb2acf461435"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "2f0f9b80bb4f2559024b1b90bd772ca2"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "88c860031b1a10ef0ba48526aa9ca48c"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "46db2772e58e4b2a640df1668b411296"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "f6d66050d69b9fbe5784b22f9ff9f429"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "711cdbe1744d444b91aca7d8ed859510"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "f1594cccc97f583a37adafb4577ac47d"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "057097277cdbc309add016bc4a49fd6c"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "8787fd93fed98e9d06d94076f28e46c8"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "f62d5a902f2eaab8484c82d2992840e1"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "37429328c47c81e302363ff3f92053d2"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "4aab2761bec2be92b5e2eacd05a9040f"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "0cadc058aef3e7d4f1f14080f0bf3c21"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "29283f432006cbd8daaa2019232ab9d7"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "3535691fb3194b7e5a9e394a136d21e9"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "a4f9b4290d0cf330e0f74d687572127b"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "3f7c1d2343486fea5a47158d8f93b6b7"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "4e2720115d15b276a21a965d68a44fdc"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "a57967910965ce2018bd1024caff615d"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "1d72ee69ff059e5681e443c01e330867"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "2e21e41658a07a386b5eb21164712b59"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "dc1187bc1e728b1eb710e98a4ab1a3cd"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "e98d06e258d02f14b329a0584bc023b6"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "b5307f9c5a72de79afd8b40bf2899e0c"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "4a0bbf9a01d19b8520f3240dde3e203e"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "4afb0339eeec56fc800851e5a04ac4d2"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "dc6028abd0d7dd5a59085bc1a08f416f"
  },
  {
    "url": "Design/index.html",
    "revision": "eaa1d0ff5749d5607c151514bedf5f2e"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "f8dc3035cef805353840a941feccaf8d"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "1dfc4c5e85e5af3c514e26ba16eee490"
  },
  {
    "url": "Design/normalization.html",
    "revision": "aa009d47f3ac8101c7887c8da8c945e0"
  },
  {
    "url": "DMIT-1508.github.png",
    "revision": "4387056da54af3d8bbcc0d8b2cc3d2c2"
  },
  {
    "url": "DMIT-1508.png",
    "revision": "4f1e0c3d7fd329e2f9d715429f5f3c23"
  },
  {
    "url": "DML/delete.html",
    "revision": "4326b96aa09af804bb9f99bc83895689"
  },
  {
    "url": "DML/index.html",
    "revision": "adbba87d23d0a5e15aead3bff3a4078d"
  },
  {
    "url": "DML/insert.html",
    "revision": "c9dfcdde319d5419f04547bce5b76155"
  },
  {
    "url": "DML/update.html",
    "revision": "eaa194380445446d2837ef28587ab484"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "cdc8b558eccd6fff01558484b38ed4ac"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "b106398ee118d390564b543b6fca3c25"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "221edf2728c625adbc12bbca823d4914"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "568184e652dc326ff6ccbc1e159187ab"
  },
  {
    "url": "SQL/index.html",
    "revision": "12080fc14fcb288596e1438648427b41"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "0673cceef9413358dd9c2d5a3517c5fa"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "d2a6daa2a73b6057e5b991b7b816b119"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "dd75e678b765fd5362a2e1dd0b1af776"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "23543ed42b1d65d09645fea335b3cca1"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "dddc67699a35624196c667fe9454c8a1"
  },
  {
    "url": "SQL/unions.html",
    "revision": "381b90a3a2b76bb8c70907607e786f3b"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "0d42c463a4e51db76b1a518b16254929"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
