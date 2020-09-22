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
    "revision": "6f83ada68a56b948632f556c7b6ff672"
  },
  {
    "url": "about/index.html",
    "revision": "630d1c1cd79f2eba17534317976a7c34"
  },
  {
    "url": "about/LOGs.html",
    "revision": "4fd63fd24b8017ca8190dde01fe626bc"
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
    "url": "assets/js/12.bdf584bd.js",
    "revision": "81010f2c2ab2d1d74ca3d6110716a08d"
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
    "url": "assets/js/17.6f9d8e05.js",
    "revision": "fac40e6a3f788155b9651eb253baac56"
  },
  {
    "url": "assets/js/18.607f87c6.js",
    "revision": "02bfabb0d281e784596f010b54f4446a"
  },
  {
    "url": "assets/js/19.860b2349.js",
    "revision": "74cb4025065a9a16c04d25266e04344e"
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
    "url": "assets/js/29.785b5ec8.js",
    "revision": "3a169523402dbe998781efddd43fa714"
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
    "url": "assets/js/6.f58db6c1.js",
    "revision": "7c1067b7fd6f1a1ddc3b960d9c0da066"
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
    "url": "assets/js/7.06e9e85a.js",
    "revision": "e54eb159004934689fe97a535859da1e"
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
    "url": "assets/js/8.88d2335e.js",
    "revision": "76f544892db8911b2874436c272fbb68"
  },
  {
    "url": "assets/js/9.62e620bc.js",
    "revision": "96d2126cd807ddca1d87b5f9e363dd56"
  },
  {
    "url": "assets/js/app.f3dfabc4.js",
    "revision": "2e1766cf5e7115b2f1bf07d9999be08c"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "e3d6d9832784f5cf095b15bebf7e7f02"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "d6c6cc168f084668d9610b35e4d9e18d"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "72750785ff1c271fe44e54ac13cdd324"
  },
  {
    "url": "DDL/createView.html",
    "revision": "792eadbb6eab954567a4bade71ae306d"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "26b98c4abc9aad6964c2eb37f6b392aa"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "b35b9b9724105a10aff58cb555ab75ee"
  },
  {
    "url": "DDL/index.html",
    "revision": "644f8491fb98d58718ca67ded42d818e"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "841f9c5aed5b362821dabcadb7082323"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "fa8055e4ba8c3918d25d36163173c09e"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "099a1f611836085b809152c51d35ef25"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "1d028900be13b92e5f9301850db8d47a"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "3f56f25f386365d4c52d0978abd279a9"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "26b20dc3d8ccd5a5773b402e5cf6bfab"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "1c8627dfa18f0cd5b2bc5e0bd7d7e86e"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "15a4b393b33f20d15ef57c53bec08739"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "9e756417e2e07c2ef53bb87406cc1a84"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "d57940d4c789a9ced921ca8b4f228e23"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "c5d45f9e88e47356d28d65c6c879589f"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "e4a397cb763939980b0fd5a0c4f65642"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "f6cbf133284596562e0921df2f73705f"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "58881e69a00ceb581cfc4164ad77bd56"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "adb93f2f09c06ec5e11f3894805d2d5d"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerDetails.html",
    "revision": "7a2fde7b5ba4a9759bef718e50412eb5"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerOrders.html",
    "revision": "65e1abfa29c9169426a616eb0995244d"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "28805d22c0f6a80fde127b7c868aedf0"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "bc15c303089f06cb794467d58d7c8b2c"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "9b2494ab9a9307b131e8d1672d6a4a2e"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "bc454fb3bf8a9bec30edfebe10cc6a7b"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "e6e5356f6a2b8ce87ab2e88d6972a676"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "57ff22c60936b464feb71922c198c47e"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "9dd39df0a60dc79dd00f3af7c497a216"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "a95eec4cdded769576ff9acfd867b0cb"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "898db7ae132dc1ddb3fa85b32918b69a"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "565f5494dae2aca9ed81f190460081cc"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "d135b0ce1d61bbee5720b3bb90ed359c"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "450324fed1b54f198562d08af7ded412"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "0fa6d886e4e3f4edf497036e4bee15ce"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "1ca517f7fde94050681d6c7e946c2f39"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "962106f29f331f35685fa688fe48aeec"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "ebf69eee05671ac9cd1d08cc2e80d75f"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "d894d0bc94bbecf6bd29d05bcab32dc6"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "737a86d1365d7f6500d242e8008cbc91"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "afd8157fae89126ef234dd52cc1e506d"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "f21b7a3bc835779dad5c6feb1d68f0f1"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "3b957ec80fe55c99bb79cf5f8a15a86c"
  },
  {
    "url": "Design/index.html",
    "revision": "52e4b95ba53878e7b1b00eda72cbf1e0"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "435ab2929c6743be40678bc8863e739f"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "817a0771d3d1de3bf93894fe2cb95106"
  },
  {
    "url": "Design/normalization.html",
    "revision": "af09acb4fff90089178cc07ccb44d6a6"
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
    "revision": "cabeee5c55f6b8cc2887ddb0d5378d6b"
  },
  {
    "url": "DML/index.html",
    "revision": "63f2a82d0e51d9297cff6586aafc8295"
  },
  {
    "url": "DML/insert.html",
    "revision": "b37746a7bc4585ed15f7c6ced9aeba6b"
  },
  {
    "url": "DML/update.html",
    "revision": "c9d08f7f45f7e8da538b56db7351cae4"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "518e04363a3780395c6d99b10f3a4b2c"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "779d12a9dd719d0e455470bf8b18f9ac"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "8c2a8e67aaa70f4e926ae55adeed7859"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "83224fb906e6d0572b119bc3af3a3032"
  },
  {
    "url": "SQL/index.html",
    "revision": "8404e39ee43d11f5b03e4471b75467a4"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "5c1ce0497b8de69a98b44756e525bc17"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "8216f177712161a87cb180c196d6c603"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "40d084f977f9e167d54c2247abeea616"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "a964abd3cf92dbe105bf978b5c16a58f"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "c30fbc6cbda5e9b106c68d8965167e23"
  },
  {
    "url": "SQL/unions.html",
    "revision": "967e32818b4bb630e3cafe29f2e3ea47"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "3d910705a10c3d1db8321b840167ffc0"
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
