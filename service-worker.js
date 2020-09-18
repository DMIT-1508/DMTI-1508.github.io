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
    "revision": "e31dc7fd7a64d9f454bb3ec8386b4a13"
  },
  {
    "url": "about/index.html",
    "revision": "2f44947f5b1b5db665e915099f41832e"
  },
  {
    "url": "about/LOGs.html",
    "revision": "406a6b5117bf2cc3b9ec7405b757651c"
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
    "url": "assets/js/11.ee930ce3.js",
    "revision": "7c6dd3f229ea974559a0cfe40b94151d"
  },
  {
    "url": "assets/js/12.e099a531.js",
    "revision": "827de14e648e91013c130e1343d342fd"
  },
  {
    "url": "assets/js/13.ae1e9262.js",
    "revision": "6ff37c56db05259ef835820511257af2"
  },
  {
    "url": "assets/js/14.ffe5f950.js",
    "revision": "b30232a2381922c1a35d990966d184ff"
  },
  {
    "url": "assets/js/15.19ea4cf3.js",
    "revision": "280b167b63eb6580600e58f621250ec6"
  },
  {
    "url": "assets/js/16.8e97ccdf.js",
    "revision": "a9a485976c5f4bd519728b7f14c278f9"
  },
  {
    "url": "assets/js/17.c4a1bbd0.js",
    "revision": "092fad91d2b4bb8f753265e3d18fe2c9"
  },
  {
    "url": "assets/js/18.954ee511.js",
    "revision": "0ac7f471be2190c2c956201eba1fe549"
  },
  {
    "url": "assets/js/19.00114c3f.js",
    "revision": "68cd3a7fdbc34d55f661d21ee664c753"
  },
  {
    "url": "assets/js/2.666d8fcf.js",
    "revision": "fb87bb9aecd720ae2d531a2e77b53fc2"
  },
  {
    "url": "assets/js/20.45a6ee3c.js",
    "revision": "c72459f60f3fda996840c6e8ece77cd4"
  },
  {
    "url": "assets/js/21.6841d717.js",
    "revision": "dac44bbe5d91b7f4166f0e2002c93316"
  },
  {
    "url": "assets/js/22.971b74af.js",
    "revision": "149b354e04402fc529740ab45f2d16cc"
  },
  {
    "url": "assets/js/23.a0e474fc.js",
    "revision": "094cdf079702bac7b163b15f63ea649c"
  },
  {
    "url": "assets/js/24.50617f90.js",
    "revision": "17e5e1f6ed6fcf005abd68f583c7a8d1"
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
    "url": "assets/js/28.2bb55b7a.js",
    "revision": "b744a4d6917caee66258fb935e9606dc"
  },
  {
    "url": "assets/js/29.fa69cad0.js",
    "revision": "4b18c01187812537deb5fc405d042a45"
  },
  {
    "url": "assets/js/3.a5180923.js",
    "revision": "290a062ef3eb826c689afe252d8b18f4"
  },
  {
    "url": "assets/js/30.5c769608.js",
    "revision": "73ac0c5976e7ac83c70eabb1fcd33d10"
  },
  {
    "url": "assets/js/31.0806dde1.js",
    "revision": "fd085445e146359950f8c66619e39d1c"
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
    "url": "assets/js/4.e653395e.js",
    "revision": "08bda0deb4016c59d52d25063e992e92"
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
    "url": "assets/js/58.b1391b64.js",
    "revision": "bad51d1a4241e02b5dd58b98c97f99fa"
  },
  {
    "url": "assets/js/59.5fc5a5bf.js",
    "revision": "53f6262318e76ad7624ff2b6ab374b49"
  },
  {
    "url": "assets/js/6.208c1635.js",
    "revision": "add22cef37537794ad3d88c06e339096"
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
    "url": "assets/js/7.8338bac2.js",
    "revision": "899d5d1decf2652c86f168d60088b3e7"
  },
  {
    "url": "assets/js/70.4fd2d710.js",
    "revision": "0225c8c9c0657fd54aedca61ef1a115d"
  },
  {
    "url": "assets/js/71.a789b8cb.js",
    "revision": "d42b2720e96cc8d87b7f22c25fb4f32e"
  },
  {
    "url": "assets/js/72.d22665a1.js",
    "revision": "0d826f0473a8b6082acf49c6fe5260c9"
  },
  {
    "url": "assets/js/73.aff5d922.js",
    "revision": "686808bb0fc36df6abb9a8a572f987e3"
  },
  {
    "url": "assets/js/8.bb42ea3d.js",
    "revision": "3d5d2279283a50c431d375794e2be945"
  },
  {
    "url": "assets/js/9.937fd885.js",
    "revision": "dce8f87cda434d56b1e7657362e43f26"
  },
  {
    "url": "assets/js/app.b90913f8.js",
    "revision": "33f6023089f1731fe9d180c3ad703bd2"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "559824c5b3babdb248d86aa25b4773ab"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "54cb428e03a4f880b152f37dac98307a"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "31f3b3fb1854249ae88a4735f3245c9a"
  },
  {
    "url": "DDL/createView.html",
    "revision": "84b82aa3baa61e3cbedd0c26b84bdfbd"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "76adc3ce7c52b320df45ebfe3f3efe0e"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "06e0b050c006ef9fa1e0d592ee228d25"
  },
  {
    "url": "DDL/index.html",
    "revision": "9f05e03cea573008aed75e87c11971f3"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "1fdb74ad6cf4b957528b44169b5f212f"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "0d795be868311ba26f67d125d65f5c1d"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "0047e9445b91e48d2c4dd8b25cb7ac9f"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "7c8bcb1a4680296077d5588d601a1ced"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "0c52e978153dc7f4f0250d3b3de07a40"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "7b6a0f44f592759b90f02ce2a258d605"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "729bbb5d3689241f925144eb922a07b4"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "025c99e5c9d2756bbea7cd5af833ea0a"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "69a8d8aefac941e671a02b698d2dad7b"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "4e724f4adef752af257d067e153eb90e"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "ee0bac3170b1414127549b958e890e30"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "f5642f424e88eb57baf4cd5baf864df8"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "c2e3cbdd170402cee507dc4ce6131d53"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "0458643f99958d9ef516d5660d8beda8"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "01480908427ea4632bc8e42606b3102f"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerDetails.html",
    "revision": "110e04bde9bd19979414329407f4e8b9"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerOrders.html",
    "revision": "445400916622f127aafe31590733ea94"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "49b6bcc9537ad48320fc0fb6f76081e5"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "95d91e6b647539a2cb10b05c85dac3bf"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "3e2451b7abe7baaa5656d6adf69e567c"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "b27e711e6de742f3a1fe5d1d13128840"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "f5b2d69d12dd41bdf940d54897d25a17"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "1fc9b91526c5734856a875b22002678c"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "f3b5d97e92fed3487f8391b28715f093"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "2c5bf8abd8b5e741d02c12310f96ee0b"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "29ba39a19fa8698ed2f979d64bf8d8f8"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "705ffa7cda3b4742bcbf057694464b5f"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "a1c2314a3f3f2443844cba02a5ca5586"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "8f018c6b16a3567021417793583ceeed"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "3981b7813c58e8c312f7ed9e7fc4072a"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "fc0639642bb49c67a74fbdd4c9de176f"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "e9dbfabd73fb9842cfa5ae807378ff77"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "5d04dbbd2a7dd3990ba0c23329304efe"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "3f3643d7fac8ca90c053e9a456c01fbc"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "b844a960280a9d754ea3a25b72e60b46"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "e537701df623c38304b208003a13499e"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "93d0c25aaf050fad9dfeecb351a2e00f"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "4b801bf098cbdbfcdfc1db47594a63fe"
  },
  {
    "url": "Design/index.html",
    "revision": "d7146a23f5f37d0289459dbb63dd0ccd"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "62e8139b748ff36a2404cd91b9183a6e"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "6f1cc8176b5f9672b529883f2ee89b19"
  },
  {
    "url": "Design/normalization.html",
    "revision": "d734d052fb6a508206eefab15a015cbd"
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
    "revision": "36b69b992009cc324cbe5d2b66b958f3"
  },
  {
    "url": "DML/index.html",
    "revision": "b0c17f36c05ec2990b945f5225435b64"
  },
  {
    "url": "DML/insert.html",
    "revision": "b444279e3189c1a0f2f6746b8689ca74"
  },
  {
    "url": "DML/update.html",
    "revision": "660d0b6c86ae86a16def7e6f78de704b"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "e63ee2a0de12b63603daa71d9b98de58"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "fb6bfa68152f7829708c79200d7b4a98"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "337ad3f80b2e753ad2c6f217c77e8c06"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "2d29ce3b1a7a61556a9b89a2756a8d20"
  },
  {
    "url": "SQL/index.html",
    "revision": "068d85f17e3a20338b6aa9026625719f"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "ce3b89e488a0e96921ae5153a742b7f9"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "a7f9ee57d5d0bfe2b705723234822dbf"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "51a1b888e96472c802a1a3ba9534ee70"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "a7e65aed9605acc7fee8b9e208615004"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "f499a93248fba600e2e91fdd58e00e35"
  },
  {
    "url": "SQL/unions.html",
    "revision": "b548691b8c6fcff7ca1ce53faa3b65d9"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "33165e83553b2554126f6fbf24324f7e"
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
