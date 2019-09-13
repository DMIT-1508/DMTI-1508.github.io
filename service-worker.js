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
    "revision": "db004282e7e6c67c003c988e7c159902"
  },
  {
    "url": "about/index.html",
    "revision": "f72c4b581077f5e65b4a49392a47a207"
  },
  {
    "url": "about/LOGs.html",
    "revision": "73419a303d70f8b14cb396c6824e9fce"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "assets/css/0.styles.803ba221.css",
    "revision": "4352999e3e3fdf8a77f9b691588d3bbb"
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
    "url": "assets/js/14.ab0f0b46.js",
    "revision": "35f40003ec3983b3d451a8fac82c1dcd"
  },
  {
    "url": "assets/js/15.9eb5de3f.js",
    "revision": "7b8b844e5700f2fd4bdbc4cab64c3c4b"
  },
  {
    "url": "assets/js/16.2372b3aa.js",
    "revision": "ef8260b53b4d58aeec5d760cb6b20bfa"
  },
  {
    "url": "assets/js/17.52de949a.js",
    "revision": "82b706876e206d89979fc2f0eb8a65e0"
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
    "url": "assets/js/20.14caae12.js",
    "revision": "7913729eb7f12699bf953dc5d11d51cf"
  },
  {
    "url": "assets/js/21.aadae43b.js",
    "revision": "e141da9533110b0969751bdf4b83c3d6"
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
    "url": "assets/js/47.401d2741.js",
    "revision": "e9a5d44dc79f26f1dc2c6747aa11697e"
  },
  {
    "url": "assets/js/48.455a8607.js",
    "revision": "2547b206f99a08520435426c134a82b6"
  },
  {
    "url": "assets/js/49.156077e6.js",
    "revision": "76ed1ed44869a8c2c2dcabd9655732e5"
  },
  {
    "url": "assets/js/5.752fb022.js",
    "revision": "7a01f58550f9b0778a4b323e29292e12"
  },
  {
    "url": "assets/js/50.aa50a6f1.js",
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
    "url": "assets/js/6.f4d7846a.js",
    "revision": "8ba2430825c659ed5cdd436ed3d28643"
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
    "url": "assets/js/67.529564af.js",
    "revision": "905d3923220414b003c04fd946391a9f"
  },
  {
    "url": "assets/js/68.8132856c.js",
    "revision": "5bdbed0917164dca76dd3a33348876a2"
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
    "url": "assets/js/app.69275579.js",
    "revision": "34a659fa4a455d636102b6e3824972ec"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "c411b9c1531a386e54a58760e74a4f68"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "af865e82d1bf7a805053327dc0ec5d4c"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "3de464bbd3af561ae2141cea662bdcb3"
  },
  {
    "url": "DDL/createView.html",
    "revision": "3616947a0467f776673289c2f2946117"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "49408f53c792b250c885edd0fe3333ec"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "1fb3f3227aef4ba8507368e025e3e657"
  },
  {
    "url": "DDL/index.html",
    "revision": "f6d74da65efc2dd05cac46d3832984ab"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "3c05c6de9c6cf6b15191b5cbda62ef1e"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "5db74f44ac84c0eb02d291c2fc11d1d2"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "1646597bb41c090539b6773d099b95fb"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "d2fd29765e49b0197b625b66a6b7131b"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "1f23a0f7d5218016a2bb49d4fdb558a2"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "6378cbde8c0b1f8c602d6cc581d3bbf5"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "b2043bd804eec012300ea7f8306ccec5"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "5a0cbdf23cea7e0da6f774394e932b43"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "8eeacefec4842f38c658c0a207cc4a20"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "8a22da06ce4eb310245dc06e7a92c0f6"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "1ac6c2699c082184d9da5cf460c9871b"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "3431f9daff6d45e4bbbf9e79ab2a5231"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "06a83f7ac68369bd5a49e4fa1b3226e6"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "afd3ca51ae2cd6f773b4cb601cdc85c1"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "32ec8f346f4d5ae0d258e8ff0f6f5651"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "72381ef9d209aa219e4e0736e90f56bf"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "cb8fdedfd541662f0351493babed9041"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "4ffd18b1cb5d294aa01c26b73a7f7cfd"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "0929ed1cd1967937aaaae7ac73cdad4e"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "dc3c0e2c5d12eb0b86022631241943aa"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "acfb2f2e5823f8ef76d1cd5cb0148f57"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "5f957f66c22b1df3c7b700a6bd52e747"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "d52d55c2415cdb1fb3dedb577f8ecbf9"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "028fb42d213763e964b8693bfc8cd101"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "4f5cf96fec2fe65dfc9a299270e98173"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "7accaf0adbc05c4240a4ff675aef02a3"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "87becb47b02205e75b95cef4b70825de"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "44ecaa6ec02f25ebbfb5a6a0faa7e41a"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "ff6af656f9151fd8ca9e5cb814f0cc06"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "f19301347f3ded9fbd1f87f2c8847d08"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "730ccb841b3f908ef78b2de884398d38"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "74104b3d7f552e6ecf30f2cbe28bdb6f"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "33276ce63f108c437d4423e2c25ef7b4"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "012482ede847aa1ecbb4a83efcfb1eb5"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "b046f91c64dc451026fc126ef8c746ab"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "2614ee2be79f782855db8902b99342de"
  },
  {
    "url": "Design/index.html",
    "revision": "1f7f1712cacb8843859a356d3da1f145"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "b2a7db70bc14f3a7c8d0921fee41e894"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "fcd842d4ceb3652773683a42b75f1518"
  },
  {
    "url": "Design/normalization.html",
    "revision": "88d6d1f35d1dd94feb481995704bbd4b"
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
    "revision": "9a2e5bbb13f1ca32c363ff544e4f6960"
  },
  {
    "url": "DML/index.html",
    "revision": "b3c09bc5348d7a8001f098d05cedd0b0"
  },
  {
    "url": "DML/insert.html",
    "revision": "efae05e54d4d3498671ee24c4a7d9836"
  },
  {
    "url": "DML/update.html",
    "revision": "884f40f46d9dd9e39e26c08634779874"
  },
  {
    "url": "index.html",
    "revision": "1f28508c6d2c37fae0242c2f4e63366d"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "0b4bd561e4eb8e64f43f9b9e3e9016b9"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "06afcf3248174f3f14d1a32a721105bb"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "3c8da48abb6112077edcbf8d9597ebd1"
  },
  {
    "url": "SQL/index.html",
    "revision": "c13927e39882a545148e1c4587338b4c"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "2abcf268655ba1a43d0fa509ac5ba7cd"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "110e28fc33fca9b480ce658c10148e77"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "e15b6b46260a0d0f4de9940fe81ff60f"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "e4a95fef5ba3b15e6ed366853235a28b"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "feb3dacf10c68f975b04b08e0883beb8"
  },
  {
    "url": "SQL/unions.html",
    "revision": "b4c757a5d5e242e3e37670321c53b6e1"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "c627dada8610b75a69a0d1f246835c9e"
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
