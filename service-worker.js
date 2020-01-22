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
    "revision": "8c8686f681eafc1f58f68353990ea0ef"
  },
  {
    "url": "about/index.html",
    "revision": "29b110a3e4ad5d33f58b088fcaa140a7"
  },
  {
    "url": "about/LOGs.html",
    "revision": "d4f983fe61c8b80e4f13e938271f0e29"
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
    "url": "assets/js/11.27cb3cd5.js",
    "revision": "842136e49622489a7a72c06b58654980"
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
    "url": "assets/js/6.d39ab2f9.js",
    "revision": "95b9ac527ab730a66ef4ea3d3d6b6ecf"
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
    "url": "assets/js/app.9adc6df8.js",
    "revision": "56b2fc419b595e8f44f01033641364fa"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "947dc4cf7ec644c806b739461469527a"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "88f01a0a5f4aa0f574290e5e57ada9d4"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "c57633328eb109e03f5c570c315cc5db"
  },
  {
    "url": "DDL/createView.html",
    "revision": "2313e4121e5a81a8b44dafe234903757"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "e003f9a83e185adcbd50da69b685e7e2"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "b47810f963b9e90840870653bd00003b"
  },
  {
    "url": "DDL/index.html",
    "revision": "f58d06741cf23ed0c29ca7c9022f51ff"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "ce31ccd2fadde4190bcbf23b38382daa"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "8bcf5e27ff1903caf204c3b5978cb6e1"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "4a17c998cb7379fcca6e1cdc2553186b"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "40947a2986f30524a5f5fc49c9afed67"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "db20c307e1a000c0b825095cbfc81b53"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "e3034bb685a8b0f5a5de2eaa4a5e0282"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "3799748c15b5e294aa37f1e4b4811bc0"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "cc518e983f47841ef1291411fe7e2a09"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "63a3b1b7cd59cd08f9718d93564402b1"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "74cb2816da2282af632d83cbdfe3a847"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "120d6dcc0adaf9ae29f8fa187caeb2dd"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "f06f8cc0df2769e06dbaffa48fed05a9"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "aab0d11b3b3d9c7af1ec7355c57cd15a"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "45daff02c86ac6619e3be99a74b7aa5b"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "8ef084ffee822f64c97d5960ac450b94"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "3e350651b6f55f8dc40b9fe9dde4710f"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "66f5da0ae671d0907135047f0ff120e4"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "bc697d2db3b53689644d95f341e9a98a"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "48736ac2c245e73640c31dce90d93f45"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "7607391b7cd1c4fe7f3a544ee454364c"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "7cba793f4f6d5e97e154a295629b5bdc"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "1bdadb1769cd8b91e7de15be17bcfcf7"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "36d95af7dff144cf8dfae092549e7d30"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "7af116a092aec5acbff45413e78f4c0d"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "ea8e7420e70570c8a5f85ab15d467f53"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "2147ddf378bc388b0db7270a64908ff2"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "3ffc27096dcc7c9ef94c090c4882cea0"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "a9b4b0d65cc9f0d4813d14cc0ed4c046"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "42cbee544763c9dad1d7ee062262a107"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "b8b2b6680f64aa0b22b9071d4f5738f7"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "be423bf3fd8d4b3aff5f35f06fd77315"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "c9fb9b44ca925e5b15d20582c2c32142"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "3e30699ae8f083e90cff72e9ecd78a49"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "e07f72c98c4433c02f7d4e6d14acb1e2"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "18853a16903850878bd65a98a344765b"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "398ccb0e38d50d5aeb20f1baf195113b"
  },
  {
    "url": "Design/index.html",
    "revision": "5710952e85555a2dc82378c7c6d5cec3"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "0dd43053bf3d5f720d3d65f3f2725d11"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "d6673aa3f74030e02d42621bfdb8d848"
  },
  {
    "url": "Design/normalization.html",
    "revision": "ae3f8f826035db5950c89432a3b38ce0"
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
    "revision": "4052eec76352195d87e45494a5df5d43"
  },
  {
    "url": "DML/index.html",
    "revision": "972115ea615fa3b4aa29ddffcc681b31"
  },
  {
    "url": "DML/insert.html",
    "revision": "c3a2d19b01d17fb67cc76f6f3c2a859c"
  },
  {
    "url": "DML/update.html",
    "revision": "432ee5f35928d7fac835c718adfec95a"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "50bf9378f10997a6df1cde4136ac409d"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "27f3b507cda369091a63195190f50288"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "b286308a9f44d368777ea4052ec9f307"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "6ee94e4e7ed7182ba198c69230724fac"
  },
  {
    "url": "SQL/index.html",
    "revision": "6061304ca3a4604d39f1313fa45ada91"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "5a5bd9c76aebf61d761d846039b077f0"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "b349384767a03f1d1c4feeb5a1e0bb65"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "38e6ad4bffaef370af5435430231f29a"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "855f17ff25c5b391245eaa131dfa6d31"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "9d170deaea0010ed4a0e2647f1e2534f"
  },
  {
    "url": "SQL/unions.html",
    "revision": "691e3ec1738e8838d80a786e0475d4ec"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "20fa4ec8531c3df13cf1701844de94ef"
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
