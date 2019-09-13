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
    "revision": "6010deeb320f364b2549eed32afe83dc"
  },
  {
    "url": "about/index.html",
    "revision": "5e887a03565b8d422553b80b69cf606b"
  },
  {
    "url": "about/LOGs.html",
    "revision": "a87d156ca39a1ee231ecc61077cfa157"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "assets/css/0.styles.316da7c1.css",
    "revision": "79df9fb7b905daec151d7a11a00a0fb3"
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
    "url": "assets/img/view1.fa1dab5e.png",
    "revision": "fa1dab5eccde499b8ff8a02d5d4cf701"
  },
  {
    "url": "assets/img/view2.440b8485.png",
    "revision": "440b8485c7ea8e4368dc90a0e4834408"
  },
  {
    "url": "assets/js/1.0aec5bb1.js",
    "revision": "534c6f7581dac89b9e1f00c00bed6c44"
  },
  {
    "url": "assets/js/10.8f641943.js",
    "revision": "def5e005622c40cb9a42f8c815d0ea8f"
  },
  {
    "url": "assets/js/11.36ec67f9.js",
    "revision": "ff98344f2ef719317d487e631efa45e5"
  },
  {
    "url": "assets/js/12.3082c272.js",
    "revision": "f6a122c0aef61da3fb28b4b422812300"
  },
  {
    "url": "assets/js/13.e16ac692.js",
    "revision": "2c07503f959290a267784eab25a45ba2"
  },
  {
    "url": "assets/js/14.074ff153.js",
    "revision": "b6f1224e3c595a2389a9c25581b15ba0"
  },
  {
    "url": "assets/js/15.3847c8ff.js",
    "revision": "edda6e1c268d214e4d701db949616fdc"
  },
  {
    "url": "assets/js/16.4666c63d.js",
    "revision": "27f941d4d052a1d8d24679a90bcd5d06"
  },
  {
    "url": "assets/js/17.042e8f0b.js",
    "revision": "ae03c8ac5b537045be5f4ebe1efdc0f8"
  },
  {
    "url": "assets/js/18.41f02954.js",
    "revision": "01dbfd30d0a88e50648e077fef0b2f58"
  },
  {
    "url": "assets/js/19.0d3bc6b2.js",
    "revision": "7a4bc88d894c7bc5e3507e35d32177d0"
  },
  {
    "url": "assets/js/2.8d7a3014.js",
    "revision": "cb6254300e5c1c361d1c3d7906474b08"
  },
  {
    "url": "assets/js/20.96ca751b.js",
    "revision": "1d8ddc4c5a68dea8589021fe2af4fe52"
  },
  {
    "url": "assets/js/21.83a54c71.js",
    "revision": "d639d3f79e1176c7394d6fb2318a81ff"
  },
  {
    "url": "assets/js/22.747eaa6e.js",
    "revision": "d0e8cad64fb067786adef61a272ee013"
  },
  {
    "url": "assets/js/23.46b6d381.js",
    "revision": "236a526b7fdbeea2444513e7ea4f1b95"
  },
  {
    "url": "assets/js/24.f5eb3390.js",
    "revision": "a014c507aaf847e5fc74872b222c572a"
  },
  {
    "url": "assets/js/25.c16c34a9.js",
    "revision": "571cf586db9c8ec591b852ecd58d9089"
  },
  {
    "url": "assets/js/26.47e6ca59.js",
    "revision": "3425c73b2c5c6c4767e5aef5c6bc336c"
  },
  {
    "url": "assets/js/27.4a0f12b4.js",
    "revision": "79a6702ca51cd28faccc5eb6ace81e76"
  },
  {
    "url": "assets/js/28.656de5ea.js",
    "revision": "f73f6e27aebda96b87004853efe0bcbf"
  },
  {
    "url": "assets/js/29.55d53743.js",
    "revision": "629bd27efba97ca9885786c663f6a477"
  },
  {
    "url": "assets/js/3.d7c4139f.js",
    "revision": "26b44a52b971a536deed5131eaa91aad"
  },
  {
    "url": "assets/js/30.2271e92e.js",
    "revision": "0fd32466127d55cf34dea0ab6dbc8dfa"
  },
  {
    "url": "assets/js/31.75848e25.js",
    "revision": "af1d9618e3fb65f3fb270daef6791bda"
  },
  {
    "url": "assets/js/32.6d6d7270.js",
    "revision": "7f7354cb24d9a80d12e5bfdbc0555196"
  },
  {
    "url": "assets/js/33.27143924.js",
    "revision": "072516643b1e35f5a64f452b217a8eff"
  },
  {
    "url": "assets/js/34.82bcd865.js",
    "revision": "7fa96f57be24244e7e8076ddce077d25"
  },
  {
    "url": "assets/js/35.dc964fc4.js",
    "revision": "a317f7a703c9a1be3faad0b99e8f1a7f"
  },
  {
    "url": "assets/js/36.eda85b38.js",
    "revision": "d1c2b86a7840e7c3399c0850e723fbd9"
  },
  {
    "url": "assets/js/37.7f81918b.js",
    "revision": "80183f376eeac5a3e45b08db3e27ecc7"
  },
  {
    "url": "assets/js/38.a57e5972.js",
    "revision": "dc66c729d6e5fb6610471794ff161f79"
  },
  {
    "url": "assets/js/39.01ccd069.js",
    "revision": "d89ed8c8e36570e73d725e31fe24083b"
  },
  {
    "url": "assets/js/4.34f9d3ab.js",
    "revision": "0220625ffa43c8fd0b4539d6ff8553b6"
  },
  {
    "url": "assets/js/40.d91b1afa.js",
    "revision": "276a9027ab8d956639730eeaafb190d0"
  },
  {
    "url": "assets/js/41.7d437783.js",
    "revision": "61b627c2e7964e64fa8aebd649b70b2d"
  },
  {
    "url": "assets/js/42.ec007e06.js",
    "revision": "b17234c1500cad6f7fb580c44d451f9c"
  },
  {
    "url": "assets/js/43.cf5e491b.js",
    "revision": "b3a2bf381d6c7623bec9b969b9bb38f9"
  },
  {
    "url": "assets/js/44.df092bae.js",
    "revision": "dbf78250d40df79078581ede29c2be73"
  },
  {
    "url": "assets/js/45.70d7eb32.js",
    "revision": "62542240580971acd515ab82e8e782ca"
  },
  {
    "url": "assets/js/46.6f162e60.js",
    "revision": "c9a1d34379ae697044f50ec9dc113ca6"
  },
  {
    "url": "assets/js/47.d6f5a9c3.js",
    "revision": "786481e73e958df4225420c6c0e6d492"
  },
  {
    "url": "assets/js/48.be4a41ae.js",
    "revision": "9abb1a4ac990f81b033103af034adb96"
  },
  {
    "url": "assets/js/49.38c2caaa.js",
    "revision": "ed52b95e5afdcd32f6edac39f0df85f7"
  },
  {
    "url": "assets/js/5.e372e706.js",
    "revision": "d1c296d8aa3d0921a0df1cc2ee525b04"
  },
  {
    "url": "assets/js/50.1bdea180.js",
    "revision": "a5a7564c48385a5136e76e051148aaa4"
  },
  {
    "url": "assets/js/51.bb7dcaa0.js",
    "revision": "7db8fe85205363a05e8d8efe5ace0e21"
  },
  {
    "url": "assets/js/52.05054818.js",
    "revision": "03fc8a2d93a0d5e71bfe627497fd2f34"
  },
  {
    "url": "assets/js/53.180cbef0.js",
    "revision": "b3161128f5aa6985a591ff4c2788943a"
  },
  {
    "url": "assets/js/54.0685f0e1.js",
    "revision": "fbb12e54cdd7b1a1f22eac6d1a3157cb"
  },
  {
    "url": "assets/js/55.4af33a3c.js",
    "revision": "cbdfd174bd40b2907099e333caa98e38"
  },
  {
    "url": "assets/js/56.ee10eb87.js",
    "revision": "c801dbd2dca0dc9b2785ced03a881e64"
  },
  {
    "url": "assets/js/57.313e556f.js",
    "revision": "efe91b993ce9ada32a7ea0accc86423a"
  },
  {
    "url": "assets/js/58.b15d95c7.js",
    "revision": "0513feed0b161500b05a0b00511d943a"
  },
  {
    "url": "assets/js/59.e50d30b5.js",
    "revision": "d2e091c8add8e867e7e453587bdc1f11"
  },
  {
    "url": "assets/js/6.5fb2fd57.js",
    "revision": "0084ccaa562d1bf0d455bb355cae43e6"
  },
  {
    "url": "assets/js/60.08ddaf34.js",
    "revision": "de550fd1fe82c9df300033350edc2e0c"
  },
  {
    "url": "assets/js/61.d3f05eaa.js",
    "revision": "1483cf3acbb021ec10fd2e07547a221f"
  },
  {
    "url": "assets/js/62.1ce65943.js",
    "revision": "ef5599156555177e2b0bafda68c9c0d3"
  },
  {
    "url": "assets/js/63.86b60f1d.js",
    "revision": "4e26eb0adb4033443726febe853ac5d4"
  },
  {
    "url": "assets/js/64.e7ed9f35.js",
    "revision": "fabc742d5fdfcd820928aabeccd7a87f"
  },
  {
    "url": "assets/js/65.601e4210.js",
    "revision": "f44fd2c9c31e7ce802b1c59170722f23"
  },
  {
    "url": "assets/js/66.1ac07401.js",
    "revision": "9fbf06718036d5c21ff17e62ae60b720"
  },
  {
    "url": "assets/js/67.4a09f2e9.js",
    "revision": "de59711fc86c9d599364a6b85ea396cd"
  },
  {
    "url": "assets/js/68.46a40b5c.js",
    "revision": "010a7492325cf6bf41561fa74caf904b"
  },
  {
    "url": "assets/js/69.4f85c5fc.js",
    "revision": "3b022fcc82adfa316b4d9d8c0572c326"
  },
  {
    "url": "assets/js/7.e49f0848.js",
    "revision": "73ce91bcf32078b7550ba5189b17965f"
  },
  {
    "url": "assets/js/70.6038337e.js",
    "revision": "c876b1dcb871e5ffc661d42647eb42e4"
  },
  {
    "url": "assets/js/8.f6c2b170.js",
    "revision": "7dea8abb10dd15fb614c522602bee431"
  },
  {
    "url": "assets/js/9.8140b3c4.js",
    "revision": "928bcc6fe448b7eaca45455465027db3"
  },
  {
    "url": "assets/js/app.cef39c93.js",
    "revision": "b0bdecaef9316cc65176ae43d3e10223"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "96306dd3300c56f27abd362b22190e1d"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "3e3d0aa33419eb78212f173f10d23f31"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "6f5e98c92b9d94dd198b79cdeeb98784"
  },
  {
    "url": "DDL/createView.html",
    "revision": "7f1eff867af361c4fc873e3fdee015db"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "66339f6b9fddd5896e662942f74d2bef"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "444992a71df4697bb6d508f039773cac"
  },
  {
    "url": "DDL/index.html",
    "revision": "31e37791322e940290371c469b9b0c6c"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "465e437b19a1f11c70d24d6f7b33890f"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "0f62318470bf64f6ea67534a9bdf4be3"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "4073b54c8854d4aa0937ada603212b67"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "103cb1f8f4232f0a354e0bd6573b0cd3"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "edbd5cc4355dc9553ffcce8f4c365b44"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "0037f748e4ec897bb0ae507ee3542e4d"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "2b00d67c528ba4b6004f5adb67f2de2e"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "17173581a9581de84183438ce17184f9"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "0ef75eb95bb6f7c774985d3fc93c80bd"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "9bd69f93085e1ad1bf51ad8decac8277"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "8120b72af3f04acfdc546bc4c3f766c3"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "b8b84d776202d69dc0b204c70d01b50e"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "7f4ada663d8ee67f49243e567ffb2d6e"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "1a1067af4b09e03100574289d142fda3"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "0eabd003742aca0715aa5245dce40c1f"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "fc3de4e1bda4925dec3ac682d9990c07"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "7a54e95ff10e5fd58d871081c42dad33"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "b5b12883df275035d8d2ac42308ad873"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "fdc411bee72dc280a860765935ebfb9e"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "8461182ee8723a0335abbd0987c12c36"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "9ba075ba83705c76a5941fa9592bb1fd"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "ac53da361e89f693884e113f26c5416f"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "eeb0a43bc4f311bbdd49b0b4fd1b227a"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "fd5fa927c096a8c029313368bed61075"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "83ea34fa22b8430e58f31dc966550514"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "0f0f697552bb08f4d270988bc3061c69"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "f77126d5f56a0238ab7406fbc30b2a6d"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "342012023056135d45b585d4333f0bc2"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "e11d6fee68e19788044df1a7b965a72e"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "a64ae5aa9eb16982ed89903286df6fd7"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "58ec54c8b05ad6d0e93898f23ee74ec7"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "ea6b994ea69655b0494fec54b8836955"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "9ff26e5c80a56bf7b044e8f7b96b0fe9"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "4e97f0f291aba5cb005ca3a13271ba47"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "c915b9ec9bb1b9a80db4f7730def2e40"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "b1c35f9f35dccaa0eafd38654339b0b7"
  },
  {
    "url": "Design/index.html",
    "revision": "38206068ec2e9ca98ba20ef2b182fbd2"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "2699ec04db6308d7fb37c1e989a17396"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "9228e2e7ffd610fbb9dc746ff4c4f997"
  },
  {
    "url": "Design/normalization.html",
    "revision": "749205ab5134d23033d5f0ddb1d0d488"
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
    "revision": "41ecae16f1e5fe1bd70262bdf218c01b"
  },
  {
    "url": "DML/index.html",
    "revision": "7a4c40254e92ed2f5e20a41eb2cb6960"
  },
  {
    "url": "DML/insert.html",
    "revision": "78d23173eb3c968c0abbe1d537fa4969"
  },
  {
    "url": "DML/update.html",
    "revision": "2621fd43a05eb587dfdc24f5b31d188b"
  },
  {
    "url": "index.html",
    "revision": "f54e3f4b4e05a34e7b59f1611424b059"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "df358f036ec9ee5f1e821d8c68d2043c"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "9b207f716b6feff3edd808240a2d97b5"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "27f761b2e65e77d48bb332e568c4f854"
  },
  {
    "url": "SQL/index.html",
    "revision": "891c56d756098b038d79a7d5beb5c06c"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "038ca32282516079cd9928924b6a6252"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "e6fb35a3f397605730f31835e9024961"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "27ea1098817e97895cfec57dbe1d12db"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "4c7efcaa7051d9a056e1637a3db42eb0"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "d1455fdb8020a88a5cb61f867ac890bd"
  },
  {
    "url": "SQL/unions.html",
    "revision": "23b5fb6b5983d4dfb4f99265f134795c"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "6ae3452d3e70fdc21b7299b50c402557"
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
