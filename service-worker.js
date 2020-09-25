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
    "revision": "90d1674c7d9238cc62791783fa4c26ff"
  },
  {
    "url": "about/index.html",
    "revision": "514f68f4d6a317226925f78b4a8f56d8"
  },
  {
    "url": "about/LOGs.html",
    "revision": "ad7184d22e2794326194a3a013a17f71"
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
    "url": "assets/js/17.d61f7f6e.js",
    "revision": "9017766d51e1e339fda505b7c868be47"
  },
  {
    "url": "assets/js/18.e7af46c6.js",
    "revision": "1114adda62f66d89b0983a3e669b3e03"
  },
  {
    "url": "assets/js/19.25904acc.js",
    "revision": "a2ce384eea006223f4f8bf18b630e0c7"
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
    "url": "assets/js/21.f37ef355.js",
    "revision": "eeae1263663c906c25222441f41ead19"
  },
  {
    "url": "assets/js/22.0621ef14.js",
    "revision": "27fd8e88e7399f85bd476d2e7da9a234"
  },
  {
    "url": "assets/js/23.e94f485f.js",
    "revision": "ee5e6619f1ffe949f8e65c6d4881c72b"
  },
  {
    "url": "assets/js/24.3dd61277.js",
    "revision": "222caca172c35fa1fac8eda1a4e9ce68"
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
    "url": "assets/js/58.b1391b64.js",
    "revision": "bad51d1a4241e02b5dd58b98c97f99fa"
  },
  {
    "url": "assets/js/59.5fc5a5bf.js",
    "revision": "53f6262318e76ad7624ff2b6ab374b49"
  },
  {
    "url": "assets/js/6.af17ca60.js",
    "revision": "dc73fcefdf0090151a00bdea6f761e92"
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
    "url": "assets/js/7.a9401ebb.js",
    "revision": "914eecf9a65d63c0dd04f6586c014ebf"
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
    "url": "assets/js/72.339aeaed.js",
    "revision": "de7c1d562be5027584c64d1fc57aea21"
  },
  {
    "url": "assets/js/73.6652e7d9.js",
    "revision": "78ef461e9bb084043a3ec18077a75b4b"
  },
  {
    "url": "assets/js/74.941fd2f2.js",
    "revision": "e7061a192d0ba746b2e4f043def349ae"
  },
  {
    "url": "assets/js/75.0497ff13.js",
    "revision": "f9bec68aeaa16c2cde0343cbc77cf396"
  },
  {
    "url": "assets/js/76.6694b8fb.js",
    "revision": "55560c06c9bcabd99a46b730cb5f75c5"
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
    "url": "assets/js/9.40931ea4.js",
    "revision": "5ddb6dd5249c22580309ac948dd98f5f"
  },
  {
    "url": "assets/js/app.3688ae0c.js",
    "revision": "e1c55f33756032829bbca7f22ed8aaab"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "d58147878efd8f8920e71166e9511092"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "1462ec9ff623d78dea7144eb3c57c226"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "93acef7a10f9a81bfba7463e8f35f7a3"
  },
  {
    "url": "DDL/createView.html",
    "revision": "8c565915f6ab68fd3ef4e44580dec27b"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "d0c3f989006794cf651be91b977668a8"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "aa39ddcb7a899a85a94345b4b8df7fbd"
  },
  {
    "url": "DDL/index.html",
    "revision": "70d2fa3bfca863923e1fe5ede5c8af30"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "c54744d581863a27452e2a7e635f990d"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "515cdc33fc50d8ea525101b862f57c58"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "b912c0a3e64f2f526e6902b14742aee4"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "be436aae4110060b2adc4b3930b295ab"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "232cffb303a256a85796c9b884ac969f"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "4e698339ae0bb67dd13e9f6d57faca5a"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "67fb4b92755cac04cc8aecd611128ba7"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "addc3cba1f5c7029ca225de832df32ed"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "5f244f4980549c4e2610fc7431cae561"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "bce0c1fe6692aa60c964c62e44f01590"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "97877fa0c34351b5f2b6e066930517f1"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "13ba60f1d637e4a4c57510ed35327170"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "bb335dc7bf0443c42633718387b85c63"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "d83d49929a07de237f66b213a11ebbf4"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "e38ca0a24d2ad1390d3771771a0cec61"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerDetails.html",
    "revision": "7ee6f92b7cad7234c8d8621d459f0fb8"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerOrders.html",
    "revision": "0e9145e5a37eb17ec668c59d9be963e5"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "977cfeb4754a8698fce72898e471507b"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "b4237bada3e49b1bd1f5e2c3d097a9b2"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "d7613c114c0b976b3db36758af66bfed"
  },
  {
    "url": "demos/esp/specs/ESP-2-PaymentsLog.html",
    "revision": "f1c308f861db1214d7444768e8407c2c"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "08df0096dcbbc8ef92c148ea02c54b05"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "4116cc306785f3a9bcbb6a814cb61e94"
  },
  {
    "url": "demos/esp/specs/ESP-3-InventoryControlSheet.html",
    "revision": "5012e46975b39573332b648b71fb62c3"
  },
  {
    "url": "demos/esp/specs/ESP-3-PurchaseOrders.html",
    "revision": "76837a85f4ff4b041cc8df01312d460b"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "a0c7ebd6aef8288f424d5ed2535456b4"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "dd367b3c7b215bc7cbb52389ba5cb498"
  },
  {
    "url": "demos/esp/specs/ESP-4-ChequeRegister.html",
    "revision": "2fe3768ebea8d52063b729ed900c9398"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "4e1a4aa3f13277a91418371ec6919824"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "385429d511f2361f6bbe0065b7da3574"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "40a3a8d82ae0da6036748ab967c1bd4a"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "25224ded4ac637f851edbc232328d6ef"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "45370fe4ef897937798ddab50deedd38"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "a297e4ec62a34c999004e3a08de6aef6"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "4480d837bad7bc997da5b5fba5210cbe"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "eff617da8e5de0efb03fa037d9860c64"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "659820a4a19b3d85815df1f6e5c2cc94"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "8e54b8bf47e3406b951d78f869278f79"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "e9f74aba2c54ee621ae064cf202a6ddc"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "2cadea18bc1959aefba55dc085200309"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "d939ceb59f69fec1ce4d26065b67ced8"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "53352360f72e57c0ad6a84f29de70300"
  },
  {
    "url": "Design/index.html",
    "revision": "92a35b676e72864eff8ca6ed28f06a20"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "7adaa0e1097b4c782f8610982af83e3f"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "4ebc1de323332d952d978375093adaab"
  },
  {
    "url": "Design/normalization.html",
    "revision": "3eec7b6f33e333abf27b3671a3ed356c"
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
    "revision": "c445ab3ac989fd9333c4c8ea8f493d19"
  },
  {
    "url": "DML/index.html",
    "revision": "761a637717fbb7647ce8f80af4d8a907"
  },
  {
    "url": "DML/insert.html",
    "revision": "0a4c461b6ac60a97ddcaa5b413099ef9"
  },
  {
    "url": "DML/update.html",
    "revision": "41c105322d6f5f07a14d4e7a682881c5"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "4c823f6f9fe48a35a606fe066c7c59db"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "f7ec61e5ad88103ae080e75a5354d458"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "d18e946dfade6b21785e877e7ef82555"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "32c6e9ab62ca0b2e1a0c4194e4fc0094"
  },
  {
    "url": "SQL/index.html",
    "revision": "69950b65df86a2cc1ca2bd70074e5bbb"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "f82347ac0671154404559cd143aa36dd"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "7c131473f2d3ecaae9e7583f2bda7696"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "a7b4b47a9f125c2a0598cd8f044648cc"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "1f856f0f9e4e0c0fab64b3861e833067"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "76260096bcff44bc5cd8f804dff1afd0"
  },
  {
    "url": "SQL/unions.html",
    "revision": "f87f4db580884d8216228e60ab8b2171"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "f1f413d478da5819682be4a7e6756315"
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
