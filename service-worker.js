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
    "revision": "7e447523c7fcbc69b99ffe4dcc5378bf"
  },
  {
    "url": "about/index.html",
    "revision": "562441311da07f8b62d39ce2eecb84eb"
  },
  {
    "url": "about/LOGs.html",
    "revision": "dcd9311d72e9cff0f76307e63d122545"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "assets/css/0.styles.06080a3f.css",
    "revision": "ff6ad9a200e1c129ea5e65d713251210"
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
    "url": "assets/js/13.39fdac54.js",
    "revision": "9db97a6c72109aeaf64f7e838fa5dd68"
  },
  {
    "url": "assets/js/14.6c107dc3.js",
    "revision": "85f83e2a7542419b6f9ddb91098b0160"
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
    "url": "assets/js/18.edec70ef.js",
    "revision": "88696a6929442c2b9bf5e73cae32aad2"
  },
  {
    "url": "assets/js/19.14d93dcd.js",
    "revision": "6e4c3f97ba0b68565a80e6089a777744"
  },
  {
    "url": "assets/js/2.fa38e49b.js",
    "revision": "a3f2d8f8ad5f4575037186287b50d167"
  },
  {
    "url": "assets/js/20.2174aec9.js",
    "revision": "48885c1a250287fc44dac130b24e2356"
  },
  {
    "url": "assets/js/21.87c10045.js",
    "revision": "5c4cfbc759b789b17f31c4c0aacd8d41"
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
    "url": "assets/js/25.fa19f7de.js",
    "revision": "6da6d0fae92123cfadf51c270b83ed52"
  },
  {
    "url": "assets/js/26.c2992801.js",
    "revision": "346b8c2ab1ef7b634e6ccbf4e9118b58"
  },
  {
    "url": "assets/js/27.da5e0844.js",
    "revision": "2005cea219a1075b1ea51ed8a86c5bb3"
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
    "url": "assets/js/5.609404a2.js",
    "revision": "a71950b56545c5af8f51f47fdb291f20"
  },
  {
    "url": "assets/js/50.8942c2f9.js",
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
    "url": "assets/js/53.09e573a9.js",
    "revision": "eaa06fe59184ce42bf4fe3dd765fa8cb"
  },
  {
    "url": "assets/js/54.ed538124.js",
    "revision": "dc7ad45a8a271768a76d51e0c38fbf1f"
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
    "url": "assets/js/app.89e11a1f.js",
    "revision": "2acfbb42f661e996de2484258e5db93e"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "9f3183f37bfc31b9732cd551ad84fedf"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "dc453f976a53c4f0b3075d1a582897e7"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "6c4d645558679167235ca3a293d97a31"
  },
  {
    "url": "DDL/createView.html",
    "revision": "9d0f93c2caebfa8a935b22a682816c17"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "150b2aed4bb7afcdda461c93592b30d9"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "46510c4c83d047f675d03e7f1bdd8a21"
  },
  {
    "url": "DDL/index.html",
    "revision": "3163fc4ed767647b24e126cbcaeeb3c8"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "639a91a84eb0e0958f6e1f8bb1e58a3a"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "868927d13c2cb32f16c1c80439c8274e"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "219ddf0170282ca15aa4ee9b76a1564b"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "067ee4cb2f8c6b98ce0503aecbfac563"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "b45eaf5a755943bb0dcb496940fff3f8"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "b48b39adcbd15139502a798037b66f48"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "24fa61d64789f88156253e361877d4ad"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "598390e83568f2ac1852bfe4c299b7f9"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "6f51ec0204f16f261262f3c1ead04681"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "66a7f25539549857c1306a6e733f83c3"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "a94ce5f6f8b0caaaddb4db3bf049dcd5"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "581f6940b8a90c02875c85efa5bfe3b0"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "2182dd8bae107f6bef63e7396260fb17"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "2a1e5d6a05ace57954d2ef763cc02bdd"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "b1c0e22b6039fc8016f8ce8058c0f7b1"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "09578c1233a0ed530d0647efd51cbb31"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "f051c3b9f85199de0de94cc78ec58102"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "ad808a002a66b55368fd2a8d5700adee"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "83c9f21da82432e75ee701dd76a67e8a"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "e9d0fe926a47f03e27cad66983ee5b45"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "57bf72c0ea83e31b78efdc2c2396684e"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "3ba8fcbb23a000d200e216bc303f8441"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "30cda2b9d80ed293d584a5731691c583"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "03b412996d2d22612ee4e5f6dc439d7d"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "636cf217a7e44311f311fc0a3641b597"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "813622799345371b009b4d618c00f8d1"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "39c77f5bd286a941240d984f99531ae0"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "2743d1f26e4c1364afd7c1232e63bbf6"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "8a0507e82ed10a91bc8c1681cbda07d2"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "217cb4fc7a4a60edf4ffe73fc8eb7f4b"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "63b70e6d8e9eca0fb3a5e881f3a82e84"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "0ff3ca34856f49f9e0bc65272a7816f6"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "2a4ea319e73b23a40c3e0b5420f4fa6b"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "521dee30718412eef65616e3381a5e81"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "8f24455c70e8d9833e882c0d18408b2e"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "1f9d84079cf0bf38da23bf9533146826"
  },
  {
    "url": "Design/index.html",
    "revision": "61d9006f18413861f790abb0c14efb08"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "1d9f68263b7fd5ca521211fe73eb6c7f"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "f4f2d285fcc8fd41ed4f4d1b066434f5"
  },
  {
    "url": "Design/normalization.html",
    "revision": "5ca5b300c3b3080ab1e6fddf7fbfea81"
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
    "revision": "81ab8c7dca6df16fa0f7eb4b628f3e1c"
  },
  {
    "url": "DML/index.html",
    "revision": "fb2119dd6c2acdc385cad40d60a5d94b"
  },
  {
    "url": "DML/insert.html",
    "revision": "e987b6d4bd6f0b0680d07caae85723b5"
  },
  {
    "url": "DML/update.html",
    "revision": "44e9dbdc2476c06c4490f658bc5c62b3"
  },
  {
    "url": "index.html",
    "revision": "295ae569eceba6d78919d51f85bf3a91"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "9c9472e57b1fae7fec27f72560dd75db"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "ae1c24e527b34fff43e2f708ea75c925"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "684182dedd60e768b2950f39e3d63f95"
  },
  {
    "url": "SQL/index.html",
    "revision": "d54b993dc54a6e8ed4597eab4fb37fd0"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "45769a3c82917b3bcd863cf7a47de248"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "48e61aed58df53036d3c42db8b5ee904"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "99012899bffbf384b55b4cedf0f8d532"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "4df42a1c3b672c9f699a946a0525e1f1"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "df5f35a866090f13b7ba7e0716c30463"
  },
  {
    "url": "SQL/unions.html",
    "revision": "de71dc9ed026a327abcbe35f28125c52"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "1af5a83afccac2ee40714c073a5d51d9"
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
