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
    "revision": "3147806c48b1023e5e6005566e5dd0ba"
  },
  {
    "url": "about/index.html",
    "revision": "70ef0cb257adcedfe28bff57b68994c8"
  },
  {
    "url": "about/LOGs.html",
    "revision": "72b4573e11c4c58ef34eb2f9de420991"
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
    "url": "assets/js/11.17e43b99.js",
    "revision": "db3f3b79161c4ff3a09c864ba3b01b13"
  },
  {
    "url": "assets/js/12.c5511a4e.js",
    "revision": "40b2da45d483da119e2f92939bdeb437"
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
    "url": "assets/js/15.19ea4cf3.js",
    "revision": "280b167b63eb6580600e58f621250ec6"
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
    "url": "assets/js/18.2fcffc78.js",
    "revision": "030e18d8b13beb60d35ce535dc3908c7"
  },
  {
    "url": "assets/js/19.31a3a612.js",
    "revision": "2713aa133a1fd0ca5013230555e2f1c3"
  },
  {
    "url": "assets/js/2.666d8fcf.js",
    "revision": "fb87bb9aecd720ae2d531a2e77b53fc2"
  },
  {
    "url": "assets/js/20.6328565f.js",
    "revision": "6aeb52eeb03c90a95dad79180f1dfb0a"
  },
  {
    "url": "assets/js/21.ef712c87.js",
    "revision": "9ba392fa82f76624f1da83dbeb00e6f0"
  },
  {
    "url": "assets/js/22.555853bd.js",
    "revision": "1541568668328c8a84958ec04d827f72"
  },
  {
    "url": "assets/js/23.e94f485f.js",
    "revision": "ee5e6619f1ffe949f8e65c6d4881c72b"
  },
  {
    "url": "assets/js/24.c7ae4922.js",
    "revision": "ac77598c0bf9a0475fad678e3fdb059b"
  },
  {
    "url": "assets/js/25.d94cf5cd.js",
    "revision": "f724234a27a85941b5ec3a49e68001ea"
  },
  {
    "url": "assets/js/26.b1a9eac2.js",
    "revision": "db1b9df5353a2ced4b22fafc46e52950"
  },
  {
    "url": "assets/js/27.fe465423.js",
    "revision": "5cefde18ba4fdc79406e1a92aa167969"
  },
  {
    "url": "assets/js/28.0ff91cf0.js",
    "revision": "ae25b8f4f4050bbfa9acaa56f04e2013"
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
    "url": "assets/js/30.dafc59c9.js",
    "revision": "dace5d42a99e7859a5d4c71cb5c3d4e4"
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
    "url": "assets/js/48.9a3bcced.js",
    "revision": "20f2ec9bf5def9b7a51419869930ba40"
  },
  {
    "url": "assets/js/49.d3601617.js",
    "revision": "ba83d61ac97a3cb32cc0625cf6cbab73"
  },
  {
    "url": "assets/js/5.00e30cb7.js",
    "revision": "4fd99cfd5c2c3713e732e8f1e99ac633"
  },
  {
    "url": "assets/js/50.225580f0.js",
    "revision": "e6ce8dfd4b53cbf8cf28e172bdd09d3d"
  },
  {
    "url": "assets/js/51.f0a678d4.js",
    "revision": "6f71ba800a6443518ad81ca90135ea42"
  },
  {
    "url": "assets/js/52.bbbd712f.js",
    "revision": "501e1bbe5e7f2afdf5eccdab2adf4343"
  },
  {
    "url": "assets/js/53.58bad696.js",
    "revision": "ff28759344cab4e29aeb26ccbd805fed"
  },
  {
    "url": "assets/js/54.9cf050b8.js",
    "revision": "ecbca1c9ef35ee0cc52b42b9d07661ba"
  },
  {
    "url": "assets/js/55.f79ef97e.js",
    "revision": "91e3700c26a9321dc573110181292de2"
  },
  {
    "url": "assets/js/56.eeef2e50.js",
    "revision": "b59663fa42dffe24ec8642ef2035f6c0"
  },
  {
    "url": "assets/js/57.ea7a1fbe.js",
    "revision": "12c28c3124deb5fe976d4f7414105c57"
  },
  {
    "url": "assets/js/58.646dee79.js",
    "revision": "286318290593a6e730449c6fd2ddfaa3"
  },
  {
    "url": "assets/js/59.04088cff.js",
    "revision": "ec9a81bf0e84281b3d1d79a93b81bdc0"
  },
  {
    "url": "assets/js/6.17acd366.js",
    "revision": "42142609a58331c36d5d582ccd7bd583"
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
    "url": "assets/js/7.32f13319.js",
    "revision": "875ede8fd543e4b938365e7ba5987d48"
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
    "url": "assets/js/72.6dcc67f4.js",
    "revision": "fc3f9a13a0462f29c4e5106b063ee6fc"
  },
  {
    "url": "assets/js/73.5e17a491.js",
    "revision": "b500bba74a781d8e2c212a15e3e1c4c8"
  },
  {
    "url": "assets/js/74.b488b623.js",
    "revision": "71177644c5d4ff93f3cd5ae43a22d2cf"
  },
  {
    "url": "assets/js/75.0497ff13.js",
    "revision": "f9bec68aeaa16c2cde0343cbc77cf396"
  },
  {
    "url": "assets/js/76.4c691596.js",
    "revision": "59fbd3dae936661aacd8759f9d1daad9"
  },
  {
    "url": "assets/js/77.9eb77702.js",
    "revision": "41f37714f97aaa565bd7ba3210b9b96b"
  },
  {
    "url": "assets/js/8.e8037f87.js",
    "revision": "2b9f7bd47a843a4ae8341d4f7ac3cd2a"
  },
  {
    "url": "assets/js/9.9461268d.js",
    "revision": "dde02cfbde656b713a43d9f893ff3986"
  },
  {
    "url": "assets/js/app.7b1564d1.js",
    "revision": "62c2fb5228d0e5815d21cb65df1e7c18"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "d1d1fdcf81db7b70ab99f7517fd585a2"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "b6941b97a9b251fa0c3e5d93fce3da66"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "b5ffc9fb38350bbdec0cd777aa615386"
  },
  {
    "url": "DDL/createView.html",
    "revision": "6a2aeef6b58926d8eca9d5a1d7c11915"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "78a6319f13207533eef5c78c3ae095f7"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "462e202bc788a327dac3d4a5db07459c"
  },
  {
    "url": "DDL/index.html",
    "revision": "aa385114a96b042b2a5cc5995933c8c8"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "d3c0a386bc875b314861bcbe2a821e7a"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "597219165b23e484e929de33c41ea9d2"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "b37a4df1497227290dbe7a814a4d1e9f"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "05a5724da3e71311cafec28bf22d3f6c"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "d811233c506052d7f3e5915ef8c6b1fb"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "c297a83429fc974703b7d3e34f1d3785"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "21d637a87acc0ee355b89585b42a4a12"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "0f32af228b38ce9eaf06847c68dc8830"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "b76697ea942f1c1c5dad62218d84983b"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "b07b20bb980b4ea9acee00d325ea0b38"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "208db96a1df02a757c8ae61f968a8455"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "89b0abf3aab75cce436da663319fbe06"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "55d4a5e438515a2c3fdf2bfb372a1412"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "dfa409f9b13829af9469308ef0dfe4d1"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "41a98fc06c6b5abe514e210cbb1d9d3a"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerDetails.html",
    "revision": "b593b556956c2e8fd6a47f690a827c3b"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerOrders.html",
    "revision": "fd9a335a9bde61b15e263d272ee671c2"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "a702fd689d10f6fc1f3c02d06eb27bfd"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "25c782970d23692d150a9657c963e055"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "715d5112b704dd37c5425deed040a969"
  },
  {
    "url": "demos/esp/specs/ESP-2-PaymentsLog.html",
    "revision": "f417a45421c34c27785939ccd31859b5"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "7373fb0b15dc863424d13ca8a250e312"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "37f69c68ecc7d455f0b0441428311e58"
  },
  {
    "url": "demos/esp/specs/ESP-3-InventoryControlSheet.html",
    "revision": "41a7e212317d485bd123e4d35257eea7"
  },
  {
    "url": "demos/esp/specs/ESP-3-PurchaseOrders.html",
    "revision": "2ef940a60ae90ba6cd729590e00a821b"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "2fc46b5895a03fae74c797ee0d4b10fb"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "4443cd91d9008572f3a14d1b8ae5c07a"
  },
  {
    "url": "demos/esp/specs/ESP-4-ChequeRegister.html",
    "revision": "1a2fe2c2a7612fbef1361cc4cd66d77d"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "f3b2a733fe48b674ab790d1547cb2f08"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "1d3e18a6c8de5590f7ff423ee453c3d1"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "6f91bc8ed9ad9343ced65d22bc6a4d62"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "269f0e6403ee4bee4c648ec8eb5f3240"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "b36c12cdc65e3e0530be1903fc653508"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "49175c60312912696496bf06a8e5d8c1"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "a0d16fb6141c5cddd422b4c7ad7a2082"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "ff26e95eec1e126735a347493bdf80fd"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "f6e7e6e44e455d3e0cb7cb9423420532"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "0d24609062abcdedb6f5b93ec650b845"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "20f85fa8814f52f117ffe38cb1cc3080"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "72b286b094b1a333cc479889f8ef2758"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "b990f8dd4d6f1b370e7d3ded2d92d42a"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "7724da8861024a5f6c7adf7210ab912d"
  },
  {
    "url": "Design/index.html",
    "revision": "d8c17b72de8fe66f985355688adfade8"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "bb15d925eb581c1e16264e6c0486958b"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "1e08d605e02881759724715ccbfa2916"
  },
  {
    "url": "Design/normalization.html",
    "revision": "c3dc82da2d1b6b7d4a3b0e24cf6173a4"
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
    "revision": "c56d52e0df232d543660eaf737333a22"
  },
  {
    "url": "DML/index.html",
    "revision": "405295e354d94de471e78f9346585d1c"
  },
  {
    "url": "DML/insert.html",
    "revision": "743b1568355180af5c17e12aa3171413"
  },
  {
    "url": "DML/update.html",
    "revision": "5721dae7ab6b10ca1a7c9199ce842a05"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "c5b5111ac0f893771626e0998a97776a"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "596614895b6a91869940697acdd7190e"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "126dfbc139ca218dea8394e807afd3f6"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "24ffeb2976141a40b598bce83037fcbb"
  },
  {
    "url": "SQL/index.html",
    "revision": "328527153f1d39c34ceaf072187197e2"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "2027b00f3e09d4a54b9942ec386afa7f"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "c22ba4f2840d74bbac71efcf14c81745"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "f7d79a2bcb87568acca7c86e02bc4d77"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "cb5a0cbd170cc4d606111a7f3468b17d"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "3e0e51c074b9566cc77d76220c2a330c"
  },
  {
    "url": "SQL/unions.html",
    "revision": "9e3d3a24083dfdd0f04bbeeb157c79df"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "0b82e97467a858a933b94bcdfb2b1026"
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
