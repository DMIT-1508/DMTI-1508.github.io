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
    "revision": "c3f0977ed8dc0816256a6ad564ff2f49"
  },
  {
    "url": "about/index.html",
    "revision": "bc76e691ec34dafc0678fcce8b53f070"
  },
  {
    "url": "about/LOGs.html",
    "revision": "af4f7b9b06345ff45fa5149a258157cb"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "assets/css/0.styles.316da7c1.css",
    "revision": "79df9fb7b905daec151d7a11a00a0fb3"
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
    "url": "assets/js/1.e64e950e.js",
    "revision": "6b619b8984e93fcaafe3799e2c84aa64"
  },
  {
    "url": "assets/js/10.f82ba640.js",
    "revision": "41d6b053e3a5fdbb0418412be26ea5e8"
  },
  {
    "url": "assets/js/11.ee92ea3d.js",
    "revision": "c670a6c3e1d52ca373f634f5e2a0fb9d"
  },
  {
    "url": "assets/js/12.3034fafb.js",
    "revision": "4f34d86213ad7224223873220b687b71"
  },
  {
    "url": "assets/js/13.773231b4.js",
    "revision": "f085674d1d92b0d6a6ae1c996ef646ec"
  },
  {
    "url": "assets/js/14.4b437643.js",
    "revision": "6e0f95992a5d5ddab5a90caf512304cd"
  },
  {
    "url": "assets/js/15.9c2b9073.js",
    "revision": "4872d88715049cfc32711b06e95c6b97"
  },
  {
    "url": "assets/js/16.33b3d9f7.js",
    "revision": "43db57e4c64dddb62d0bb5fe881d3424"
  },
  {
    "url": "assets/js/17.12a9eb21.js",
    "revision": "27d6c5e45407d014d6b1073d8c5fdf99"
  },
  {
    "url": "assets/js/18.bc452688.js",
    "revision": "a15e0a1e1c91d1293333b01780a3c460"
  },
  {
    "url": "assets/js/19.2849a012.js",
    "revision": "92c879f92adc6eb09f428011264f0413"
  },
  {
    "url": "assets/js/2.8d30519d.js",
    "revision": "68c9313a4525fd894a7d40979eca2b6b"
  },
  {
    "url": "assets/js/20.bfbefaf7.js",
    "revision": "2c36acb75f58466beb3a5a5221b7829e"
  },
  {
    "url": "assets/js/21.30e2be4a.js",
    "revision": "390882750f5c42d8e81abbe635bbf6c2"
  },
  {
    "url": "assets/js/22.b059afc5.js",
    "revision": "9dd43454afc64eacf0ee55d5ca3c4843"
  },
  {
    "url": "assets/js/23.38a6b5cb.js",
    "revision": "bc881c817be2454534efe6937ad1247b"
  },
  {
    "url": "assets/js/24.2a357eaa.js",
    "revision": "41f6b406a799d1e3788a6bc4c979895c"
  },
  {
    "url": "assets/js/25.c1b976c9.js",
    "revision": "5b3835af2e0e9ed8b456d97b23dbf28e"
  },
  {
    "url": "assets/js/26.66dd2629.js",
    "revision": "4ac5666a28235c63a23dfb579034b997"
  },
  {
    "url": "assets/js/27.08c7eb6e.js",
    "revision": "8c34decac39b60010dd826d3379a4ba3"
  },
  {
    "url": "assets/js/28.6cd09b0f.js",
    "revision": "73c324ebfce7a39333bbf84ec92a1923"
  },
  {
    "url": "assets/js/29.3d4f4b8d.js",
    "revision": "2a986b7a51ed8638351204d3e19bfda6"
  },
  {
    "url": "assets/js/3.14f93639.js",
    "revision": "2fd72ed76b6359a8b21b2ca77f168f34"
  },
  {
    "url": "assets/js/30.09027881.js",
    "revision": "eeaca479dfb62b787bda84940207dbb9"
  },
  {
    "url": "assets/js/31.c46d8870.js",
    "revision": "2e090d83db40afd649a1304acd678850"
  },
  {
    "url": "assets/js/32.4010ae4c.js",
    "revision": "20871115ce0c3cb04ddf2fe4ee685c5f"
  },
  {
    "url": "assets/js/33.ba05f873.js",
    "revision": "ffb6bb6b2bb18d03f5c770b711ae2e17"
  },
  {
    "url": "assets/js/34.90718075.js",
    "revision": "21ad1e401b7cf516851ae150e5d67de1"
  },
  {
    "url": "assets/js/35.3261e8b5.js",
    "revision": "315fa195375cfc33d1b8404e77895ee9"
  },
  {
    "url": "assets/js/36.53ba2084.js",
    "revision": "0caeaae402c766026961e819f17e1aea"
  },
  {
    "url": "assets/js/37.f43c90cb.js",
    "revision": "72b97a61f8496c177e282ef552f18774"
  },
  {
    "url": "assets/js/38.b615460b.js",
    "revision": "527561d9903d0be7e582b12dc1b03a09"
  },
  {
    "url": "assets/js/39.6880516f.js",
    "revision": "fc236109d74c8114e449e7f7fd3d67b6"
  },
  {
    "url": "assets/js/4.34f9d3ab.js",
    "revision": "0220625ffa43c8fd0b4539d6ff8553b6"
  },
  {
    "url": "assets/js/40.3ea93744.js",
    "revision": "beeb5986c9c63533227659cc5a0a7561"
  },
  {
    "url": "assets/js/41.65314edd.js",
    "revision": "c185e3b3b5b2dc200690abfe30a3d3d9"
  },
  {
    "url": "assets/js/42.cebf08f8.js",
    "revision": "8368cc95fe61173ba8866f9123714e54"
  },
  {
    "url": "assets/js/43.5055b711.js",
    "revision": "939e97b1265cf375d23427f2eb647482"
  },
  {
    "url": "assets/js/44.a6539220.js",
    "revision": "299763d5dc643404d70ddbb1f508ea68"
  },
  {
    "url": "assets/js/45.5749effc.js",
    "revision": "97311b2fb6ca6bef2e978aa2eef9345b"
  },
  {
    "url": "assets/js/46.69818a2c.js",
    "revision": "001d18ec945161ba318148f5d17c52e6"
  },
  {
    "url": "assets/js/47.05437643.js",
    "revision": "f1ca45c60865499cf4dfab5d53a97b6b"
  },
  {
    "url": "assets/js/48.bbd9377b.js",
    "revision": "4c4bd6a6d9c2a464f0f70adb120ab365"
  },
  {
    "url": "assets/js/49.f6079830.js",
    "revision": "a12a9368e7120d4b06cdd27b7de5a223"
  },
  {
    "url": "assets/js/5.0f999e4f.js",
    "revision": "0d98101923ea8bdd11a13e0eab31ba62"
  },
  {
    "url": "assets/js/50.636de021.js",
    "revision": "dfa14398bb8c6ca0c9b23cfe7a26a543"
  },
  {
    "url": "assets/js/51.ce38c283.js",
    "revision": "79e0da5139fdd782b41ba2e6b752c35a"
  },
  {
    "url": "assets/js/52.e1106d30.js",
    "revision": "b449d2af7dd88c2c65838d3810c0df2b"
  },
  {
    "url": "assets/js/53.8a11d994.js",
    "revision": "a633b668adb497225b35b5a6bb7ac85f"
  },
  {
    "url": "assets/js/54.799c2f90.js",
    "revision": "2c3a00a0cc91b9f5662e3b06495f0219"
  },
  {
    "url": "assets/js/55.fa027870.js",
    "revision": "0aa72d3f7435e25d9f49fe31cb0352fa"
  },
  {
    "url": "assets/js/56.14b95743.js",
    "revision": "17f691bc409dee836405057696b40a43"
  },
  {
    "url": "assets/js/57.e711797e.js",
    "revision": "e51b96bb81cfad2d6a5f17a1e259973a"
  },
  {
    "url": "assets/js/58.df8e75f4.js",
    "revision": "d6a620197f4f10998a46cd1389cb8429"
  },
  {
    "url": "assets/js/59.f8f8f379.js",
    "revision": "1bee869384ae29e9c075bc784378884b"
  },
  {
    "url": "assets/js/6.093cd146.js",
    "revision": "86057be4aea9215e87887bc76a61ae45"
  },
  {
    "url": "assets/js/60.1ccffed6.js",
    "revision": "f2de81edd940c575cb25eb6496c26b11"
  },
  {
    "url": "assets/js/61.a90c60b6.js",
    "revision": "cd55933a145a8d7cabf760ceba3c1142"
  },
  {
    "url": "assets/js/62.8d23388b.js",
    "revision": "ba4288037740576ff1717f54b33be0c0"
  },
  {
    "url": "assets/js/63.90c778fd.js",
    "revision": "b585041c4b376d040c4a8505c28c0069"
  },
  {
    "url": "assets/js/64.6d43811b.js",
    "revision": "7a4ca42204c2135d507e9333cf466516"
  },
  {
    "url": "assets/js/65.71c21f7e.js",
    "revision": "c4342a734a3f851f47e3d77aebf1e8b2"
  },
  {
    "url": "assets/js/66.f57e3810.js",
    "revision": "422f19c52340aeec9ed84b69a84fde06"
  },
  {
    "url": "assets/js/67.b4b08ccc.js",
    "revision": "0a8407a1479ff4ce95287d9d71810951"
  },
  {
    "url": "assets/js/68.af2b134c.js",
    "revision": "71a445d1408b00dca5bdd391ec29e563"
  },
  {
    "url": "assets/js/69.59f4727f.js",
    "revision": "78eff009a5557bb7dd8c783c43be177d"
  },
  {
    "url": "assets/js/7.59dbcd1e.js",
    "revision": "5be61cbfa3d614d853d967aa915a273d"
  },
  {
    "url": "assets/js/70.5e318854.js",
    "revision": "5b16f5edb6847d173c05fe3158629ee5"
  },
  {
    "url": "assets/js/8.e966a4b5.js",
    "revision": "018ae8b583a0b410b4dfeb73a07ffa0f"
  },
  {
    "url": "assets/js/9.ef0840b0.js",
    "revision": "4e313f5e81e5f4cdb3c0c3a20c4772fd"
  },
  {
    "url": "assets/js/app.17767c62.js",
    "revision": "39d988f7648e6ba895224cc2174f56aa"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "92cb80aefca16af5ac366acc0d276de7"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "2fbd7f43bed506f03d107c5f75c72f11"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "284cc1cc2755b614320d4901a92a4cad"
  },
  {
    "url": "DDL/createView.html",
    "revision": "2698a60fded762b4cf150c7278bf313c"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "0ba362c935296641b43dfb13b4ad11c8"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "2ffaa79cfd60ea2e4d82921828d4cb6e"
  },
  {
    "url": "DDL/index.html",
    "revision": "dfda29eff0c52f4f5b8db3c915949a0e"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "7526fd900422b98f92da74cc2aed4aac"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "afe4c2e56e68054bac68b75d65d5b17d"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "8a869529f7cf10392ff71d0afeb03dad"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "b0248c0bdfb39de70b5a5153186770a3"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "477d8a9ac2503d55bb38582b271a707f"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "f63ac9bd36d8b45cb4d59326cbfbd6bb"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "e70e9cc4fa062bb1d6bd0d88443fec9d"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "34d82bd27bf5308b1bd969dde97ed937"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "4202994f12fff2535797031a2ec137c0"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "884ba0f352cb5cff2b3299ad6ce1bf98"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "fe76818bab8625d9b8bf1f7a608a0260"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "7856bff25f23b8c0732e814c641900c3"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "88b4b27369c0e37d3b0eaa28215916cc"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "331f1bbfe81d98a4b204c5eb89afcd04"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "9a835429103862fef64168ac43911e9c"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "a93618462bb3bb1dfb0158e6402032af"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "a6344735f09c1a78e6210c2e2b963440"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "18e8e6e85c3e219e58867c01dd4a6916"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "4b8855b130986ffd49e738f2b8689453"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "b9031cdc428c9155d2a76858dd804175"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "9a63fbf34e247d6e6e2a9f805d3ca9c8"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "15a7a10dd7a318f330653337ca9838c9"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "4ba282378ebbf1328e04ff4f979403f7"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "e17643ba7a24a14030b2c719188d4623"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "b78a0a482ba72ac98ef7087bfd65810d"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "02ce166772c4734b5a45fbf5e80e5f6c"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "9184356fb7632896c17c2d31ec29ae0d"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "81161a697b8d5e2d749626f59e3ec842"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "6e4b9f887bdcdb5e198b12275abf9418"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "5e91c16f5859bf2da674a096c4d384da"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "d7f7982f11b3fc1097da1262943cb935"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "bca96f1e367da148a85e75f9e452d3fd"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "d6a394bd634aa9349e6c271b8273f547"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "a9b20cc50fc6688dac2a98fb8a965976"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "58564fd6acc849ba2b662e2f3b577459"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "5b46c101a530280b3ee79e9a141d5652"
  },
  {
    "url": "Design/index.html",
    "revision": "29f7eb75c7e7dba9d98c0753cc084aef"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "4ac88982c26574ae24985706c96d37e6"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "dacc761f62e81ee07f660ccbadae8046"
  },
  {
    "url": "Design/normalization.html",
    "revision": "ecebb0e1028f8432404b1ea96fdcb581"
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
    "revision": "571a64cb75f396a9f7a09242cdfc5307"
  },
  {
    "url": "DML/index.html",
    "revision": "0951ce718c6e82c9ede692bc36ab4b80"
  },
  {
    "url": "DML/insert.html",
    "revision": "c2eb8adbdec87c4d45d4a203cc2ac2c9"
  },
  {
    "url": "DML/update.html",
    "revision": "53ec72872f7c4d473b3ec0659f93443b"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "603ce5d8cfa5ac80bb3439a654a397ae"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "d3e98fe2b9e22411058dedf0d13aaf7c"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "865205d9e13c0eab1a907fb280c15c0c"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "2f098d01fcf3e71e0fccf5df78c7e940"
  },
  {
    "url": "SQL/index.html",
    "revision": "240f6caf4bbebf12467c4242c98c107d"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "3f42315f8ee4967950846de659d621e5"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "a281832d1c3f1f5ad6e3999f2938c312"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "6e1954dbdfff81c6f9f3d63661f5e8e2"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "6da73c1a4fa63a0cce8d552d12ed849f"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "dbb3d625adce0513578cc00f76bf4e18"
  },
  {
    "url": "SQL/unions.html",
    "revision": "8de59fefcc00df2b3fd971387aa347b3"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "edd30b12c4f76c9e15607acfbeacc79e"
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
