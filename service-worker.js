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
    "revision": "e56780ca1ea2ef141a3c6f1b0b1d4c2c"
  },
  {
    "url": "about/index.html",
    "revision": "8fa72bf0f0f17d69052a3bfab215e454"
  },
  {
    "url": "about/LOGs.html",
    "revision": "c70721b1294536c95ef6a687b4c08595"
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
    "url": "assets/js/10.163c4616.js",
    "revision": "5c965f73f227096a1e97f2d631991ea7"
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
    "url": "assets/js/17.b5d01a5f.js",
    "revision": "6c51fd93a320c5bd45ec83ade45bd7ff"
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
    "url": "assets/js/24.e05898fc.js",
    "revision": "71162cc0c2af96a1fc325e585e619f3b"
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
    "url": "assets/js/38.86493fe9.js",
    "revision": "c217f1da98001c78a567183755d1da70"
  },
  {
    "url": "assets/js/39.6ace55d6.js",
    "revision": "e8a4372b105c7fd19f40386c4fd7057e"
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
    "url": "assets/js/54.57a118b8.js",
    "revision": "127ce946e1945f3794448ac253ba0e76"
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
    "url": "assets/js/6.bfb1556b.js",
    "revision": "3554471729d7683be21a19b1b8e91530"
  },
  {
    "url": "assets/js/60.e870b3d2.js",
    "revision": "064cc9dbc7b1e675d0d1b9ff7e4cf7f3"
  },
  {
    "url": "assets/js/61.a67df48e.js",
    "revision": "e8e5a050dd7f2f37b3be958fa234aa9e"
  },
  {
    "url": "assets/js/62.756f8dfb.js",
    "revision": "0f2a8ddc77662b694fe54b6b6fd5fb69"
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
    "url": "assets/js/7.95632143.js",
    "revision": "db10e7789dd8059521ae57cace8cc299"
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
    "url": "assets/js/8.b66f425c.js",
    "revision": "8699548a14c871b849b169fec5d2148e"
  },
  {
    "url": "assets/js/9.99ae8d07.js",
    "revision": "a17a5b5f05d0d4b7c6fddca20e0c3fef"
  },
  {
    "url": "assets/js/app.6c9b4972.js",
    "revision": "937a9e5e39969fdbeebdfbcc1c628005"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "e4680aae2c2eaa33f701579b9f0ae20c"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "f7692d2b8360bcf9617ba727561b1fbd"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "d5070a2799e71ac2e9cdb0ddb3ac977e"
  },
  {
    "url": "DDL/createView.html",
    "revision": "a4aad007400268247760a32dac2393d1"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "1fad5cc40f25198a8773f5b1c82533e0"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "5c815cdeaf911f1f8993ec36979f8bc5"
  },
  {
    "url": "DDL/index.html",
    "revision": "e56f68aae42aef949f06301ebeb67a0e"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "fc394d39a59a4c486cf520cca070ec30"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "f6e8970f53997819d17dab3473eeb1e1"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "8ad82c5ef24469e0808cdfeacdd5f37e"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "8f526464ddd9c3771b2dabf9f80fced4"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "8e063921a7fad2b3a8a1a23995fcd433"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "30169b9a1066d1521d6b8b288b189a78"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "6f2ce15d49a6c2583dffe759d4f6bfb1"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "f5fa1fd0a0b94234927372503a832c0f"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "785bed4275e2cd35d8adf043e1b46865"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "336d2249e5e213ff65ac0fceb9805c7a"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "de0940baa947c2c344029fbfe3ab7869"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "7be69ec69ce63c9abb6ffac6835613d0"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "3751cece94a98fb1075167bb4580ee39"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "d037c14b0ed40f4886c52ba42fad96b7"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "87090c16f2a66de35e49f5ec73ed4d28"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "3c39e0447429a878d2054cdc6e028308"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "4cf48dbe388fad2239489ae19d05e675"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "40434aff25fd97f9cf7d7a849926498a"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "440dee89d80e9253723136f3bc999600"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "17badf3d9fd2992c234cd65e9aa8c6f2"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "3e7dfbf7afb33d7f22917879bf2af17f"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "86bd3885b4ecec0b7dd9dadee3e42dd2"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "b1c78884d9fc83a5468ceabb182e944e"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "4ef5d76e276134da738111c04492c29c"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "6075324699c7942bd2c19ed45ef56763"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "c1dba87098e181c9c484215673dcb367"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "aea11a54e380fe65a0dad4ae459cb913"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "3af5953a6807e0ac97561a8a05f94701"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "f7a0ad6bd1228117c11741e59adf6c4e"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "03ca51f2af0886b41afb54d03713a661"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "c33263cd4102d7d5240bcd6886108a3b"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "2ed54d773d09f51ec540ff6e789eed07"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "0e0b2d5cfbaa07b25886dd75c300e829"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "00190c01c33e4bb89eda087ab4f39e93"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "132b0ad66994206b25f20e68a2dd37ba"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "bb212196d513e19fb4702730bd46dbcc"
  },
  {
    "url": "Design/index.html",
    "revision": "903dc05864ddf652e4365286d03cea2f"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "df354820b029b7d9f078c3ce1ffdfec9"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "a10e1f495b0132d920bf401bf6c3b712"
  },
  {
    "url": "Design/normalization.html",
    "revision": "1840d55cdbbe80e5ec8473e3aae37a59"
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
    "revision": "af824d3eb162867b19cb8568a6c148b3"
  },
  {
    "url": "DML/index.html",
    "revision": "0d067ad6bff9f3613bf25b66d1b12b85"
  },
  {
    "url": "DML/insert.html",
    "revision": "e0edfd6a4a92bcbf1085e98e943ea114"
  },
  {
    "url": "DML/update.html",
    "revision": "e3da3e9b3aaf0c3f96bbfe2982aa8b20"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "f6557dcb699317083eb75ea41820fb6b"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "ffb3af3f6d5527b97a8167cd0766072a"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "08ea7f16215f590470247f6ac43417c5"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "a864f6b965f08a12ff7f55d05e02cd05"
  },
  {
    "url": "SQL/index.html",
    "revision": "e1c72f84debf339e67db65aebd95c56f"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "9a3f62805d62718e6fc83510d1189d4b"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "1ecd4ac5098193ed6739c6b233c538d6"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "f12e2aa2d0e4019e483be1652e4c3e2f"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "c1f53d634bfa84b159f1a1476eef4161"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "33df1c9665bfcaf31b7da7d310b876a2"
  },
  {
    "url": "SQL/unions.html",
    "revision": "65b81e97e39a62babd7cff57aed96b02"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "860ad9a0ee895acff792cba4846682cd"
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
