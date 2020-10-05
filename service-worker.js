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
    "revision": "f1202c5dd88b7ab6ae8ea16b226b0f03"
  },
  {
    "url": "about/index.html",
    "revision": "5656220aaf85f57feb71b5b472d80a2f"
  },
  {
    "url": "about/LOGs.html",
    "revision": "6f421e84e92a6503a82c4066f4112807"
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
    "url": "assets/js/11.9158c1dd.js",
    "revision": "244bac0e61c403ee20bcabe579c6d1dd"
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
    "url": "assets/js/17.51f0d970.js",
    "revision": "765b630dd5e3ee5009596a5616ed4ea0"
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
    "url": "assets/js/52.6373982f.js",
    "revision": "d28a666b9d6236211c69fba5120be5bf"
  },
  {
    "url": "assets/js/53.2dde59ae.js",
    "revision": "8567ac235945b19fec94afe236de9f37"
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
    "url": "assets/js/6.7953f255.js",
    "revision": "11f8a99f0bf51f0bc2a29c31da7229f1"
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
    "url": "assets/js/69.02fea978.js",
    "revision": "43300c2655f1285b0c5ea0b0b2efefd7"
  },
  {
    "url": "assets/js/7.8c7cb67c.js",
    "revision": "8209fdf6022d7f8ad416c04032bb08a7"
  },
  {
    "url": "assets/js/70.dff92996.js",
    "revision": "67cfe93910a550e88e45185a280192d2"
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
    "url": "assets/js/73.f3b7be6e.js",
    "revision": "f71c3d19c27e82f592ba6ee4e1aa7fee"
  },
  {
    "url": "assets/js/74.b488b623.js",
    "revision": "71177644c5d4ff93f3cd5ae43a22d2cf"
  },
  {
    "url": "assets/js/75.6324ee84.js",
    "revision": "cda79c991f9496a8b8fe19036e76ec72"
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
    "url": "assets/js/8.4428acc0.js",
    "revision": "f8e22ee3d6f87d8e75a797e6372e3855"
  },
  {
    "url": "assets/js/9.df62efd4.js",
    "revision": "a31fa67fe2440dd97b6451ecf5c86744"
  },
  {
    "url": "assets/js/app.2c092c91.js",
    "revision": "8f56b3a8c4b04988c0d0bc5e23dbb3be"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "c0d008edcd45725166afd11692748100"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "10b90f6567cd03599808fc1e657bfcce"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "f0fb49eb51cdc828664068fb23119776"
  },
  {
    "url": "DDL/createView.html",
    "revision": "22ae1feb53d1f50600479231c53d42c4"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "59df7e01d1adbbc29a5e1514fa0c478f"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "333c311d16cda1bbec3f02597a8431b6"
  },
  {
    "url": "DDL/index.html",
    "revision": "a58498767a9c9541f795279884a974de"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "4b022affa91db7848cf00446a468750a"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "9c62fed1f9050b328e0882d48781183a"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "b219374101ba5de5dd20362df9bdd92a"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "a9ec6c9346ace7f3d3dc4e740c6a9392"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "3432b2ab3ea5392bf11891912e5b273e"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "49ba7965e150054ddcea3e882e60c5d1"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "9cdea3acda63bee8c976fa599b3708f6"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "9f3f5591bc2d4c3399999ca10ae42324"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "42a8cf811225285115793d3733bc518f"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "0f7326ef4e8b01ba835bcf377834d7df"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "5a8221b0dd029a0240b33dca2e0d13f1"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "91ff1240bf399c836c15bb5e99f33bf4"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "7605944d7b3ea992c08560014188efdb"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "066fc76ffd3ff14ebcb824b202f22ddd"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "25463146d736e22497ccf2b9496cc0b7"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerDetails.html",
    "revision": "bb197b1b85b07de5937d4217e55e467c"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerOrders.html",
    "revision": "b913f68ecedfa82377b190f29f81e095"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "2940a09000b5c78cedd9556507bb1909"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "6fa34feb0ebec2573e6ee1cd9b9999c1"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "5ef9f05707331965209b5208be2cca7b"
  },
  {
    "url": "demos/esp/specs/ESP-2-PaymentsLog.html",
    "revision": "83b699a773d2343c4225f4799df42833"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "88d92fd5ad1e06adfd1dd03b76f70f44"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "17f205d9e97ec0b1f48c5673fff4e9f4"
  },
  {
    "url": "demos/esp/specs/ESP-3-InventoryControlSheet.html",
    "revision": "5d3f8d322084533fc7d6cca39d0e45fb"
  },
  {
    "url": "demos/esp/specs/ESP-3-PurchaseOrders.html",
    "revision": "9e460c017ef94c18d7572e9c88057257"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "026b6bbecd51c8e5d41cf2196c19b912"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "39a88bebd8159b8b811be8cd7f2c0bff"
  },
  {
    "url": "demos/esp/specs/ESP-4-ChequeRegister.html",
    "revision": "815de8b1097a6675b28d27154261f0ac"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "0d5f8bb8a079e3658001722463cb470e"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "0cb172256d636a7c7d3bc4f5072665d8"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "1f7af6a3e39d66e15c41b914d2e76e82"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "7235592e02d2889a3e707916e2a1acbb"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "82bdea5c58672961c22aa5e925d329cc"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "541d864f1770b806930ddd1a3e9a17bb"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "a5df2c66b3eeb2068c8f1757159285b1"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "e7e55ec232f001b2a37c69cdc55c28ac"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "75c8a154b9948d657429b0a2719a77c9"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "ac9c8010e009fe586faf6a253b8f84e9"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "a105d939f3ea5f061ab90cb753614c72"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "a625d351360501f20d6f6923d8ca5fee"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "85542edc74c3c0e412254e3cd682094a"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "e57353bdfef63d16cc00bdd620e0262e"
  },
  {
    "url": "Design/index.html",
    "revision": "96c41209a3561f0350fed7a4b15f6d14"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "d6522247900f240563568245b67ec888"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "b2a8d46db864782cc3e71b8f4c7bd9d3"
  },
  {
    "url": "Design/normalization.html",
    "revision": "dd48c963c459cfbd7fa2076e42ea0a58"
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
    "revision": "a8a2c7fb87e8c491eaf33cbea11404c7"
  },
  {
    "url": "DML/index.html",
    "revision": "c4a250908f616748c1e5f5fb659c83e8"
  },
  {
    "url": "DML/insert.html",
    "revision": "71e6fcbc697d5c21d57d211de62c9f9b"
  },
  {
    "url": "DML/update.html",
    "revision": "3edc1e4040e48e1894b3c75c8d326460"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "045f504818363a14e3f98777a271e031"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "7f9299bd77430fe3266101cc1f5cc10b"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "88abe079d71185a956f5cf987879828e"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "8fb8f584dd3a38b6cdd12a69855d9ac5"
  },
  {
    "url": "SQL/index.html",
    "revision": "9f5c2a8a38f65f472d28fff94c3dc509"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "b5a49d6f7f1d98cb219eccb18124c8d6"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "98a7f3003cc85e4ea493ad0f24469dcc"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "8cf5187be2b10203cf0698cd41cbfe39"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "dea456d861ce200c019782dbe7834b67"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "bb4d53974c1f76e5ba2de60a180d1213"
  },
  {
    "url": "SQL/unions.html",
    "revision": "52b526b23e631790b9659e98c9b2dd0f"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "631732fb8e8226435827d041e64c87e0"
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
