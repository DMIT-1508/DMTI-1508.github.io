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
    "revision": "1fb27f4ac89e888c06e3017395de1588"
  },
  {
    "url": "about/index.html",
    "revision": "8bd93ed29cb5ece0377329a5a725cb25"
  },
  {
    "url": "about/LOGs.html",
    "revision": "a4f70e99681a45711b07972e1c463d03"
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
    "url": "assets/js/23.af4ff776.js",
    "revision": "37ea90eef74189b0bbb076bb64d5d682"
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
    "url": "assets/js/30.767742aa.js",
    "revision": "41f16f95f6a8e8511d08150f28cfff47"
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
    "url": "assets/js/33.869a0313.js",
    "revision": "eff68fe6bd4e9e92f6091c8d71041eb3"
  },
  {
    "url": "assets/js/34.a78cdf0b.js",
    "revision": "0417223d28b0fc75724e0a190fb811f6"
  },
  {
    "url": "assets/js/35.09d61da3.js",
    "revision": "34063bb9bfe3d92eb135abac877c2ba6"
  },
  {
    "url": "assets/js/36.7f6f2385.js",
    "revision": "b2ac0c4a8cf0a36612978885cba8b075"
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
    "url": "assets/js/58.5a270f5e.js",
    "revision": "6efa875d5305ab6c08ef0e75fa60f64e"
  },
  {
    "url": "assets/js/59.c424fd45.js",
    "revision": "f271b32bcb237e78eebb28c2712f7bda"
  },
  {
    "url": "assets/js/6.dddd7b64.js",
    "revision": "028833ce048bbaedec732754c5fb5667"
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
    "url": "assets/js/65.d2764658.js",
    "revision": "f0bb419df02f4b6590b4eb4b02d6347f"
  },
  {
    "url": "assets/js/66.be8e1bfd.js",
    "revision": "b841f522024061f206367aaaa699c933"
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
    "url": "assets/js/app.6853f2a4.js",
    "revision": "9326d49dcc2dec38320e17b0f51a7162"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "66320b8d1e5fb9f4c7ff4f68d67858d1"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "f88360da0f6a8494cf448364f65c2938"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "608038ea683a31f5e83024aa12c33158"
  },
  {
    "url": "DDL/createView.html",
    "revision": "cfdb0f74e159ef74dcfc5723a3f30e96"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "cbea1ce4ba95af0d2761cc2514892c50"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "aa058129d341786cd090a6f2fa95c171"
  },
  {
    "url": "DDL/index.html",
    "revision": "9a11c6f3475f0dce0a977c010c889fb5"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "e22f46c68b6f50a6042d00a26e247a85"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "49326ce0543ab9383b8f3df804bb59b9"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "3a82dba118668216542d93ab7ba7b01a"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "65b0d65ff41c59746dbc5de7164baadb"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "399932f6c089b2666135563106b30cef"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "529021bd4b2b670fe1662b08ee356124"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "b755c34053c56ecee68fc6a664329709"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "40bcfe1576b93b7455602418799dff83"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "6b9742e4a5c4880f9d7daab8b37990e3"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "1405e3bc67b8aad35d4b34998ddf1213"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "8366f1280ea35aff2afe8e874aa031f7"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "849082c65d2a5955b8e4670bf2790f51"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "8edd157d78a24147ea99011f54714f22"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "64427d736f6ca58788b997f761e21ecf"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "1abb1a6a949eedfbad83557153463a01"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "e7a2537f427034700788cccc7174abb1"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "5b6f31a4f26991a0db2e3273b0434946"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "f5f6ba023b61fe32bf0d68973a0f41b5"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "aeba55d54bcfaf9517b7505b5c43b919"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "73af82dd1418a630f93fcb7959c1878f"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "b361e0ffe7e9d991b0f7a2949af83b69"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "13098640878bf5d87c75eba4fdb3b6f4"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "179db219cc90ae21ea991132fc855024"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "917a674890204a784116c9a0ae635f90"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "2d58e948050be023a5abf461092cbfbe"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "b65fd0e2508a361da3ac3df7452223ee"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "0bdd9d91dd6c2f24e5f15eb9510f1cec"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "6e8ea2b03cfa9e155711b511f7cbae24"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "ded248774b967c2eef9f57ca8ff3446c"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "c2fdeca50662beab3f2c7ea49843bfe3"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "d47c860f58a98173f7ba2ee8ab71dccb"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "029ae2cb8bc89e9b3238239ab9574922"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "e93d512622143187cd91b9bae9478d1a"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "7e293bc5e7f711a7d3753d02029e587a"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "a724a73035767e16f7d178c929cf05be"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "3627119f1872378fa2bacfb11d1a6f62"
  },
  {
    "url": "Design/index.html",
    "revision": "559c9944b3123706a770bd2cc16b2a00"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "43d290a682cd661a79d0475ce763ba16"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "09068ee05a9753ecea0f8e23a1f61b4a"
  },
  {
    "url": "Design/normalization.html",
    "revision": "0bf6ae52ab106fe9d47b17d2db50203d"
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
    "revision": "557bb885329da78ef81cf9da4b290edf"
  },
  {
    "url": "DML/index.html",
    "revision": "b1fc4930e23670f386cc18bed33e0d04"
  },
  {
    "url": "DML/insert.html",
    "revision": "4da86e5f7a2e4b2ac74ae29051f973d2"
  },
  {
    "url": "DML/update.html",
    "revision": "845ed7a4abf78eb26c6e142461b640fe"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "33edc09994b3824cdcd235e3712780da"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "de958687845dd75158acf324110f76e0"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "957231f19714a4fd0011738ca5e76792"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "f59488ee3503e462234b8f8e120a59f7"
  },
  {
    "url": "SQL/index.html",
    "revision": "94a8f1bb9609a6324713bda866467599"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "9a14894b7c61221ffb8f55ba085c4755"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "f790b1068e12e7ece77d0186bdc98e50"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "fa030bdc6acac1f3385dcf6f8b04c476"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "46bd3273e21d3ff63732d65927b60ac3"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "a34a11f0d302f46d4e6a025b3655eb00"
  },
  {
    "url": "SQL/unions.html",
    "revision": "240dae03afb63dec5336420c9be5ac4a"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "effd9a46420b0874a60fabc5ad84a598"
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
