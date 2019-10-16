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
    "revision": "87e0c0813339ef1c7f34e63785bedeae"
  },
  {
    "url": "about/index.html",
    "revision": "79514dbdf22d0dca82bac70a2fe3aca3"
  },
  {
    "url": "about/LOGs.html",
    "revision": "f401086f643b85dee48982f01927c992"
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
    "url": "assets/js/10.cd3f5ed8.js",
    "revision": "06b78a12ab02556d7b8c05bf19571293"
  },
  {
    "url": "assets/js/11.c778bee2.js",
    "revision": "49950291e704c748b65b460040d33884"
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
    "url": "assets/js/16.ada0aa0a.js",
    "revision": "0e509be6ac50cc2eddec539ff0f14d6c"
  },
  {
    "url": "assets/js/17.b7d39851.js",
    "revision": "b6ecbb4542d1d4d918126bf9904e78a8"
  },
  {
    "url": "assets/js/18.27a2bd86.js",
    "revision": "2602cfc6ae64f283e260293527a226b3"
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
    "url": "assets/js/24.9b0bdddd.js",
    "revision": "7d5ebd053d905b56fcc41fa278fe4c72"
  },
  {
    "url": "assets/js/25.ade2d1b9.js",
    "revision": "f8237faafbc353a9532a371790626eb7"
  },
  {
    "url": "assets/js/26.d46884b3.js",
    "revision": "b38bafd423edadfa86d51bb4d7e17f5e"
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
    "url": "assets/js/6.1502a110.js",
    "revision": "b220863fb56e6c855a65e45990408279"
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
    "url": "assets/js/7.645ff27e.js",
    "revision": "9adf09d144e9d7095a3dd5e63c8cf24b"
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
    "url": "assets/js/8.340ae892.js",
    "revision": "1730934771aedab82aea1447312761a5"
  },
  {
    "url": "assets/js/9.272e4bf5.js",
    "revision": "f89545ffe422f91225b68ff3f0160ac5"
  },
  {
    "url": "assets/js/app.d83a7b61.js",
    "revision": "595be4a17c9e148cf28b73c85bdcda62"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "15a399c7414a79b465b090fd3e3ea078"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "dbfd8ad6dbcf18994d7fbbf9beb13d2f"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "616d818e1d9977cd2db79c67b7b09807"
  },
  {
    "url": "DDL/createView.html",
    "revision": "f418cb7ddd16744a067843d64de41d94"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "e36188d3452753a5581d040c8ef11ebf"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "d3c351e0daadf1a1a1e9154ad5b88eea"
  },
  {
    "url": "DDL/index.html",
    "revision": "3cc0cb8b3d91f05127accf836ed185ed"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "b40c94a4d06377e962c91028a94cb073"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "17b56f23e0acfb075f4c5873b5c489e8"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "995f9d039ab3209b657186d2e2a038dd"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "150525608728319b85b26c1aa46a1dc1"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "877a736d8c50c8befde3433b92bad42f"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "9c39698c8c6f5cee2f5e0cb6de0b327d"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "d8a554d330d3587f8a76768ecd45be63"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "26c816461d452847f4a7b4f528052236"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "48d328a843a7ffea1cb536c49fa9b190"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "21773251a143b159d8f64edc79839bf4"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "19a32a80ecf43e019d58336e42a3e103"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "47c72b6271231a5967b6869ae72e5c40"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "4259eb4e71b2476844d2b69282c0cb08"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "a6196cb4483fe384369965a538205f67"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "87fad8ced642315668df945a94682268"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "cb030bef099ad0ee2463f5bfb4066a60"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "d1f30618f44b1e5c9a85e5d61d21d352"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "a24a2b5275ce0be36257be8bccad073d"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "588d0e1772eb07c03785efec1c5dd481"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "0ed930b96c0370552624152bb8c5455b"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "b5fdb99b09fe8c648cfb2ef41cd4e7dd"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "97d5e260d7cc50b3ed424d7b843eddcb"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "e978bed88e86beaf8f912e1514892b97"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "83ce14738dd599562dbca1ad0e63ccf9"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "c42bad3cf56b4416bd6e97023d54475a"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "f0115fa6d557457cdee842ce1d0c39dc"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "b38aee3521906978a0b6aa0b20633788"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "b02ebe099228d89ccdfb7b60027e56e3"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "1dc347b45e9a379f7993b3073b936389"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "bf2ce3eb4d930e82e79664133edb6345"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "6a0b3a8745586cce150da8e165dc3f80"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "a584fa1ba7f265d0046f8698803e38db"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "0a9fbdb546d0c1bdc36cca0a40a8001d"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "1a82cd9218b69bfb7779092b4bde1c7e"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "1490a75ca786c5f3a37bc7e93c5e798b"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "f910245775ab8c2a6507dd0135099230"
  },
  {
    "url": "Design/index.html",
    "revision": "27ae48e411d4c29eac60b9fd9ee2d947"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "4cab9bbcfb34090559da893d0f7ac0f1"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "93c065b14f2b1e73776535e2d465493a"
  },
  {
    "url": "Design/normalization.html",
    "revision": "d98cd270045337ee4eae243f05a112b8"
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
    "revision": "c6175b7f520a0aafd099297b5a1f1cd6"
  },
  {
    "url": "DML/index.html",
    "revision": "0ac97fee58712ae59f3dc6272c9ce13d"
  },
  {
    "url": "DML/insert.html",
    "revision": "3cf937f20bb2e91978a2335471f3bad2"
  },
  {
    "url": "DML/update.html",
    "revision": "9bc179f7872a30f6afc40a1fcd58b986"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "9a0d5062410d5ff472c224d10689cb1a"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "d907b34d5d1a9231579a15b421a46772"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "79056c4d738faea19aad19b1f6dcd4fc"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "56b4ffcda12efc37fadd29d5d22d8ec2"
  },
  {
    "url": "SQL/index.html",
    "revision": "36e3ff71cc0c2f28c37d363fc0ee1f69"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "611fc9cf6480abf549adab6e5a254e79"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "9eabb676951169e64bbaf972c6bb761f"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "67136cd2488243a4fce6e09b4f1e2389"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "fcb190c1f073d2376c20c52997f28631"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "e094225c160468d9deaa333e305442f3"
  },
  {
    "url": "SQL/unions.html",
    "revision": "6e97a6e4986b747e9739e221137fb8ec"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "fc7ed3ad4d8a26d5b654d1264c77b6d4"
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
