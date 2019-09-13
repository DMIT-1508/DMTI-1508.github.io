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
    "revision": "3acc6e6c99f6805916dc101a43c38a3c"
  },
  {
    "url": "about/index.html",
    "revision": "bfb9fef7d88a0c7b01320339257c21bc"
  },
  {
    "url": "about/LOGs.html",
    "revision": "0de8276eb380847bb468d13ec4d0afe1"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "assets/css/0.styles.a96377cd.css",
    "revision": "45c4161cace769bfccd2c1f0d315f6d2"
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
    "url": "assets/img/view1.fa1dab5e.png",
    "revision": "fa1dab5eccde499b8ff8a02d5d4cf701"
  },
  {
    "url": "assets/img/view2.440b8485.png",
    "revision": "440b8485c7ea8e4368dc90a0e4834408"
  },
  {
    "url": "assets/js/1.dc025775.js",
    "revision": "e8a327c2ec4384971456ee9df30396d4"
  },
  {
    "url": "assets/js/10.2dce0e33.js",
    "revision": "f1c1d0e4bcf8b2e0433eb4755524718b"
  },
  {
    "url": "assets/js/11.a0012d97.js",
    "revision": "421ac6d28390cb771f3e021387eb2aed"
  },
  {
    "url": "assets/js/12.41b39cb6.js",
    "revision": "fd66fe5e9f10f0f81e45d35d2e083ee8"
  },
  {
    "url": "assets/js/13.5185e165.js",
    "revision": "c8daaf6360b151cdb492ab41e86a2515"
  },
  {
    "url": "assets/js/14.ab0f0b46.js",
    "revision": "35f40003ec3983b3d451a8fac82c1dcd"
  },
  {
    "url": "assets/js/15.9eb5de3f.js",
    "revision": "7b8b844e5700f2fd4bdbc4cab64c3c4b"
  },
  {
    "url": "assets/js/16.660457ff.js",
    "revision": "4d139b5e558b26c44c666228a69a3732"
  },
  {
    "url": "assets/js/17.0c01a66e.js",
    "revision": "421c8ba1b67db0042fe76ba2ff14bf32"
  },
  {
    "url": "assets/js/18.35c87bec.js",
    "revision": "8a21454285f37ac38fc31e0a25845b3e"
  },
  {
    "url": "assets/js/19.12e58cfb.js",
    "revision": "19195a6ec50fefec876e17bab4b9a8a8"
  },
  {
    "url": "assets/js/2.fa38e49b.js",
    "revision": "a3f2d8f8ad5f4575037186287b50d167"
  },
  {
    "url": "assets/js/20.04c15f4c.js",
    "revision": "9c1c60ac4ed0052d575e93d7f616b1b6"
  },
  {
    "url": "assets/js/21.a28c2be3.js",
    "revision": "f3b3a3c0d3c4f7a30081bd22b1c4a53b"
  },
  {
    "url": "assets/js/22.2870532b.js",
    "revision": "924d20af262d7a28bd59f7c664ad162b"
  },
  {
    "url": "assets/js/23.2668a31a.js",
    "revision": "f7d3b99a6bac601200fdb1d6ba39d517"
  },
  {
    "url": "assets/js/24.28396661.js",
    "revision": "2086811cb22291a90a42454870ff3a7d"
  },
  {
    "url": "assets/js/25.e947cf99.js",
    "revision": "2ba306b474a4a6ae6f684832159e4af3"
  },
  {
    "url": "assets/js/26.d920387a.js",
    "revision": "c8d80fc7142950fb8d5046ac3aa0f599"
  },
  {
    "url": "assets/js/27.dec3b092.js",
    "revision": "7d409ae5efaabc74e0657d91b9e22b5e"
  },
  {
    "url": "assets/js/28.d4e58c7b.js",
    "revision": "45d8505e7faac300b50e048457fd22b1"
  },
  {
    "url": "assets/js/29.b3725770.js",
    "revision": "644dc23cb69b73ddf6410cb6f9478aef"
  },
  {
    "url": "assets/js/3.249150de.js",
    "revision": "40d683f1f994d1093963d527b72be0ea"
  },
  {
    "url": "assets/js/30.277018e7.js",
    "revision": "e45c512130b1d38559ebcd1ea247107b"
  },
  {
    "url": "assets/js/31.1c36d19d.js",
    "revision": "07b14a15fc154ab15643920a88ca22b5"
  },
  {
    "url": "assets/js/32.85541070.js",
    "revision": "6f59254e5e883bd3b6610e6bb2c60d0e"
  },
  {
    "url": "assets/js/33.3016cfe0.js",
    "revision": "3109c2fca0191f1f678b9b3ddb9b613a"
  },
  {
    "url": "assets/js/34.7ecab17c.js",
    "revision": "a0f49fcd01dd72d9d9585b29eec43b24"
  },
  {
    "url": "assets/js/35.779af5a1.js",
    "revision": "6f175a80c74eaae29b1a500a19c1189f"
  },
  {
    "url": "assets/js/36.5eca2943.js",
    "revision": "4be426bf8086793b2a4464226ab8bae8"
  },
  {
    "url": "assets/js/37.1cf5878b.js",
    "revision": "ec2bbce3dc933268d1f80fc325651ffa"
  },
  {
    "url": "assets/js/38.d3875e44.js",
    "revision": "f3e3ae97789efae931bfa51b2c3cd24a"
  },
  {
    "url": "assets/js/39.b55d93c4.js",
    "revision": "9be44f6e472cc81d8fbed79babe22baa"
  },
  {
    "url": "assets/js/4.34f9d3ab.js",
    "revision": "0220625ffa43c8fd0b4539d6ff8553b6"
  },
  {
    "url": "assets/js/40.ad270bd5.js",
    "revision": "ca9eb3a5a7fc85775a3d4836a98911de"
  },
  {
    "url": "assets/js/41.c00e986e.js",
    "revision": "52560a0f7ea0c649a3a8ca98295ae2b2"
  },
  {
    "url": "assets/js/42.0720098d.js",
    "revision": "eca9d65bec37bcef23096a99161dca93"
  },
  {
    "url": "assets/js/43.00d3ee07.js",
    "revision": "375dfb06bd270edb7a780f9222f8b1ae"
  },
  {
    "url": "assets/js/44.a305fd8d.js",
    "revision": "ea964a4daecee280ff94c17e9557bfd8"
  },
  {
    "url": "assets/js/45.ca79e2f5.js",
    "revision": "8739a2c8e5bca7454e6bb94a1732f8fc"
  },
  {
    "url": "assets/js/46.14ed7f2c.js",
    "revision": "9967386eab627369a4f45c5fb86637e5"
  },
  {
    "url": "assets/js/47.e0c73412.js",
    "revision": "015c52df3b569986fc18fc4c8d727761"
  },
  {
    "url": "assets/js/48.14684aeb.js",
    "revision": "d5934fdeaf82268f292b653ce0bb931c"
  },
  {
    "url": "assets/js/49.156077e6.js",
    "revision": "76ed1ed44869a8c2c2dcabd9655732e5"
  },
  {
    "url": "assets/js/5.24cf48d9.js",
    "revision": "0f33c900da70084646aa015c4d8d784a"
  },
  {
    "url": "assets/js/50.20fd346e.js",
    "revision": "4a4f0bce41ce452b83df9760c97b078f"
  },
  {
    "url": "assets/js/51.d415e61d.js",
    "revision": "e9c69182f011884af77bb97dbb6bc073"
  },
  {
    "url": "assets/js/52.d7c65ca9.js",
    "revision": "ce06366fb318e0978df111999e0a41e9"
  },
  {
    "url": "assets/js/53.b237f819.js",
    "revision": "3d63a26847e796c955db0027f2eadc6f"
  },
  {
    "url": "assets/js/54.a8b408fa.js",
    "revision": "f27f5c629cd36097eb751743a587843d"
  },
  {
    "url": "assets/js/55.9078508e.js",
    "revision": "13c999a50d4ffd721990647352de26b9"
  },
  {
    "url": "assets/js/56.625cfb71.js",
    "revision": "1c36c4c068fa314060aad0e5d97fa883"
  },
  {
    "url": "assets/js/57.f1c4e72e.js",
    "revision": "c048fc8e8fcc64f33008dcfe6674bce1"
  },
  {
    "url": "assets/js/58.a086e63e.js",
    "revision": "f9d8c0e85fca8b001a111434d9ef9009"
  },
  {
    "url": "assets/js/59.062d5b15.js",
    "revision": "16be7dc53320c4152093420dd7ab974a"
  },
  {
    "url": "assets/js/6.7ecb3584.js",
    "revision": "01559d4b2539699a7eaeecff9353d4cf"
  },
  {
    "url": "assets/js/60.67858fe7.js",
    "revision": "1f19b7774562d87c93c7480052d81e3d"
  },
  {
    "url": "assets/js/61.b9e501be.js",
    "revision": "8b347fb0e03cf9c62c652f1f566fd52f"
  },
  {
    "url": "assets/js/62.281d4369.js",
    "revision": "2d1fb3a657dd43b2a79e57bb92e8afce"
  },
  {
    "url": "assets/js/63.f0174429.js",
    "revision": "cd6802fd0add73991319f769f9657454"
  },
  {
    "url": "assets/js/64.070a85b0.js",
    "revision": "6fb711da7691a106c7e26d10574e1c01"
  },
  {
    "url": "assets/js/65.48be2272.js",
    "revision": "806cb0fec4bf572bbe2e8affa5e4b427"
  },
  {
    "url": "assets/js/66.890930c5.js",
    "revision": "119971d0399d46b181c74eab79fa55f6"
  },
  {
    "url": "assets/js/67.b45468e6.js",
    "revision": "92f9df1d2dea3b23327be0553468feea"
  },
  {
    "url": "assets/js/68.fd3a98c3.js",
    "revision": "3ee6a46da47fdae012b2e8569d5c691d"
  },
  {
    "url": "assets/js/69.2983863a.js",
    "revision": "ad31456ba42c62912a5bcb4e801b5214"
  },
  {
    "url": "assets/js/7.c7eeb577.js",
    "revision": "47ba3c2e01d4473d4e7a13ae97642c98"
  },
  {
    "url": "assets/js/70.e5011d38.js",
    "revision": "a39222778ec1bbc8c0c3ef842ead09c8"
  },
  {
    "url": "assets/js/8.168aff09.js",
    "revision": "e9f564d4fec55c5246c67366266c3501"
  },
  {
    "url": "assets/js/9.8e625da5.js",
    "revision": "bb0dc08730e294aae5c814ddc5d1dc58"
  },
  {
    "url": "assets/js/app.b4dd69f7.js",
    "revision": "a042ad2459e596a2bed383c0b9b0f819"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "6c42064f348b89e46ed99cd417e503ca"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "d9f234c6e8026bfebd1fb4a2b4009ee3"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "0e0f7cb961983fd8d97542aa41e6a957"
  },
  {
    "url": "DDL/createView.html",
    "revision": "40e3159be91a18feff2d5977e6057bcf"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "fa5731155aa16a4928cd4e8812ad9cd0"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "b8a6c3bf43660493bff20558196a21a9"
  },
  {
    "url": "DDL/index.html",
    "revision": "2b940ac96f7e855fade345f533bdd182"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "1c6e6c3ad920a4881a60a86721ded4df"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "f751a647fe399743390e4633eb1b006f"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "3049a1b276029e8cfa1a8d8147c5b569"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "5819184b511e49a881d217efa00c42db"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "5f40b4dc75672fcb35a77482b615c53c"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "26262a1fc35ad49c160542353ac940ca"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "d727819252afdf75df997d025df6e4d8"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "de2b6a052e3811ce96e70f28cd91a82d"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "13ac6d7bb5e72e9b81d4ea6969b33f37"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "a9cc364f188de207f32cdfbd8c875bfa"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "d37b88796378bb6960de3743f5c94957"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "30c235ab30c39d3ed6634fd3b3653fa5"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "905ae6a65c56bc7845960df9da9a2775"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "aace0f71f731cb3479b003bff512c708"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "9903118d80d7ac2b75b7ee507618deb7"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "f2c2fb231989e75914684f9acc81de4f"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "6848460147e05e6c2e835f9fb418ccd2"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "0bc7b745ef4b970d788202b4b0921733"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "68c136e49bdbb9721c09c8e2fa726c01"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "531a4f5db5758cae7a4145a5d64ddb23"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "11e31f0066c400111c17725f9d5cad25"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "de721235b7e8b64d515bf1727e7e966f"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "fede0a6bbe609d172f569c6a76ec9cd9"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "8a4e9a55ce4ff6089e4dd1e71d0d9c7d"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "6ad71e306baca711e352e30239699ef6"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "7b12db65065dba2c0a4fe6dee41f103f"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "854ae133a7d0a1fb0e796291b8c01f36"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "87bad0b0b1424f1ee6ca5c44060827ab"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "49b656373f42473741f3aeaca11cedab"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "adc2a9edea3ac669611d84c5f81607bd"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "96689c1e77dae1365f20e0838c8a9aad"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "a8a84d6ace51cdd3e10a1b328cf90f91"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "9b757d8a608949a6ee6e66b4ff3c3905"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "a27b14b80d9c9a695a2e969544f76bd5"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "ecfcd6aca7f922891ddda715bb5e67c8"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "b8b9de6c17a1aa43c950bb4672e184e7"
  },
  {
    "url": "Design/index.html",
    "revision": "e8d89ad46c0b6fb910c3cd917b0e3585"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "14aa4b545c4a08d57ef862602d7faa59"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "43ca27f21047d354b309fbdbf6b52751"
  },
  {
    "url": "Design/normalization.html",
    "revision": "11d6dd79af1604abd19688fa37e4ae64"
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
    "revision": "d44b1d57a7b560a282839a9d1dc93c34"
  },
  {
    "url": "DML/index.html",
    "revision": "c0e001aadb270eef3b99778c93449aca"
  },
  {
    "url": "DML/insert.html",
    "revision": "25d3a8abf850d2d63e588a425d94f540"
  },
  {
    "url": "DML/update.html",
    "revision": "9f00760404f5b5f5210a2e3cb29ec6df"
  },
  {
    "url": "index.html",
    "revision": "b3fc6cad9b95fff5c98a9e95eff64efa"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "46d096a7fae9f632e0deb3aa8ed2a102"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "ee5a2a5e03c0c08e8f7dc6c3982ead3a"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "27681765b35286817d44fce50ba54411"
  },
  {
    "url": "SQL/index.html",
    "revision": "392d13c43cf7f2773d2959868135fbda"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "1e914cfb4600ecef1b0605ed95ab0584"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "b3d10c274c079b50581a3e681c706878"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "9f06409cc1942303d900f9215366234f"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "058ad03cce1325a295c72a53eacbe215"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "fc3121bf8e0cbcfeba13d1371281732c"
  },
  {
    "url": "SQL/unions.html",
    "revision": "06edc4e0db1e5b9fc50d1f7a299dbb25"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "97322de3819d2e2724ce1f2d564b6504"
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
