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
    "revision": "209112aa7605aacd531895577878b0a4"
  },
  {
    "url": "about/index.html",
    "revision": "99b8806d4c4e9ea41880ca334ca00d52"
  },
  {
    "url": "about/LOGs.html",
    "revision": "aa64ebe25f21d2bbb0d6c12037cac7f6"
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
    "url": "assets/js/16.7e624420.js",
    "revision": "11bae6187f2d401264b6da03b127184b"
  },
  {
    "url": "assets/js/17.c133e774.js",
    "revision": "1c0c6e78bc36248acf145d7dc54079cc"
  },
  {
    "url": "assets/js/18.2fcffc78.js",
    "revision": "030e18d8b13beb60d35ce535dc3908c7"
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
    "url": "assets/js/26.b1a9eac2.js",
    "revision": "db1b9df5353a2ced4b22fafc46e52950"
  },
  {
    "url": "assets/js/27.fe465423.js",
    "revision": "5cefde18ba4fdc79406e1a92aa167969"
  },
  {
    "url": "assets/js/28.2d4de562.js",
    "revision": "f37c5fde30a3da3dfd937f1d7a772def"
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
    "url": "assets/js/33.4e1ffb1a.js",
    "revision": "7ae1229650fde65e00f2dca807be54cf"
  },
  {
    "url": "assets/js/34.d24dc573.js",
    "revision": "d90f8b2713f0b07ade259ae5539159e6"
  },
  {
    "url": "assets/js/35.2d833ac9.js",
    "revision": "1662873fe1481f0a88c5b8fe7dcdc55d"
  },
  {
    "url": "assets/js/36.164ee8cf.js",
    "revision": "7b491064a3ca15783caa0b2e7c3896d3"
  },
  {
    "url": "assets/js/37.91be4958.js",
    "revision": "d5dc1f651fa605127df1a7fdbb56b346"
  },
  {
    "url": "assets/js/38.d98c4daa.js",
    "revision": "7bbef07e0912ae528671ba06a73b92ab"
  },
  {
    "url": "assets/js/39.4d2798e2.js",
    "revision": "18b609335f43493ceb98117ef010fd6b"
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
    "url": "assets/js/58.700fd752.js",
    "revision": "f2d73d9a005b56fbace08bedae4418a7"
  },
  {
    "url": "assets/js/59.5fc5a5bf.js",
    "revision": "53f6262318e76ad7624ff2b6ab374b49"
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
    "url": "assets/js/67.781ffaf9.js",
    "revision": "8a62f1c2d52c64747e6efccdf23bd3b3"
  },
  {
    "url": "assets/js/68.811da81d.js",
    "revision": "adf5c2e513637d82b4190c5972b1581e"
  },
  {
    "url": "assets/js/69.2e8acee4.js",
    "revision": "e646a983f879cd8b38ed014f17dbd2e7"
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
    "url": "assets/js/73.0d170c2d.js",
    "revision": "9fb1dab49907d39e6c9eca79ef8a354a"
  },
  {
    "url": "assets/js/74.ac942ed9.js",
    "revision": "d8c32a3b20986da60ea518666398d441"
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
    "url": "assets/js/8.e8037f87.js",
    "revision": "2b9f7bd47a843a4ae8341d4f7ac3cd2a"
  },
  {
    "url": "assets/js/9.d9cee0a3.js",
    "revision": "db532250c73dbf31da1d67ea2dd9676c"
  },
  {
    "url": "assets/js/app.2dd0e332.js",
    "revision": "8f4738e9fbbef22cc12331fdd47d68bd"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "fd49f077af855389ce1c8565885c429c"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "726b2868c5ce66f3edeb776ca529db66"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "4a302ee7e43d8ba6418750ed1abf15eb"
  },
  {
    "url": "DDL/createView.html",
    "revision": "965ab601e3cd6e629fe3a9ca5cac6ecc"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "670c376455a6cd1ce879bcd87efbea6a"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "b924825e85f5c9049847b92cf7131e2b"
  },
  {
    "url": "DDL/index.html",
    "revision": "119d082b007321a4d8acf127fd8044aa"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "23783bc002f0b60726d371bf77e3485a"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "e4cc6abf3f779435c6e961a372806345"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "3e438563793bf8ff8c8e7d2412f84fd7"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "9bfffb12ce59b19db15772a775f7842d"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "61f6368b7a472f7a5e310d3cb51bc2be"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "f41086d206e1242d10a33d1529e68c5a"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "f90b3e7d7143bd786953e7517e551a90"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "67e5b8608f1e0c69ae106bcd129cc790"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "c19d1748227e2067cc2b6f1a7e113a7d"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "4e7db1a3c96b46fa06b9f5947e56f9e5"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "7aa130c138e6c0ce2068364cfbf7db8b"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "d5356eeb0412a54334c3121bc77a7225"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "2613ab26a858b483381ebd05751d01c3"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "26d421d5ecabbb9c579da4f2c1f3eda8"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "981e7f7171458d09936e73ae34aa2572"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerDetails.html",
    "revision": "b042124adf6b34b60887281674e72c54"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerOrders.html",
    "revision": "87ef62f74693f10d4e1375588ed65f7d"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "2458ebb601959dd52db6ccba8791191c"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "25804f7cef58ccf903098f5f92aa8732"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "f19b0a84adc71fbc501719aff8f0fdd7"
  },
  {
    "url": "demos/esp/specs/ESP-2-PaymentsLog.html",
    "revision": "a9456320d6e4988cd51c0677e3800811"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "db0419dd8c34705ec5a162d09f32995f"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "2627c714d3e23f75d0a9621e7db4818f"
  },
  {
    "url": "demos/esp/specs/ESP-3-InventoryControlSheet.html",
    "revision": "9089f499d288a6335da3812c83fdc61b"
  },
  {
    "url": "demos/esp/specs/ESP-3-PurchaseOrders.html",
    "revision": "7e2725867e0602aeca213a3345b04aea"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "4d9024be058a9b260bd6ef92d26c443c"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "f28f9eb49a87e20246a9cd7eb580cf8d"
  },
  {
    "url": "demos/esp/specs/ESP-4-ChequeRegister.html",
    "revision": "e5485b95ecb1505502644bbddb0e98c1"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "65582396a7a75d7f292629f719a3d6a9"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "3bf2e9f0ec290d5cc8b236c84ecabc7a"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "a1caa3e2c065f0a6277c16c30d11d1ae"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "2a774b28d8d1f55d2ad400a8bb6fe7f6"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "261d02b7900e7877337f13ca3352c18b"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "b5b43e04789f1ada55d82258c8a559d3"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "62db5a12c36e47bad892f24f578b71a7"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "f1af738e780ccee158af8fa3751062e6"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "f5e6148a1c2104dc58b0c7484ebba960"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "4bfdd3dae453fcdb2c83a6eed8c8e311"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "43cb71986ccbb39ebacb04898855de39"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "e8c70d909bd4670183bd7184b142cc7a"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "71bd5c1cadde8765464095fc7c089ff5"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "545a55f32b17175b2b767c92c43051cf"
  },
  {
    "url": "Design/index.html",
    "revision": "342b702f6acfd41f1b45564d123961c1"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "2c323571f91443e0c23e6a21e28cbece"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "75a8128e3dbedf1531962741571beaeb"
  },
  {
    "url": "Design/normalization.html",
    "revision": "6a6e72fb82037500d1259b1cf33cee25"
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
    "revision": "c179f234b624e1a4af10369e4cee2574"
  },
  {
    "url": "DML/index.html",
    "revision": "f440175441c7b9b968e198f18ccfc5db"
  },
  {
    "url": "DML/insert.html",
    "revision": "b523c71c81f36a361ff85562860057bc"
  },
  {
    "url": "DML/update.html",
    "revision": "7a1eff0a70ac03ef1e6453130569e28e"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "b61aa4301bb11efe6c098f6c380b23b6"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "4663112cc46f18b56b58e0cc70b8e38c"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "b25315ea4d3ee780e510dc6f7a46af92"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "2483b5b9214c1d3b3bbe5a378d937d8f"
  },
  {
    "url": "SQL/index.html",
    "revision": "7af60aacd3cab47d8d277c4ab36b2505"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "1916c7267a471b744a62213966c395cc"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "5c2658a00fe10da37693366f17033fe5"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "0224807d8fe3e5188950fb68244fd17a"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "a601076ea4e63a0819ea42e752c929a9"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "606e3fe9b604f775811fdbc2249a34f9"
  },
  {
    "url": "SQL/unions.html",
    "revision": "f262c3f728a87e8976850deb61733cbe"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "5850ff31177180e172828791ddd6288a"
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
