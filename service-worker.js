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
    "revision": "b551bdfcd6f8370c383e2ad6a0d2edd2"
  },
  {
    "url": "about/index.html",
    "revision": "4394d15fb0a056c69426d5576ea8c34b"
  },
  {
    "url": "about/LOGs.html",
    "revision": "64d24379496c1c66edb98a890e10cdbd"
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
    "url": "assets/js/10.0b2d0ae0.js",
    "revision": "70442152c65e5de574f56d1ac4ee128f"
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
    "url": "assets/js/15.e47cddf2.js",
    "revision": "1d5ed557dbef321ff9f648de76dc2014"
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
    "url": "assets/js/21.0c0100dc.js",
    "revision": "56da7b1e5c276ce365c4a709095e0528"
  },
  {
    "url": "assets/js/22.1dfdcda1.js",
    "revision": "35761e40b56537d0fa28b4ff594e16e4"
  },
  {
    "url": "assets/js/23.d233dbbf.js",
    "revision": "366ea5b476f82cdfc9da28144dc401fe"
  },
  {
    "url": "assets/js/24.08805102.js",
    "revision": "22c33259f36a35fea099670395d3ab4b"
  },
  {
    "url": "assets/js/25.185fabae.js",
    "revision": "acae1d557e477038e01d6e9c6526a377"
  },
  {
    "url": "assets/js/26.b5a5254f.js",
    "revision": "8d6df0ca848f99950342012cf61db0fc"
  },
  {
    "url": "assets/js/27.b184a1ba.js",
    "revision": "92446a23d374e76600d35bb067812a42"
  },
  {
    "url": "assets/js/28.970e075b.js",
    "revision": "e9f1be1b96cda93b5bb6177cc905b725"
  },
  {
    "url": "assets/js/29.785b5ec8.js",
    "revision": "3a169523402dbe998781efddd43fa714"
  },
  {
    "url": "assets/js/3.44f6f202.js",
    "revision": "c01328002bd52614810f410dbfdddcd1"
  },
  {
    "url": "assets/js/30.44d570ae.js",
    "revision": "777330e91173433aae0ab08408dc7338"
  },
  {
    "url": "assets/js/31.c7f8dd6d.js",
    "revision": "e4a82af617864411d556627658f08fec"
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
    "url": "assets/js/39.1f8a143a.js",
    "revision": "44a638c563ce43d8be4566b7eecc2bdf"
  },
  {
    "url": "assets/js/4.9d6fa1d5.js",
    "revision": "6176c2db26a0149ad70698e3203a1d75"
  },
  {
    "url": "assets/js/40.7ae83854.js",
    "revision": "7948afac2f1f96158380a22299274c6e"
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
    "url": "assets/js/46.ba56aaf8.js",
    "revision": "34b712cc4de4ced276fd59f4f1f9ceea"
  },
  {
    "url": "assets/js/47.7c5c063a.js",
    "revision": "57f63c58ee57eda6863e9dad31775b6d"
  },
  {
    "url": "assets/js/48.6d20f873.js",
    "revision": "1b2a465e63cd456dbf79211b07f2d68a"
  },
  {
    "url": "assets/js/49.49ca313a.js",
    "revision": "befbeb9ef02622fa91efe75abd879290"
  },
  {
    "url": "assets/js/5.3b8dbec6.js",
    "revision": "fde48e5d8ec4e98a2bc1af1f73c3aa09"
  },
  {
    "url": "assets/js/50.8c16bcc6.js",
    "revision": "24aa88d7b23ab5e5598d684ff7d6936e"
  },
  {
    "url": "assets/js/51.dad16f6b.js",
    "revision": "75aa043ea26286c676bc023b4b5355b1"
  },
  {
    "url": "assets/js/52.57be467c.js",
    "revision": "55b51dc855dc797943764c1c83d9f82c"
  },
  {
    "url": "assets/js/53.2dde59ae.js",
    "revision": "8567ac235945b19fec94afe236de9f37"
  },
  {
    "url": "assets/js/54.0e886cb3.js",
    "revision": "a1c5aa4bd439141eed0496585198dab5"
  },
  {
    "url": "assets/js/55.1021ce06.js",
    "revision": "2a96938bb78270a74fbd4fb190d42727"
  },
  {
    "url": "assets/js/56.19f99a09.js",
    "revision": "d32f5fc918f64fd0de1f61d54d90befd"
  },
  {
    "url": "assets/js/57.e2d02883.js",
    "revision": "7c9cbf3f8abb4fc9b6c62335159c0551"
  },
  {
    "url": "assets/js/58.9c4cf66d.js",
    "revision": "1d1547d3f3cbbb7528cb32675b64b6a9"
  },
  {
    "url": "assets/js/59.04088cff.js",
    "revision": "ec9a81bf0e84281b3d1d79a93b81bdc0"
  },
  {
    "url": "assets/js/6.7a421ca2.js",
    "revision": "dd485496d0cc88181f6b63e9d6d53256"
  },
  {
    "url": "assets/js/60.650fe180.js",
    "revision": "fe1aaf25046e09f6461b7a5327d46513"
  },
  {
    "url": "assets/js/61.43bd25c9.js",
    "revision": "a861dacad63494af082e8b121ad58a88"
  },
  {
    "url": "assets/js/62.3eb76d83.js",
    "revision": "08568a3f10ed0f4e5330576aa674c95e"
  },
  {
    "url": "assets/js/63.4d857439.js",
    "revision": "a41716e66c5083abdae1135432da8c84"
  },
  {
    "url": "assets/js/64.f3b07fcf.js",
    "revision": "142538c4c91ccdc5574aae5f9485d288"
  },
  {
    "url": "assets/js/65.6e10e5bb.js",
    "revision": "346fb95cafb2a66c194df5eac452b43b"
  },
  {
    "url": "assets/js/66.f05a1548.js",
    "revision": "7bcd040248af3075e59d143b2d02ed0d"
  },
  {
    "url": "assets/js/67.d8bb13df.js",
    "revision": "beb6954b3dcee387dca36a4a2ee43315"
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
    "url": "assets/js/7.ac8cadf4.js",
    "revision": "0e56453a075f20a9297f04ed6257b1eb"
  },
  {
    "url": "assets/js/70.e8ad2c94.js",
    "revision": "d0b13dec450898b037ee47028c19f408"
  },
  {
    "url": "assets/js/71.a789b8cb.js",
    "revision": "d42b2720e96cc8d87b7f22c25fb4f32e"
  },
  {
    "url": "assets/js/72.4088ea03.js",
    "revision": "8363968a9517169c788379662ead0bcd"
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
    "url": "assets/js/app.b0f6a09e.js",
    "revision": "8eb94905788ee58a886412655e12d884"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "4c6554093b12f2f415ef4c94f873e46d"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "1a85d5efe883efb81e32c87d05d7e9d5"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "1018467302fb69e47fb0046a08a7dd7a"
  },
  {
    "url": "DDL/createView.html",
    "revision": "29fce1c91e9cd008ea508ccca620f3fd"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "6cca9bc70c25cf17d90c0e75302cbc00"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "15b9664403796fd453b15443fe256ffe"
  },
  {
    "url": "DDL/index.html",
    "revision": "aefcffbfc059354d9ee404f828891c7f"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "f3da4b436dcb50ce3e2eebee3d435124"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "127f50b8e5660d44b1a3fb1756a4ef7b"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "e5a5dbac117fe8d0bfebdbe22c13b8a7"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "28fac311d6dde2e19882bf2ee5294911"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "ee03fe2d5214df7b5a222641071a9ebc"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "aeb7578abfa2de83f943176ccd1bb99d"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "31befb7402bf229f3353ea0f88196313"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "e6e2c1a49ca599d585d7dfc4d389777b"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "0e53d1f96f40dc0a19945035398063a8"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "182b0412f9414f4a315119a84eb0e8fe"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "eeee0fd3fbcb615dc9b52221d53e5c4a"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "5d70dde2393e99b327ea9e976918484b"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "938c3ca4dbb28fe8af1695651e02722c"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "7c04fbac9f11ed76ff071ec9df356a48"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "c023a22a9065959b7cbf17d6ef4fb5d6"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerDetails.html",
    "revision": "7c7dcf9e3609113e9eaddbe55897540e"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerOrders.html",
    "revision": "19fa297bcb4bd7940aac8b54a8c68c23"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "216c141dbeeec3bbfac4c3a913c915d1"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "af4971a8c5d13f852f8ed60d6a63bc03"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "0ec9c8fa808ec67e2479c607568c9d9f"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "eecc1baa3f23d4be0beee83baffa9a09"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "f0a5d21ef0beceb3bd2d2fc335b3cc76"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "b0fffafbd3f6357adf450e616245ce3f"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "077d3dd2794f384f7af06db991dcd057"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "56b3374e81150d92cfd8a70ded932854"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "58e1b8280d07caf9742a00256fa34a2d"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "8c9d47f70d9c24abc6d15e83f315ea14"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "4099968922a255332aac616dedc4ca3f"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "db75d8c6603200e74ac5b0aa24f1495f"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "f7f36b3e748c46ade25d8899d47001da"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "6c570035be4515562ede69ee44193f6d"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "49b07bb6c3d8740ab6bcce407475d888"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "832522b0aff126023301b99868f2df0b"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "e24b926ba1859a89a670a1ef5254959b"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "cae199ee40c0625e3f9803aec5f364e1"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "7325f56483e257648d692b76cc04ff25"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "63d816c250c0d3f7a76135b1a883bfec"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "4453908709c82f0272e0d0b22a53d602"
  },
  {
    "url": "Design/index.html",
    "revision": "9db193bcdd27add9642740ff23335ad6"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "928b86f8b1e8e23f85d62398a2c94eeb"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "6d631b1c5de37de3dd4b1dc125b8903f"
  },
  {
    "url": "Design/normalization.html",
    "revision": "68d94deb337ff68d8a4bd55ad9600d1d"
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
    "revision": "b41a04b45b14ac295a576a2ea8ce0689"
  },
  {
    "url": "DML/index.html",
    "revision": "27fc814c0d94f518c779eb978e049efd"
  },
  {
    "url": "DML/insert.html",
    "revision": "4d0089a37e3550bf0d088c7bcf10b519"
  },
  {
    "url": "DML/update.html",
    "revision": "5bdc8393313f0ceaf788027dd71ffbe7"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "9eea68cdd1feed90f86707aa064fe8df"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "d3961418d649135403765651edf82a88"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "3464e6ff0c6ee71dbf5eb4bbadd3334b"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "3e10340db3397782c8e9273e5f167e6d"
  },
  {
    "url": "SQL/index.html",
    "revision": "3c00c139f38faa2c3bf211cb24baf705"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "7e0c0bfe315a75f380fe1a7dc2bc92f4"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "c36d2db4402b834b3b17e87c24ff9b2b"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "4116d95b452a3f0f642ef777161bbbae"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "c927ccc84772bf607f8a78b4e4594bc8"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "3ee8c7b09397705d6c2e2a37a1fc38f1"
  },
  {
    "url": "SQL/unions.html",
    "revision": "2266b862a3a156a3e809c6bec951bd2a"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "b072cac89f41fcbde5464ccd4f6a7670"
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
