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
    "revision": "92cea54bb6965c019edf0b7933454581"
  },
  {
    "url": "about/index.html",
    "revision": "e8ce5e99bb18b1caeaa6292c50b8842d"
  },
  {
    "url": "about/LOGs.html",
    "revision": "bbd37302f5c48f3640ce1b5d4c903f1e"
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
    "url": "assets/js/13.531919c9.js",
    "revision": "cbd1291d860b257c235aed8ab20e1ced"
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
    "url": "assets/js/20.37faf60b.js",
    "revision": "27b78fbf550f46e98e3517dc65ac05c0"
  },
  {
    "url": "assets/js/21.b1fd3105.js",
    "revision": "3650580c1b9c3400f637c27812ee0104"
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
    "url": "assets/js/30.111e9844.js",
    "revision": "d21baefeeffe318724002fa4e0e74e8b"
  },
  {
    "url": "assets/js/31.2463b176.js",
    "revision": "e551e7083bf10f85ffccb2918e980fd1"
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
    "url": "assets/js/39.5cadc774.js",
    "revision": "d239485442d1bff7f5dc6e57eb315bd6"
  },
  {
    "url": "assets/js/4.34f9d3ab.js",
    "revision": "0220625ffa43c8fd0b4539d6ff8553b6"
  },
  {
    "url": "assets/js/40.40a4689e.js",
    "revision": "0b531dc9c7d8b0a118b5d9a1981006f8"
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
    "url": "assets/js/5.290c9610.js",
    "revision": "70af4c4e6e30a4d0a773da99fd7233e7"
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
    "url": "assets/js/66.54cae459.js",
    "revision": "7b6926f80d7aa61ebe39bd06e7207441"
  },
  {
    "url": "assets/js/67.dc7c0afd.js",
    "revision": "942bb6db8f4473e144f6c613d9ed9bdf"
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
    "url": "assets/js/app.654d1a4d.js",
    "revision": "772c80be296c47f9454036c95d7edcd1"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "7a33dec770b44538b3d2ed1d8ed1230b"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "3a9147c5a3bcce490a4ea9b0fefc7c17"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "94d044fe7edbf2e24b1ce79a41dc23b1"
  },
  {
    "url": "DDL/createView.html",
    "revision": "d4fe6221a7d49474010d3b88789b983a"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "69b5f5c63a36df1bf5a73610b2058539"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "fc7b5779b5c175bce65c420a19dad0d6"
  },
  {
    "url": "DDL/index.html",
    "revision": "057412cddce17095ed084c93bd9df9d8"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "bba02acb9b854e6380648dfdaa549306"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "947dcc70773782c482e70a7d7e488a08"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "761f9205f6e961ff0bb124ef3c3e1146"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "ad56d4633e4ea535ea6c9ef7aeda2ba9"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "8106a3f812a74eab247b6ed7d5775694"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "3710554ceccfeb6a34e8ae8ef7506d63"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "1431f0c973e7955f8fca5c1f3c93b0ef"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "bf449402b8c8d14ecbe84ba23e2acf4e"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "fa1f6724e8d57e6ccc6acb5efb4f7c9f"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "ae242082cf3aa412c24589cbf0854a93"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "da48076212c5ee2b04cdf69bed7e8adb"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "ad751a6ee3e616f57eb49f334191625a"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "44023a44eacb6e0acf4b86ecb1541611"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "64f5a0a759145d42d41298450e529ccf"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "fc6f4f9d570846430af2381a30040d63"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "bf2cc90766cc4078565399195df45052"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "9f2f0c669f00f9e2262ece6372acc59d"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "b122d3e550929160ba15426c2808d6e9"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "07bd7b831dfd1f1a41034cb9297d466f"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "ed1adf82daad13285b409ebd5185e51e"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "9c8268bd368a457f41fda0506f721696"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "2abde03d033fd58f8776d596c0d6a596"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "742b5308db1a5e9e4775b35f067f118b"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "a57d41f71557a4ad73c93e0afd4d0265"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "d1e98be625ac62c6eb90bc418a96b464"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "9ff05086480d792c374cf7a9333b6582"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "611deba75f102e437d032a636689a8d6"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "357b684741fce887d09460c060127419"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "9ff9590de974770eb921ec7f81a4415c"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "583dd4d06d7a56084f7b30053555736a"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "55f74917518c171f281b3ab2fbeab5d7"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "fca2adbb81e2a78f714982fc2ae6bad9"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "4639b1c5ceeca0f16c5219d4233192e0"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "f517de057eecdaf0b55534c48ebb7ad7"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "ab0ff81dced78f62c15dc3616cd08319"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "dae36c12ccb530aaeb8f4016b2648e78"
  },
  {
    "url": "Design/index.html",
    "revision": "c0b0c3b8c57d6cbd80bdeac1209c5149"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "7ce4a9f7deb1f07bc3cbc6b62755c1c8"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "3ac69de4a4dfbc1113c84ec241a66392"
  },
  {
    "url": "Design/normalization.html",
    "revision": "bfb8d25bf82674bcf798bbb03280bfc5"
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
    "revision": "74e241c7695ecab1bed8d2b00c69f919"
  },
  {
    "url": "DML/index.html",
    "revision": "cfd72da00aad57db20330e4bb9c5c0a9"
  },
  {
    "url": "DML/insert.html",
    "revision": "8e992ae777deb46ec1b3c021c7ef06a7"
  },
  {
    "url": "DML/update.html",
    "revision": "574e6c4c39df91d588c77969e85ffdc2"
  },
  {
    "url": "index.html",
    "revision": "f86e5c19afa1a5f262d9c6a3cf7d3c71"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "76059ac13a6e7fd7fc7150454c0ba094"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "0caf8e043d6b9802cc839eebd36954ee"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "3150f06faa91307963f871f86c11766a"
  },
  {
    "url": "SQL/index.html",
    "revision": "266e160075bcaf713a06539054ed1545"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "330527c240aec0b2419aabf9619ecb40"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "022454fe21f0d7a3cc544fdcb39a59bc"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "dc175503792e2857b736f0f350435209"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "f3b4a6c7dde04a8a441d8f930e593594"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "27e559e25937a05af5caecc175b05bf1"
  },
  {
    "url": "SQL/unions.html",
    "revision": "f77d9727022effc8780d3b389805ccd7"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "e1086076d17de81770e58cd9c601ec6e"
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
