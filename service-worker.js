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
    "revision": "79aa022b44bdfbfc3f547b6a9eb64250"
  },
  {
    "url": "about/index.html",
    "revision": "98bd549a5b94951bcec157d662552090"
  },
  {
    "url": "about/LOGs.html",
    "revision": "1ae9cd10a2d1d9b21802c5f882a7ece6"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "assets/css/0.styles.f478b41c.css",
    "revision": "3c4a7be98a29f497086db6c6f0306464"
  },
  {
    "url": "assets/img/CustomerOrdersView.6311d5d4.png",
    "revision": "6311d5d419093fd2e1ad7a6b03b308ec"
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
    "url": "assets/js/10.157042a4.js",
    "revision": "cc949b7b651607e33a26d05a3f8c3b82"
  },
  {
    "url": "assets/js/11.befb9d50.js",
    "revision": "ab153145712cb73784989c122919af84"
  },
  {
    "url": "assets/js/12.fe968b22.js",
    "revision": "4d2737c4e7793f062b283e39826ebb2c"
  },
  {
    "url": "assets/js/13.f98284d2.js",
    "revision": "809e0e46cc0532d28c669202bc82e6a8"
  },
  {
    "url": "assets/js/14.91d3b850.js",
    "revision": "689f6cb7c8355287e70f1a579f350833"
  },
  {
    "url": "assets/js/15.7dc20583.js",
    "revision": "bbd8414f17adbd9c8d0dc90146fea3e4"
  },
  {
    "url": "assets/js/16.939cd02a.js",
    "revision": "4a52e3779cf3d52c6d95e9fe510d4af3"
  },
  {
    "url": "assets/js/17.f290beba.js",
    "revision": "9ce98c8e91e85b108b9b5c6ba99e2706"
  },
  {
    "url": "assets/js/18.d89a9b04.js",
    "revision": "8efac396d3183a383260da996325fe09"
  },
  {
    "url": "assets/js/19.31532607.js",
    "revision": "76e4b9bb882470650bf69992d7db99ee"
  },
  {
    "url": "assets/js/2.1bfd86dc.js",
    "revision": "de71737a709c168200a2c637246f7158"
  },
  {
    "url": "assets/js/20.809a1dfa.js",
    "revision": "386163768bb2d01304621fbd14bc8740"
  },
  {
    "url": "assets/js/21.43e0642a.js",
    "revision": "813e1072eff697b655d52b395863cde9"
  },
  {
    "url": "assets/js/22.2de48efe.js",
    "revision": "1802a675084fd05d72455ca2f9496473"
  },
  {
    "url": "assets/js/23.82288ed7.js",
    "revision": "542edc3fe19824d5544397d2a897c015"
  },
  {
    "url": "assets/js/24.3dd12766.js",
    "revision": "8b0445cc46e16f0c3eee0cf50f60879b"
  },
  {
    "url": "assets/js/25.ade2d1b9.js",
    "revision": "f8237faafbc353a9532a371790626eb7"
  },
  {
    "url": "assets/js/26.29e717bf.js",
    "revision": "03bd7dda87085064a27ef9f1aafd6ebf"
  },
  {
    "url": "assets/js/27.b6cfb7cd.js",
    "revision": "f3732a86dcfca075f191e6d1375cc17b"
  },
  {
    "url": "assets/js/28.4f3a471c.js",
    "revision": "7abcb03209eda26b2e12f0b0b31ce4bd"
  },
  {
    "url": "assets/js/29.177a5222.js",
    "revision": "40b17a4ca3bb7f2594ef6bd460e59318"
  },
  {
    "url": "assets/js/3.bc375294.js",
    "revision": "08d8ab49d4a6cabc29b25713e4c414fd"
  },
  {
    "url": "assets/js/30.b11f1d05.js",
    "revision": "c674e9f485e8c17fd57443cb5c8c3414"
  },
  {
    "url": "assets/js/31.7bfb0848.js",
    "revision": "ca6fe9bf5c542a30568a709acdab0645"
  },
  {
    "url": "assets/js/32.778d187c.js",
    "revision": "3e649c224c2b09e3c83831896102c539"
  },
  {
    "url": "assets/js/33.71fbea92.js",
    "revision": "92e7650b2d0425433079b9467af41e5a"
  },
  {
    "url": "assets/js/34.0c321f3a.js",
    "revision": "06a8e4d257f2a383bfc4001c9cd6a453"
  },
  {
    "url": "assets/js/35.8954f814.js",
    "revision": "2553c24708356e96831c90a3ff5eb90b"
  },
  {
    "url": "assets/js/36.e2daadd3.js",
    "revision": "8a185caa0775dceb025301734b915b06"
  },
  {
    "url": "assets/js/37.f97e8c9d.js",
    "revision": "417e1145c5bf2fd2c1748ce5f6a94d88"
  },
  {
    "url": "assets/js/38.3fd029f7.js",
    "revision": "99586df19907b28a70fd27316a6f1475"
  },
  {
    "url": "assets/js/39.0eb4bb8e.js",
    "revision": "1a9cca7ef7cb65552fdf70da55a8059d"
  },
  {
    "url": "assets/js/4.e81d3432.js",
    "revision": "80629b3ea47b0554951c9cb464a08baa"
  },
  {
    "url": "assets/js/40.c5c57358.js",
    "revision": "2e4437617a20d944b2cd1f2737ebc2d8"
  },
  {
    "url": "assets/js/41.4a8ee00c.js",
    "revision": "3776952e3e3addbd48891a44ed3c0eb8"
  },
  {
    "url": "assets/js/42.c37a0ad1.js",
    "revision": "97c01e49201bf31b9ebe79ac66e21a0b"
  },
  {
    "url": "assets/js/43.797d1267.js",
    "revision": "fe53dbc32b9ac909ff552f87fdfa1c8a"
  },
  {
    "url": "assets/js/44.1b1d5d3c.js",
    "revision": "9811b008456e82136a45e66f43eabbf3"
  },
  {
    "url": "assets/js/45.43748d6f.js",
    "revision": "ecf166f6b46189fe00925a02d826bfc3"
  },
  {
    "url": "assets/js/46.baf0ede8.js",
    "revision": "5a2f0fd53acc7108dd878780c0ba1ed5"
  },
  {
    "url": "assets/js/47.b230b2e6.js",
    "revision": "02c4c3cf64f90c8166c3d9c4fc500309"
  },
  {
    "url": "assets/js/48.846aa66f.js",
    "revision": "8cdf67aa0594cd78ede338a26c24f6d9"
  },
  {
    "url": "assets/js/49.d83c367a.js",
    "revision": "54b00a7fa60716e157848e4631c30482"
  },
  {
    "url": "assets/js/5.f816daff.js",
    "revision": "74f9c762ca59f3794b494cd696ed6958"
  },
  {
    "url": "assets/js/50.94128bfd.js",
    "revision": "92018193b80f333426b44c0fecb94a4a"
  },
  {
    "url": "assets/js/51.b0c9a3a2.js",
    "revision": "5b778b60e853da3746d0d9134f20c1ac"
  },
  {
    "url": "assets/js/52.cee6b8ea.js",
    "revision": "eed761abaee5401e4316d3d986a6289e"
  },
  {
    "url": "assets/js/53.e3c19c82.js",
    "revision": "20bae6be6d78bbc64684a3f27ae482af"
  },
  {
    "url": "assets/js/54.cfc72acd.js",
    "revision": "53d6d2f4bc7dd42f9c8e8d357987cc1a"
  },
  {
    "url": "assets/js/55.187c6a16.js",
    "revision": "671d14b50467d4646dd1e12d30deca74"
  },
  {
    "url": "assets/js/56.4c314685.js",
    "revision": "37e55f116877fa506e54cc7a59cd8c53"
  },
  {
    "url": "assets/js/57.31abf330.js",
    "revision": "75961ad44a49a52399f66c87dc3dc05f"
  },
  {
    "url": "assets/js/58.2c009028.js",
    "revision": "7a274482867e1af0ffe5254e0fe77321"
  },
  {
    "url": "assets/js/59.fa9b16ae.js",
    "revision": "d63fa96e9acffe7fa01bfa191502d021"
  },
  {
    "url": "assets/js/6.71c257a6.js",
    "revision": "05c5b4a200007041c3f3cb9cec2db307"
  },
  {
    "url": "assets/js/60.690cf5e9.js",
    "revision": "16d9e633968aa0eb2e641da0a2170314"
  },
  {
    "url": "assets/js/61.a67df48e.js",
    "revision": "e8e5a050dd7f2f37b3be958fa234aa9e"
  },
  {
    "url": "assets/js/62.55a22e68.js",
    "revision": "40c4c72705949ef6cbc859678927577e"
  },
  {
    "url": "assets/js/63.6b2b8e76.js",
    "revision": "4f1ba312e08e25a16295da0ef0509996"
  },
  {
    "url": "assets/js/64.6594e82a.js",
    "revision": "2fd4ed68d363774390dd2a5f0c7ca033"
  },
  {
    "url": "assets/js/65.fa342f70.js",
    "revision": "e420405d38c794b5609dda4237804d7b"
  },
  {
    "url": "assets/js/66.abe58e54.js",
    "revision": "56fa1ed142e11e4954821f59d04e5293"
  },
  {
    "url": "assets/js/67.b7d3d3da.js",
    "revision": "8d3d5a732d71661d3e3c7748086ec70b"
  },
  {
    "url": "assets/js/68.6e4050dd.js",
    "revision": "002c1864d4d4e64aba1d1d9762cae89b"
  },
  {
    "url": "assets/js/69.fe918456.js",
    "revision": "0d3f14cd64192118a4e1cb2050a1ac4b"
  },
  {
    "url": "assets/js/7.a532dd7c.js",
    "revision": "411db18985c6f7c5203364d3a5ce6095"
  },
  {
    "url": "assets/js/70.6f673711.js",
    "revision": "3556e705d8fb9a7fdc6f0e2fe7804308"
  },
  {
    "url": "assets/js/71.21acf687.js",
    "revision": "5befcad008159ef5b9dba17f0b34be57"
  },
  {
    "url": "assets/js/8.60124644.js",
    "revision": "96360a09d7f833864a34a55035a5e35b"
  },
  {
    "url": "assets/js/9.eee6e825.js",
    "revision": "60a61d2175e858a9091e383bae20fc50"
  },
  {
    "url": "assets/js/app.88d4967a.js",
    "revision": "e58adee5ea72c9def46f208a5e074b82"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "514f91e4e6a2a1282d0989b67e7b099f"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "7b49dbdca947029d3296fe64cc6d5fda"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "bde6c4b43a6dfa9c9ca4b57a4c091cc5"
  },
  {
    "url": "DDL/createView.html",
    "revision": "001529a5058e1e013d387c7b68c4c787"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "bc652aaecf447f64c231405dee33dfd7"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "8688b7ce868206b84a6af6607cff6149"
  },
  {
    "url": "DDL/index.html",
    "revision": "609139977083530716b422e81e5b76e8"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "2db16164b83bedbb4e7fb57febd01648"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "bb88f0700ddafc860eb3985fa1e6cb85"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "dc0ab1da328e42933bda97e12e17c901"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "5cb2cf50f7a76fe3d250e7ec7bc779ed"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "6633148e3dfcb50f4bbb9a63d7a8f258"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "b62a15f924c5b6abc0a54084ce28a247"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "11c9bf5ca6b6e3ffdb0020c1f39ef0c1"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "3926c4e351a6b310b7c269423f4fbe31"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "6c452015eab28945fc5cb23bb6433e5e"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "c4c985d1e11afffa6391bdaa961573e9"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "f12eddf1585eb5e38e5b7933344a0712"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "5b7355d1d727d848c42b645c1f7175cd"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "0504fa94abdef81ad368584c4af7bf9a"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "4ce0008c6ac4676857b862ebdfa3e6b3"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "953933056306cfd81f674a82c2582546"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "912dd97d8c3d7160e76b34c8b9e1e04d"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "c6a1e7d631477f5cff9802f94f4829fa"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "532cd098880a08102616deadcd092414"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "2adecc2e7405a3b38a6bd25495ad5c1d"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "9550b97e2913ed1ac67d5f574019ab47"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "9a7cc82fe42be1206f6617fe65cbf91b"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "ad30df7fded0f3bec86e588b23f36dac"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "d6e4d561d0027b411fc9e84ebe70c187"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "1be529e78e8154bdc4bf6a966faf3714"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "7189afe74163f806d70a188ffff6eadb"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "82b2c3ec5f0fb6b3e4e923fae9a65e5a"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "6453e279c59c3a27547b7c57e29b0ba8"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "54290cccfabc88c94a30cd623effab6c"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "6e62fbee843c753f8a8fca46d49ada23"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "1c007a1e8069804b9090e549f451c1b3"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "909cdb648721abb1c02506123068a063"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "8608fe3dc6580d9e82e5b3e338cd8156"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "6723edc3918f953002706ec267da71ba"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "0f25a0e52deb37ae990e8bd48f1ee2ce"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "dc430a2a162d39d48a8f5c5d6840a561"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "000f04850e3c539ea343c350b22f2c49"
  },
  {
    "url": "Design/index.html",
    "revision": "ec1a334030b05ea2a9440f224e3d588a"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "e4d3573c32934b7341032810bd68f161"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "9197c23a26fd41b1ed40a259dabf235f"
  },
  {
    "url": "Design/normalization.html",
    "revision": "2dc7853701e8ca991a251df4e82c83f8"
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
    "revision": "bc43e319e56abd4a7a43b1af88ed96e8"
  },
  {
    "url": "DML/index.html",
    "revision": "c9777cd06b137b6682ad83263a1deea7"
  },
  {
    "url": "DML/insert.html",
    "revision": "c9be7dec0f6d8160db015b7f15487b56"
  },
  {
    "url": "DML/update.html",
    "revision": "4b774f0d37358618d0bb8b2d06649bb0"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "a1afaaaa2f41b64eaa0326c95f61c83f"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "8fff0d27069d6ba5edf062d5cf5ae5fb"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "5d8843fdbe7c55e9617e8e6fbb575b17"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "e22872fd8f877a80bc18b688d2dc79d7"
  },
  {
    "url": "SQL/index.html",
    "revision": "5ab7df0a2f4cba498a163e8b2e251b8d"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "ea588fd41f890ceb6d26d1fbdf9fd8fc"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "0be9600f825035f1bf5cf5cd5ac50fa8"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "28ac7fa096dbf1fbfed9d651a45bcd11"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "fbe861aa14ce27652bd63ce4634f945c"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "573dab1c6a37ab09dc1a315c148b78c6"
  },
  {
    "url": "SQL/unions.html",
    "revision": "42d922905e14d58d237c64d43fb173c9"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "c6e66636251a2eff5cedb8d3641f530b"
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
