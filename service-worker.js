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
    "revision": "f6a583f0f1cc622138654d53dc8d7aec"
  },
  {
    "url": "about/index.html",
    "revision": "c5408f865a553003fb8692b47e003502"
  },
  {
    "url": "about/LOGs.html",
    "revision": "1593a4459015f9fbe9dc406c423866a4"
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
    "url": "assets/js/11.d18ffc7d.js",
    "revision": "7fe63cd1e2721db987ca6f68042bc8b2"
  },
  {
    "url": "assets/js/12.91d365b6.js",
    "revision": "14d358ab91b7d4461d63c07af012e86e"
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
    "url": "assets/js/5.fe36b90f.js",
    "revision": "65a1ea3add8c8a8ff4b494cf5161b402"
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
    "url": "assets/js/7.71f14d3d.js",
    "revision": "3bbb9d526f772ff2cf05e1d4baa896ed"
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
    "url": "assets/js/8.0bff3f5e.js",
    "revision": "edeacd7eed61c5b76071dec53137ef6c"
  },
  {
    "url": "assets/js/9.79c0c2d6.js",
    "revision": "3cfb07096efbcab274950fdcc14de88c"
  },
  {
    "url": "assets/js/app.6fe2354c.js",
    "revision": "351cbdbddc9dc2bb4c2d1dd58b57317e"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "f125d78b15194d30c8148686073ffcae"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "a1ea98f2662f6bdae44202e4f4549b95"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "d694c0a284772fbb9fc060130b9093c8"
  },
  {
    "url": "DDL/createView.html",
    "revision": "6004929b93ea209063ce1a0f578643f7"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "dbf4dc06fdd940cb0f0241f01db48586"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "28d5156447e3ccc262b8c431ecadd83b"
  },
  {
    "url": "DDL/index.html",
    "revision": "f473a59cd5b5093b1c712b38e2a42131"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "3563fa9a3a7347a20505e5e69401287c"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "3764bb892d5bf879985a5f7d65f3cf42"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "8e7d4e4893922d0b64ebf5a43a231817"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "6630db2f678971ca33df88f09fd27411"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "f7ef22aa2afc10325a8e65d46c09156f"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "58ae1f50989e99df4b6454f44ad29d0a"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "e77eacd85baaa771d103fac61807da57"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "858a7d2dd3f3d7ed3ac6a7ffec2e4e62"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "b68fe0beb39bf01c68cf86a93fab708d"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "ac072e45d8dd3fac4b9461cffae1f54d"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "3bd87d93d96a01c398f82725f5d9c2a7"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "2c968bf6aa141be1d53982bb7402a4af"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "1db4f83af8f95accc55ba83a3d967e47"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "bfdb5b81da0114e782251c77f158d344"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "00df592ecdc4b6911e4abec4179676c5"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "35021a7ad5f91cbf932e1c3983d1abbe"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "6a9cb1e61c4bff4bef78f0294fa9a1d3"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "11ea04963a9cb985d1bdc7a5ee556354"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "2c260e08474937a55856eadc790eb502"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "a604d2f8dae6d1b31b166d847228da42"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "abd1c7220d5ea4bf10f5c5ada467ca68"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "37906fc5598ef9321d12cbd843456800"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "04e5f1d5341ea7691aca01c73fec5038"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "8cf053360377c3f87141d24459d72a47"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "c03f4de4e6b3d9794cb5ea35480ff71e"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "cc285b8fe56f5437a2ab39f36382e582"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "d5f4f80338aa703b59cbc3bef8e4732e"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "b75a916f6975eae1fce6fba1e8df4578"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "c141d68d75cd2b88d5202564ac0ffd02"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "5d7b340dd0acf982126d729afefb92b0"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "bd3a9653f8d80788096c166321e55957"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "3ac8f125fd6c236f5699cba8dc36aab8"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "4f2eb309da9f41aa64ebd42386c916f4"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "8143893e44dd21b86abed5bb957d128a"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "f5df8ae65778313ab2d11f0e7c9e2c03"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "d7dfb8c90bed22a8e8aa10986278c310"
  },
  {
    "url": "Design/index.html",
    "revision": "042e1f9f9c81b127ae76c32b00ab5ca0"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "f2ea9eda1ea1b4171c9e158832513480"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "7bd8199982ac387637b9bcf613e267e8"
  },
  {
    "url": "Design/normalization.html",
    "revision": "fc1e75c1245044e840242ec0cbd994b8"
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
    "revision": "322cc6973951efe8692f6378f9991c1e"
  },
  {
    "url": "DML/index.html",
    "revision": "9a6aaeeb46479689b51f5acf1684f176"
  },
  {
    "url": "DML/insert.html",
    "revision": "4f5a66ec14587fdc5c73d103eea1394d"
  },
  {
    "url": "DML/update.html",
    "revision": "66f32b1704b5053fa8c09185f2168768"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "642344175a9b20332d5d2a5a0d7440c0"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "4937dd106d079747b60477ca6da72842"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "c2c5315b783f39210cf75711a3b3b5a3"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "5504d85113705ab429f1acfe7086f7e8"
  },
  {
    "url": "SQL/index.html",
    "revision": "5829984ee75083e27408e6d19ceee5d5"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "3ef9ca8072eac5ee3bcd110e57a98192"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "e202c18b7a87369fc586f6134c5140c5"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "cc86fbf0b9af0bf6817237235d0b1d36"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "b1fce4e53b013edaa4fd37d3fb621926"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "7df614af67e9a96c2058eb6a0228d3cb"
  },
  {
    "url": "SQL/unions.html",
    "revision": "898cab9f357e3356966935a1411f93d5"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "07dc3af9efd3a8ac8b54ebf7c3023e12"
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
