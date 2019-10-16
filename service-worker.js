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
    "revision": "f15c5c9376b504f690841f3654ffb799"
  },
  {
    "url": "about/index.html",
    "revision": "dd365954081636341ba42213c4455168"
  },
  {
    "url": "about/LOGs.html",
    "revision": "f082245d7caceee026191e407b0921e7"
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
    "url": "assets/js/10.5ff0441a.js",
    "revision": "fb7efb29c89a7a08ec98c95fa8778ea4"
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
    "url": "assets/js/24.ed09fb49.js",
    "revision": "ec0c7484ae119cbeeba5f0d94e935cb6"
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
    "url": "assets/js/30.e4229393.js",
    "revision": "90a1481c598a8d3c4db8d5a2ff5d46db"
  },
  {
    "url": "assets/js/31.75ea6454.js",
    "revision": "57c89c3ab4e34890cb88fe02c0a96ee2"
  },
  {
    "url": "assets/js/32.9827d94d.js",
    "revision": "ad4d76fd7cab9933df3b60ee861c8252"
  },
  {
    "url": "assets/js/33.cb674356.js",
    "revision": "dd7d5c537e223d750765fadf598d0528"
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
    "url": "assets/js/39.e4360743.js",
    "revision": "f1e4807f7ffa7c64182d1e20ffc78516"
  },
  {
    "url": "assets/js/4.b594903e.js",
    "revision": "6305658afd059f775c96beecf21c659f"
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
    "url": "assets/js/6.bfb1556b.js",
    "revision": "3554471729d7683be21a19b1b8e91530"
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
    "url": "assets/js/65.00f641a7.js",
    "revision": "833ac3c77a53db9862ddb655c3776419"
  },
  {
    "url": "assets/js/66.d5f30bb6.js",
    "revision": "b419f342608c614826c5c6e4b9322545"
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
    "url": "assets/js/70.1d2118e0.js",
    "revision": "3adad5ae2e94cde13b1401dc40139abc"
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
    "url": "assets/js/app.8d53b570.js",
    "revision": "f3a561ae3fed63ba07f69f80ea412023"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "43abf475b7da72fe3b36990cdce4611c"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "3bdb2e67f7641f1969db97705f48383b"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "5cfa6dcbfbcd1ea6f1b46cb49a7e04b3"
  },
  {
    "url": "DDL/createView.html",
    "revision": "d959e26d7013d724663a0592da792fb2"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "7da77d9530ed934c000b61ca3f32c166"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "e0610ca2ab197653b808e9bcfcfde3f5"
  },
  {
    "url": "DDL/index.html",
    "revision": "8458f279923546055d6f274e0983ea06"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "16eefaeec36e67b67ab92bcb8c5f203b"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "58bfbdcce098b0d8893a84eac302843a"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "c80f4799002e746db69439a57168229d"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "7ca0d3d69b0b5ae4fa79ca63f4294ac7"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "b35892c2ae4b4eb814cbc76964f7a48c"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "13685a2949603b1428859d60565b4c55"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "4bf8f42450758b8d353eb7e0eea82f05"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "1ddb98e45d01add0dcc820aff67b74c7"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "b9404d78fbd2ebb9d9fbd83f7b42a462"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "0fa208cc0ae2a524cd87f5d23117799c"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "3df8be53539b379875aa338c4de60671"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "7e54593f25e12ea18d78909972b0fde2"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "20f2ed8840cbbb901c4bdbca18d7a0a3"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "1236f397a47440b38640a6142fab7d24"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "81ec89cce548b1f1661f2b8463f6d06f"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "1240d4b459ccab4d3858fe00db2511a4"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "debfcc278bde19fc36d91c230ed91e4d"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "9803f6a8866b958a5fef9448f6480d87"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "3132a90744edc55bac7eff674f41da28"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "5e94bc53ece94ab29692053d81fa8c95"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "68f245ccf5a35b2c9c7b97ba6a4d1294"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "1147094980b3399e50334cc1baae73e9"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "87ea5efde3b1e5642c456eef607828ef"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "22f5703dc62bf222aaa3c63ce3c249c6"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "22ef553e9f9f935bea22ebc98166d979"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "7ab5d34ad4283199d9d6ed8ae6cf1bd6"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "eb4bb4f742302f567b5efb619646efa1"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "8c2092f1440dac34e5e2196827ae8d28"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "745f5c192d0761b10b3df03bdc4ced64"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "533a18385eff76ca31f826d1cc33802c"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "00f471782546fcbe6cd97757792ab224"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "a2d7dbb1c20d65f3031185c39bff8875"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "7051a6420e8b25603618f35cfd53695c"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "90c8a5fe33a2a03aaaec6ea1418bf983"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "5bee7af323e61c93b16873b3f14bb770"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "6c2aa02de890bd9d8f739d89b5f27ef6"
  },
  {
    "url": "Design/index.html",
    "revision": "9b772057defb655e2de90d06d872935c"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "a5f29e941f19f1f7f229b9a91b0e7d01"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "60fe952f6af0c37391a7e84c776d58d4"
  },
  {
    "url": "Design/normalization.html",
    "revision": "679cc7157396c19b225e68d2959da5db"
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
    "revision": "bd3eebd5f9051c245839417b8a4bf4f0"
  },
  {
    "url": "DML/index.html",
    "revision": "4e796b48bdea036704a8f0471df13b20"
  },
  {
    "url": "DML/insert.html",
    "revision": "4211c14d4391fa92509d8c2b967f95eb"
  },
  {
    "url": "DML/update.html",
    "revision": "1723ef813c6d7b3ad05adf6ad1e19429"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "bb3678d6a5c9ce71ac4e5073d9e5c929"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "bd7e8db124a00f67a0d428fb6e8bf9a0"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "9b4ca6eb2f2d9ea68f714428591fc8d5"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "11e33bd708438fec5d92f62d3ba04a98"
  },
  {
    "url": "SQL/index.html",
    "revision": "ce6ad41a834d0fff65ec2b435006fd4b"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "a8b2b70462326528722724155440ddf8"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "1b8ed4c18f2434cba1d24aef6dbdc361"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "0f9daf422c5dca84e9d0cad68806a5ae"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "0818bdad38131d85c4b1b3f86eb032ce"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "d936500af8c919d6fe9db574fd15e87b"
  },
  {
    "url": "SQL/unions.html",
    "revision": "b603bce63aa4259715d7eb5b704b7807"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "c9cab52becb7d0d48ed7e9049b83ac25"
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
