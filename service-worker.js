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
    "revision": "43e75bd04276aa09bc17453daa215a58"
  },
  {
    "url": "about/index.html",
    "revision": "00fc4d43bbf0afba8a87b3926916b807"
  },
  {
    "url": "about/LOGs.html",
    "revision": "cf0aaa1efd61bd768ee1f1d93cf13aac"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "assets/css/0.styles.79e5b9b9.css",
    "revision": "b1c0bcfbba046f32f6400dd4d00e0ad2"
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
    "url": "assets/js/32.f094913e.js",
    "revision": "731e2288820ad86fd4c317304a824741"
  },
  {
    "url": "assets/js/33.6f5e5f17.js",
    "revision": "f3f6b9e41434cb1ad44ced45b1ca0cf2"
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
    "url": "assets/js/48.07f88afe.js",
    "revision": "52f06017b2192e2b300bd9c5dca24fde"
  },
  {
    "url": "assets/js/49.a658b10b.js",
    "revision": "e46527dd9d36ce71e59497324a58f862"
  },
  {
    "url": "assets/js/5.24cf48d9.js",
    "revision": "0f33c900da70084646aa015c4d8d784a"
  },
  {
    "url": "assets/js/50.5f88961b.js",
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
    "url": "assets/js/54.0eca6702.js",
    "revision": "e07290bf41c0203a5cb0fc124ccd469b"
  },
  {
    "url": "assets/js/55.51911737.js",
    "revision": "eb518b1c8c541000e9785be957dd56c2"
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
    "url": "assets/js/app.e00673b4.js",
    "revision": "ce395d70c9ce9a7948307f546e436e46"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "b427fc8d685ca68751c6b1671c7f09d0"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "59a60271d72c699ef270b6ee4d7a7929"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "fd8a98b695ac679e394146a960b960bf"
  },
  {
    "url": "DDL/createView.html",
    "revision": "5ec38e26f16be3077afd5619ab9d1a14"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "47926ed5dc2a7f21ef0a5cdea10954c9"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "3d740a047d4d29caf1d67cdb14619949"
  },
  {
    "url": "DDL/index.html",
    "revision": "c61b21d61c0e6d943f22bdd1a6dffcd1"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "c43cd7767261e7df6870ba1c29b323d5"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "6a6743c04d218386ac1cee7ad204f0c2"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "aba14f2115776f92aa48d667207836cf"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "17fed0ce27d64cde927127dfa15a1ff5"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "0f07837cc5c5c15d4481fbfc89bea872"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "f2a37fd4920887ebe5955b53ed546717"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "e3b2b282ccba891d82f317cdf688cb41"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "ce53e1a1844fec03b1029e8987c47e66"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "f67cc0f5cb97d97844c821dc9b538e38"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "7fff0edbdebf8baee528ab10233cee67"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "51d2b824e4d26c43ca709013c3d36951"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "78428c2c30b956e8db002f8fb04e31a1"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "99595405bd349e9d05ce6c179e4a773a"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "664629a6aa07f6ae2a36511f3f6b1500"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "eed956864e8415425a05cddec3f797a2"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "3ebfcf13bb81b13ed921e46dd66908af"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "b378dcb26f53e9ee47bee02aeaa41efe"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "4fe7826d368707156e6bd8b69b8526f9"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "a1f7577bdb2b9a4541db2954c5543f59"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "bca974a2b1aafd61fd351dc027ae4769"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "d99b6d6d4a8742fb2b7e4394d669022d"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "12024a5b5837145b60d97e6edf980e29"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "4b1742e7cd279cce51394598ea5834c3"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "e162033d5766ad8c5d98bcd3d998ce0d"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "eb1cd2c5752dd101122c8e965bf763ac"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "33df0f9b8781b1c2e6f9c4f2f4d32532"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "551118f778d2a9cd534b5472095b97d6"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "da36d09c84aa076ef1b544b364463583"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "700585676139f37e4e72e6f892f0aa05"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "e4142fab437dd7b81c92020541b93b6c"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "ff1247c5f33674b3ed239f4adf4508b1"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "07ea9be2506f482793b6b76bd3f24be8"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "cf9245b5a101419ba01bdbea85942317"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "56da9b6faa02b238d52e622aa1098cca"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "18ed63ffce0fef5b1838e4cd3c7aa0c8"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "ef565bf7a8af211af04e0948a5b2e499"
  },
  {
    "url": "Design/index.html",
    "revision": "6a0a18db0c39d0b12ff1959b8f8a19aa"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "53f1f8b9fb7915e44418a975035e9c32"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "9210a1d2fce7ba610b18272bc266ea56"
  },
  {
    "url": "Design/normalization.html",
    "revision": "b39a932081ee2ada70184df1d603ab79"
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
    "revision": "dc651d596d15ddf5c8ff0a6a85ef208b"
  },
  {
    "url": "DML/index.html",
    "revision": "069bb5195d7ecf631c3f2463e99d2d7e"
  },
  {
    "url": "DML/insert.html",
    "revision": "5f2f9b1dfc9b482b0283a1dd2a02e0f0"
  },
  {
    "url": "DML/update.html",
    "revision": "58a3c8ca37e8c8aa14e30d1fd974a547"
  },
  {
    "url": "index.html",
    "revision": "98afafd00f4cfb62e11607e7296b3138"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "460b21136811bec362e65696e65aaee0"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "7615fb37555c898d747f0b3cdf516e67"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "854fa770bb3e0558c06bb4e8eda3d03a"
  },
  {
    "url": "SQL/index.html",
    "revision": "ebf0378c20e5ee9309516d213ddc2bff"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "bce23f4b572f8a2fb9d82e1b998652d5"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "85797354d100e77705fc6ea74f47e1e9"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "56ecec59c51a4d819338ba64acb6c440"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "540a2271fc27ea15c561eb5d4575b4d7"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "fc93ccaa448a0cd160788bdde5ccd9a5"
  },
  {
    "url": "SQL/unions.html",
    "revision": "93f8b9c8eb6e0287f180d70b67ae2c3d"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "08342b93a320979906e2a24be81bb03c"
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
