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
    "revision": "4c617569a747c446c709771e7144d5b5"
  },
  {
    "url": "about/index.html",
    "revision": "d283bde7a92114aaf74c24367e3bf3d2"
  },
  {
    "url": "about/LOGs.html",
    "revision": "009745296e22da1a930488a6d07c4a85"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "assets/css/0.styles.578485ca.css",
    "revision": "76cc87e587ff7dbba83a2cb6cfa4e9fa"
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
    "url": "assets/js/13.126f531a.js",
    "revision": "1d7246ff37406eff67b2c01083b16727"
  },
  {
    "url": "assets/js/14.eb3e322d.js",
    "revision": "3e2640d4f4a37243275675a4409b19a7"
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
    "url": "assets/js/20.3c4a9608.js",
    "revision": "91e1f544198396ec7295138936d5c88c"
  },
  {
    "url": "assets/js/21.3ce333c9.js",
    "revision": "0084fbfd59c7393a79da9318a1a33562"
  },
  {
    "url": "assets/js/22.4ea86204.js",
    "revision": "f7a38672a0a68b4508187d0c86ca4708"
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
    "url": "assets/js/43.dda10e27.js",
    "revision": "52d317bd2b61748a836a1e8bc6d06ba3"
  },
  {
    "url": "assets/js/44.d82652e8.js",
    "revision": "c872e41e92a0d4bb248e340c40a6c701"
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
    "url": "assets/js/5.219412cc.js",
    "revision": "4e6ed40a30d5db9df39560dc28d0c976"
  },
  {
    "url": "assets/js/50.4aceeeca.js",
    "revision": "b0d518a7ce9a58279305549a6b26540e"
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
    "url": "assets/js/56.5137d2df.js",
    "revision": "1c36c4c068fa314060aad0e5d97fa883"
  },
  {
    "url": "assets/js/57.a897f09f.js",
    "revision": "c048fc8e8fcc64f33008dcfe6674bce1"
  },
  {
    "url": "assets/js/58.0b7c4368.js",
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
    "url": "assets/js/68.b9824158.js",
    "revision": "bcbfeb95500c4d0093c07ba165aadf43"
  },
  {
    "url": "assets/js/69.7fed8bcf.js",
    "revision": "1f7c7e177251e8795b12ed9cc26ddaad"
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
    "url": "assets/js/app.3ff53430.js",
    "revision": "382ece3f7106a258ce11fe5194e9b153"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "63c5a7c845df7269cbf8cf1ec68b3966"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "ede28fd95cb23c7c5b917b1706b645c9"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "41dce23fa5499acd113d245d6d5a3757"
  },
  {
    "url": "DDL/createView.html",
    "revision": "c6aceaa083ec1a81d1c9464bcfa992ad"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "ba214deeaa9484685e5b413a146196a8"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "d5cad2d948602d77fdf30c15125c3b1b"
  },
  {
    "url": "DDL/index.html",
    "revision": "91ee84e74f3c71c99669f0877c5d4b3f"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "f859613ee6c68f4847b35aa21d4f98c2"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "845f83fa41d4853f0cfe9175123aeaeb"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "8e5d88d6263efc49927abda81240ffca"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "99c5aaa08e57b64164f68d0361910931"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "393bb4afd2561c2c1399af4268fecfc4"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "86062804bbb48794d59829820b8e3b30"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "ba2eee6b757e21b63bff6ca8d0e42482"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "7f0489c737e4fb619807e1dfe44eabb6"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "a409026bdc5366c69e04804b12f04463"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "480df0cdf3fda62dd3644eb504f227fd"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "52ccfadddee672916c2fe919e082fdd6"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "0f56033e25272bf66c95d25c74cfa703"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "52fd7d82d5c026bc39fbba81a0b1c028"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "f565fd31b22fdf97fed74da4690cbd08"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "8e9455af5f557f8c0396ac67615a7a17"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "f07dd090a003fa6b6d918fb39a025b1e"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "51bb00ba27bb587c8833fa0b0044f11d"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "22f1ae4eb8e9928f59c1d369e9150b50"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "76858f40c5f269efcb79f3626e0a72d5"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "9729e04ca1dfeeed7be7204eef36d5a9"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "10c6664558d4a1b87ec8a94e8d646078"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "1973ffe9c65f798c608e6c6da8e8d27a"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "a2d81e1fe45736b4f00e0ae52e97a90e"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "058a6a8c3de4d7dba296e273f1a3130d"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "94daf310becc2fad7778f73e59b81da7"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "0a0a1f09afbb5fa571072c2dbb135177"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "a63439369432e422f3a54418fccd0db2"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "28e78ca4822615ac4b90e59192aad54a"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "7e0f4c408cb74560810f02d85a1ff686"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "6d28926b2d2ceae27489ecafed2218be"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "aa95b07c9d678c7dc8378eff531b97a9"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "f00ec6e19312f2d9bf2f31009a469251"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "3364a519933f899610521cc4f3ab79de"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "5bad3af08107c0d33dbc43f72d3ee7e8"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "7d3f942f2fab643517a7dcd5770ff852"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "ade2e509d609621d7397340f9f1437ff"
  },
  {
    "url": "Design/index.html",
    "revision": "091a7805c8241ac2657bddfcb9ff32c7"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "7e197bd546f4b9e1b540069766e3d3fe"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "caf9ed00a7d191156d3390c539c5bc9e"
  },
  {
    "url": "Design/normalization.html",
    "revision": "0f3fb263ad45758a0ca443522aa2c11c"
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
    "revision": "ad281190de5718a95ea142e0275c3baa"
  },
  {
    "url": "DML/index.html",
    "revision": "9d355fc978f2db6e12165726ca0b6f3b"
  },
  {
    "url": "DML/insert.html",
    "revision": "d7eff9c1efb0bf2af24110cdb1c4a234"
  },
  {
    "url": "DML/update.html",
    "revision": "9ea5d3b58d7423148abba449018cd6df"
  },
  {
    "url": "index.html",
    "revision": "2bcb250dd53bbec30f78e1578b3bf469"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "3d1a2170baf2300b5f94f5128267c4d7"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "0b15e7cac965117a32ecb15e20dbafc9"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "2fbf8ecde15f4e1de39b24393815e9d1"
  },
  {
    "url": "SQL/index.html",
    "revision": "1ff1097b46062aec72e5185b5fba549f"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "6131e9ac256b91630c5ef1932f47b269"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "c4488854929c7ba5a06b0901704f68c3"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "e70c101390bfa442624f20bfb1195e11"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "a3e1d44d1f96146dc8eafd44c6c9e655"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "76be2c55cc43a572a29922c5d295df7b"
  },
  {
    "url": "SQL/unions.html",
    "revision": "16932bf96398ba66a1826ddf1d4fde6f"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "cee508c058f0533513d7d4d60862d67d"
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
