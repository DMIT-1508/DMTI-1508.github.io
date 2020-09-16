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
    "revision": "1a16c43367d963adaf8062dc9378d482"
  },
  {
    "url": "about/index.html",
    "revision": "1555cae7ef2fb25e8f6cd2282d2327cb"
  },
  {
    "url": "about/LOGs.html",
    "revision": "e50462a6b8067cfab876383894db1533"
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
    "url": "assets/js/16.e3d6fdc0.js",
    "revision": "2b7b0c09b34ae9b13073f6aeb1abd0d4"
  },
  {
    "url": "assets/js/17.af7d541d.js",
    "revision": "ea574e44d303c0671e6edc19854389d3"
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
    "url": "assets/js/20.628deac8.js",
    "revision": "ba823686cfc0f68f92edb47836e6aded"
  },
  {
    "url": "assets/js/21.c44382da.js",
    "revision": "b18c3cbc0b602985cd0e5ff3d94003da"
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
    "url": "assets/js/24.fd7565c9.js",
    "revision": "60d57b7b7a5cc6d7d55bcf060f87c2b6"
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
    "url": "assets/js/72.aa0179e2.js",
    "revision": "704bc7e394e8fdc3db1160412c61fc76"
  },
  {
    "url": "assets/js/73.aff5d922.js",
    "revision": "686808bb0fc36df6abb9a8a572f987e3"
  },
  {
    "url": "assets/js/8.7fc429e2.js",
    "revision": "59c76ebf17e298997a85bfed5855f4db"
  },
  {
    "url": "assets/js/9.043c7eb1.js",
    "revision": "572eabe5b8627cbc0c94eb539809d772"
  },
  {
    "url": "assets/js/app.c83670bb.js",
    "revision": "5191fc52ba99397b6b7e2e45410b38ea"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "85c57e419ed5098c6eca69eb73fdd24f"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "85f2cf7b384ca1b34f4f8ea0267e0f7c"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "60ee27730741f38ea569be648e3efc02"
  },
  {
    "url": "DDL/createView.html",
    "revision": "0f563ff43dac2db3ac1e778c16b8192e"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "c0c5c478dd52c3d63322560322f6e913"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "2ec0887da49fddfe62284e7c0497edd0"
  },
  {
    "url": "DDL/index.html",
    "revision": "b51e59ef2b168548c2b02e18833c32c4"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "e374882383eca77ea15ab9d5a4a6473e"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "948fe9b40d58349884b949287cac151c"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "aea191072f15c4b35f1009712d6cd53b"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "4805d421e927bc0f4be7aec3505aa614"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "6fa5ccf4f3cccfb18b13ff02312604bb"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "958d0912a843817e023a8c28f405a88c"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "62661403395062ff95b829473b154521"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "3669c59429c80ae478737180566ba5a7"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "03ed2c3c3ec7ec2070434faeb26ef398"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "82d35fb334b8daf9e15b8337d6ca688a"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "310382b139fa80b0d3705fa416b67ee5"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "1e42130bc341a370de29ba9474763996"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "f23d880a59150b9e2ae875d1be47beb5"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "959515191b1edf21b4cc3c7e0f019e35"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "e0ab45455eb9b4ef65ed5524697649f5"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerDetails.html",
    "revision": "b743919ab31868e28035160ae3bc9550"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerOrders.html",
    "revision": "d75e913e974acf10bb5f3aa750916581"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "54f336b180dc30bbf5b098baf3f38663"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "7ce9b61e9d75791c80987b2b9f05059b"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "328bad9ae1c9dfd665991d7358c441cb"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "d912aced0e771495da54aa2cfcb24b30"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "2c9a065f75dc68e00ec54d59f84634da"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "42accaef9aab335f71637444be2b61f4"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "748373f7b04d477e8c004eeafeda12f9"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "33bbe13d195c27175edecca65fca2c4d"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "52ab5072e63d4b9fad04ca8058d60732"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "cf7a83cb1f466a00b2d1ec1fd3372a57"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "ed4f7979fb8b7fb79d39d4e49b8c82c4"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "cfeea633b98d798fb4748f2bddd8a446"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "a38632cac5aa165de2cdbb201ce6a9bb"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "2739a8056231685e6cd1c1b8fe81a928"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "5bbb6b269bde66b03f2d39b6e1a3efa6"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "0ac74f5246965e97d6350c136aa6190a"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "1d0a3b20e5716d6af8813bad54c1cad6"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "87a7894b1f5b01ee46f69b53e4f8acb0"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "c470d42271db7eded85e9a0f8c14d666"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "1aa67b44c42855d1249335aadee9a3e7"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "87e005ddb6291f2f8d763a5942169268"
  },
  {
    "url": "Design/index.html",
    "revision": "b4fe36ae8ab3656a558fde941b2a93b1"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "12d9a1e65ce837b08151235792108349"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "853db611380ee7059a627813449aa797"
  },
  {
    "url": "Design/normalization.html",
    "revision": "36a81d0d4a7ad46bf7812a20cc90a52f"
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
    "revision": "55402ae7126f764b422b1c52aeee787b"
  },
  {
    "url": "DML/index.html",
    "revision": "b534188b1c26e0b9f152a36efc182c0a"
  },
  {
    "url": "DML/insert.html",
    "revision": "ed5db1ee336f7bab1964fb303e2ce90d"
  },
  {
    "url": "DML/update.html",
    "revision": "cd66060708ab79b63bebd8cbc688ccf6"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "9d0a466089ea6397a4a5de2741ce3461"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "36e15ff237b436e7b69192b24ffb5070"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "46382d7401921c1976e94f2ec004b3ee"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "ec3c07a1b79e00f000a4767502e9071a"
  },
  {
    "url": "SQL/index.html",
    "revision": "ece6dc60fc783e68d5e27db2bc56fd8c"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "6a00f20468d6d9fec620de62100bb912"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "3880d8aeca531cdade6ee75b828d3f02"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "fa1fafe727caeaa47faadada21dbb736"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "566da03d026a268d70156e051f58f32c"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "b7becf8144a4d6300ac7ae5e01aea6db"
  },
  {
    "url": "SQL/unions.html",
    "revision": "48b67d537009a06f68214f410fa79629"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "4393ea9a4a05fe2bb00f41b5ec246539"
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
