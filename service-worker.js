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
    "revision": "4eeb3d5cfde948188cf6f03cdd7316a6"
  },
  {
    "url": "about/index.html",
    "revision": "9985e40166718aa467118d6730130304"
  },
  {
    "url": "about/LOGs.html",
    "revision": "72f39e778631edfd46c7b8fd4dca32ec"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "assets/css/0.styles.a5442244.css",
    "revision": "b25f183c6514385f2376180e877d959a"
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
    "url": "assets/js/10.8a80f91c.js",
    "revision": "4f1a25d6d8464c7db9d1f3286289a310"
  },
  {
    "url": "assets/js/11.70d76304.js",
    "revision": "f9c43d088b3d616d592e179f891b75b5"
  },
  {
    "url": "assets/js/12.54c2be8a.js",
    "revision": "a7fb9ef5dbfbb521c9fe01d60697739d"
  },
  {
    "url": "assets/js/13.ae1e9262.js",
    "revision": "6ff37c56db05259ef835820511257af2"
  },
  {
    "url": "assets/js/14.88c759a1.js",
    "revision": "743b2fb80284ae3e790b6f77bbd698e5"
  },
  {
    "url": "assets/js/15.e47cddf2.js",
    "revision": "1d5ed557dbef321ff9f648de76dc2014"
  },
  {
    "url": "assets/js/16.c60c1403.js",
    "revision": "b4ada974c00e4de3b1715154f8c4c8be"
  },
  {
    "url": "assets/js/17.1a9b5687.js",
    "revision": "65aa828ad7c5bdb76752545de8ded12b"
  },
  {
    "url": "assets/js/18.83b3b1e0.js",
    "revision": "291d1196efd503f65b922790da162e60"
  },
  {
    "url": "assets/js/19.7246e645.js",
    "revision": "1d2b6f8df830b7b51da9162cfe93eacf"
  },
  {
    "url": "assets/js/2.666d8fcf.js",
    "revision": "fb87bb9aecd720ae2d531a2e77b53fc2"
  },
  {
    "url": "assets/js/20.5b23a053.js",
    "revision": "d7eed94a439b5485c2884c06e7a7734e"
  },
  {
    "url": "assets/js/21.ef712c87.js",
    "revision": "9ba392fa82f76624f1da83dbeb00e6f0"
  },
  {
    "url": "assets/js/22.4fd910a8.js",
    "revision": "20b8bde6d26afb231545fd38431e672e"
  },
  {
    "url": "assets/js/23.e94f485f.js",
    "revision": "ee5e6619f1ffe949f8e65c6d4881c72b"
  },
  {
    "url": "assets/js/24.ac899fcf.js",
    "revision": "e5da915ae1034a4ba4336bebac90a1fb"
  },
  {
    "url": "assets/js/25.d94cf5cd.js",
    "revision": "f724234a27a85941b5ec3a49e68001ea"
  },
  {
    "url": "assets/js/26.ac4f5c65.js",
    "revision": "a1d250aa622b0260271377c8d87908a4"
  },
  {
    "url": "assets/js/27.b184a1ba.js",
    "revision": "92446a23d374e76600d35bb067812a42"
  },
  {
    "url": "assets/js/28.970e075b.js",
    "revision": "e9f1be1b96cda93b5bb6177cc905b725"
  },
  {
    "url": "assets/js/29.0cf253f3.js",
    "revision": "6db0bcf64a8cff0967a73d2e319fd756"
  },
  {
    "url": "assets/js/3.a5180923.js",
    "revision": "290a062ef3eb826c689afe252d8b18f4"
  },
  {
    "url": "assets/js/30.fac9e2c6.js",
    "revision": "f8a890e80792ebd5a5f68199a0472288"
  },
  {
    "url": "assets/js/31.f85bf1dd.js",
    "revision": "5c8a2c408054220f20579103638004a9"
  },
  {
    "url": "assets/js/32.d2baa42e.js",
    "revision": "deb904bf5351798b21b06d9ac11abd63"
  },
  {
    "url": "assets/js/33.eb39dabc.js",
    "revision": "4ff84c887711567b2a119e68d82baa1e"
  },
  {
    "url": "assets/js/34.cfddf031.js",
    "revision": "795b2aa94cf69e900de4af89a9a07002"
  },
  {
    "url": "assets/js/35.2d833ac9.js",
    "revision": "1662873fe1481f0a88c5b8fe7dcdc55d"
  },
  {
    "url": "assets/js/36.821694f4.js",
    "revision": "d8a64d8953ba6523fb49fca1c06f770b"
  },
  {
    "url": "assets/js/37.91be4958.js",
    "revision": "d5dc1f651fa605127df1a7fdbb56b346"
  },
  {
    "url": "assets/js/38.c5e4e50f.js",
    "revision": "519c00ddbb9a974f8b36bd17c6e727f3"
  },
  {
    "url": "assets/js/39.c39e069d.js",
    "revision": "b2af690033af8a1439cc076c410283d5"
  },
  {
    "url": "assets/js/4.4bea8e0a.js",
    "revision": "110d61a893c157ad0ad5ba8f6c6a3f5b"
  },
  {
    "url": "assets/js/40.f85f8d86.js",
    "revision": "8b96bba3ba36585f74be513660ecc4eb"
  },
  {
    "url": "assets/js/41.205d99ea.js",
    "revision": "3af8ae6fae224b657e7483a1b1f2657f"
  },
  {
    "url": "assets/js/42.aa6208ae.js",
    "revision": "92e272f57027383829050c060511981e"
  },
  {
    "url": "assets/js/43.f617f461.js",
    "revision": "210af6ddc184241320372154cb904da2"
  },
  {
    "url": "assets/js/44.a56e5c80.js",
    "revision": "5c98ce7f03f19a0a92f17b30611b516b"
  },
  {
    "url": "assets/js/45.5940954d.js",
    "revision": "45c21a5366ba68a55508b5111ed37c4b"
  },
  {
    "url": "assets/js/46.8b68413c.js",
    "revision": "d0569ca40e950928435c1439c13cddc1"
  },
  {
    "url": "assets/js/47.ad8d7ea4.js",
    "revision": "1bd8ac4d30ce78567e0c2967f4743dd2"
  },
  {
    "url": "assets/js/48.115ca116.js",
    "revision": "56b9aed6063be76ae61c04adf68f43ea"
  },
  {
    "url": "assets/js/49.2409a33d.js",
    "revision": "2d7d44fbdbd5796ce0d4091f99452f90"
  },
  {
    "url": "assets/js/5.00e30cb7.js",
    "revision": "4fd99cfd5c2c3713e732e8f1e99ac633"
  },
  {
    "url": "assets/js/50.8c16bcc6.js",
    "revision": "24aa88d7b23ab5e5598d684ff7d6936e"
  },
  {
    "url": "assets/js/51.f0a678d4.js",
    "revision": "6f71ba800a6443518ad81ca90135ea42"
  },
  {
    "url": "assets/js/52.85ccc3f8.js",
    "revision": "06bfd1870ac3dac257c5e91187f14dcb"
  },
  {
    "url": "assets/js/53.2dde59ae.js",
    "revision": "8567ac235945b19fec94afe236de9f37"
  },
  {
    "url": "assets/js/54.0e886cb3.js",
    "revision": "a1c5aa4bd439141eed0496585198dab5"
  },
  {
    "url": "assets/js/55.1021ce06.js",
    "revision": "2a96938bb78270a74fbd4fb190d42727"
  },
  {
    "url": "assets/js/56.19f99a09.js",
    "revision": "d32f5fc918f64fd0de1f61d54d90befd"
  },
  {
    "url": "assets/js/57.e2d02883.js",
    "revision": "7c9cbf3f8abb4fc9b6c62335159c0551"
  },
  {
    "url": "assets/js/58.9c4cf66d.js",
    "revision": "1d1547d3f3cbbb7528cb32675b64b6a9"
  },
  {
    "url": "assets/js/59.5fc5a5bf.js",
    "revision": "53f6262318e76ad7624ff2b6ab374b49"
  },
  {
    "url": "assets/js/6.43f12556.js",
    "revision": "faf0739abacb200eda4191afa275871e"
  },
  {
    "url": "assets/js/60.3625bae1.js",
    "revision": "f37fcd4eaf06018dbe5be3767f8fa049"
  },
  {
    "url": "assets/js/61.ad8cf978.js",
    "revision": "c805a6e4e79968b54aa16063414f2155"
  },
  {
    "url": "assets/js/62.a8242ce8.js",
    "revision": "ec8968224a60fe123ad8a0ec590c083f"
  },
  {
    "url": "assets/js/63.f9702198.js",
    "revision": "35f7fdd8fe987d56e4a2e81c62834cd3"
  },
  {
    "url": "assets/js/64.2ec7ca72.js",
    "revision": "0cfdca6abec65c27d8a02aeb3815339a"
  },
  {
    "url": "assets/js/65.e9b04e9e.js",
    "revision": "32dc6db5fd689f724939b592fa854dec"
  },
  {
    "url": "assets/js/66.e37342ed.js",
    "revision": "c91883754866cc6f2843ff2556da8788"
  },
  {
    "url": "assets/js/67.29a28e4a.js",
    "revision": "37ebe6094e030a457736018397c49303"
  },
  {
    "url": "assets/js/68.a5963712.js",
    "revision": "8140510cff1c6192ddd014265cf8a40b"
  },
  {
    "url": "assets/js/69.143b889a.js",
    "revision": "a8a2f90706c888d90b42b18038e7255e"
  },
  {
    "url": "assets/js/7.c98056c7.js",
    "revision": "798a2afa430888b23caed5cbd1870492"
  },
  {
    "url": "assets/js/70.7e1da2e0.js",
    "revision": "cac4fd8e9dee2d8dbdcc8cdad438eac0"
  },
  {
    "url": "assets/js/71.a789b8cb.js",
    "revision": "d42b2720e96cc8d87b7f22c25fb4f32e"
  },
  {
    "url": "assets/js/72.ebcc3b83.js",
    "revision": "ad9b91216b41457fda824be1b33fbcb0"
  },
  {
    "url": "assets/js/73.0d170c2d.js",
    "revision": "9fb1dab49907d39e6c9eca79ef8a354a"
  },
  {
    "url": "assets/js/74.c8fe185b.js",
    "revision": "895006a1e423dbf89471478bb12609bc"
  },
  {
    "url": "assets/js/75.0497ff13.js",
    "revision": "f9bec68aeaa16c2cde0343cbc77cf396"
  },
  {
    "url": "assets/js/76.150ccd2b.js",
    "revision": "5c1fea9437eb163e730b22c608f8dc5a"
  },
  {
    "url": "assets/js/77.9eb77702.js",
    "revision": "41f37714f97aaa565bd7ba3210b9b96b"
  },
  {
    "url": "assets/js/8.2366dccb.js",
    "revision": "dc3e461f4ab98d20b04beb162d812a1c"
  },
  {
    "url": "assets/js/9.d9cee0a3.js",
    "revision": "db532250c73dbf31da1d67ea2dd9676c"
  },
  {
    "url": "assets/js/app.6cfbe2e4.js",
    "revision": "76f16a340b2c0d9220ffec9116420990"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "31a2153148e1745de1b13491f21d6023"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "2e0f5f8f96df58a3fa273d54af08b58f"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "e9c4e2cf168411ad5a9ada08e357a556"
  },
  {
    "url": "DDL/createView.html",
    "revision": "5bdc2ef8fd03381e41a684d53eafd4a3"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "de05122e70bf206f21e7eb9f557be8bc"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "283d946ac97f883954074161b71a44fd"
  },
  {
    "url": "DDL/index.html",
    "revision": "e1dce2e6ea7a292ed7b28b802357a530"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "b4ec7c0b20cbb0470a923a5f348e7219"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "2b0f6a54514daf35807b5e23177a7ae3"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "e90ef0a60f811d9b05a7e93d9072312e"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "9c7a3d40e1b0f4e01ed4697f390448a3"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "8bc709ca4f5b5b6fadce06483942b735"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "9257ab36dc3bab15ff0e3f6020617344"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "fd7e2506f328e2c39e435368b6d55c68"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "4e59c2501ee26926e3974d646cfeba00"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "94fcd36a1cf932e2d2129789053f0df8"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "d2036bdfa980be2bea33085ea50619e4"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "a462bea8c137ccf0313c977106de07d4"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "4b49820eabecd786ac7eb16d3cb08bcf"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "d3d648e5dfdf8b86c8f50efefa426f68"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "6847dd2e880202d00b3675684836c9bd"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "595f23710b27feaf4d28e17eaccc305b"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerDetails.html",
    "revision": "f468ebe863f8be7a94ffb00110730f70"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerOrders.html",
    "revision": "a0a60016f1dce1451c8e25f51047bc46"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "1cd4be6b673542343fe638df27434d67"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "a790345bc9db01936079b6fc6578d084"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "0a919319cf1b77e9b23d374e2856567d"
  },
  {
    "url": "demos/esp/specs/ESP-2-PaymentsLog.html",
    "revision": "53f13e64596967fc3bc4fe4101e9bbd0"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "a202d269b66e2f6cbea4ef346547b022"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "cd5b9d8bb8f4cbed9268080e1524ff94"
  },
  {
    "url": "demos/esp/specs/ESP-3-InventoryControlSheet.html",
    "revision": "041968dea8e1d65ac8db7a711b12cda2"
  },
  {
    "url": "demos/esp/specs/ESP-3-PurchaseOrders.html",
    "revision": "e389e98b072098e6cef58ac614444f81"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "dfc3ad4bd5cc092a093cf754fd207a9d"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "ae67b9c845958c9ff54a4d27298cbd46"
  },
  {
    "url": "demos/esp/specs/ESP-4-ChequeRegister.html",
    "revision": "a0b93ad2c9cb4fc26d614ceb277a26af"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "f5cfb719b54d670347590e45b9d71ba9"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "98737211b843a68f4472d787710736c4"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "261fbe336d25c1d4b0fd17818c08dbeb"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "4655ef69c4e28e66e8e25c5f2c5faeca"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "441d09ee691462f3f696f847d5d0e64e"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "8c387e74652389605959b762fb45e878"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "c312565d99632481cb3ec7c8fcd288df"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "a08e677b5dceffae1098ccb229b3b5dc"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "c83b8546075783d8aea55ef43ecc41e0"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "75cbc4172ee55db8bc6e1664b53de0c3"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "fb418e768d6c9b0e83d5f5f0e2595f8b"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "2131fb83b3c18929074bf0b9a144ee0e"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "7279010405f553f01ed8d0af9c7632fd"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "abe82f8bb1e05ae80f18e9e72577f0ea"
  },
  {
    "url": "Design/index.html",
    "revision": "805da2c4f3ec6bdcd093838e594aa44e"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "c934c93345e0da2a193d67f546bdd79f"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "0f4d77f173492acb708966c6a4e8f6a2"
  },
  {
    "url": "Design/normalization.html",
    "revision": "009c2eaa232277f80576dcf1f02cb0d0"
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
    "revision": "d0adb867019542059bbe4ce6e5422392"
  },
  {
    "url": "DML/index.html",
    "revision": "769b38549c8a0d06b41152fa71ea693e"
  },
  {
    "url": "DML/insert.html",
    "revision": "9916a4f3485275e42423795b6c6e23f1"
  },
  {
    "url": "DML/update.html",
    "revision": "83ad09c1b8f87fb60685c1baec58565c"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "611b35ea499b4887c89833fbdfb82270"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "131d9627260154f4d81d5271297b7c78"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "901b7f2ca3a4b77627ba378aeea30021"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "c592c0845bb08dab792c9f149a694b7c"
  },
  {
    "url": "SQL/index.html",
    "revision": "85c4466e57912309fa9567c4f7bd1134"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "b08304ac884b2c1a73077377be36ec40"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "f1707a59679230a8875e73d7bea2a575"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "62fb64a3568e6a88c7f63037fad07a67"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "21c925d29add9a4b01cea8ef8a8a25f3"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "1cc4beb3ef04d83fa1a1f76c28487cee"
  },
  {
    "url": "SQL/unions.html",
    "revision": "3efe053b20f549f2d440fe5a7f85e417"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "da9f053200be5371f2d7fd045f2a82ab"
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
