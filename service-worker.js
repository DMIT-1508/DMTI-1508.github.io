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
    "revision": "e70b56b0cd8a126e319f65fc526e107a"
  },
  {
    "url": "about/index.html",
    "revision": "63a5e746324ccd338acf5e925313c670"
  },
  {
    "url": "about/LOGs.html",
    "revision": "ca80b07ec872bbc37f49848ecd76a6e6"
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
    "url": "assets/js/11.54db7700.js",
    "revision": "247355186a5de9aa97a19ae2b55ce6d1"
  },
  {
    "url": "assets/js/12.d96fa0b5.js",
    "revision": "3d0476a009fe8130cd7fe81d77e8bfc5"
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
    "url": "assets/js/16.c4cef524.js",
    "revision": "840a6b873e8f8c102e886e2a848dc21a"
  },
  {
    "url": "assets/js/17.d259a97f.js",
    "revision": "ceabb4c851230414f659a3297e14b055"
  },
  {
    "url": "assets/js/18.c1afba55.js",
    "revision": "f0d5cbbcdfead66ef719823136c8a08d"
  },
  {
    "url": "assets/js/19.d47cafb6.js",
    "revision": "f5aad2eb04edbc1c5eb8e0c25de50093"
  },
  {
    "url": "assets/js/2.666d8fcf.js",
    "revision": "fb87bb9aecd720ae2d531a2e77b53fc2"
  },
  {
    "url": "assets/js/20.d65fe95f.js",
    "revision": "f90b1e1dc3f2f5c7ef4dbaee7a21dd56"
  },
  {
    "url": "assets/js/21.8ff95b84.js",
    "revision": "491f831545aeac85b83b016aaab7ee03"
  },
  {
    "url": "assets/js/22.d701baf9.js",
    "revision": "d16eca3e975f58223e8dbe18b6cf0832"
  },
  {
    "url": "assets/js/23.d233dbbf.js",
    "revision": "366ea5b476f82cdfc9da28144dc401fe"
  },
  {
    "url": "assets/js/24.aaf4ac95.js",
    "revision": "6cd03f91741285891e4b54dc6719356e"
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
    "url": "assets/js/29.e0872310.js",
    "revision": "d407adce6c916cf68b3a164d802df17d"
  },
  {
    "url": "assets/js/3.a5180923.js",
    "revision": "290a062ef3eb826c689afe252d8b18f4"
  },
  {
    "url": "assets/js/30.44d570ae.js",
    "revision": "777330e91173433aae0ab08408dc7338"
  },
  {
    "url": "assets/js/31.475f47cf.js",
    "revision": "32c1ef53f4fb68b882f4c1d4c75164d0"
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
    "url": "assets/js/4.9d6fa1d5.js",
    "revision": "6176c2db26a0149ad70698e3203a1d75"
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
    "url": "assets/js/68.a5963712.js",
    "revision": "8140510cff1c6192ddd014265cf8a40b"
  },
  {
    "url": "assets/js/69.143b889a.js",
    "revision": "a8a2f90706c888d90b42b18038e7255e"
  },
  {
    "url": "assets/js/7.ac8cadf4.js",
    "revision": "0e56453a075f20a9297f04ed6257b1eb"
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
    "url": "assets/js/72.0351209a.js",
    "revision": "8c9d7c13c1f30c9fb8311bb0e7dd7a61"
  },
  {
    "url": "assets/js/73.aff5d922.js",
    "revision": "686808bb0fc36df6abb9a8a572f987e3"
  },
  {
    "url": "assets/js/8.05132eec.js",
    "revision": "d5190031ede0b3a639bd2747455b144f"
  },
  {
    "url": "assets/js/9.043c7eb1.js",
    "revision": "572eabe5b8627cbc0c94eb539809d772"
  },
  {
    "url": "assets/js/app.71e91140.js",
    "revision": "224bf367dc8c0fdd59a9486cd4d4ee7f"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "4968809bcdb4546d70513342e40fd399"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "fb93c8ac49ba8018bc6fe25fae9df574"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "b4cff8bb0110e8e0a6b8a166cef80aa0"
  },
  {
    "url": "DDL/createView.html",
    "revision": "89c87d9f3c1162be9385a44cbc0e9f52"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "5e1cb203de75cb43eee2284549ef05e7"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "7d2c51f8ff2868a51fd289dec36bbe02"
  },
  {
    "url": "DDL/index.html",
    "revision": "161bb01a77542b0ad963cb15c8ac2b87"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "e484f8c174d2762a7b827abc6b6d0479"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "2d077c0584f79ef844b21bea80141d09"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "667ba8a3964d05b985dd76314f60b157"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "dd5fe19797af34bc189aab3bfb00c2b5"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "e3b44667d23dead5576ba6a76589f783"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "6e381e5608fd468f34867a70e8b9408c"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "842f93dfcff3fce85715b974e5e9e564"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "ba5ba91481eb01e5071f6c5f028ef1fb"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "b0797392f86b4cd4fc8ed41d72b5ca4a"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "5a99f930abd6818d063b23af70782d50"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "4e764c32c4d36c34fa6d728d352a5dcc"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "977c6b0905925b2ad6e3a3d1f1881c6f"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "521752b794b4d60b443b805e720ec699"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "f726de89fc08a8215d499dbbb5d69420"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "cd10ae1eea1963c2ed036d88344a9891"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerDetails.html",
    "revision": "649e5f5b29fc19d686501efd61af493f"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerOrders.html",
    "revision": "2e2b044d4d4dce94a6626fcca31ceecd"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "3a5dcd8d44a05e880b8df7d346ea93e0"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "66e606b53737b0ce9535369dcd521aab"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "e3e6848c7ba4caca2996ec2ad674106c"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "9709fac00f38f4f7d97234a840a1ad62"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "9ad0066c1d877bd13a52d3faf176638e"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "f31d84ec8c47b7b0b2769cc159c5197b"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "ae6f4b0aba1e17b30b718e17e03db00c"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "b900f5656baef29d54019b9351990d1f"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "ff10ae3d79a534181884af6d905b5231"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "bda7508d410fd20c15bf6ed2b77f449d"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "65080bcc27b6ba66ee45dca6a8405c15"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "bfb37c0f347ef0cf91bdd8b38aed8e48"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "a3a96773a5bce73801af1d8700561d2a"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "d047c10eedce51124b10463c3337429f"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "08bfb0b5849f9b1dab22832b701fbb85"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "a9fed1fb40ef1ac1f2fb2664eadf6001"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "f722f3eaf89be203dde7469121187f7d"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "4bcf029647f3c1295a9e1d7466c50c2d"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "49c47066ec37607fdb39bc3282deca56"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "0181cc5033482cc1acf2fb9a8ef6fdb1"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "30be4088bccb24edb8e3b653ec0c347b"
  },
  {
    "url": "Design/index.html",
    "revision": "bb8e6df5f7f377056c528ca486eb0ba2"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "f586b6f7e6ff6bf00c6d0cf2ea9abc2a"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "5c22dab7d3c597ef79046fba3179188d"
  },
  {
    "url": "Design/normalization.html",
    "revision": "6753d72e3b4c7301f6e072a02a695b87"
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
    "revision": "0eea1b70e74e715069cfbfce750b15c0"
  },
  {
    "url": "DML/index.html",
    "revision": "e1d9999260ae50f78150940cecad8e73"
  },
  {
    "url": "DML/insert.html",
    "revision": "8788f4174f57dfda604ce0933908bac6"
  },
  {
    "url": "DML/update.html",
    "revision": "f727d824948755f98ffbebeb79086da6"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "4773e93e9be1f485810f17d849de02b6"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "0843cda78cc8a71bc55306825de36fbf"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "d40683be97b382efe79b8a321a483a7c"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "c8df6cfced01f262c2f20da8a63297e8"
  },
  {
    "url": "SQL/index.html",
    "revision": "351e80599e3fa557ab1fadb46c6b63c4"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "a4938aaae31c4b09949436467da6bdd3"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "3cdab95eac4ea60f81b29da8906a9964"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "340d57e65ad61734c3deb7cc3c9995b0"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "ac836ba573dae22615581076d94d2b94"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "4e6f95e6cb038ebe2753f9cbf968346d"
  },
  {
    "url": "SQL/unions.html",
    "revision": "03b4a9c671b4456af9200dcd9f97d73a"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "8b951560023b392a0581f9774b3b9b3d"
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
