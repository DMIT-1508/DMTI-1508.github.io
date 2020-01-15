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
    "revision": "a800bcb050f2fc8673cd866bc0169c54"
  },
  {
    "url": "about/index.html",
    "revision": "f356ced02b161fae85b1e6f9b8a5bb84"
  },
  {
    "url": "about/LOGs.html",
    "revision": "0a4356393425ad75d6c92897112e6f24"
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
    "url": "assets/img/dbms.cc8d824b.png",
    "revision": "cc8d824b5f6bf7ab4ba2356a20c26093"
  },
  {
    "url": "assets/img/DesignProcess.98d3a5b2.png",
    "revision": "98d3a5b2fa237481264b56581a3c0144"
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
    "url": "assets/img/Logical-ERD.0a4805f7.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
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
    "url": "assets/js/10.91a943ed.js",
    "revision": "5f516a3362e273af35394d2134b018d4"
  },
  {
    "url": "assets/js/11.b54f1116.js",
    "revision": "823c11e032e9aefa5f54fc6f46d2a3a3"
  },
  {
    "url": "assets/js/12.3c4b206e.js",
    "revision": "5a3207037c2ecd5646f147b772558ccf"
  },
  {
    "url": "assets/js/13.625a02d6.js",
    "revision": "a98ddd3d392b4b65832e6b37abaac1bb"
  },
  {
    "url": "assets/js/14.60ea06f9.js",
    "revision": "9e2e3ed456aa1d0a7ba6bb88b832fd79"
  },
  {
    "url": "assets/js/15.69f87505.js",
    "revision": "9ca5231439525efc60d17eba39e0df18"
  },
  {
    "url": "assets/js/16.31862bfa.js",
    "revision": "74f7e2ab3890ac83e993b2c2b835ca79"
  },
  {
    "url": "assets/js/17.5f3fc0cc.js",
    "revision": "0e7641be2e5fc3779c6ad11853a1f46a"
  },
  {
    "url": "assets/js/18.9d456ba4.js",
    "revision": "52d73ccd845f87ddcdeaf4249c9b6929"
  },
  {
    "url": "assets/js/19.ffec2347.js",
    "revision": "588a993b9ac0d5f3f8345fce2a44968d"
  },
  {
    "url": "assets/js/2.7faeb479.js",
    "revision": "9716932e7428c0f47b9342055bb668c1"
  },
  {
    "url": "assets/js/20.5661f061.js",
    "revision": "9c4bf98c7f287b45a77f8c0f878f6591"
  },
  {
    "url": "assets/js/21.6c33d15d.js",
    "revision": "caf414dfd2180e198a6a1e4c6bbd5d9e"
  },
  {
    "url": "assets/js/22.6509fe12.js",
    "revision": "b50670d704183284d3dc6c47c6322196"
  },
  {
    "url": "assets/js/23.d80e1ec0.js",
    "revision": "a6f40cb8b16f0acf9bb84f1b8cb53cc7"
  },
  {
    "url": "assets/js/24.acbb08b8.js",
    "revision": "3f27cab1690e95f13aef343e9ffe10e8"
  },
  {
    "url": "assets/js/25.dc808bd3.js",
    "revision": "83e26980c94f8c0355ebc816c7cba094"
  },
  {
    "url": "assets/js/26.577bd278.js",
    "revision": "32f0326b1e27f38cda72e41929042118"
  },
  {
    "url": "assets/js/27.8c2c4db1.js",
    "revision": "09593a9451167984e18731477fb491c4"
  },
  {
    "url": "assets/js/28.d838309e.js",
    "revision": "94a8b888b261e16b6245185e2614fb66"
  },
  {
    "url": "assets/js/29.c4af60cc.js",
    "revision": "00d4b9585e461b03945dac0f301cb5bb"
  },
  {
    "url": "assets/js/3.89cc15ef.js",
    "revision": "ac775e70fc2f4129fee4e7152fe7cad3"
  },
  {
    "url": "assets/js/30.7839e170.js",
    "revision": "605d8ce04aeba416035a73e64ad0102c"
  },
  {
    "url": "assets/js/31.9e8d72e0.js",
    "revision": "58e90fb5191a15a3b5bf7bac0b7f9635"
  },
  {
    "url": "assets/js/32.6cc3d055.js",
    "revision": "232fecb56565a4aa45972c5d07c8d08e"
  },
  {
    "url": "assets/js/33.c29ace0c.js",
    "revision": "cea17df0807502d7a79310a3dfa8c102"
  },
  {
    "url": "assets/js/34.b7726820.js",
    "revision": "f8b5efd0dcc899174dd4d9987bb97a3d"
  },
  {
    "url": "assets/js/35.b8e93cb6.js",
    "revision": "c13f9a00141daf05dfa58415da218c22"
  },
  {
    "url": "assets/js/36.959fe262.js",
    "revision": "7b6f40794ede1b75ac7f0947d9078949"
  },
  {
    "url": "assets/js/37.a86bf960.js",
    "revision": "e56195f8d86cb652cdab4f4114b62800"
  },
  {
    "url": "assets/js/38.07c63ef3.js",
    "revision": "569483eb10c3c57f4d461f8adc39975c"
  },
  {
    "url": "assets/js/39.2fd35744.js",
    "revision": "c57049d7d9e38574c2ac94ef707b7eb0"
  },
  {
    "url": "assets/js/4.cfc32bf0.js",
    "revision": "56ade649836161bfe976163ce791509b"
  },
  {
    "url": "assets/js/40.ce94243e.js",
    "revision": "3f1aed42cefd085c230972ded3e6b18a"
  },
  {
    "url": "assets/js/41.0f78abfc.js",
    "revision": "82b2eb1788d5af15298a5a4543aea4d7"
  },
  {
    "url": "assets/js/42.215e39b5.js",
    "revision": "4dcda061a13cb668cf396f9232b6c3d2"
  },
  {
    "url": "assets/js/43.50633645.js",
    "revision": "10fc17f10d50d547e75a994329ca550b"
  },
  {
    "url": "assets/js/44.9c3d36fb.js",
    "revision": "b96339446de1809e1c8e8db320bc630f"
  },
  {
    "url": "assets/js/45.5f2bbed6.js",
    "revision": "dda0369c49a719a6055fb67d09df2903"
  },
  {
    "url": "assets/js/46.7d4b2a89.js",
    "revision": "de974085611b58c68553d7cd5e53c0ad"
  },
  {
    "url": "assets/js/47.89c1b99d.js",
    "revision": "ef7ec540d6722715f7a66dd926d2c7ae"
  },
  {
    "url": "assets/js/48.b52e531c.js",
    "revision": "e70ef3038c431b00f28908bb265e23c5"
  },
  {
    "url": "assets/js/49.6de55251.js",
    "revision": "9e026c7688662e72258c9d0e6fa6e0c5"
  },
  {
    "url": "assets/js/5.b976183e.js",
    "revision": "360f5a002fd96d8a5c68a8752ce8e8b4"
  },
  {
    "url": "assets/js/50.36421a0b.js",
    "revision": "d282335a0201c79e10eaaebe32c1bdaf"
  },
  {
    "url": "assets/js/51.a92d316a.js",
    "revision": "c64dd9383aff91b9bbf5ee36bd89d6be"
  },
  {
    "url": "assets/js/52.37f4891a.js",
    "revision": "ee62f1643f6498195ed40ce4c70b52d6"
  },
  {
    "url": "assets/js/53.701eadfc.js",
    "revision": "854b9135f64bfbaca2aefc5d376e8cfc"
  },
  {
    "url": "assets/js/54.af07b2e8.js",
    "revision": "0d966eafd796403182aa254f8001e0db"
  },
  {
    "url": "assets/js/55.d7478e5e.js",
    "revision": "f141459b3c6ee1dd57bc12b2ee43e4d3"
  },
  {
    "url": "assets/js/56.6046e11c.js",
    "revision": "d321e0e797a805b80cb5a6421ad1e94e"
  },
  {
    "url": "assets/js/57.15088557.js",
    "revision": "c99c6a2860454cd0294ec61ecfe0e315"
  },
  {
    "url": "assets/js/58.a4cf504d.js",
    "revision": "e24d4d800282b8807a0bdc5a22b4dd83"
  },
  {
    "url": "assets/js/59.c424fd45.js",
    "revision": "f271b32bcb237e78eebb28c2712f7bda"
  },
  {
    "url": "assets/js/6.21f7b4c5.js",
    "revision": "7d34eef3acfd64298054d41130d1310f"
  },
  {
    "url": "assets/js/60.f32d17d0.js",
    "revision": "98648c9c73c091699ac6ae6bd6cc3e8f"
  },
  {
    "url": "assets/js/61.0f1d27e0.js",
    "revision": "d478218891aa33a50d800b466e1fba6c"
  },
  {
    "url": "assets/js/62.831b64d1.js",
    "revision": "85e7489fc3598a40aa8810f5c5ad78ee"
  },
  {
    "url": "assets/js/63.5ee2bf2c.js",
    "revision": "015f5d02b2cf4d4c43fb295783e2d669"
  },
  {
    "url": "assets/js/64.711498a4.js",
    "revision": "0baf1271246684f32bc71d898d5a8f02"
  },
  {
    "url": "assets/js/65.d6a77cf9.js",
    "revision": "bdc5f25af8336ffdec8224420b07c614"
  },
  {
    "url": "assets/js/66.2dad35f7.js",
    "revision": "b81d11b35fe983031a832e5a09f86540"
  },
  {
    "url": "assets/js/67.1b433830.js",
    "revision": "35e017c638e798597f6fe072545762d4"
  },
  {
    "url": "assets/js/68.a66fbf58.js",
    "revision": "7f34e68ff3bc27b2382dee6843379f63"
  },
  {
    "url": "assets/js/69.61e6b753.js",
    "revision": "17b3250a292f432336692d3e6f425043"
  },
  {
    "url": "assets/js/7.bdd30a2d.js",
    "revision": "beb185c4f1e87dec9b384814b0244f51"
  },
  {
    "url": "assets/js/70.4be401c4.js",
    "revision": "b3ac84f3ca996842979bb11a43cb8fa1"
  },
  {
    "url": "assets/js/71.21acf687.js",
    "revision": "5befcad008159ef5b9dba17f0b34be57"
  },
  {
    "url": "assets/js/8.8bcd0981.js",
    "revision": "6caf3a886ee89dd5dd2ef77c4560d5f6"
  },
  {
    "url": "assets/js/9.61681c99.js",
    "revision": "41c359694a1571a2eab0018537ecd637"
  },
  {
    "url": "assets/js/app.9bf29c0e.js",
    "revision": "5ebb159277d054c6d0c10aac892f6930"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "ea8991a32c3ed4512411d88fb7d68edf"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "48cdb2eecbd3db5ac0d0ae9f10ed2ba6"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "2eb08b62d22ebdad293f9242ad6508a2"
  },
  {
    "url": "DDL/createView.html",
    "revision": "c0289cc33b1ac3a29e9b7c368eda1f79"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "c25cb7e6479202e9ad69a41c8c138e29"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "e3a8ddd28dcb594b8e113e0f3d5190bf"
  },
  {
    "url": "DDL/index.html",
    "revision": "fcf95c1c0a3786ef60195cba620d44d7"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "69c60259833f87789c6086cfd0a70fb8"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "4cb5d108e6c3da55b300dc0aea1ce3ff"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "ee9b3702d6924ecf524be3cb3294d7ec"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "09d6f0071ff2e11faf31bcd512613fe6"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "fd8ad041033de577a1bb6b3d5560e704"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "0e18a52e7ead3acd2198e6e4831a56a2"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "6f490923d13147422a5144c52566b421"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "2469fae78d37196e7e55beb5d2b5ffa5"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "8ef6ea0af9f1635f110ee8c8baef1456"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "05743a1716cc61ec9b1f53837b7c46e2"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "96926b37d7804c6f27bbd7f143a365cd"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "9229f3648b8b0f20e960e56e4d5bbab2"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "598381503149850a558c5b10a1ea06b8"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "2ea2fc4fc6185d5f457f3dcddb918b98"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "573757065218b14a65d20b0acf2e429b"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "e1bcfb3c82c4f3d2c69f535f2108adb1"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "5fd21ce16979ac7b53ffc3875502adaa"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "a7554f41cd647c3cb99516136e25fc94"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "bb225d33e5091fced38ba084e85705b5"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "c41def7b90d7d655262c6c58e985536b"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "b359505eb6c7b5f16a16e90dbf81abbe"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "6b8b7dc9042a6614c711525b4bc3076b"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "5cb6962806334b3b706fac8982ed503b"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "84b8bf80400e8685d207bbc185986798"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "1f2c8f93fced7df42af13e2b5b92cc2c"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "2f935a92f6c768dd9335bf03f091ea05"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "4123269d1542ad9a2629721fff4930ca"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "edaf4c9bc04c50f2ff59d090b3f8ac61"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "77147decc67a76bcadc299e4aaa336ca"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "e42310ac5e34736ecb49e68df1b68f45"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "caecc0a1666aa18b8082102705767725"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "a3edd9ce55eabcd002d58755737705e5"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "e7c4691b6cebf0a3f8ee87181b87f157"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "5ec3528bcf9e86d95d3b4cc8147f477a"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "fcf25a5a0a0594e5f4f36c4d663e0de2"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "a1494f36dc8b646b3e415f02d9a3e4ab"
  },
  {
    "url": "Design/index.html",
    "revision": "a79afdec6afe8b0516ae90713130ee0a"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "edbed0abb6508c99877345a423de177d"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "4a42f9fb7ee764834cbb8e2f4c14f4b2"
  },
  {
    "url": "Design/normalization.html",
    "revision": "274fbe7252b295933b8877fcf887e116"
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
    "revision": "f5883abbea5bdbbe05901db3d07ff36e"
  },
  {
    "url": "DML/index.html",
    "revision": "06123ef0c0ab92784ed9a0442c9da657"
  },
  {
    "url": "DML/insert.html",
    "revision": "b99843eafa856740581a01d53f4113b6"
  },
  {
    "url": "DML/update.html",
    "revision": "178ecb8cfd1775591cb55472a1e6e9e4"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "4512e7639afe58895127fe83575404c6"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "68c3f28dfb043b45b6fff20ab86b9da7"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "db8bb2961edfd1b380dba3e847ff721f"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "13eee60a50320f8ed6f4bf78aa88db8d"
  },
  {
    "url": "SQL/index.html",
    "revision": "993653ddc5d18d38c93ad13fde198435"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "4bb16ff61e752158cd038c939a6941f5"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "772218495fa88e6256eeeea18f7542a2"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "e99293543b6796d8ac2ec9e353e237b7"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "16d8e2c8210d23475bcdfa395f69d2f7"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "6cdf89a00b4ea58d47df00c460ed683e"
  },
  {
    "url": "SQL/unions.html",
    "revision": "e745a99a1381c8510561334fb638b22e"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "a8bafd7eeeb7fb8d45920ab47a142fd6"
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
