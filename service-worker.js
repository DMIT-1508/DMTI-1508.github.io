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
    "revision": "a61227f944ce88a645a37dc78ae1ac1c"
  },
  {
    "url": "about/index.html",
    "revision": "1250bfab5a26b894f669e161f73564ec"
  },
  {
    "url": "about/LOGs.html",
    "revision": "30dbeb35bffe44a3aebab84711435323"
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
    "url": "assets/js/10.501f5720.js",
    "revision": "6b1881950e557faa9d6ab667c0dfc9c5"
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
    "url": "assets/js/18.951c4b59.js",
    "revision": "4a53224159dfd1c4d2fe1ed508d8737e"
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
    "url": "assets/js/22.7a851d4b.js",
    "revision": "181ee3bd83a83b165e32c5b2e68436e0"
  },
  {
    "url": "assets/js/23.c55eb08c.js",
    "revision": "fa908db930da6b6e12c0c64b11b04abc"
  },
  {
    "url": "assets/js/24.c44799e8.js",
    "revision": "2591bcdd2207983a49c6a9d6c09fd4f8"
  },
  {
    "url": "assets/js/25.ade2d1b9.js",
    "revision": "f8237faafbc353a9532a371790626eb7"
  },
  {
    "url": "assets/js/26.4d4ba9dd.js",
    "revision": "6ae9eb74d083b5037b2ad5a367ed315d"
  },
  {
    "url": "assets/js/27.65fb714e.js",
    "revision": "697c5f0e70ee43cdb8d1ca4e73342105"
  },
  {
    "url": "assets/js/28.ab74ddd2.js",
    "revision": "1b477f49c260e5fca7ba45c103bbad98"
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
    "url": "assets/js/4.7eef08ec.js",
    "revision": "b94e17546251507f8ba77ad53b29ba1d"
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
    "url": "assets/js/54.08efc6af.js",
    "revision": "21a8ad2e3743a77e86cb8bafdf9a105a"
  },
  {
    "url": "assets/js/55.b56d9035.js",
    "revision": "be0c36ac951fade107404217b1ced763"
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
    "url": "assets/js/7.95632143.js",
    "revision": "db10e7789dd8059521ae57cace8cc299"
  },
  {
    "url": "assets/js/70.1d2118e0.js",
    "revision": "3adad5ae2e94cde13b1401dc40139abc"
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
    "url": "assets/js/app.5c9c9228.js",
    "revision": "76021fac1f4e0c9e591d1201fac775a6"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "8ff4b1f646f3ff2de2328ca158b5d807"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "4595c632ddad2f56717e1ac28e995d30"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "e4d50cadab8b46cafbfba3d85a41fb9f"
  },
  {
    "url": "DDL/createView.html",
    "revision": "b129ed46969abb47b24a740d77fc70dc"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "cf2dc55014fc6deb4a42c2607be2bd0e"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "f8dd0f688fb5496bc08ea3a6f6c06476"
  },
  {
    "url": "DDL/index.html",
    "revision": "9a843662e19b04dfde99be45910ef1b6"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "f1927be408b8bde6db8c12942f9f2740"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "7a6320266c928e75c89f9bc4ec3b7509"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "1574e81b58fc63ad8ae831919406cbdc"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "b1437141d28531b6574001308b554a70"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "13e3be2cfdf75c95fedb912fa760c010"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "51fbbc79c3f808b20e8448f1a9ba79ef"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "7009720e81b03db25031fd1cad8ac52e"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "9f455048bb90d082ed91f3c2447c2df6"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "eaa4e885bcc6eb4724fa841ed99765f4"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "af29902385409b55057a222077607343"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "826d04428c904b12be90d6c5d20e2a22"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "2066f967fd5f162646e710aecacd2de4"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "1c4c9191e9929da4ebe38c4078bdc61d"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "c72373ae0855479d2a14b821a8dd9187"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "14c09688fcea257027a94d12364e6dd3"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "abc1212a22438d64631d672813360f26"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "b9dc32af0d1767efb3cfb2cb021713cc"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "f12f6ec22e37b9561ae5aa12066b7dcf"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "fc49facddca8bc4723480f243ff1c444"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "962615c06cd4481d843c4a7047c33470"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "79539246b4ca4f38f409ff5861c3ae31"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "f297563636c3f52902bcf16cd8ad6a86"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "2fbefd244f708c2c9d258f79607897d9"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "d6edeed461eab71686b6bfd843cf0e56"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "74f3af69a71c0b1079e88659e56c3851"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "685a992610711bee1df69e638a204a81"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "08ee682219c28f0a0878786ed709b538"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "818ddbe0c3232ea8a4a46776ccb06407"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "2d8152039ff214a5dd23e6f26636c98a"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "855c53e4e70f18632a9c874bc20d5a1c"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "1de95fe65e6af94b3e439fa4e61ad295"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "30f90f8f405630a5ab656982cc00546e"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "605dad43029594cc139c728b25c1865e"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "651f4531f95066ca4ee4fba5a706355d"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "24c8217e53f2501f512df7d93f834e53"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "866f942bf0e1cb58658c6c387df6f297"
  },
  {
    "url": "Design/index.html",
    "revision": "fba3f418700c377e52da1b99a94e6085"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "eec49f198ee0ca61e66d79ea668d5d8a"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "cf865ceddfaaab4af1db4da439db7846"
  },
  {
    "url": "Design/normalization.html",
    "revision": "2b1107af461e7c366e8500a9bdc26b97"
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
    "revision": "0820d80eee28acab0e469ec3beb832dd"
  },
  {
    "url": "DML/index.html",
    "revision": "87aa11fba14b1ccc560b0257f9e34bc4"
  },
  {
    "url": "DML/insert.html",
    "revision": "628ccff0c57bdca2a7f8a912f13ef22b"
  },
  {
    "url": "DML/update.html",
    "revision": "ee9f71fe80301ab19bfc1a16bd8e449f"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "a745aa1db79eb0ac524f8ee3d4223cd6"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "e28eef51b276d23fcbff2450c46c8d2c"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "0654837cb6296c663e1822201c65092a"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "01be46e06f7d871e230b1db26a5f8e3b"
  },
  {
    "url": "SQL/index.html",
    "revision": "3cc39364ac16d31e54ef5e6078c790d7"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "9c9c78b45c58407b7d4faa85e74d85fe"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "dc1aedfca20b5ef0849cca57d1ea1283"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "54048659c87011320c5f3ed67505a522"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "339e06ff669bb9e3becf46fe717fc7ae"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "12e2be8ce54f4699fafecc47b7bbb3f8"
  },
  {
    "url": "SQL/unions.html",
    "revision": "470e85c0bf47fe6c558318fb70191ae8"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "52c001a8bb1d9f51bdd6175cc8a022cb"
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
