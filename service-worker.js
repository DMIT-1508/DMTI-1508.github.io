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
    "revision": "336e580934fedb2e5c992c626bf90348"
  },
  {
    "url": "about/index.html",
    "revision": "63b29d94776a97973a18e517e19e7645"
  },
  {
    "url": "about/LOGs.html",
    "revision": "37fb9274bd69cb616f7b7a5d0aba2f42"
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
    "url": "assets/js/10.c793abda.js",
    "revision": "a18e1810450a8e2f758a4218e7b9bad2"
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
    "url": "assets/js/18.2fcffc78.js",
    "revision": "030e18d8b13beb60d35ce535dc3908c7"
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
    "url": "assets/js/24.ac899fcf.js",
    "revision": "e5da915ae1034a4ba4336bebac90a1fb"
  },
  {
    "url": "assets/js/25.185fabae.js",
    "revision": "acae1d557e477038e01d6e9c6526a377"
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
    "url": "assets/js/58.b1391b64.js",
    "revision": "bad51d1a4241e02b5dd58b98c97f99fa"
  },
  {
    "url": "assets/js/59.f1669c1f.js",
    "revision": "6700ed706ea2bb3d8cda9c656c7bf4f2"
  },
  {
    "url": "assets/js/6.af17ca60.js",
    "revision": "dc73fcefdf0090151a00bdea6f761e92"
  },
  {
    "url": "assets/js/60.650fe180.js",
    "revision": "fe1aaf25046e09f6461b7a5327d46513"
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
    "url": "assets/js/73.5d8d9d77.js",
    "revision": "4012417f206740dcd74d347d054cf6d6"
  },
  {
    "url": "assets/js/74.fd9f190e.js",
    "revision": "0bad32df75d93793c7dada89fdec47dc"
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
    "url": "assets/js/9.40931ea4.js",
    "revision": "5ddb6dd5249c22580309ac948dd98f5f"
  },
  {
    "url": "assets/js/app.5f351160.js",
    "revision": "452e26eb43928b2dfb19f1e248ea3fbe"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "cb11a8412aff3d86e9992c8a6c94d36e"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "cdf348e350d7217a8b38c054067a2fc2"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "53c5b4c3bbeec4dc3e0838adcd1cab76"
  },
  {
    "url": "DDL/createView.html",
    "revision": "cf414fa8a8778dc5b28f32a0b8bcc080"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "5fce774a6c03f8f2437b43802d04cc8d"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "2a48068b633e7fa2ce3e7ca4ebc58304"
  },
  {
    "url": "DDL/index.html",
    "revision": "3c9ffbb8475929c26aa2560ffc582fdf"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "be2c932ba0e3a390c606d6087714276b"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "5c0bb5f24b4b9b912735be687b9c659c"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "45f6e147e248215d034b031b27ba18ee"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "afe5cef564c696c1b342df6b39245dfb"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "41bfd76dd378f320c6e61605c9be7828"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "b6bbcf9d4b16a9fc4ab86e375e29953e"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "0d1ec3396e500a30140da42585c0144e"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "95b9a4461e0985252c600cc619794ad0"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "5031fa7b4fec4885b6549832b7e5cbd2"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "0cfdc47d41547b605899b646c7e58643"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "66ad0176829fc6f99f718fe9f4414822"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "dc5aed559cac0ce5ce96fdabd87d2951"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "72309cd035a2657732fe09176ee79a92"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "906b0af5e0f3d256cdb98fe33a727038"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "38552c1ba5c8f5804e8808262b4c4a50"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerDetails.html",
    "revision": "5f7c03b699d7b851f4b8eda9f9373672"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerOrders.html",
    "revision": "2c60ed06099c02b1ab7b722b016553ee"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "0ae6e7586a285f8a2b9475164c6a8d63"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "165a89609f0c86f85b3148eaa413b713"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "15f83b7e09ad265f6a2a15cd9a31f768"
  },
  {
    "url": "demos/esp/specs/ESP-2-PaymentsLog.html",
    "revision": "e6d727fcdccf2465fccbcc88d5b0592d"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "bc059f026742c18789a05459bd636612"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "acb4902be9b9c8627cc5d9208e405390"
  },
  {
    "url": "demos/esp/specs/ESP-3-InventoryControlSheet.html",
    "revision": "7b6dc912f1eb63e5eed903e8cee147a9"
  },
  {
    "url": "demos/esp/specs/ESP-3-PurchaseOrders.html",
    "revision": "060211d1229753158082c0ec5f03c4df"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "6663c4e6125db5b627a8fe4a6597b650"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "868d5a6129cd73a82b706ee6642cb374"
  },
  {
    "url": "demos/esp/specs/ESP-4-ChequeRegister.html",
    "revision": "3cc8795b4c2f673ba18e94d58f543da1"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "5d4f49f45e25b20e5865a9a8c9cfc5cd"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "5c4224522a96c462e1038e136f1689d3"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "c474405d3ab60384c4712b5e92f8c76f"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "3bd93dddaf339ab4dbdc6aaee899d5f8"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "d1a81adfca4e6b2234558f7209710234"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "cd06a8f81555368ae10e723c63e3d7f5"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "a3d0579c229d7bce9a83914317c73fc5"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "fbf9a1f736b8dc39e5ed98aabcfefd05"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "5fb03679ebb16303a2637b827d6d8f51"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "a15130cdfb9d3ab903efc331ed6ea32a"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "458fb5be4a9b6a287d1425142a8d417e"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "8863a372165b2a22bdd6b1a80eff37f2"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "c408348b544164c082e1d57eb7eb3e36"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "af15a6784246d1e78af3f7df06412073"
  },
  {
    "url": "Design/index.html",
    "revision": "5c83e1180e179f1d55bd62481a363f03"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "cf4e393041c35bb6b897aa4ab5137efb"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "a614ab2bf46014af41715ab7333ba152"
  },
  {
    "url": "Design/normalization.html",
    "revision": "4cf27f74bb2394690ff5e20940814ffd"
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
    "revision": "c8c11252bddad5ef6b1ade392cbbef0e"
  },
  {
    "url": "DML/index.html",
    "revision": "1abf724689e620242fba3b3efac91954"
  },
  {
    "url": "DML/insert.html",
    "revision": "ef807aa6509b328dd792eb8ea25a855f"
  },
  {
    "url": "DML/update.html",
    "revision": "980553241f44b18c35f72c65bc11bbdc"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "16be5346f9ad39743bea2ce776864cea"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "3661f682c636679de27fd66536e65abd"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "6c028431d1629f86d19c9ed010e0acbf"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "97bc48c6ce754eca976dee7dd92993a2"
  },
  {
    "url": "SQL/index.html",
    "revision": "7671cc81685c65e3cabfd2d2cd35147b"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "094045061584db99c2a71aff5bb8cc88"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "25dccfb736887d0fcc4d00eb94490902"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "0800a0fe63f574bbeabf3baaa93be26d"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "6984f2c90782a010c18ea4c438a6ec9b"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "00636812ace250fa249fd987f21ea6a8"
  },
  {
    "url": "SQL/unions.html",
    "revision": "dd43b825bdeb5c6abc77fe77e309905e"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "dc1c53776df6465642fb2631f6b9fb69"
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
