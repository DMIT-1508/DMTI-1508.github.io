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
    "revision": "a05a6c0b133c2c9479408355e846b45b"
  },
  {
    "url": "about/index.html",
    "revision": "e7ecf806d686ae03484e27f90b17d142"
  },
  {
    "url": "about/LOGs.html",
    "revision": "db9b675d9d87098460b5e8f70e20c935"
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
    "url": "assets/js/11.d7392b7a.js",
    "revision": "1c7bb3d3568e2d59dc59869cc258adb7"
  },
  {
    "url": "assets/js/12.9d6ef43b.js",
    "revision": "3f578404fe074207c48508943f5d43c5"
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
    "url": "assets/js/16.730c3b7c.js",
    "revision": "9360c899397dbf61e0305e9052652b4b"
  },
  {
    "url": "assets/js/17.5f3fc0cc.js",
    "revision": "0e7641be2e5fc3779c6ad11853a1f46a"
  },
  {
    "url": "assets/js/18.52d5886e.js",
    "revision": "35641ab003eb2ca13e8f55d24fd4fd4c"
  },
  {
    "url": "assets/js/19.7d25d678.js",
    "revision": "5d9864b7b2e780cbe615497ebd6641d9"
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
    "url": "assets/js/24.33833e22.js",
    "revision": "bfec1c57f33707808262bab9cc17833a"
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
    "url": "assets/js/29.7327c9de.js",
    "revision": "bb5e32433fa73511bd95fbbe94d2d3b4"
  },
  {
    "url": "assets/js/3.714ebd85.js",
    "revision": "88265f34fc9f802df97e7712c26cdc7d"
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
    "url": "assets/js/45.1b4691cd.js",
    "revision": "e8f5453262f31bc1934661991be64580"
  },
  {
    "url": "assets/js/46.5ca24e02.js",
    "revision": "e247df4471a0d91153b997ab3f0ef19a"
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
    "url": "assets/js/6.04b4c38a.js",
    "revision": "9bf840eeb7bce39e4598cfdcb8f8394b"
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
    "url": "assets/js/66.83bfd23c.js",
    "revision": "967c88596488a1e26065b2e5d804177d"
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
    "url": "assets/js/69.77460020.js",
    "revision": "902f5966ed525e13220c06c170a03c38"
  },
  {
    "url": "assets/js/7.1a3a97f6.js",
    "revision": "42c95e116945fa680327f8ff14dd22ac"
  },
  {
    "url": "assets/js/70.a437af4e.js",
    "revision": "258142f30d885bd595335749487e1bff"
  },
  {
    "url": "assets/js/71.21acf687.js",
    "revision": "5befcad008159ef5b9dba17f0b34be57"
  },
  {
    "url": "assets/js/8.3902ea1e.js",
    "revision": "77573893e0925864cc4ca80f61336f04"
  },
  {
    "url": "assets/js/9.01f8ec61.js",
    "revision": "6b1f2df4a02729cb12477b1ad0861537"
  },
  {
    "url": "assets/js/app.c1b0ed65.js",
    "revision": "66792086e280334703d8184cb1b737b4"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "af1d359bfd74096694ae8916459fe85a"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "bfee33f326e42ea5ee37cd7c71e356ed"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "bb6d6e0b9ea7affcf49872cc94b5ca96"
  },
  {
    "url": "DDL/createView.html",
    "revision": "99c41bdde6672de28b64e12ed6b68a4a"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "4bba32aa5e959a765cced82f6a5016b6"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "954c85cef0f51c783ccee95db70dbaed"
  },
  {
    "url": "DDL/index.html",
    "revision": "fd505a2fba0c281b171e3f5a2fa28c2b"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "8071c63bc49db17e21a5579e34c7487f"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "5beb8ee023c6c44a19e900c4354c7462"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "d68684e4bf1e83d009424016bab44757"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "f5628b48aa686e543651572a420f3fa9"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "4596af0d29c3f8e7d887a25a5625f6ba"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "002180c9e98f73be70a9d9958df85c87"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "9cfe3ca49f5a94deb4fe9ae4a1548196"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "33bc4474a8fa73144e83fcf4d5e9a509"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "35019248d864f14a1ba7889e18b1fc9e"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "0a8e6dffd41117b4a689b84eb4e3d718"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "f3f19143a5914c0c8bca3836987961c2"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "31c25309187a81342f62750c7a5b2539"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "be951fc4401835df8028fbef1638000c"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "43f641a9b3192bd9ae3454dcc31ad4a2"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "f4aef6e54a0ba6e970593185375dfd2a"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "dbc02048a06f863dfb59ad67fa7718ab"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "6ad1b0a6b6784f544c61b98c0402d41f"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "4f2d315700d37ab2fba003bbe93c9119"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "937ba11761487dbbfc98759390d31122"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "aef4aad3f04b90dcd0f63f6c5ed11472"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "dc70fd92b38f081ca61cecdc66c8f208"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "6598e01a1dc7de1b474a5cd800814a4c"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "9446ac46fa8d78e7dcadd637634100cf"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "2ea87c46c238bc11c9f54a8c5b87f186"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "c6e40b7f9bedd3b28ea7bc15ed9f8c68"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "83ffb86dadb74dffa4b0f4a6888e6b22"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "86070c67433760836c569b4f17fecb94"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "65ee7d16d72d34ffacef56b02cfb826b"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "08b65053180b2a4d03ae656564ba7489"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "2549d51bec2178fcb33729d5b34f4602"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "331f8d4ffae9d7554e47d170632511a4"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "a0ebc0f3f6c2ec3e793a4f37660e0193"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "861ef2c6a52d117995ed3412d00f85f5"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "9b438bdc7518046ca76d574f45d8f885"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "21322fdef84322bac04f7d9ee1881c56"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "194e193d4611633e2b509ff5ab278897"
  },
  {
    "url": "Design/index.html",
    "revision": "d091576153634915b4dec2007d15acc8"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "f650ab09f1ade44a974c0fd09c140860"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "08e4f89bca60ff0de64cec7802d589f2"
  },
  {
    "url": "Design/normalization.html",
    "revision": "5ecf52109bb49f87f4a43aecf27a4ed1"
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
    "revision": "cc26b951908ba8ce86afe355595890f9"
  },
  {
    "url": "DML/index.html",
    "revision": "d2895366a568335db4c6e27c713a8a22"
  },
  {
    "url": "DML/insert.html",
    "revision": "1e0cb40c0ecdb82e044d7288b15fb2e0"
  },
  {
    "url": "DML/update.html",
    "revision": "2db7e087558b2e24541cad393fafa4d0"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "4ec9b150225089246753eb8a37c1524e"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "087b3fe17f16379663e83191f3e7edb1"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "bb556a2a4e3d62a60751efb2757a0085"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "4a2353d235b49b62e18591d9ab76d597"
  },
  {
    "url": "SQL/index.html",
    "revision": "8f07488ad85068c2acf61f99922c8449"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "0fb2890f5ecaea33c18ebaa2fff7b0f5"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "7f84318b84d1cbeb25edf776b8ca0d43"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "b4f1fb6160f4d08ed961644717cc502d"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "2eabeb12ef1d9452d8151e981893cb9f"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "721194ea3d0f8ca6d7604ae5549f1d40"
  },
  {
    "url": "SQL/unions.html",
    "revision": "1e7c85f31eab307be7d28f7724f854de"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "32a2849f5a36fe343cd6ed6e6a547794"
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
