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
    "revision": "41a9db7349f83be8a890fac0402b2ba9"
  },
  {
    "url": "about/index.html",
    "revision": "274e532e5390cb68d4ac4dfc228dcb38"
  },
  {
    "url": "about/LOGs.html",
    "revision": "765794cf90114ccda074ea9c2e82ab32"
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
    "url": "assets/js/11.5aa31c74.js",
    "revision": "b186b1d8243b84505ca0dc9c4eb0f919"
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
    "url": "assets/js/21.135a82aa.js",
    "revision": "d06f1506c61fb2ea85670516de7f0fd4"
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
    "url": "assets/js/33.4bc2b7b0.js",
    "revision": "b1c8ca08d930494fd8dba4c1dcebbce6"
  },
  {
    "url": "assets/js/34.b40b6e5a.js",
    "revision": "671386fd32f65ea6c272be6153959531"
  },
  {
    "url": "assets/js/35.a82e03e9.js",
    "revision": "b3ab216f88772cad1d2a455c13c0f458"
  },
  {
    "url": "assets/js/36.a3cacb6a.js",
    "revision": "38567fddc083794e0b8b7a809e2adb36"
  },
  {
    "url": "assets/js/37.1fe8b1f4.js",
    "revision": "4ba63ee9cc712863652ea1c9b112ab71"
  },
  {
    "url": "assets/js/38.f43f4a5b.js",
    "revision": "0664fbc08367e9693b8af86e3903982d"
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
    "url": "assets/js/40.58bb779c.js",
    "revision": "96e06aa9551a34eceff6258367138289"
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
    "url": "assets/js/44.d610220d.js",
    "revision": "f7ab9d76bf4553aba27f4409c698dc60"
  },
  {
    "url": "assets/js/45.cc21378d.js",
    "revision": "c29577dc965b03fd46bd895a11b3fc55"
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
    "url": "assets/js/48.e972d8ce.js",
    "revision": "6e5d497771ba342e63d386ab5ce6c429"
  },
  {
    "url": "assets/js/49.d83c367a.js",
    "revision": "54b00a7fa60716e157848e4631c30482"
  },
  {
    "url": "assets/js/5.49158d69.js",
    "revision": "4e269b45be40aa958f0d8630856774d7"
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
    "url": "assets/js/9.210d1a78.js",
    "revision": "9691098646966a7f6bc60f3094519b71"
  },
  {
    "url": "assets/js/app.f90b6e7d.js",
    "revision": "ba0e8a5bcf45aa486189f9e0fe4ca85c"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "671c086d961809917479959721d93aca"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "ffd3b464bd74e45c4f14575138f77eac"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "20dab77d7117c576f6e093a25cdae819"
  },
  {
    "url": "DDL/createView.html",
    "revision": "f1189092126268b7615aee642f39ea61"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "20487a13273b2518302969b895767aa0"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "5c7247be5096d3bcb32bcfe23d2fda43"
  },
  {
    "url": "DDL/index.html",
    "revision": "a65f9b6a2552c2233eb013e1db0c9db6"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "38117678d2b1ebda0ef73af272b38c04"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "9a99ce7e51427e06a7253d596ba73a82"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "3c2bca0edd29f6448661125a917c0205"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "33c2393dbc21a931773839b8d4c036d2"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "4315fdc81417be6af4744ed219cd91e1"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "8141d4ebf1dc29a86d33cfdf2e9a29ce"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "68d69606efb346a24aecc091b1d75230"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "babb0bb694040388929ed219108f6f34"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "d6a6f71f9762c0e417628c8b8133ef99"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "aab2734f03fea0f8667b3de2851d12c9"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "f59f7c953ddb979813d62a345b7f4b4d"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "16fff3977fedb7b256ce6430284b6ee1"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "9cb9a05c83a0a6e05d8ada706a122d6c"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "9d1d0f043380198d500c44d0312d5ad8"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "068d42d3c6de7ccb1a1e8d6ddc23e4b7"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "dea02b896cdcd8191212f7388f91cfd3"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "60710c141f3e1fcce2ba93edb859e4e9"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "c1c8eb758f62203ab55b7cb881eb2bf2"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "f64e6f731d291401cba7a337c86474db"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "4e8ec534a5a4a404ab202d03adde9598"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "05696a3f97a31e1162a7d4a021fc51d1"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "5203fb82dfa857181bdff487c4640e32"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "4a0d3678d8c46d9267550b32df9015fd"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "34659b74876a81f89887476668ef8f69"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "10865f90aff2b9ac9644ce1703e3b01f"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "17bfc1424b6644783637f0929a7ca56e"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "13492048ca0f77ff38ef85ce95ba1a30"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "fc249c5192da57b3d4695cd9ad3686fa"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "c98fa5d1a728c2062494ba901d09dd83"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "7c485655b9673ad2334f6dc851c74845"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "cd71e3292ca0f3203c109cbdbdd014be"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "31c0343a4ec5ef2d139704cb57850877"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "4df3b420e51a561985f2d8459c9f24a8"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "d636183b2a590be88c31ec5a89199eee"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "b774776c47c9b4f0b654ff247d4bb9f3"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "7385fb6b96bf41516a8a5da2da9e046c"
  },
  {
    "url": "Design/index.html",
    "revision": "0d3d574f3c787b260079eaa4736b551c"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "706f731c0cc3ed47ebb46c40bb84720b"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "5fe77da589debbb1c2bbc7adcf27122c"
  },
  {
    "url": "Design/normalization.html",
    "revision": "7a4cb35fb8158d021d8476dfd3205e0b"
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
    "revision": "b546642721f1ddc2e86ee2e084da6e6b"
  },
  {
    "url": "DML/index.html",
    "revision": "ced752505d60a7f4176b9d4ca8d50fe0"
  },
  {
    "url": "DML/insert.html",
    "revision": "2c21155948a43c6f9d5ae4f21fe7a4cb"
  },
  {
    "url": "DML/update.html",
    "revision": "9512ce1c92e729fb073c39d4b3107d40"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "8f74e7769c1413534665b012cad6e8ff"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "98a798f870095e206c4898e289514de2"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "4311ab13b23e84a1a8db58dd839c56d2"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "47170271144611566e7767f7f5a5695a"
  },
  {
    "url": "SQL/index.html",
    "revision": "022b41c9fd2d129b429186804bb5e785"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "42c93bde030acd5900bfc19e61ec293c"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "d6ada1f49af373390f6905dded2d80d6"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "c93b791a2532c92c166558a0cee6141b"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "bfb50e5cd440c29a9b77db741a505376"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "3a6483ed3f1e2ac88290f7e2c00b446f"
  },
  {
    "url": "SQL/unions.html",
    "revision": "5aa45e1b09bd50a56bb2175259a2e203"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "9484d392ce77713137bf8ce70fc85a9e"
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
