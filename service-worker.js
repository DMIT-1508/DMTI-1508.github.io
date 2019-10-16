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
    "revision": "35a8c1489f47fa28c0a036b13aef3c6f"
  },
  {
    "url": "about/index.html",
    "revision": "cb2ca4fdaee4529f3383b7bca6d005a8"
  },
  {
    "url": "about/LOGs.html",
    "revision": "fc671aa0492f426bb779a932b79bbdf0"
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
    "url": "assets/js/10.88f27ce5.js",
    "revision": "aa14b77fef2715ff23f72390139ec646"
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
    "url": "assets/js/16.ef4c0a21.js",
    "revision": "12457b2ac4465a068932585ff1c8c1df"
  },
  {
    "url": "assets/js/17.ec50efe1.js",
    "revision": "34de50a5582d08140656a03f4f7f448e"
  },
  {
    "url": "assets/js/18.50c95e61.js",
    "revision": "cd6027aec949a54de62bf9f64b4c62b4"
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
    "url": "assets/js/22.edd6d258.js",
    "revision": "aa71db90747e67b686370c994b98aeeb"
  },
  {
    "url": "assets/js/23.82288ed7.js",
    "revision": "542edc3fe19824d5544397d2a897c015"
  },
  {
    "url": "assets/js/24.ed09fb49.js",
    "revision": "ec0c7484ae119cbeeba5f0d94e935cb6"
  },
  {
    "url": "assets/js/25.ade2d1b9.js",
    "revision": "f8237faafbc353a9532a371790626eb7"
  },
  {
    "url": "assets/js/26.0367372b.js",
    "revision": "bd50f995480e55ab6e7c666810f49f9b"
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
    "url": "assets/js/6.ccf3a4c2.js",
    "revision": "f0ce0813e418906472a235239493ab5d"
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
    "url": "assets/js/8.1579fcd2.js",
    "revision": "77a4483ad7f9fba7084eb5f05831269b"
  },
  {
    "url": "assets/js/9.fd91b877.js",
    "revision": "964d683d831a100be90c4415a23dbe21"
  },
  {
    "url": "assets/js/app.9734fba0.js",
    "revision": "de0b1c3820f0d34bc8d2df553eebefb6"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "69faee5fe8d5c2c06d285c773f2230d5"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "1644b6bd620404aeb28d688d1e0e0d0f"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "78de5b99c070460c1802347cfd7ff2c6"
  },
  {
    "url": "DDL/createView.html",
    "revision": "8cecbe29613a25e3333e0873efc437bc"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "b2efff01fe5101339b429710b2c43256"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "5bfd1d5cc2b95e2b1c712f5181b8b20b"
  },
  {
    "url": "DDL/index.html",
    "revision": "95f1aca7bfc157fbe89d8e01807209aa"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "70c6813c454013aef9bbfbc45b012a3a"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "9a779b44ca3dbfa99ccbf27fe1a64a25"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "e39280168e97cbc435b5e2e63dc84319"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "2145bbab49abbc35d1f3271191fc15f8"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "158f58e9de38a8859a90e2a36d9a44f3"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "529adbf99ff82af6babccd17194531cd"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "64583c1a91aba29d6a06759170b02270"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "0d7e00ec251896919eae96affb87c061"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "f1177cc742a8a856e8872e7d47ad45a7"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "91efafc648e0a4f39764fdf8cec92dc8"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "f272cdb324ac01210b1ee50d9355df8f"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "5b4eb819927e76aecb960231808f0153"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "c7282a890f9039d917642d3184f304f1"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "919aa558f5842f28b317fb01fcbb7fea"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "0a8814c262a13374dff287775ae963ad"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "1e69436932aeb153c4414a573d9945e3"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "940d61b7bd06ac32b56b9cd8980d9f39"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "07bd39ab705915629aaa00e696cb0fd5"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "a725dd4a3eda4ec12a1c3c453007f8d3"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "4f9b4e00579ba5d2ecd2c02764105f8e"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "16edbdb272e3a8653ae544ab055e4b3f"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "6e24246db360ec33be5c7450c580b2cb"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "df400ab844ed6b2e82dfe1784e9355aa"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "f0f2adecb020bee774839776623743c6"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "87b001f98b1c60dd349b37a3ad5076be"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "d39f743eff88451ff1faa831ec29e825"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "ac797a38c16f1e74269c934b77d7c7bd"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "68026ef1c24cdad21c33556b5cdb9d7f"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "599c00a2cb171af7384ae0cb36fa9ea9"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "2f607cfa6173b6982c19a66d37e3a203"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "1b11463b6ed593815ab5687a3a1b1d0c"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "f682f99b32f67ab86ed8e7e6b7d3b704"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "ea58d70bc9166bdbb2868b36a3a51b2a"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "f664470e89d2916b198ef088ff5f2286"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "4bc3e02e4a134ca305b7623596f9b6bb"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "fdf80a59aa69a3b22e31368392c473e7"
  },
  {
    "url": "Design/index.html",
    "revision": "ebbf80d6248b441c561747da91f435ab"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "c1c54f7b6ae511eddf131af38002124d"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "abdc07f1d9eee9a4f5149009a0d1a81f"
  },
  {
    "url": "Design/normalization.html",
    "revision": "56292ad2e76b6b1573bbe6a6b3d8e50e"
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
    "revision": "4db9995c396fc0b5ceed8908821d458c"
  },
  {
    "url": "DML/index.html",
    "revision": "49b38be54d452df41efd0760d423e1cb"
  },
  {
    "url": "DML/insert.html",
    "revision": "2d8fc0f53e1f24e9e3d307a2068af2a6"
  },
  {
    "url": "DML/update.html",
    "revision": "e4a0b3e204e55844577a2d329ff0b85f"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "b29e2d39790a0d906ed7aa6c4f3824a5"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "260fe37da77e508bfcfb50af90b1ea86"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "668b71702c7c95429a8ca855aa1a7241"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "970fb464d9dd98a14737bad39b4af8ed"
  },
  {
    "url": "SQL/index.html",
    "revision": "9d62ecf0b6cbf872ac68a0872aee7e82"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "7e3d4a889fc73811dddfcbc8f0c26e62"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "9dbdc42e52bccb16ec0ae0a1e79ce0ba"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "ce42c58b388eb8615a7495c465c75608"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "3c47468c8f9efa9cefecc642ddbf1f62"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "dc4c227a15f14a6305a6ca79ce6d948d"
  },
  {
    "url": "SQL/unions.html",
    "revision": "6e535f01c49a8629cd1dabc19ffd3495"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "f831f2c36def11ead47097b682670b8f"
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
