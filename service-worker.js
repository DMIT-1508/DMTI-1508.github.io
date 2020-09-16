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
    "revision": "b633f12de0d8e0df81e8f33bf3a610f3"
  },
  {
    "url": "about/index.html",
    "revision": "1dcdc6d637c312d7453a8417d0946d0c"
  },
  {
    "url": "about/LOGs.html",
    "revision": "fd61df61ee8f1bebf1839c46d1227567"
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
    "url": "assets/js/11.f8e97ca4.js",
    "revision": "c911af7f85f0fcb39a94ed067dd6b686"
  },
  {
    "url": "assets/js/12.65030b26.js",
    "revision": "4d411812a7767ebff412271e825c1eb0"
  },
  {
    "url": "assets/js/13.ae1e9262.js",
    "revision": "6ff37c56db05259ef835820511257af2"
  },
  {
    "url": "assets/js/14.1b4b6b78.js",
    "revision": "cefd612d02785df17d1f64ea09879961"
  },
  {
    "url": "assets/js/15.19ea4cf3.js",
    "revision": "280b167b63eb6580600e58f621250ec6"
  },
  {
    "url": "assets/js/16.7f42b1ab.js",
    "revision": "eafd29f20a71c0a53a0218dab3654434"
  },
  {
    "url": "assets/js/17.beedd518.js",
    "revision": "2234423fd7226b89ac51abc6d5baee49"
  },
  {
    "url": "assets/js/18.5e435313.js",
    "revision": "e13036dc2eb72238cede9b2a029e52af"
  },
  {
    "url": "assets/js/19.9fdc5382.js",
    "revision": "0d5c5be06767ab3475111973aad5af6a"
  },
  {
    "url": "assets/js/2.666d8fcf.js",
    "revision": "fb87bb9aecd720ae2d531a2e77b53fc2"
  },
  {
    "url": "assets/js/20.a638e85a.js",
    "revision": "746053f4a33d32df2ce2ed13cf687d35"
  },
  {
    "url": "assets/js/21.3d39e289.js",
    "revision": "b859e58778355e4f2b644200ad821fa3"
  },
  {
    "url": "assets/js/22.245c50fb.js",
    "revision": "675ccbf98b4f8666892ace74381817a1"
  },
  {
    "url": "assets/js/23.2473825f.js",
    "revision": "7e04f9758f83fad09490b6618e107169"
  },
  {
    "url": "assets/js/24.167ab99d.js",
    "revision": "5ad2324ae254d1a8cff2fd3ed77ab8c9"
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
    "url": "assets/js/29.89378e03.js",
    "revision": "57acf8348d650c01be0baf05184724a2"
  },
  {
    "url": "assets/js/3.44f6f202.js",
    "revision": "c01328002bd52614810f410dbfdddcd1"
  },
  {
    "url": "assets/js/30.aa045e5a.js",
    "revision": "1aa9ba144de4fcbdb4eb344b122ec6ad"
  },
  {
    "url": "assets/js/31.e5d29ee4.js",
    "revision": "70db3909df8b3c08056d241de65e9851"
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
    "url": "assets/js/4.7ddecbd0.js",
    "revision": "1220aaa4cbd342c17fc55b4f9ec27f6d"
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
    "url": "assets/js/43.07b93e43.js",
    "revision": "02269f0b9e13413d0d3c3380a35aa54d"
  },
  {
    "url": "assets/js/44.7d6e9b4a.js",
    "revision": "4a4711331e3de2c7df0339055d92bf32"
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
    "url": "assets/js/56.6d0d3a8d.js",
    "revision": "678ad6e141d5d77c2bb6da5c32118b25"
  },
  {
    "url": "assets/js/57.e2d02883.js",
    "revision": "7c9cbf3f8abb4fc9b6c62335159c0551"
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
    "url": "assets/js/6.a84f7939.js",
    "revision": "d98e4e689839a31c528400e58c1a01e0"
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
    "url": "assets/js/66.fec5b699.js",
    "revision": "6a2dc62b52c0330ff02c07f3619f9686"
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
    "url": "assets/js/7.93f9a056.js",
    "revision": "769fad418b8b1f84dae9d7120b927fb5"
  },
  {
    "url": "assets/js/70.b3dacbf1.js",
    "revision": "87427542d36a5a4cd87bb41908fec275"
  },
  {
    "url": "assets/js/71.bbd55d5b.js",
    "revision": "79a4b5311f23c24aa1f0266c15abe137"
  },
  {
    "url": "assets/js/8.20608a2f.js",
    "revision": "1b5b77578368b23e6e1e600929b9f528"
  },
  {
    "url": "assets/js/9.e75749f5.js",
    "revision": "a5a73ff67e5c8b9c7b8fe29e0c77a3e9"
  },
  {
    "url": "assets/js/app.85ee7dac.js",
    "revision": "e1880cf1504d593c336f7b793d79910a"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "e6349a86c1156f3e0c3c106c2439cf7c"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "b23338fa901a82844bfe5da691e6b702"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "eea0c077b858e1bd66f0334fe90acc8f"
  },
  {
    "url": "DDL/createView.html",
    "revision": "f0b71f8387343b9b675e4d85892e0759"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "fa30d01564034f4258c7424cfb17dcfa"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "cdcdc2c9256a7fd687f92cb255a513b5"
  },
  {
    "url": "DDL/index.html",
    "revision": "6005e82fed0a1693177bb2611abd8632"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "930b53ab5dd51f33931d379814c39173"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "06408e3b781416e774db6c8fd7ea4fe5"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "cb4574de6dc75530a83fa4ec3373870b"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "d399a6d407933f5b37d5c1146309c81f"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "e70b3d2f4bbba539e86c7290930ac6c6"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "e6962188bc55258bf379eb6638b868e6"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "b26c7821295fc7edfc7f3c7f4bd8e462"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "27a0236d7ac0a5db12989abcb651597c"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "c67c16df84fbd3c5c1f6d73e348e96b9"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "c8f9c38c293b4b485da10ceb9661a367"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "d75fe4879cb029b42f0ae7e9c277b1da"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "eca5e0a606bd529189a629ef69d89ed5"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "5db3c81367ece26de6720fc99cd94822"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "3d233f386ace2592f40526c2effc47de"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "52fe93d124c6cde5dcc86686f3bbe9b5"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "572983fc12be516473092c7d3655251e"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "259b4fad1c714193c5179c2292f34dbb"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "78502fbe1a35eb37595cd8ce7ea4d4d9"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "2d552dfa0db7be000186435132109201"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "b6021b9b8caa8b6296657cee0fed3712"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "4c6bb0347c4f7b1ee5ab58de508ad157"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "f26125b0fafcc61603695a721fcebd8a"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "6ebc0385926b2f134cf664869a45e84f"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "2ef5a1684e7a388b8541421416233d50"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "30da8dffb50c3a648660a8fa8ae14b44"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "2703eb43d20e2930571a5ba93b480b58"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "4e82eff1274f732da0bcaca0f2cbb93f"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "882c47e5d9c352330d05fbef2707bd3c"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "fefa717ea75dbda83f3a1451e214871b"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "ce96aaaa150c6e4e1309319bf1aa202a"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "3701c5660e8c0217fa660677478e1fc6"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "772866d754bddb48bc3aa36df5754b16"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "bc7ac2d4b8fff61ee17c483ba4cd82f9"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "8f59688a9b84bab33bf3c9ab35b681c2"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "a6cf0e5ba2fb01121211e1eccb8d47a2"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "45808acf999b0cf3ec7888730d3e43e9"
  },
  {
    "url": "Design/index.html",
    "revision": "397ac8c60b5f521642e364694a852ae6"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "04a6ffc959619e15f2879f2f407f54dd"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "4f6c891343aee66cf9ab0cc0c089c053"
  },
  {
    "url": "Design/normalization.html",
    "revision": "72f8c5e15947994a9d8913509425899e"
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
    "revision": "97f0022e567d91fd762b1f2f18f1118d"
  },
  {
    "url": "DML/index.html",
    "revision": "f3ef30a80a424ef9686986dc56589544"
  },
  {
    "url": "DML/insert.html",
    "revision": "3cdb3712deb5a095cc53f9b2aec657e7"
  },
  {
    "url": "DML/update.html",
    "revision": "d74790246005ef2a116afc0e2d90aec2"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "ba277b28f11be2e8a5786e73e3b771e2"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "6bd8052d24538a077435ec51887ed255"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "510c716d08835259651a953086f75b87"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "8a564cd4ea2f1a4ffc0b4c5cbddb1765"
  },
  {
    "url": "SQL/index.html",
    "revision": "5fe56ee80933b8438f88ec5c6783246b"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "9598f2c057e1d5de23afea4de4ee4422"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "cab31bc317ae9f4699c8e404c7602af3"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "c714f919bc7c4045191f2a0e6e499bce"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "3050f732ab440137287ee916f3203258"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "ec963a3c3e699ba5b21c06970cf676aa"
  },
  {
    "url": "SQL/unions.html",
    "revision": "e8b5b3b1aefa1f505c257247b1ce1b0b"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "be80e488c61d0de517bd75d5588977f4"
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
