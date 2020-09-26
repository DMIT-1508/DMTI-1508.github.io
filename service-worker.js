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
    "revision": "2b03977ae67db83f216caa509e929c15"
  },
  {
    "url": "about/index.html",
    "revision": "81df9ae41c2a2c71e8e365f5054c7ba6"
  },
  {
    "url": "about/LOGs.html",
    "revision": "d505ac4870e6de531ab282bf02c1f96e"
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
    "url": "assets/js/19.f03783f1.js",
    "revision": "d6b738b11b36ff16001374fff539007e"
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
    "url": "assets/js/21.f37ef355.js",
    "revision": "eeae1263663c906c25222441f41ead19"
  },
  {
    "url": "assets/js/22.0621ef14.js",
    "revision": "27fd8e88e7399f85bd476d2e7da9a234"
  },
  {
    "url": "assets/js/23.29407d22.js",
    "revision": "31cb472acb2bf9173b9fa537dac1c4ad"
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
    "url": "assets/js/28.2bb55b7a.js",
    "revision": "b744a4d6917caee66258fb935e9606dc"
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
    "url": "assets/js/30.0312a1ad.js",
    "revision": "c850b4f0b874d20ce44f9a6bf39bb574"
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
    "url": "assets/js/45.1924b60d.js",
    "revision": "a43389dbb73daa733f658faf3db5d9a8"
  },
  {
    "url": "assets/js/46.a8f3345f.js",
    "revision": "56c6a9a7b58eb9dad12958dc6379b215"
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
    "url": "assets/js/51.38010b3c.js",
    "revision": "7ff6bdc56def9aa6baa73c099e7d1848"
  },
  {
    "url": "assets/js/52.57be467c.js",
    "revision": "55b51dc855dc797943764c1c83d9f82c"
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
    "url": "assets/js/6.7a421ca2.js",
    "revision": "dd485496d0cc88181f6b63e9d6d53256"
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
    "url": "assets/js/68.e9151b2e.js",
    "revision": "b21b974f3a367988b5602284db07ab1d"
  },
  {
    "url": "assets/js/69.2e8acee4.js",
    "revision": "e646a983f879cd8b38ed014f17dbd2e7"
  },
  {
    "url": "assets/js/7.02a6cf83.js",
    "revision": "823e0182275ebbe624efbafcc38d9eb1"
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
    "url": "assets/js/8.8f4feef6.js",
    "revision": "9c6be4494e4a8790d3b43d581b24c45f"
  },
  {
    "url": "assets/js/9.d9cee0a3.js",
    "revision": "db532250c73dbf31da1d67ea2dd9676c"
  },
  {
    "url": "assets/js/app.f6f5934f.js",
    "revision": "813501f395d8f795e097568c12c7dd6e"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "5b3b82d6c9bfd2929fd787d8fd532a56"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "3de8c7c32caa048b1721c4cb4dfee1be"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "98f3682cbce3574ed0ac0b3ab88b6232"
  },
  {
    "url": "DDL/createView.html",
    "revision": "3f6dba37a803e14c5415da4b14aafdb8"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "103306188f3207ba0914cd30d03bca5c"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "b40eff86e9cadb98c90ce6a976bea08a"
  },
  {
    "url": "DDL/index.html",
    "revision": "a43e9934abc99771c6387a937d7dae18"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "567bee6bedb5cd4769ebdb0f023f52c8"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "e4042c0c8c1d5527e2151163aa1fdc0e"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "e70feff06638eb55b2271705bba76e69"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "98fbd9a737065218bdc4eee2854e65de"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "402622bca87edb0f8f5df6ae4106589b"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "dc49f323ff4d02100f951953ac3a6e05"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "7bb08331a11d9321a750b161a7b0f896"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "fe046887490518911f95862388d9a759"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "2ccfd8b00e133ca383a6fc7086a41e7e"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "fc31ccd7ad731dea2fc68253289c4b65"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "149a18f96bc453dc928e01055ab2756b"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "957c8995a14d976beff293cadd436454"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "01dbd2d9edef1c9fe3e7dde3c86730a6"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "2d7dcdcafdc552a48d4e6459dee81eeb"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "ce07f1551a417cdd803c98ebf43c3565"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerDetails.html",
    "revision": "1d64b60777e2ee624cfb75c7e9835b64"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerOrders.html",
    "revision": "3eee71d6904267df8f6c03853eaa0559"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "1ad4b161ac2af34ae686d3ad04aea040"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "bfea0b244ed04e31d3ee3977448a85ec"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "752de5dcd2af12f9f3cd115275fe20b9"
  },
  {
    "url": "demos/esp/specs/ESP-2-PaymentsLog.html",
    "revision": "d8d28ef93da51a699e9365ac635fce39"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "3dc99dff582f83d78c05874f2e40425b"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "bb2c20b8a5009391e967e4f6f78910f7"
  },
  {
    "url": "demos/esp/specs/ESP-3-InventoryControlSheet.html",
    "revision": "8ae99576f14ade3605c15669a587e885"
  },
  {
    "url": "demos/esp/specs/ESP-3-PurchaseOrders.html",
    "revision": "0a9a40952446073f86fb66628341b0cb"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "d54002b5492b702c0b2d74d9c7251e03"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "500bef3d6ab7f9545d1ffb7b416e7440"
  },
  {
    "url": "demos/esp/specs/ESP-4-ChequeRegister.html",
    "revision": "07e64305408e88b3e538473b444ad6dd"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "2255af785da2330a9ac92ae46c3b0ad0"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "e0fd0fbf2f8e32abd226b5bcabfcdfb5"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "7fc6f49d27b84d81546f8b68ff664db4"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "57ee075618f6fab763ae919abbd55699"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "7810c3e1f875a845576eb5b4f1e506e1"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "8cf1fa16c0bfddfc834f7078399c9954"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "30da44218f4ff5c56390576e3078f527"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "71d324b8baa23a75830a527b9c25bc1c"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "692c651877052ce8061e925c438f9298"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "40ca3def0d4383bf43c86babdd8dc147"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "f0c8a379765a5a3241dd0aa6bb3cf0fe"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "49174d9db14c1c84548d8a567eb71f4b"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "f3a10adaf2bb6a24b452a9b51edf60e7"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "15097a8249be710f438ac92c78ca09f2"
  },
  {
    "url": "Design/index.html",
    "revision": "bc4b46fcd0a9bdf419947e4eeb43b8b8"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "3b2a71b09624569c7cffc2731044c1d1"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "92495c00368d1e03b11a3ab19b487802"
  },
  {
    "url": "Design/normalization.html",
    "revision": "0fe0ec0a945bb05e9946fe59f7722aee"
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
    "revision": "a3516527759284941604fc0204112a42"
  },
  {
    "url": "DML/index.html",
    "revision": "d4ac703f038f6780ca97d85b3230046f"
  },
  {
    "url": "DML/insert.html",
    "revision": "ea1d956f061375bfef6eb805f6f6bec9"
  },
  {
    "url": "DML/update.html",
    "revision": "6a7063d28b05134afbaa3a175bc80d7f"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "140b0c6c0ff8f95198b9339099940bf7"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "7d68fbc6646088ddc149e2645f8d6a49"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "b4c6b6cd36244383b1eb22baa4a23abc"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "428ccf58c85c075c87fba8b3e3202f02"
  },
  {
    "url": "SQL/index.html",
    "revision": "bd2391743d906286fad4c3c5d6bf3a71"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "50cdd87c40e079b8a0e2e443132f104e"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "9b88d47e9fe3b82ffed8badeb0b681f6"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "b35c3e22b463769aacde4bf45cfa6e56"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "ec48f4ee24157c69b317672cf9c42d78"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "c101425471b208fab415a5ade070b56f"
  },
  {
    "url": "SQL/unions.html",
    "revision": "c7be3e58ac48b75e9abc79e05e14ac99"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "b645e1d841d7b3f690e3d81c16952671"
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
