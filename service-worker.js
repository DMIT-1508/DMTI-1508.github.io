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
    "revision": "49b84231890b7d2a78ee4fc17b7e402c"
  },
  {
    "url": "about/index.html",
    "revision": "4c7b0857301152bbb9af50204733ee24"
  },
  {
    "url": "about/LOGs.html",
    "revision": "b921e669178e79b5f1bedeff07e2f7a7"
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
    "url": "assets/js/11.96baac79.js",
    "revision": "ecb56d776cfb0fb8d4eb925ca8c2a01c"
  },
  {
    "url": "assets/js/12.37ed3359.js",
    "revision": "452f5a680804ce711bd213377cdfc962"
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
    "url": "assets/js/18.9760de92.js",
    "revision": "9d69996e80bdd79b8d07a25d6f470ea3"
  },
  {
    "url": "assets/js/19.a2d52899.js",
    "revision": "a2372d28c3b438afe00a47015cf277a4"
  },
  {
    "url": "assets/js/2.7faeb479.js",
    "revision": "9716932e7428c0f47b9342055bb668c1"
  },
  {
    "url": "assets/js/20.eb0fcc54.js",
    "revision": "94b24a90bd43119c4f7db3769e4082c6"
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
    "url": "assets/js/54.788ea316.js",
    "revision": "dbe14ba7038c54eef16e3686793528c9"
  },
  {
    "url": "assets/js/55.f08472d2.js",
    "revision": "25e43935199967c7c41acb09ed40ea4c"
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
    "url": "assets/js/6.cd662d0d.js",
    "revision": "87edcf158b6d9f695901ea97be126216"
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
    "url": "assets/js/7.03df078f.js",
    "revision": "04ca48bf171325c0a5328ba9961a1bb2"
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
    "url": "assets/js/8.3772b9fd.js",
    "revision": "2b43a62608097109ea79f235f4bd6643"
  },
  {
    "url": "assets/js/9.f204c2f5.js",
    "revision": "b15604334597819010d62f654c827f8d"
  },
  {
    "url": "assets/js/app.72380d71.js",
    "revision": "c3c0e3f10916848be4892c8406dd70c6"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "abf0ee897c9e7e5554ccec9014c299c3"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "97048f508414c0d491e68e3e21ec4610"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "4ada9791a60150e0202b54e50cdf5cc4"
  },
  {
    "url": "DDL/createView.html",
    "revision": "3351c261eff536623b2b9a3c2a05f0f5"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "6b3e066b737d1f0f717db3ccad4261d0"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "3d680ce732081235fe640db94246b87d"
  },
  {
    "url": "DDL/index.html",
    "revision": "650ac731e64c09b66118db9df45e3347"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "b29a759ada03df72dcb8a782fff16992"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "c15e88339d9c4e5df790d92f20acec2d"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "bc6b32c6c4d42bf47c96ed1b2554843d"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "2c90d370f9e78582014887c873cf14e4"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "6865954c46ec36a18c4d838ba5557416"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "96231818ec39a3fa73e7550426dbc293"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "14a3a7d352e3c45d5f651108e616da0d"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "2f7c30099db0cce5710f27ac14ff4786"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "68c903323ebdc14193cd58d0b50c6051"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "4a9e1e85d58e6dc956b75e709c94f321"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "228bf93d158739d69e4f1db52d434fdf"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "dd67536c0bf9d9a6c0075586fa8a7d9a"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "386c2a73e105ab1dc0f82f8876dd3396"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "56cedf43e3cb260ea50d8853c3e8045e"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "2f11b14c389fa50cfe052ecbbe3af483"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "49fe12b58224cdc10293910ae592b927"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "f8fdacbbeeac077e7f72359fe58455f8"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "b44ea4ade62d5c0e1ff7f77434ea4d01"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "4fb4f6203e7b50fea99654d09787a427"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "d7a1b65c9b1481af2d1ede9040c0ae6d"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "63cc9768bd1274519fd3bfd9f59d5fbf"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "cb4cf72aacadf48d80b04675a1b5b28f"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "4ef907da66d97c88c4b3e44984644a53"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "486ebe023213c0453ec8302ca289c56c"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "dca72e36c2d58187cfa7ac5fa3fa0f8a"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "c62e2221ee89054274373cb55f7c40ee"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "d26c3203b8b60a34d110f0ec1c2d7fc9"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "a8234473711259bbc47e79762f0bdf5a"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "92a7e5da95404bc9263da7bd7ebf3bb9"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "22104eb014d58913d4e831fc1406f70f"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "f95b3e6cc1f333295c88a853c43b7f6c"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "41cb199785f52cae7c552e542a0547c2"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "ae06a9e1206aeb31f95a15bd1d25777a"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "52b58880f01e2106a562aa50ad91995e"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "6881c9ceeac0b205ec79ad1ec0d9179f"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "f5ca8e512bc7cf777d505c3decc25248"
  },
  {
    "url": "Design/index.html",
    "revision": "d930575a53a7f7913b76384017018293"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "f7e34e19f81269a694e558d49bf3dc46"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "489d2e82ac757744a6502a26daaca2cd"
  },
  {
    "url": "Design/normalization.html",
    "revision": "65a4bf11588ded14030f382fe6ab2a9b"
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
    "revision": "f579bcc5f54ce1f4b211065004528302"
  },
  {
    "url": "DML/index.html",
    "revision": "07612b454e0ab0f7d71fde4864e93db3"
  },
  {
    "url": "DML/insert.html",
    "revision": "20861aaddf21cdcc4b2252f37b9ed61e"
  },
  {
    "url": "DML/update.html",
    "revision": "559bd272beb1ff8bcd9f746252ac755a"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "1b6ae100557a8014de93e89141e98048"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "ce72981ccc98a01aa21625eb362009e5"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "9102f1ef1c7a0a378d328d704caa766e"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "4049a588497fd05fa603992fea2cd45a"
  },
  {
    "url": "SQL/index.html",
    "revision": "b32d31697d921e9d4702ab0fe9d723a2"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "d36b193166d88dcbb3ea81259277e02d"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "7dae2e3c2eefef67fbfcd11135e6b5be"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "d65715b05042ce473806a4f26ba4b8ab"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "a5bde490aaf45befcc8c8b458d06603d"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "bfd65e7629ffa5467e41ea6bac0d4334"
  },
  {
    "url": "SQL/unions.html",
    "revision": "bbdb287472ebfffbc11d3f69321d4260"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "6de093b4bd6937497308862fd8313f3e"
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
